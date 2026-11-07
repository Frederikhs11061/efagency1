# Animation

| Sektion | Bibliotek | Effekt og formål |
|---|---|---|
| Hele siden | Lenis + GSAP-ticker | Én global scrollmotor, native touch og cleanup |
| Hero | CSS + GSAP/ScrollTrigger | Kort tekstankomst, forskellig billed-/tekstbevægelse ved desktop-scroll |
| Hero-CTA og kontakt | React Bits Magnet | Begrænset mus-respons på 4–5 px, uden pil eller autoplay |
| Konceptbilleder | GSAP/ScrollTrigger | Kontrolleret skalering og billedpanorering bundet til scroll |
| Ydelsestitel | React Bits SplitText | Faktisk GSAP-opdeling af ord og kort forskudt ankomst |
| Ydelsesrækker og stifterbio | React Bits AnimatedContent | Synlig servertekst, kort målrettet reveal |
| Stifternavne | React Bits BlurText | Afklaring fra en mild blur og 24 px bevægelse, én gang |
| Om os-introduktion | React Bits ScrollReveal | Ord fremhæves ved scroll fra allerede læsbar opacity 0,7 |
| Billedbånd | Magic UI Marquee + GSAP | Officiel komponentstruktur, bevægelse bundet til scroll, ingen autonom løkke |
| Kontaktoverskrift | GSAP | Kort forskudt entré af linjer |

De fem React Bits-komponenter er installeret fra det officielle registry i TS/Tailwind med shadcn CLI. De anvendes reelt. Kilde, licens og tilpasninger: THIRD_PARTY.md og docs/licenses/react-bits-LICENSE.md.

SplitText, AnimatedContent, BlurText og ScrollReveal lazy-loades tæt på deres sektion. Før aktivering er teksterne fuldt synlige i server-HTML. AnimatedContent ejer sine egne wrappers; ScrollReveal ejer ordenes opacity; BlurText ejer sine ord; GSAP-scrollmotoren ejer de øvrige eksplicitte elementer. Ingen to motorer animerer samme property på samme element.

Lenis og ScrollTrigger er synkroniseret med én ticker. Cleanup fjerner lyttere, ticker og scopes. Reduced motion giver almindelig tekst og statiske billeder. Magnet følger pointer/reduced-motion og er begrænset til små bevægelser; touch ignoreres. Der er ingen pause/play-knap og ingen løbende autonom marquee. Bevægelse fra scroll stopper, når brugeren stopper.
