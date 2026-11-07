# Sikkerhed og lokal drift

Dette er en lokal præsentationsside uden køb, login, analytics eller serverbaseret kontakt-API. Mailudkastet behandles i browseren og sendes først fra brugerens mailapp. Derfor er en mail-API med Redis-ratebegrænsning og Resend ikke installeret. Tilføjes serverafsendelse, skal origin/type/størrelseskontrol, delt Zod-skema, rate limiting, honeypot, escaping og afsendertest fra manualen implementeres, før funktionen aktiveres.

CSP begrænser ressourcer til samme oprindelse. Static Next.js kræver i denne udgave tilladte inline-bootstrap-scripts og styles; script-src anvender derfor 'unsafe-inline'. Dette er en kendt afvigelse fra en nonce-/hashbaseret CSP og ikke en påstand om maksimal CSP-hærdning. Eval er ikke tilladt. HSTS tilføjes kun, når SITE_URL er HTTPS. Øvrige headere: nosniff, DENY, strict-origin-when-cross-origin, begrænsede permissions og COOP same-origin.

Der er ingen hemmeligheder i projektet. .env.example indeholder kun tom domæneindstilling og noindex-status. Redigering er kun mulig i NODE_ENV=development; adminruter giver 404 i produktion. Fotos må kun optimeres fra lokale kilder. Ingen åbne remotePatterns.

npm overrides opgraderer to indirekte minimatch-afhængigheder til den rettede 11.0.5-version. Lint, build og Keystatic skal testes efter ændringer. Kør npm audit før en senere lancering.
