# EF Agency

Billedbåret redesign med store kondenserede statements, rolige CTA’er og scrollkoreografi. Fem officielle React Bits-komponenter er integreret: SplitText, AnimatedContent, ScrollReveal, BlurText og Magnet.

Lokalt redesign bygget med website-byggemanual, Impeccable, Next.js, Lenis, GSAP, React Bits og Magic UI. Ingen Shopify-afhængighed og intet er publiceret.

## Åbn lokalt

```sh
npm install
npm run build
npm start
```

Åbn http://127.0.0.1:3000. Til redigering: `npm run dev` og derefter `/keystatic`. Se docs/INDHOLD.md.

## Verifikation

```sh
npm run lint
npm run typecheck
npm run build
npm start
# I en anden terminal:
npm run check
npm audit
```

docs/KVALITET.md samler faktiske resultater og resterende lanceringspunkter. Fuld opgavebrief: docs/BRIEF.md. Struktur: docs/STRUKTUR.md. Motion: docs/ANIMATION.md.

## Før lancering

Afklar registreret virksomhedsnavn, CVR/adresse, moms og priser, domæne, aftalevilkår, billedgodkendelser og privatlivstekst. Hold SITE_INDEXABLE=false indtil da. Ingen geografiske påstande eller kundeprojekter må opfindes. Først ved autoriseret lancering sættes SITE_URL og SITE_INDEXABLE=true, og domænebaseret canonical, sitemap og schema testes. Der er ingen serverformular, tracker, pixel eller cookiebanner; mailudkastet sendes af brugeren selv.

Byggemanual-skill'et følger med i `.agents/skills/website-byggemanual` og er også installeret i ejerens personlige skills-mappe. Det komplette Word-dokuments tekst ligger som reference i skill'et.

Kilderepository: https://github.com/Frederikhs11061/efagency1. Upload til GitHub ændrer ikke sidens lokale/noindex-status og er ikke en offentlig deploy.
