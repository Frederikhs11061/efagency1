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
| Proces | GSAP/ScrollTrigger | Tre gennemløb: linjen tegnes, tallet falder på plads, trinoverskriften løftes ind. Sticky introduktion på stor skærm, almindeligt flow på mobil |
| Pakkeantal | React Bits CountUp / Motion | Faktiske mængder 4, 8 og 12 tælles én gang på 0,7 s; korrekt tal findes allerede i server-HTML og tekst til skærmlæseren |
| Kontaktoverskrift | React Bits ScrollFloat | Bogstaver samler sig over 46 % af viewporten, fra synlig opacity 0,7; ingen GSAP-effekt ovenpå |

De syv React Bits-komponenter er installeret fra det officielle registry i TS/Tailwind med shadcn CLI. De anvendes reelt. Kilde, licens og tilpasninger: THIRD_PARTY.md og docs/licenses/react-bits-LICENSE.md.

SplitText, AnimatedContent, BlurText, ScrollReveal, ScrollFloat og CountUp lazy-loades tæt på deres sektion. SplitText og BlurText forbereder koden 200 px før viewporten, men begynder først når teksten er synligt inde i den. Før aktivering er teksterne fuldt synlige i server-HTML. AnimatedContent ejer sine egne wrappers; ScrollReveal ejer ordenes opacity; BlurText ejer sine ord; ScrollFloat ejer kontaktbogstaverne, Motion CountUp ejer kun tallenes visuelle indhold, og GSAP-scrollmotoren ejer de øvrige eksplicitte elementer. Ingen to motorer animerer samme property på samme element.

Lenis og ScrollTrigger er synkroniseret med én ticker. Cleanup fjerner lyttere, ticker og scopes. Reduced motion giver almindelig tekst og statiske billeder. Magnet følger pointer/reduced-motion og er begrænset til små bevægelser; touch ignoreres. Der er ingen pause/play-knap og ingen løbende autonom marquee. Bevægelse fra scroll stopper, når brugeren stopper.

## Revision 4: rytme og mobil

Mobilheroens billedfelt er nu viewportbredt. Overskrift→28 px mellemrum→beskrivelse→CTA følger indholdet i stedet for space-between. Kort/landskab har egne regler. Heroens 0,75 s CSS-ankomst er straks læsbar og blokerer ikke på billede eller skrifttype. Projektmotiver panorerer fra 1,16× til 1×, uden opacity-dæmpning; projekttitler følger et separat scrollspor. Global reveal starter ved 84 % af viewporten i stedet for 94 %. Billedbåndet genbruger motivverdenen som kort overgang; ingen selvkørende løkke. Pakkerne er den rolige sammenligning, og FAQ-/pakkeoverskrifter er mindre på mobil.
