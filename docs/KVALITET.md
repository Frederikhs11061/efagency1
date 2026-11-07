# Kvalitet — redesign v2

Lokal designleverance, 7. november 2026. Ny retning efter ejerens afvisning af det tidligere udtryk. Clix Productions og Umault er undersøgt visuelt. Intet er deployet. Koden leveres til det allerede autoriserede GitHub-repository.

## Verifikation

| Kontrol | Faktisk resultat |
|---|---|
| Byggemanual-skill | Oprettet fra hele ejerens dokument, valideret og installeret; projektkopi medleveret |
| Impeccable | Ny retning, concept-seed, craft-floor, detector, uafhængig finish review og designdokumentation |
| Build, lint og typer | Produktionsbuild og TypeScript strict bestået; lint bestået |
| Afhængigheder | npm audit --omit=dev: 0 kendte sårbarheder i produktionsafhængigheder |
| Serverindhold og links | Fem indholdsruter svarer 200, én H1, dansk sprog, FAQ/navne/ydelser/mail i rå HTML; interne links og ankre kontrolleret |
| Sikkerhed og indeksering | Headere kontrolleret; noindex, robots disallow og tomt sitemap; Keystatic/API svarer 404 i produktion |
| Responsive skærme | 320, 360, 375, 390, 768, 1024, 1280 og 1440 CSS-px undersøgt med indlæste billeder; intet vandret overløb |
| Interaktion | Native koncepter og FAQ, mobilmenu, Escape og tilbageført fokus afprøvet |
| Kontakt | Browseren afviser ugyldig mail. Mailudkastets validering, danske tegn og linjeskift er testet; ingen besked sendt |
| Bevægelse | Pause/play er fjernet. Hero, billeder og billedbånd er styret af scroll; tekst bruger CSS, React Bits og målrettede GSAP-entréer. Ny browserkontrol dokumenteres nedenfor |
| Lokal indholdseditor | Den nye models hovedoverskrifter, konceptbilleder/-tekster og proces er indlæst korrekt i Keystatic. Gemning blev testet i første udgave; ingen ny gemmerunde påstås her |
| Billedværktøj | To genererede kampagnestills og én faktisk redigering af kaffefoto; præcise prompts og kilder gemt. Metadata-scan: 6 rasterfiler, 0 manglende |

Detektoren gav ét advisory om en hoverfarve uden for den foreløbige palette; farven er erstattet af den eksisterende linjefarve. Resultatet gemmes ærligt i reports/impeccable-detect.json. Der er ikke kørt en anden detektor for at fremstille et kunstigt rent resultat.

## Lighthouse

[Ny mobilrapport](reports/lighthouse-mobile.html), målt sekventielt på produktionsbuild med devtools-throttling. Målingen er fra den nye produktionsbuild med fem faktisk integrerede React Bits-komponenter og de ønskede CTA-/linkrettelser. Gamle v1-rapporter ligger separat i reports/v1 og er ikke den nye sides resultater.

| Måling | Resultat |
|---|---:|
| Performance | 97 |
| Tilgængelighed | 100 |
| Best practices | 96 |
| SEO | 66 |
| Agentic browsing | 100 |
| LCP | 1,7 s |
| CLS | 0 |
| Total Blocking Time | 150 ms |

LCP er under 2,5 s og CLS under 0,1. Performance-målet 95 er nået i denne måling. SEO påvirkes af den tilsigtede noindex-tilstand. Best-practices markerer CSP's kendte inline-script-kompromis. Laboratoriemålinger er ikke feltdata; INP er ikke målt.

## Grænser før lancering

Registreret virksomhedsnavn, CVR/adresse, momsstatus, domæne og endelige aftale-/privatlivsvilkår mangler fortsat. Ingen kunder, resultater, portrætter eller adresser er opfundet. Koncepter er synligt mærket og AI-bearbejdning oplyst. Kontaktfeltet åbner et mailudkast; der er ingen serverafsendelse eller verificeret mailmodtagelse. Ingen tracking eller annoncepixels er installeret.

Reduceret bevægelse er implementeret i CSS, React Bits og GSAP/Lenis med statisk alternativ. Selve OS-indstillingen er ikke særskilt emuleret. Rå HTML er kontrolleret; en særskilt browserrunde med JavaScript helt deaktiveret er ikke udført.

Lokale redigerbare tekster omfatter nu også alle hovedoverskrifter, konceptbilleder/-beskrivelser og proces. Juridisk information ligger fortsat i sin sidekomponent. Se INDHOLD.md.

Siden forbliver lokal/noindex. Ekstern schema-validering, domæne, DNS, Search Console, hosting og lancering er ikke udført.

## Uafhængig Impeccable-gennemgang

Den friske gennemgang vurderede den nye verdens typografi, fotografiske materiale, farvegrund, første skærmbillede og indholdsforløb som match. Tre materielle fund blev rettet: Frederiks rollebetegnelse, mellemrum i pakkelinks og misvisende pile ved ydelser uden link.

Afsluttende disposition er **ship for de tre vurderede rettelser**. Alle tolv krævede captures blev genlæst og vurderet gyldige; ingen regressioner fra rettelserne blev fundet. Dette er en vurdering af rettelseslisten, ikke en ekstern certificering eller et udsagn om, at alle lanceringspunkter er afsluttet. Se reports/impeccable-review-v2.md.

## Ejerens seneste refinement

Alle otte bredder er genkontrolleret efter de fire ekstra React Bits-komponenter. Tolv endelige captures er taget fra dokumentets top med alle billeder indlæst. Ingen vandret overflow, ingen SVG-pile i links og ingen pause/play-kontrol. De små koncept-/AI-fodnoter er fjernet som ønsket; almindelig introduktion og billedkilder bevarer koncepternes oprindelse.

I browseren er 3 BlurText-navnelinjer, 25 ScrollReveal-ord, 2 SplitText-ord og 2 Magnet-instanser verificeret aktive. AnimatedContent bruges til ydelsesrækker og stifterbio. Console gav ingen fejl eller advarsler efter aktivering. Mobilmenu lukker med Escape og tilbagefører fokus; ugyldig mail afvises fortsat af browseren. Billedbåndets CSS-animation er none; dens forskydning styres af scroll. Se REFINEMENT.md og ANIMATION.md.

## Afsluttende refinement-review

Frisk fuld Impeccable-gennemgang efter ejerens konkrete screenshot: alle 12 krævede captures vurderet gyldige; ingen renderet manglende eller modsagt del og ingen visuel fejl fundet i finpudsningen. Den eneste materielle rettelse var forældet designdokumentation. DESIGN.md, design.json og retningskontrakten er opdateret; reviewerens afsluttende **ship** dækker den vurderede dokumentationsrettelse, som er scoret løst. Se reports/impeccable-review-v3.md.
