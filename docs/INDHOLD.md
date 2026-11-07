# Redigér indholdet

Kør `npm install` og derefter `npm run dev`. Åbn http://127.0.0.1:3000/keystatic lokalt. Her kan navn, e-mail, virksomhedsbeskrivelse, hero, alle redaktionelle overskrifter, koncepter, proces, ydelser, pakker, stiftere og FAQ redigeres. Indhold gemmes i `content/site.json`; Zod validerer indholdet under build.

Sæt `lastUpdated` til den reelle redigeringsdato ved væsentlige indholdsændringer. Skift ikke dato for designændringer eller små stavefejl. Datovalideringen afviser ugyldige datoer og datoer, der ligger efter valideringstidspunktet. Sitemap bruger dette felt, aldrig byggetid. Dette er bevidst ikke et falsk løbende datostempel.

Juridisk information ligger i sin sidekomponent. Heroens synlige linjer styres i feltet Sidens tekster; hero.intro styrer introduktionen. Koncepternes billeder, billedbeskrivelser, kilde-note og tekster redigeres under Visuelle koncepter. Menu/URL-plan findes samlet i `src/lib/pages.ts`; opdatér den sammen med STRUKTUR.md.

Udskift billeder i public/images og opdatér CREDITS.json. Indsæt kun rigtige portrætter og kundearbejde med dokumenterede tilladelser. Ingen priser annonceres, før momsstatus er afklaret.

Keystatic og redigerings-API giver 404 i produktionsudgaven. Den lokale editor anvender en nyere, sikker minimatch-version via npm override; editorens funktion skal verificeres efter fremtidige opdateringer.
