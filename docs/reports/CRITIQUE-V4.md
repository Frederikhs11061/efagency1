Method: dual-agent (A: /root/mobile_design_review · B: /root/mobile_evidence_review)

Baseline: f07f809f; assessment of owner screenshot and incumbent source, before revision4 verification.

# Assessment A — independent design review, EF Agency

Target: `src/app/page.tsx` and its current components/styles. Date: 2026-11-07. Mode: Persuade with an Experience-led portfolio opening. This assessment was made independently, before any detector output. No UI files changed.

## Design specificity verdict — assessed first

The identity is coherent and worth preserving. The compressed headline, charcoal/white/yellow palette, cobalt photography, generous unboxed rows and direct Danish voice fit a small film/content agency. The mobile screenshot has the visual authority of a campaign poster. It does not need another aesthetic direction.

The limitation is structural specificity: after the poster, three concept images, services, three process steps, three packages, founders, FAQ and contact form could belong to many creative agencies. The page describes editing more convincingly than it demonstrates editing. Current motion is mainly translation, fade, zoom and blur; it supplies polish but rarely explains what EF Agency contributes. More libraries or simultaneous effects would not solve that. Deliberate changes in crop, rhythm and emphasis can make the existing imagery and process feel edited without claiming unavailable client work.

## Evidence and limits

Reviewed the supplied mobile screenshot in full, `page.tsx`, `globals.css`, `content/site.json`, motion components, header, contact, page map, PRODUCT.md and DESIGN.md. Attempted a fresh independent IAB tab at `http://127.0.0.1:3000`; browser returned `net::ERR_CONNECTION_REFUSED`. No viewport changed and no existing user tab touched. Consequently, rendered mobile hero observations are directly evidenced by the supplied screenshot; whole-page layout and interaction observations are source-based and need rendered confirmation. No detector output was read or requested. No previous critique was used. `.impeccable/critique/ignore.md` was absent.

## Overall impression

The strongest opportunity is to bring the mobile promise and invitation into one composed first view, then give the journey two or three distinct cinematic moments. The site currently spends too much of the mobile opening on magnified clothing and too much of the later page on the same large-heading/paragraph/reveal cadence.

## Nielsen heuristics

Scores indicate quality: 0 = absent/broken, 4 = excellent. These are a design assessment, not verified interaction-test results.

| # | Heuristic | Score | Evidence / issue |
|---|---|---:|---|
| 1 | Visibility of system status | 3 | Menu has expanded state; details have native open state; form announces status. Mail app opening cannot be confirmed, and the status currently states it as fact. |
| 2 | Match with the real world | 4 | Clear Danish, concrete 4/8/12-video packages, honest scope and readable explanation of the collaboration. |
| 3 | User control and freedom | 3 | Ordinary anchors, native details, menu Escape close and static reduced-motion state. Long mobile opening delays the main route; contact handoff depends on the user's mail setup. |
| 4 | Consistency and standards | 3 | Strong repeated tokens and native controls. Package actions open email directly whereas the main CTA navigates to an on-page mail-draft form; shared invitation wording obscures the difference. |
| 5 | Error prevention | 3 | Required fields, email type, length limits, package default and clear draft label. Message minimum is only expressed after failure; unconfigured mail clients remain an edge case. |
| 6 | Recognition over recall | 3 | Package names, quantities and inclusions are visible together; concept disclosure has a text cue. Mobile primary action is separated from the headline by a large uninformative gap. |
| 7 | Flexibility and efficiency | n/a | Persuade surface; power-user accelerators are not relevant to the conversion task. |
| 8 | Aesthetic and minimalist design | 3 | Highly coherent palette/type with little interface clutter. Overscaled mobile crop and repeated monumental section introductions weaken hierarchy across the full journey. |
| 9 | Error recognition and recovery | 2 | Native input validation plus an announced general message. No field-specific custom message association, and no explicit fallback if the mail app does not open. The visible email remains a useful alternative. |
| 10 | Help and documentation | 3 | FAQ addresses filming, format, revisions, length, cost and starting; contact explains the mail handoff. Practical reassurance is mostly late in the page. |
| **Total** | **9 applicable heuristics** | **27/36 (75%, Good)** | **One excluded heuristic: #7. Clear foundation; mobile hierarchy and contact recovery need attention.** |

## What is working

1. **A recognisable first impression.** Barlow Condensed's density against the dark/cobalt photograph creates immediate editorial confidence, and the yellow capsule gives the right action unmistakable weight.
2. **Open, useful comparisons.** Service and package rows make the offer scannable without a generic card grid. The 4/8/12 quantities are real differentiators, and the package descriptions explain who supplies footage.
3. **A credible voice and sound basic controls.** The founders' new-agency admission, ordinary-language concept introduction, native details, visible labels and explicit mail-draft wording build trust without invented results.

## Priority issues

### [P1] Mobile crop removes the subject and turns the hero into an enlarged fabric texture

**Evidence:** In the supplied screenshot, the image mainly presents jacket, arm and trousers; face/gesture/setting cannot be read as a coherent figure. Mobile `.hero-art` extends from `-45%` left to `-40%` right, giving it approximately 185% of viewport width before `object-fit:cover`. `object-position:70% center` cannot compensate for that oversized image canvas.

**Why:** The agency sells visual judgment. A striking photograph should contribute a readable moment rather than compete as texture behind every line of copy.

**Fix:** Remove the large negative horizontal inset on mobile; establish a deliberate portrait crop at normal container width. Position the subject in the right half and keep its essential gesture/setting visible. If the wide original cannot yield a strong portrait composition, use an art-directed crop of the existing asset rather than squeezing it further. Keep the existing black/white/yellow identity and avoid introducing a decorative gradient. Check the actual frame at 320, 360, 390 and 430 pixels, short landscape and a taller phone.

**Relevant command:** `$impeccable adapt` / `$impeccable layout`.

### [P1] The headline and business invitation are too far apart on mobile

**Evidence:** The screenshot shows a large middle gap between the bottom of “OPSLAG.” and the service explanation. CSS combines `height:100svh`, minimum 760/780px and `justify-content:space-between`; this explicitly pushes the intro/actions to the floor of the hero. The issue grows on tall viewports. On short viewports the minimum height can push the action below the initial view.

**Why:** The headline is a memorable claim but does not explain the offer by itself. Visitors need the service sentence and contact action while their attention is still on that claim.

**Fix:** On mobile, use a deliberate content flow: title, bounded gap, intro, actions. Set the hero's minimum using content and safe viewport space rather than forcing a full-height split. Move the title slightly higher while preserving clear space under the fixed 82px header; move intro/CTA substantially higher. Leave a quieter photographic area beneath the group when the screen is tall. Keep the current copy and capsule. Pass criteria: 390×844 and 360×800 show all three headline lines, the intro and primary CTA together without overlap; 320px stays readable even when vertical scrolling is necessary. Do not solve it by shrinking body type.

**Relevant command:** `$impeccable layout` / `$impeccable adapt`.

### [P2] Motion repeats entrances instead of giving the page an authored editing rhythm

**Evidence:** `engine.tsx` applies similar y entrances to reveal groups, zoom/parallax to every project, and a large heading entrance to contact. React Bits adds service/founder entrances, a split service line, name blur and reading fade. Almost all of these say “this appeared”; little says “this is how we shape material.” The process remains three reveal items despite being the clearest story on the page.

**Why:** The requested richer motion should demonstrate taste and guide understanding. Repeating more effects risks visual noise and makes no stronger case for hiring the agency.

**Fix:** Build a small number of distinct story beats using the existing systems. (1) GSAP: a restrained image-frame settle plus title timing for the concept sequence, with purposeful variation between sport, ritual and product; avoid identical zoom on each. (2) Process: use scroll-linked emphasis across its three steps, with a progressing structural rule and brief word/line reveal where the visitor is reading; do not pin mobile or require scroll to reveal essential text. (3) React Bits/Motion: keep one expressive type moment and controlled content entrances; a native concept expansion can ease its inner content without hiding it in the no-JS state. Let packages become calmer to aid comparison. Lenis remains one provider and native touch scroll remains intact. One owner per animated element/property, finite or scroll-led effects, static reduced-motion rendering, no autoplay requiring pause controls.

**Relevant command:** `$impeccable animate`, following the existing animation architecture rather than adding an independent animation controller.

### [P2] Too many sections use the same loud introduction; the repeated image strip adds little new evidence

**Evidence:** Work, services, process, packages, about, FAQ and contact all begin with a monumental condensed heading. The film strip repeats the same three concept images already shown in the work area. On mobile, three tall concept frames also delay the practical offer substantially.

**Why:** If each section announces itself as the climax, nothing feels like the climax. The middle becomes an emotional valley of more scrolling rather than growing conviction. Repeated imagery should provide a bridge, not just length.

**Fix:** Retain approved wording and layout identity but assign roles: work is the visual peak, services/process are the explanatory rhythm, packages are the quiet comparison, contact is the final decisive peak. Reduce secondary section headline scale and spacing selectively on mobile. Give the existing strip a clear role as a short scroll-driven transition from making to monthly output; constrain its height and travel. Do not add further decoration or invented footage. Confirm the work-to-package path does not feel like an endless gallery on phones.

**Relevant command:** `$impeccable typeset` / `$impeccable distill`.

### [P2] The final action needs reliable recovery when email handoff fails

**Evidence:** The form sets “Din mailapp åbnes med beskeden” immediately after assigning a `mailto:` URL. A successful handoff is not observable. Form-level validation mentions all three field requirements together; no custom per-field recovery is provided. Package links also bypass the form entirely without stating that they open email.

**Why:** A visitor may spend time writing a brief and receive no draft if their phone uses webmail without a configured handler. This is the highest-trust moment of the journey.

**Fix:** Keep the truthful draft workflow. Say the draft is ready to open rather than claiming opening succeeded; offer a small “Kopiér besked” fallback or equivalent preserving the user's work. Keep the address visible. Associate validation advice with the specific field if custom feedback appears. Either route package CTAs to the same contact form with a preselected package or make the existing mail action explicit without changing the approved headline copy.

**Relevant command:** `$impeccable harden` / `$impeccable clarify`.

## Cognitive load

Intrinsic load is low: understand a short-video service, choose whether to supply footage, compare three packages, contact two founders. Extraneous load is moderate, concentrated in mobile spatial separation and the long repeated section rhythm. Germane load is supported by the three-step process and FAQ but the process could earn a clearer visual role.

| Checklist | Result | Specific observation |
|---|---|---|
| Single focus | Pass | One dominant yellow hero action and a lower-emphasis work action. |
| Chunking ≤4 | Fail, minor | Each package exposes five feature lines; scannable but could group deliverables and collaboration terms visually. No need to hide useful scope. |
| Grouping | Pass | Open rows and structural rules group names, counts, features and actions. |
| Visual hierarchy | Fail on mobile | Headline is dominant; the offer/action are unnecessarily detached. Whole-page heading volume is nearly uniform. |
| One decision at a time | Pass | Concepts, services and packages form a sequential path; no competing form on entry. |
| Minimal choices ≤4 | Fail, minor | Open mobile menu has five destinations: Ydelser, Cases, Pakker, Om os, Kontakt. Group the contact action separately if refining; five is manageable and not a release blocker. |
| Working memory | Pass with caveat | Package facts are co-located, but direct package email actions and later form use different routes. |
| Progressive disclosure | Pass | Concept details and FAQ avoid showing every paragraph initially. |

Three checklist failures = moderate cognitive load; the layout failure matters materially more than the numerical five-item groups. Other choice counts: hero 2 actions; packages 3 choices; select 4 options including its neutral default; desktop header 3 sections plus contact. Six FAQ questions are a reading index, not six mutually exclusive purchase choices.

## Emotional journey

**Start:** Immediate confidence from typography and filmic imagery. **First valley:** oversized, unrecognisable mobile crop and long gap before the concrete promise. **Peak:** three visual concepts; honesty is supported by the ordinary concept introduction. **Middle valley:** repeated giant headlines, repeated image material and similar entrances keep demanding attention without increasing proof. **Reassurance:** practical deliverables, one revision round and real founders. **End:** warm yellow contact area is an effective final peak; a failed mail handoff would undo that confidence. Place the most predictable, calm interaction at the end.

## Persona red flags

- **Jordan, first-time business visitor:** Reads “IKKE BARE ENDNU ET OPSLAG.” and must scan far lower to learn “videoredigering og content.” The work entry is labelled “Cases” in navigation but describes visual concepts; preserve honest concept framing and make the relationship clear in ordinary copy, without reinstating small AI footnotes.
- **Casey, distracted mobile visitor:** Encounters a viewport-filling image with the primary action near the floor. A short phone can require a scroll before acting, while a tall phone exaggerates the dead middle. Long stacked concept frames increase time to package comparison. A webmail-only setup can strand the prepared contact message.
- **Riley, deliberate stress tester:** Mailto success cannot be confirmed, maximum-length messages may exceed a particular mail handler's comfort, and generic validation does not identify one failing field. Recheck narrow widths, enlarged type, menu Escape, no-JS content and changing reduced-motion preference after initialization.

No project-specific personas added: AGENTS.md has no Design Context section; audience assumptions beyond businesses needing short-video content would be invented.

## Minor observations

- Hero body is 16px with a generous line height; keep that readability when compressing vertical spacing.
- The image treatment should remain a photograph rather than become an interface accent system; cobalt is already doing enough work inside imagery.
- A native disclosure can remain open while scrolling to another section. Motion must accommodate the changed document height without stale trigger positions.
- Keep text readable before animations initialize. The current deferred loading approach can swap wrappers near the viewport; check for perceptible layout or position jumps in the final rendered pass.
- Preserve native FAQ plus/minus, visible focus, minimum touch sizes, no decorative arrows, no play/pause controls, no small AI footnotes.

## Questions for the parent synthesis

- Could the first phone view communicate claim, service and invitation as a single composed block while showing an identifiable photographic moment?
- Which two motion moments demonstrate editorial judgment strongly enough that the rest of the page can become quieter?
- Does the repeated film strip shorten the perceived journey into packages, or merely lengthen it?

Questions skipped: this delegated assessment feeds an already-authorized implementation; these are design prompts for synthesis, not a new user approval gate.


## Deterministic evidence synthesis

83 advisory findings:80 type ramp,1 radius,2 color. No non-advisory findings. Mobile geometry and early triggers agree with the independent design review. Registry responsive tokens are mostly described in prose; unused wipe-mask black definitions are not active page colors. Overlay unavailable through read-only CUA evaluate; no overlay or live-server claimed. Original server was stopped, so initial browser attempts returned connection refused; new production revision will be separately verified.

Questions skipped: owner explicitly requested autonomous analysis and corrections.
