# Assessment B — independent responsive, loading, and motion evidence

Target: `src/app/page.tsx`, EF Agency. Assessment is read-only. No UI/source changes, viewport changes, detector reruns, DOM writes, overlay injection, or shell browser automation were performed.

## Evidence and limits

- Reused and parsed the existing `docs/reports/impeccable-detect-v4.json`: **83 advisories** (80 type-ramp notices, 1 radius notice, 2 color notices), no non-advisory findings. These token/documentation advisories do not explain the mobile hero problem. Several responsive type sizes are explicitly described in `DESIGN.md` prose despite not appearing as separate frontmatter tokens. The two `#000` notices are unused wipe-mask definitions in AnimatedContent; the current page does not select a wipe.
- Read the page, current stylesheet, current hero asset, motion provider/engine, DeferredText, React Bits adapters and underlying animation components.
- Visually inspected the existing `outputs/ef-agency-mobile.png` full-page mobile capture (390 × 11030) and `public/images/hero-v2.jpg` (1672 × 941). The capture visibly shows the large blue sleeve/jacket occupying the hero and the primary action near its foot. Capture freshness is unverified, so source is the current evidence and the existing capture is corroboration.
- Attempted a separate hidden CUA browser tab at `http://127.0.0.1:3000`. It returned `ERR_CONNECTION_REFUSED`; a read-only listener check also found no process listening on port 3000. Therefore **no fresh live/mobile geometry or timing measurement is claimed**. This is an environment limitation, not a site defect.
- Existing mobile Lighthouse evidence is dated `2026-11-07T17:56:18.453Z`, with 412 × 823 emulation: FCP/LCP 1.7s, TBT 150ms, CLS approximately 0.00006. It supplies historical loading context only; it does not validate the current revision or its visual composition.

## Findings, ranked by impact

### B1 — High: the mobile composition discards the subject and becomes a jacket close-up

**Evidence:** `src/app/page.tsx:19` always uses the same wide `hero-v2.jpg`. `src/app/globals.css:33` makes the mobile image wrapper extend from −45% to +40% beyond the viewport and sets `object-position:70% center`; image fitting remains `cover` from line 13. The source photo puts the athlete's face high and far to the right, while the left half supplies the desktop title's negative space.

At a 390 × 844 hero, cover scales the 1672 × 941 source to about 1500 × 844. Only about 26% of its width can appear in the 390px viewport. The current wrapper offset and 70% alignment place that window across the sleeve/torso area rather than keeping the face and running gesture together. This is a source-derived estimate, not a browser measurement. The existing mobile capture agrees with the result.

**Implication:** the photograph loses its story and competes with the title as a large blue texture. A mobile-specific composition is warranted. Prefer a portrait art direction with useful head/gesture/context and a quiet title area; then fit it to a normal viewport-width wrapper. Changing only `object-position` within the current wide-image setup has little room to preserve all three. Keep the approved copy, brand colors, and overall photographic direction.

**Acceptance evidence needed:** fresh 360px/390px/412px mobile captures with the person/context recognizable, title readable, and the crop intentional at both short and tall portrait heights.

### B2 — High: fixed minimum hero height and bottom alignment push the action to the bottom edge or below the initial view

**Evidence:** mobile `.hero` uses `height:100svh;min-height:760px` (`globals.css:33`), rising to 780px at widths ≤360px (`:35`). `.hero-inner` inherits `justify-content:space-between` (`:18`) and ends with 38px bottom padding (`:58`), leaving the intro/actions anchored near the hero's bottom. The primary button is at least 56px tall; if the action row fits on one line its top is roughly hero height minus 94px. For a 760px hero this puts it around y=666, so a 667px-tall viewport only reaches its top; at ≤360px width the 780px minimum pushes it farther down. A wrapped secondary action increases the bottom group height but does not remove the oversized hero minimum.

**Implication:** a visitor can read the large statement while the useful action sits in browser chrome territory or requires scrolling. The existing mobile capture shows a large gap between the heading and the bottom introduction/action group.

**Direction:** compose the mobile hero around content and a bounded image region, or bring the intro/action group closer to the title with an explicit gap. Avoid treating 760/780px as a universal readable minimum. Ensure the primary action and a clear route onward are comfortably visible at common short portrait heights without shrinking readable body text.

**Acceptance evidence needed:** initial-view captures at approximately 360 × 640 and 390 × 667 as well as a tall portrait screen; the complete primary button must be visible with breathing room.

### B3 — Medium: two section text animations begin outside the visible viewport and can finish before a reader reaches them

**Evidence:** DeferredText activates at an expanded viewport with `rootMargin:'180px'` (`src/components/motion/deferred-text.tsx:7`), then mounts SplitText with `trigger='load'` (`:8`). SplitText waits for fonts and immediately runs its 0.7s animation once mounted (`src/components/SplitText.tsx:19–26`). `BitsName` similarly activates with a 120px margin and mounts BlurText with `trigger='load'` (`src/components/motion/react-bits.tsx:9,24`); BlurText initializes directly in its animation phase for that trigger (`src/components/BlurText.tsx:214–215,242`).

With assets already cached and slow scrolling, a 180px lead provides more than 0.7s before visibility at speeds below roughly 257px/s; the two-word line's 45ms stagger changes that threshold slightly. The single-word name lines can finish their 0.65s animation within the 120px lead at speeds below roughly 185px/s. This is a timing inference from source, not an observed live recording.

**Implication:** lazy loading and animation start share the same early threshold, so the intended moment can happen offscreen. On a slow network the opposite can occur: readable fallback is replaced by a starting animated state after the reader has already reached it.

**Direction:** retain the generous margin for code loading, but start movement from a separate actual-visibility condition. Keep the existing text in place while preparing the enhancement. Do not classify all motion as load-triggered: AnimatedContent correctly has its own `top 92%` ScrollTrigger (`AnimatedContent.tsx:186–205`), and the project/media animations are scroll controlled.

**Acceptance evidence needed:** a slow scroll recording with warm and cold caches; relevant words should start moving after they are meaningfully visible, without a late replacement jump.

### B4 — Medium: hero arrival starts immediately and cannot wait for the visual scene to be ready

**Evidence:** `HeroText` is a server-rendered span with no readiness gate (`src/components/motion/hero-text.tsx:1`). The `.hero-word` animation runs from CSS as soon as the element is styled, for 0.75s with 0/.05/.1s delays (`globals.css:40–41`). The photo is high priority/preloaded (`page.tsx:19`), which is good loading intent, but neither image decode nor display-font readiness synchronizes this animation. The local display font uses `display:'swap'` (`src/app/layout.tsx:6`).

**Implication:** on an uncached/slow connection the title's arrival may be over before the photograph or final typography is available. This matches the class of “motion starts too early” complaint, but the exact timing remains unverified for the current build. Do not add a blocking page loader to solve this.

**Direction:** either let the initial hero remain stable, or coordinate a single light arrival with font/image readiness and visible page state while preserving immediately readable server text. Separately, the main MotionEngine is deferred until the first wheel/touch/scroll/key interaction (`provider.tsx:9`); therefore it is inaccurate to claim that all of Lenis/GSAP runs on first paint.

## Preserve

The photographic direction, compact display typography, warm yellow primary action, native project/FAQ disclosures, immediately available server copy, and reduced-motion fallbacks form a coherent base. No card-system redesign, decorative control restoration, or broad palette change is supported by this evidence. The most useful next work is mobile hero art direction/geometry followed by separating animation preparation from visible start timing.
