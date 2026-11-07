# Kvalitet — mobil- og motionrevision 4

Lokal designleverance, 7. november 2026. Ejerens nye mobilskærmbillede er den primære fejlevidens. Den eksisterende fotografiske retning er bevaret; billedkomposition, mobilhierarki og bevægelse er rettet. Intet er deployet; GitHub-upload er særskilt autoriseret.

## Verificeret i den aktuelle produktionsbuild

| Kontrol | Resultat |
|---|---|
| Lint, TypeScript og produktionsbuild | Bestået uden lintadvarsler |
| Serverindhold og links | Fem ruter 200, én H1, dansk sprog, indhold i rå HTML og gyldige interne ankre |
| Sikkerhed | Headere kontrolleret, Keystatic/API404 i produktion, noindex/robots disallow/tomt sitemap |
| Produktionsafhængigheder | npm audit --omit=dev: 0 kendte sårbarheder |
| Responsivitet | 320,360,375,390,768,1024,1280,1440 px; alle billeder indlæst, scrollposition 0 ved fulde captures, intet vandret overløb. Rå målinger: reports/responsive-v4.json |
| Korte skærme | 390×667 og 360×640 samt 844×390 landskab og kort laptop1280×720 undersøgt; hele primærknappen synlig. CTA-bund hhv.501,485,286 og685 px |
| Mobilhero | Særskilt portrætredigering, normal billedbredde, genkendelig person. Ved390×844 slutter CTA ved544px, så overskrift, tilbud og begge handlinger er samlet i første skærmbillede |
| Billeder | Præcis prompt og edit target i ASSET-PROMPTS.json/CREDITS.json; indlejret metadata. Scan:7 rasterfiler, 0 manglende |
| Interaktion | Mobilmenu åbnet/lukket med Escape og fokus tilbageført; ugyldig email afvist af browseren. Testfelter ryddet. Ingen besked sendt |
| Motion | Reelt gennemscrollet på mobil/desktop. Proceslinjer observeret fra0 til1 skalering; kontaktens16bogstaver aktiveret; pakkeantal tæller mod de faktiske4/8/12. Syv React Bits-komponenter, én Lenis-motor, GSAPscopes og MagicUIbilledbånd |
| Konsol | Ingen warn/error ved den afsluttende interaktionsrunde |
| Indholdseditor | Tidligere models indlæsning/gemning er dokumenteret; ingen ny Keystatic-gemning påstås i denne revision |

Tekster til skærmlæseren fastholder de korrekte pakkeantal, selv mens den visuelle tæller bevæger sig. Den nye aria-label på strong blev fundet ugyldig og erstattet af almindelig tekst til skærmlæseren før den sidste måling. Siden gemmer ingen testdata og sender ingen mail automatisk.

## Aktuel Lighthouse-måling

[HTML-rapport](reports/lighthouse-mobile.html) og JSON fra7. november 2026 kl. 22:08 UTC, sekventiel produktionsmåling med devtools-throttling:

| Måling | Resultat |
|---|---:|
| Performance |99|
| Tilgængelighed |100|
| Best practices |96|
| SEO |66|
| Agentic browsing |100|
| LCP |1,7s|
| CLS |0|
| Total Blocking Time |30ms|

Performance-målet95 er nået i slutmålingen. En tidligere måling før rettelsen af tællerens semantik gav89/96, TBT410ms; den er ikke slutresultatet. Laboratorieværdier varierer med maskinbelastning og er ikke feltdata. INP er ikke målt. SEO66 følger den bevidste noindex-status. Best-practices96 omfatter det kendte CSP-inline-kompromis; sikkerheden er ikke lempet for scoren. De gamle v3-målinger er arkiveret i reports/v3.

## Kritisk analyse og afgrænsning

To uafhængige vurderinger af den indsendte skærm og baseline-koden er samlet i reports/CRITIQUE-V4.md. Designvurderingen blev læst før detektorfund. Baselinescore27/36 er ikke en slutscore. De fandt forstørret mobilcanvas, bundforankrede handlinger, for tidlige tekststarter, ensartet sektionsrytme og upræcis mailstatus. Den aktuelle revision retter disse årsager. Native koncepter/FAQ og den dokumenterede mailudkastsløsning bevares.

Detektoren blev kørt én gang for denne revision:83advisories(80typografi,1radius,2farver), ingen non-advisory fund. Responsive størrelser er overvejende beskrevet i designprosa; de to sorte wipe-masker er ikke aktive i siden. Ingen ekstra scanning er kørt for at fremvise et kunstigt rent resultat. CUA tillader kun read-only evaluate, så der er ingen påstået browseroverlay. Kritikkens første browserforsøg fik connection refused, fordi den gamle server var stoppet; den færdige build er derefter startet og visuelt verificeret som beskrevet ovenfor. Kritiksnapshot og trend er gemt; spørgsmål er sprunget over efter ejerens instruktion om autonome rettelser.

Frisk fuld afsluttende visuel vurdering: **ship**, ingen materielle rettelser. Alle krævede captures, inklusive de tre omtagninger og kort laptop, er vurderet gyldige. Det er en vurdering af den leverede lokale designflade, ikke en lanceringsgodkendelse eller ekstern certificering. Se reports/impeccable-review-v4.md.

## Før lancering

Virksomhedsregistrering, CVR/adresse, momsstatus, priser, domæne og endelige juridiske vilkår mangler fortsat. Ingen kunder, resultater eller portrætter er opfundet. Almindelig introduktion beskriver billeder som visuelle koncepter; kilder og bearbejdning er dokumenteret separat efter ejerens ønske om at fjerne små AI-fodnoter. Kontakt åbner et mailudkast; ingen serverafsendelse eller verificeret modtagelse påstås. Ingen tracking.

Reduceret bevægelse er implementeret i CSS, React Bits og GSAP/Lenis med statisk indhold; OS-indstillingen er ikke særskilt emuleret. Rå HTML er verificeret, men der er ikke udført en særskilt browserrunde med JavaScript deaktiveret. Ekstern schema-validering, domæne/DNS, SearchConsole, hosting og lancering er ikke udført. Siden forbliver lokal/noindex.

Tre interimsskærmbilleder fra browserens størrelsesskift blev afvist af den uafhængige reviewer og taget om uden kildeændringer. De nye viewportbilleder viser hele den faktiske hero uden sort rest; browserens ensartede skalering følger contentbredden uden8px scrollbar. Alle fulde sidebilleder var allerede gyldige.
