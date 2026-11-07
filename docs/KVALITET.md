# Kvalitet og leverancestatus

Lokal designleverance, 7. november 2026. Intet er publiceret. Siden bygger på ejerens dokument og eksplicitte instruktion om at springe interviews og ekstra godkendelsesrunder over. Ingen manglende virksomhedsoplysninger er opfundet.

## Faktisk verificeret

| Kontrol | Resultat |
|---|---|
| Eget website-byggemanual-skill | Oprettet, fuld manual med som reference, quick_validate bestået og installeret i personlig skills-mappe |
| Impeccable | Installeret projektlokalt. Context, designreferencer, audit/polish og uafhængig review anvendt. Detektoren returnerede [] ved kørslen; senere rettelser retter a11y/konkrete reviewfund |
| Lint, TypeScript strict og produktionsbuild | Bestået uden fejl; Next.js App Router statisk hovedindhold |
| Afhængigheder | npm audit: 0 kendte sårbarheder; testede versionsnumre låst, lockfil medleveret |
| HTML uden browser-JavaScript | Alle fem indholdsruter svarer 200 med én H1, dansk sprog, vigtig tekst, FAQ, navne og mail i det rå svar |
| Links og sikkerhedsheadere | Samlet kontrol bestået, ankre findes, interne ruter svarer 200 |
| Indeksering | Lokal noindex, robots disallow og tomt sitemap kontrolleret. Admin og editor-API er 404 i produktion |
| Mobil og desktop | 320, 360, 375, 390, 768, 1024, 1280 og 1440 CSS-px set. Ingen vandret overflow. Begge hero-handlinger over folden på 844 px høj telefon. Pauseknap 44×44 px på alle bredder |
| Menu og tastatur | Mobilmenu åbnet og lukket med Escape. Fokus returnerer til menuknappen. Navigation og retur til top afprøvet |
| FAQ og koncepter | Native details åbnet/lukket. Begge konceptfotos set indlæst; endelige screenshots taget fra dokumentets top efter billedindlæsning |
| Kontakt | Ugyldig e-mail stoppet af browseren. Mailudkastets modtager, danske tegn, linjeskift og validering testet uden afsendelse. Ingen mail sendt |
| Lokal editor | Keystatic læser indholdsfilen og kunne gemme en midlertidig tekstændring. Testteksten er fjernet, endeligt indhold gendannet og ny produktionsbuild kørt |
| Motion i rigtig browser | Lenis/GSAP aktiveret; ved scroll 0→840 ændredes crop-frame scale 1,4916→1,0731 og billedets Y-position 17,8→40,0 px. Konceptsekvens startede, viste andet frame og kunne stoppes. Pause afprøvet |

## Lighthouse, mobil

Rapport: [Lighthouse mobil](reports/lighthouse-mobile.html). Kørt én ad gangen mod produktionsbuild på localhost med devtools-throttling. Dette er laboratorieværdier, ikke feltdata.

| Kategori/måling | Målt |
|---|---:|
| Performance | 98 |
| Tilgængelighed | 100 |
| Best practices | 96 |
| SEO | 66 |
| Agentic browsing (ekstra kategori) | 100 |
| LCP | 1,8 s |
| CLS | 0,001 |
| Total Blocking Time | 70 ms |

SEO-scoren skyldes blandt andet den udtrykkeligt ønskede lokale/noindex-tilstand. Indekserbarhed aktiveres først med et rigtigt domæne og en senere lanceringsbeslutning. CLS er under 0,1, men er ikke præcis 0. TBT er ikke INP; felt-INP er ikke målt. Best-practices-rapporten markerer blandt andet CSP's kendte inline-script-kompromis.

## Bevidste afgrænsninger og uafsluttede lanceringspunkter

- Ejer har bedt om lokal levering. Domæne, hostingkonti, DNS, Search Console og Google Business Profile er derfor ikke oprettet eller ændret.
- Registreret navn, CVR, adresse, momsstatus og egentlige aftalevilkår mangler. Ingen priser er annonceret, før momsstatus er afklaret. Juridiske informationssider er lokale udkast, ikke en påstand om en færdig offentlig compliance-gennemgang.
- Ingen dokumenterede kundecases eller portrætter findes. Koncepter er mærket, og stockbillederne er ikke fremstillet som egne produktioner. Billed- og varemærkegodkendelse før lancering står i docs/BILLEDER.md.
- Kontakt er et mailudkast. Der findes ingen serverafsendelse, Resend, Redis eller modtagelsestest. Tilføjes dette, skal manualens fulde API-sikkerhed implementeres og testes.
- Intet tracking, annoncer eller analyseværktøj er installeret, og derfor intet samtykkebanner. Senere tracking kræver separat korrekt opsætning.
- Reduceret bevægelse er implementeret i CSS, media queries og Lenis/GSAP-cleanup. Browserens pausealternativ er afprøvet. Selve OS-/browserindstillingen prefers-reduced-motion er ikke særskilt emuleret i denne session.
- Rå HTML er verificeret uden JavaScript. En separat browsergennemgang med JavaScript helt deaktiveret er ikke udført; no-JS-navigation og mailto-fallback findes i server-HTML.
- Keystatic dækker hero, ydelser, pakker, stiftere, kontaktoplysninger og FAQ. Øvrige overskrifter, proces/koncepttekster og juridisk tekst er fortsat redaktionel kildekode; se docs/INDHOLD.md.
- CSP tillader inline-scripts/styles til statisk Next.js. Nonce-/hash-hærdning er ikke implementeret. HSTS udsendes kun ved senere HTTPS-domæne.
- Google Rich Results/Schema Markup Validator og domænebaseret canonical/sitemap-konsistens er ikke eksternt testet: domænet findes ikke endnu. Lastmod er indholdsbaseret og bliver ikke sat til byggetid.
- Koden leveres også til GitHub-repoet https://github.com/Frederikhs11061/efagency1 efter ejerens efterfølgende anmodning. Ingen offentlig deploy er foretaget.

## Dokumenter

BRIEF.md: kilder, designbeslutninger og mangler. STRUKTUR.md: ruter og index-politik. ANIMATION.md: biblioteker, effekter, cleanup og fallback. INDHOLD.md: redigering og datoer. BILLEDER.md/CREDITS.json: kilder og rettigheder. SECURITY.md: sikkerhed og serverafsendelse før en eventuel lancering.

## Uafhængig slutgennemgang

Impeccable-reviewerens afsluttende disposition er **ship for de fire vurderede rettelser**: retningskontrakten, fjernede dekorative overtekster, 44×44-trykflader og pauseknappens overlap er scoret løst. Alle ti endelige captures er vurderet gyldige med begge konceptfotos synlige. Dette er ikke en ekstern certificering eller en samlet produktionsgodkendelse; domæne, virksomhedsoplysninger og lanceringspunkter ovenfor består som åbne.

Impeccable-documenter har skrevet DESIGN.md og .impeccable/design.json ud fra faktisk CSS, skrifter, komponenter og skærmbilleder. Ingen tidligere kundegodkendelse eller ekstern komposition er opfundet.
