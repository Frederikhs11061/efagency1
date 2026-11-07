---
name: EF Agency
description: Filmtrailerens hard cuts — fotografi, kondenseret typografi og varm gul.
colors:
  ink: '#101110'
  white: '#f7f7f2'
  accent: '#ffd85a'
  accent-hover: '#ffe48a'
  muted: '#b2b4ad'
  line: '#383a36'
  light-line: '#c9ccc2'
typography:
  display:
    fontFamily: 'Barlow Condensed, sans-serif'
    fontSize: 'clamp(112px,12vw,198px)'
    fontWeight: 700
    lineHeight: 0.835
    letterSpacing: '-0.025em'
  headline:
    fontFamily: 'Barlow Condensed, sans-serif'
    fontSize: 'clamp(70px,8.8vw,138px)'
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: '-0.025em'
  title-display:
    fontFamily: 'Barlow Condensed, sans-serif'
    fontSize: 'clamp(32px,3vw,48px)'
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: '-0.025em'
  title:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '23px'
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: '-0.025em'
  body:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '13px'
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: '0.07em'
rounded:
  square: '0px'
  capsule: '100px'
  circle: '50%'
spacing:
  gutter: 'clamp(24px,4.5vw,80px)'
  section: 'clamp(88px,9vw,144px)'
  gutter-mobile: '22px'
  section-mobile: '80px'
  row: '40px'
  field-gap: '30px'
components:
  button-primary:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.ink}'
    typography: '{typography.label}'
    rounded: '{rounded.capsule}'
    padding: '18px 32px'
  button-primary-hover:
    backgroundColor: '{colors.accent-hover}'
  text-link:
    textColor: '{colors.white}'
    rounded: '{rounded.square}'
  contact-submit:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.white}'
    rounded: '{rounded.capsule}'
    padding: '18px 30px'
  contact-submit-hover:
    backgroundColor: '{colors.line}'
  contact-field:
    textColor: '{colors.ink}'
    rounded: '{rounded.square}'
    padding: '12px 0'
  package-row:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.white}'
    rounded: '{rounded.square}'
    padding: '40px 0'
  service-row:
    backgroundColor: '{colors.white}'
    textColor: '{colors.ink}'
    rounded: '{rounded.square}'
    padding: '44px 0'
  faq-disclosure:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.white}'
    rounded: '{rounded.square}'
---
# Design System: EF Agency

## Overview

**Creative North Star: "Filmtrailerens hard cuts"**

Filmtrailerens hard cuts forbinder fotografisk tyngde med kontante typografiske statements. Charcoal-sort, varm hvid og gul skaber tydelige skift mellem billede, læsning og handling. Udtrykket er filmisk, direkte og selvsikkert: tætte displaylinjer møder åbne indholdsrækker og generøs afstand mellem sektioner.

Dette dokument registrerer den implementerede, kodebaserede retning. De normative tokens er udledt af den aktuelle CSS; der påstås ingen comp-godkendelse. Clix Productions og Umault er retningsgivende inspiration for billeddominans og kontrast. Ejerens afvisning af papir/rød-retningen og ønske om at bevare logoet er bindende. Retningskontrakten og sidens konkrete fortælleforløb findes i `docs/REDESIGN-V2.md`; ejerens efterfølgende finpudsning er registreret i `docs/REFINEMENT.md`. Denne finpudsning bevarer verdenen og samler handlingerne i kapsler og rolig versaltekst.

**Key Characteristics:**
- Fotografiske motiver med reelle teksturer og bevidste beskæringer; almindelig introduktion beskriver dem som visuelle koncepter.
- Barlow Condensed Bold til statements; Manrope til læsning, navne og betjening.
- Charcoal-sort og varm hvid som læseflader; varm gul til hovedhandling og kontakt.
- Åbne rækker, tynde skillelinjer og skarpe billedrammer; kapsler samler de to hovedhandlinger.
- Synlig servertekst og bevægelse som progressiv forbedring med scrollstyring og reduced motion.

## Colors

Paletten er mørk og filmisk med varm hvid til kontrast og varm gul som kontant handlingsfarve. Frontmatter er farvernes normative kilde; navnene her forklarer deres brug.

### Primary
- **Varm handlingsgul** (`accent`): primære knapper, tekstmarkering og kontaktens store flade.
- **Lys handlingsgul** (`accent-hover`): hover på den primære knap.

### Neutral
- **Charcoal-sort** (`ink`): hovedbaggrund, kontakttekst og mørk kontaktknap.
- **Varm hvid** (`white`): tekst på mørke flader samt lyse ydelses- og personflader.
- **Dæmpet grå** (`muted`): sekundær tekst og formatoplysninger på mørk baggrund.
- **Mørk skillelinje** (`line`): linjer, kontrolkanter, billedfallback og kontaktknappens hover.
- **Lys skillelinje** (`light-line`): ydelsesrækker og personopdelinger på varm hvid.

**The Yellow Action Rule.** Brug den varme gule som interfaceaccent til hovedhandling og kontaktflade; billeders egne farver bliver ikke nye interfacetokens.

## Typography

**Display Font:** Barlow Condensed Bold, selfhostet med `sans-serif` som fallback.
**Body Font:** Manrope, selfhostet med `sans-serif` som fallback.

**Character:** Kondenseret, kompakt display mod rolig og åben brødtekst. Display er altid fedt; Manrope bærer læsning og kontroltekst. Logoets Instrument Sans-baserede bogstavformer er konturer i SVG og er ikke en tredje tekstfont.

### Hierarchy
- **Display:** heroens tre linjer bruger frontmatter-rollen. På tablet op til 900 px er størrelsen (clamp(108px,14vw,130px)); op til 600 px (clamp(74px,23vw,130px), linjehøjde .86); op til 360 px (clamp(70px,22.6vw,82px)). Ved lav desktophøjde bruges (clamp(110px,10.5vw,160px)).
- **Headline:** store sektionsstatements bruger den kondenserede headline-rolle med lokale skaleringer. Generel mobiloverskrift er (68px, linjehøjde .94); tydelige særroller er service (80px), proces og pakker (72px). Kontakt er størst på desktop (clamp(100px,13vw,200px), linjehøjde .85).
- **Title display:** den kondenserede titelrolle bærer ydelsesnavne, lokalt skaleret til (clamp(44px,5vw,76px)); mobil (46px, linjehøjde 1).
- **Title:** Manrope-titlen bærer procestrin. Pakketitler er (28px, 600, linjehøjde 1.2); personnavne (29px, 600, linjehøjde 1.3). Billedmotivers titler er Barlow i selve rammen, mens captions bruger Manrope (16px, mobil 15px, linjehøjde 1.6).
- **Body:** basisrollen anvendes til læsning; forklarende afsnit bruger ofte linjehøjde (1.8–1.85). Afsnit har højst (65ch); konkrete spalter kan være smallere. Brødtekst bevares på mindst (16px) på mobil.
- **Label:** hovedknappens normative rolle har versaler og let spærret sats; mobil bruger (12px). Teksthandlinger er (12px, 600, letter-spacing .07em). Headerkontakt bruger (12px, 700, letter-spacing .08em). Kontaktknappen er (14px, 700, letter-spacing .07em). Navigation er (15px, 400); felters labels er (14px, 400, linjehøjde 1.6). Metadata er faktiske oplysninger, ikke dekorative overtekster.

Skalaen er flydende og kontekstbestemt; der er ingen fast modulær ratio. Store statements er skrevet med versaler i indholdet; handlinger får lokal uppercase-styling.

**The Whole Word Rule.** Bevar hele ord og læsbare linjer på små skærme; beskær billedet og tilpas typografien til den tilgængelige bredde.

## Layout

Indholdet står i en centreret ramme med maksimum (1600px) og flydende siderum samt sektionsafstand fra frontmatter. Brede sektioner bruger asymmetriske tospaltede forhold som (1.2fr/.8fr) eller (1.35fr/.65fr), ofte med mellemrum (100px). Ydelser og pakker står som åbne horisontale rækker. Konceptbilleder kan stå forskudt i to kolonner; deres formater skifter bevidst mellem portræt og bredformat.

Ved (1150px) komprimeres spalter og afstande. Ved (900px) er siderummet (32px), flere introer bliver én kolonne, og pakker flytter handling under featurelisten. Ved (600px) bliver indholdsrækker overvejende én kolonne, navigation bliver en menu, siderum og sektionsafstand bruger mobilværdierne, og formularens to felter stables. Pakker bevarer navn og antal i to kolonner (1fr/75px), mens features og handling fylder bredden. Ved (360px) falder siderummet til (18px), og statements skaleres yderligere.

Headeren er fast (100px), derefter (90px/85px/82px) gennem de smallere trin. Ankerafstand i dokumentet er (110px). Den fotografiske hero bruger skærmhøjde med læsbare minimumshøjder og kontrolleret maksimum; mobil har minimum (760px), eller (780px) op til 360 px. Billedbeskæring, skyggetone og tekststørrelse tilpasses separat. Billedtitler begrænses af deres egen containerbredde med (min(165px,35cqw)).

## Elevation & Depth

Systemet er fladt og bruger ingen box-shadows. Fotografier skaber rum gennem lys og beskæring; ensfarvede sorte, hvide og gule flader skaber skift. Heroens mørke toning er en transparent charcoal-flade, ikke et dekorativt interfacegradient. Headeren bliver solid charcoal efter scroll eller med åben menu. Billedhover er en lille zoom, ikke løft af en kortflade.

**The Flat Surface Rule.** Skab dybde med fotografi, farveflader, luft og linjer; tilføj ikke svævende kort eller dekorative skygger.

## Shapes

Skarpe, rektangulære billedrammer, felter og åbne indholdsrækker bærer strukturen. Tynde linjer (1px) opdeler indhold og understreger formularfelter. De to hovedhandlinger er kapsler med frontmatter-radius (100px); de skal ikke blive firkantede CTA-bokse. Mobilmenuens knap er fortsat en cirkel (44px). Der er ingen pile, cirkulære konceptåbnere, pausekontrol eller chips i den implementerede oplevelse. FAQ bruger sit funktionelle plus/minus.

## Components

### Buttons and links

Enkle, typografiske handlinger uden dekorative pile. Den primære knap er gul med charcoaltekst, kapselradius og frontmatter-padding; minimumshøjde er (60px), mobil (56px) med padding (17px 27px). Hover giver lysere gul og et lille løft (−2px) med (.35s) easing. Heroens to handlinger står side om side og kan ombryde på mobil med afstand (12px 24px).

Kontaktknappen er en almindelig submit-knap: charcoal med varm hvid, kapselradius, frontmatter-padding og minimum (60px). Den bruger (14px, 700), versaler og spærret sats (.07em). Hover bliver mørk skillelinje. Mobil bevarer naturlig bredde med minimum (190px). Teksten beskriver handlingen som et mailudkast. Den tidligere shadcn-tilpasning bruges ikke længere til formularens submit.

Tekstlinks og heroens sekundære handling er åbne versaltekster uden bundkant eller ikon, minimum (48px). Hover understreger selve teksten med afstand (8px); der tegnes ingen lang dekorativ linje. Pakkelinks har minimum (56px) og understregning ved hover med afstand (7px). Fokus er synligt med en streg (2px) og afstand (6px); den gule hovedknaps fokus er varm hvid. Der er ingen særskilt branddefineret active- eller disabled-stil for de aktuelle hovedhandlinger.

### Open containers and service rows

Pakker er flade artikler med strukturelle skillelinjer. Desktop fordeler navn, antal, features og link på fire kolonner (1.1fr/.5fr/1.15fr/.65fr), afstand (42px) og lodret padding fra frontmatter. Beskrivelse har luft over sig (18px; mobil 15px). Store antal bruger Barlow (98px, mobil 88px). Pakkens handling er rolig versaltekst uden pil. I de smallere layouttrin flyttes handlingen under features med en strukturel opdeling.

Ydelsesrækker på varm hvid bruger to kolonner (1.25fr/.75fr), afstand (80px), lyse skillelinjer og deres egen padding. De er statiske artikler uden interaktiv hover. AnimatedContent giver rækker og stifterbiografier en målrettet entré uden at skjule teksten som udgangspunkt.

### Inputs / Fields

Åbne, transparente felter på den gule kontaktflade. Synlig label, charcoaltekst, skarp form og kun understregning (1px) med padding fra frontmatter. Indtastning er (16px, linjehøjde 1.65); placeholder er også charcoal. Tekstområde kan ændre højde og er mindst (100px, mobil 120px). Select bruger native betjening og gule valgmuligheder. Fokus følger den fælles synlige streg. Fejl og mailstatus står som almindelig tekst i et statusfelt; der er ingen opfundet rød fejlpalette.

### Navigation

Headerens links er Manrope med mindst (44px) højde; de almindelige navigationslinks har en tekstbred understregning, som skalerer ind ved hover over (.4s). Headerkontakt er en kort versalhandling uden bundkant eller pil og med understregning på selve teksten ved hover. Heroheaderen er transparent; den solide scrolltilstand har ingen skygge. Der er ingen pause-/play-kontrol.

Mobilmenuen har store Barlow-links (43px), skillelinjer og sidste kontaktlink i gul. Menuknappen er en cirkel med to tynde streger, som bliver et kryds i åben tilstand; Escape lukker og returnerer fokus. Footerens navigation er mindre Manrope på charcoal med samme åbne karakter.

### Concept disclosures and FAQ

Begge bruger native `details`/`summary`. Koncepter har fotografi, stor Barlow-titel i billedet, caption og en tekstlig handling: “Se koncept”. Den store titel er et rigtigt h3; handlingen er del af summary. Hover skalerer fotografiet til (1.035) over (.85s) og understreger handlingsteksten. Åbent indhold forklarer konceptet. Almindelig introduktion fortæller, at materialet er visuelle koncepter; små AI-/konceptfodnoter er fjernet, og billedkilder dokumenteres separat.

FAQ er en mørk række med linje, spørgsmål og tyndt plus/minus. Summary har minimum (84px, mobil 80px), padding (22px 0); svaret er dæmpet tekst med linjehøjde (1.85). Åbning drejer plussens lodrette streg over (.3s).

### Progressive motion

Bevægelse følger fortællingen og bruger synlig servertekst som udgangspunkt. Heroens ankomst er let CSS-bevægelse (35px til 0, .75s, forsinkelse 0/.05/.1s). Efter første interaktion indlæses én Lenis-motor (1.05s), synkroniseret med GSAP/ScrollTrigger. Sektionsentréer flytter allerede synligt indhold (30px, .85s, power3.out). Konceptbilleder går fra (scale 1.1, yPercent 3, opacity .65) til (scale 1, yPercent −2, opacity 1) fra (top 95% til top 20%, scrub .8). Kontaktoverskriftens linjer ankommer (y 40px, opacity .6, .9s, stagger .1s). Desktop fra (900px) har forskellig udgangshastighed for heroens billede og tekst uden pin eller ekstra tvungen scrollafstand.

Fem faktiske React Bits-komponenter er installeret fra den officielle CLI og tilpasset synlig servertekst, semantik, ref-synkronisering og reduced motion. Dokumentationen beskriver kun de brugte effekter:
- **SplitText:** sidste linje af ydelsesoverskriften; indlæses nær viewporten (rootMargin 180px), afventer fonte og splitter ord med GSAP. Bevægelse (yPercent 95 til 0), opacitet (1), varighed (.7s), stagger (45ms), power3.out. H2 har samlet tilgængelig label.
- **AnimatedContent:** ydelsesrækker og stifterbiografier; indlæses nær viewporten (120px), afstand (35px), varighed (.85s), ingen opacity-animation, threshold (.08). Forsinkelse pr. række er (.05s) og pr. biografi (.08s).
- **BlurText:** de tre navnelinjer i om-os-overskriften; indlæses nær viewporten (120px). Ord afklares én gang fra (blur 4px, opacity .7, y 24px) til klart og fuldt synligt, med (.65s) og (50ms) stagger.
- **ScrollReveal:** introduktionens 25 ord i om-os; indlæses nær viewporten (120px), opacity (.7 til 1), ingen blur eller rotation, ordvis fade med smoothing (.4), frem til (bottom 50%). Teksten forbliver et afsnit og læsbar under forløbet.
- **Magnet:** kun hovedhandlingerne i hero og formular. Museforskydning begrænses til (5px) i hero og (4px) i formular, med spring (stiffness 190, damping 30, mass 1). Touch ignoreres, og reduced motion giver statiske handlinger.

Den officielle Magic UI Marquee leverer stadig billedstribens to gentagelser med `aria-hidden` på dubletter. Den automatiske CSS-animation er slået fra med `animation:none!important`; GSAP flytter striben (xPercent −30, scrub 1) gennem turen fra (top bottom) til (bottom top). Den står stille uden scroll. Afstand er (18px), mobil (12px); de tilbageværende duration-variabler styrer ikke en autoplay-løkke. Der er derfor ingen pausekontrol. Reduced motion fjerner animationer og transitions og bevarer statisk indhold og handlinger. CSS-easing er `cubic-bezier(.22,1,.36,1)`.

## Do's and Don'ts

### Do:
- **Do** brug de aktuelle charcoal-, hvid- og gultokens med tydelig kontrast mellem tekst og flade.
- **Do** brug Barlow Condensed til statements og Manrope til læsning; bevar logoets konturerede SVG.
- **Do** lad rækker, billeder og typografi ombryde til mobil uden tab af indhold eller hele ord.
- **Do** behold mindst 44 px betjeningsmål, synligt fokus, native disclosures og synlig servertekst.
- **Do** beskriv visuelle koncepter i almindelig introduktion, dokumentér billedkilder separat og bevar reduced motion.

### Don't:
- **Don't** genindføre den afviste papir/rød-retning eller gøre fotografiets koboltblå til en ny interfaceaccent.
- **Don't** indføre dekorative eyebrows, generiske kortgitter eller svævende skygger i dette system.
- **Don't** sætte Instrument Sans som tredje tekstfont; logoet er et grafisk aktiv.
- **Don't** genindføre dekorative linkpile, lange dekorative linklinjer, firkantede CTA-bokse, små AI-/konceptfodnoter eller pause-/play-kontrol.
- **Don't** opfinde kundebeviser, stifterportrætter eller designgodkendelser, og lad ikke animation bære nødvendig information.
