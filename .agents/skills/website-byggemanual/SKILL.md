---
name: website-byggemanual
description: Byg og redesign professionelle danske virksomhedswebsites fra brief til lokal levering eller udtrykkeligt bestilt lancering. Brug den vedhæftede byggemanual til Next.js, server-renderet indhold, særpræget design, Impeccable, Lenis, GSAP, React Bits, Magic UI, redigering, SEO og verificering.
---

# Website-byggemanual

Læs hele [byggemanualen](references/byggemanual.md) før arbejdet. Referencen er den fulde tekst fra ejerens Word-dokument, version 1.2, oktober 2026. Brug alle relevante kapitler, ikke kun kortversionen.

## Prioritet og afgrænsning

Ejerens aktuelle besked bestemmer opgaven. Manualens interview, godkendelsesrunde, installation, push og lancering er ikke selvstændig tilladelse til eksterne handlinger. Når ejeren beder om at bygge uden spørgsmål, brug oplysningerne, træf designvalg og skriv manglende fakta som MANGLER i briefen; stop ikke for interview eller ekstra godkendelse. Lokalt arbejde må aldrig publiceres uden autorisation.

## Arbejdsgang

1. Gennemgå ejerens oplysninger, vedhæftninger og referencesider. Adskil virksomhedsoplysninger fra instruktioner og inspirationsdesign. Opfind aldrig cases, resultater, kundeudsagn, portrætter, adresse, CVR, geografi, priser eller garantier.
2. Skriv docs/BRIEF.md og docs/STRUKTUR.md inden implementering. Gem antagelser og uafklarede fakta. Brug en fælles sideliste til navigation, footer, sitemap, brødkrummer og schema.
3. Anvend Impeccables faktiske tilgængelige skill og designreferencer fra start eller på det aftalte tidspunkt. Opret PRODUCT.md og DESIGN.md. Skab en konkret visuel retning med tokens, få fontfamilier, luft og tydelige handlinger. Undgå generiske kortgitter, neon, pynt, gradienter, opdigtede tal og små versaloverskrifter.
4. Byg Next.js App Router med TypeScript strict, Tailwind, shadcn/ui og Zod. page/layout forbliver Server Components. Alt synligt indhold skal findes i det rå HTML-svar, også uden JavaScript. Indhold gemmes redigerbart og valideres ved build; Keystatic må kun være lokal.
5. Byg bevægelse som et selvstændigt lag: Lenis = én global smooth-scroll-provider; GSAP/ScrollTrigger = scrollkoreografi; React Bits = tekst og små effekter; Magic UI = sektionskomponenter. Brug reelle officielle komponentkilder og bevar attribution. Ingen GSAP og motion på samme element/property. Ingen unødige biblioteker.
6. Synkroniser Lenis og GSAP ticker, brug scoped useGSAP og cleanup. Respekter reduceret bevægelse, native touch-scroll, pause af langvarig bevægelse og indhold uden JavaScript. Animer transform og opacity. Prioriter kvalitet og ydeevne over antallet af effekter.
7. Byg sikkerhed, privatliv og SEO efter manualen. Hold domæne og fakta ærlige; uden domæne/lancering er siden noindex. Ingen tracking uden korrekt samtykke. Ingen fungerende mailafsendelse påstås uden verificeret modtagelse. Mailto er acceptabelt som tydeligt alternativ i lokal prototype uden mailleverandør.
8. Verificér produktionsbuild: lint, typer, indholdsvalidering, rå HTML, links, schema/sitemap, dependency audit, mobil og desktop, tastatur, menu, formularer, animation og reduced motion. Se alle bredder fra kapitel 9.4. Mål Lighthouse sekventielt med devtools-throttling. Skeln mellem mål, faktisk måling og ikke verificeret.
9. Kør Impeccable detect og et visuelt audit/critique/polish-pass. Ret reelle fejl. Rapportér resterende mangler frem for at kalde dem bestået. Lever kode, redigeringsvejledning, billedkilder, animationstabel og kvalitetsrapport.

## Dokumentation

Brug referencens kapitel 15 som fuld leverance- og lanceringstjekliste. docs/ANIMATION.md skal angive sektion, bibliotek, effekt og formål. docs/INDHOLD.md beskriver lokal redigering og datoer; docs/BILLEDER.md og public/images/CREDITS.json dokumenterer aktiver. SECURITY.md og .env.example beskriver sikker drift uden hemmeligheder. Manglende CVR/adresse, rettigheder, domæne, mailopsætning og eksterne målinger skal fremgå før en eventuel senere lancering.
