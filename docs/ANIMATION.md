# Animation

| Sektion | Bibliotek | Effekt | Formål |
|---|---|---|---|
| Hele sitet | Lenis | Én global provider, native touch, synkroniseret med GSAP-ticker | Kontrolleret smooth scroll |
| Hero-overskrift | React Bits BlurText, tilpasset | Ordvis forskydning i server/CSS-adapter, uden blur/spring og med synlig servertekst | Typografisk ankomst under ét sekund |
| Hero-billede | GSAP / ScrollTrigger | Parallax og skalering af 9:16-udsnitsrammen på desktop | Vise overgangen fra optagelse til socialt format |
| Konceptsekvens | React + CSS | Brugerstartet sekvens af tre visuelle retninger, afsluttes automatisk | Et kort indtryk af mulige contentudtryk, ikke et kundeshowreel |
| Kompetencebånd | Magic UI Marquee | Vandret tekstbånd; pause ved hover og global pause | Kompakt visuelt rytmeskift |
| Ydelser og sektioner | GSAP | Scoped scroll-reveals fra allerede synlig tekst | Rolig progression |
| Koncepter | GSAP | Diskret billedparallax på produktbilledet | Billeddybde uden at bevæge teksten |
| Proces | GSAP | Sticky forklaring og en scrollstyret statuslinje | Forbinde fire reelle procestrin |
| CTA og links | CSS | Pilens transform på hover/fokus | Tydelig og let respons |

React Bits og Magic UI er installeret fra officielle registre. React Bits-kilden er efterfølgende reduceret til den brugte ord-animation: ingen filteranimation, loops, effekter eller døde kodeveje. Skærmlæsere får én samlet tekst via H1. Heroens word-stagger starter ved første paint i CSS; dette undgår en særskilt motion-hydrering. Scrollmotoren lazy-loades ved første scroll-, hjul-, touch- eller tastaturinteraktion. Kilder er angivet i THIRD_PARTY.md.

Lenis og GSAP registreres centralt. Hver animation ejer sine egne elementer/properties; motion og GSAP overlapper ikke. Cleanup fjerner ticker, scroll-lytter og matchMedia-kontekst og genskaber tickerens lag-smoothing. Reduceret bevægelse udelader Lenis og GSAP, stopper marquee og viser teksten uden transform. Mobil undlader parallax/scroll-frame og sticky procesforklaring. Pausekontrollen stopper den kontinuerlige marquee og scroll-effekterne. Konceptsekvensen har sin egen stopknap og stopper automatisk efter 5,4 sekunder. Ingen WebGL eller videoautoplay.
