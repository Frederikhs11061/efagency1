---
name: EF Agency
description: Et åbent redaktionelt klippebord til korte videoer.
colors:
  paper: "#f3f1eb"
  ink: "#20211f"
  muted: "#62635c"
  line: "#d5d4cb"
  accent: "#c63e2d"
  accent-hover: "#ad3325"
  cream: "#fffefa"
typography:
  display:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "clamp(80px, 10.2vw, 160px)"
    fontWeight: 500
    lineHeight: 0.97
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "clamp(40px, 4.7vw, 72px)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "clamp(24px, 2.2vw, 32px)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.3
rounded:
  square: "0px"
  tag: "30px"
  circle: "50%"
spacing:
  section: "clamp(80px, 9.2vw, 144px)"
  gutter-desktop: "56px"
  gutter-tablet: "36px"
  gutter-mobile: "20px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "15px 21px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "15px 21px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
  contact-submit:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "8px 22px"
  contact-submit-hover:
    backgroundColor: "{colors.paper}"
  contact-field:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.square}"
    padding: "12px 0"
  service-tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "4px 9px"
  package:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "30px"
---

# Design System: EF Agency

## Overview

**Creative North Star: "Et åbent redaktionelt klippebord"**

Varmt, åbent redaktionelt design med store groteske overskrifter, filmisk fotografi og varm rød som klippemarkør. Papir, blæk og luft bærer læsningen; mørke billedsektioner og en rød kontaktflade giver tydelige skift i rytmen.

Verdenen er implementeret i kode efter ejerens delegering uden interview. Dokumentet registrerer den lokale implementering, ikke en kundegodkendt komposition. Frontmatter er de normative, genbrugte tokenværdier; størrelsernes responsive afvigelser beskrives nedenfor.

**Key Characteristics:**
- Åbne flader og tynde skillelinjer frem for svævende kort.
- Instrument Sans til store overskrifter; Manrope til læsning og betjening.
- Fotografiske koncepter med tydelig mærkning og præcise formatmarkører.
- Synlig servertekst og bevægelse som en progressiv forbedring.

Dokumentationsgrundlag: `PRODUCT.md`, `src/app/globals.css` (inklusive de afsluttende overrides), layout, forside og repræsentative komponenter. `.impeccable/review/desktop.png` og `mobile.png` er lokale kritikreferencer. Dokumentationen er ikke en kvalitetsgodkendelse. Der findes ingen godkendt ekstern QUALITY BAR-card eller comp.

Begrænsninger: lokalt og upubliceret; formularen åbner et mailudkast og sender ikke selv. Reelle cases, portrætter og afklarede virksomheds-/pris-/moms-/domæneoplysninger foreligger ikke. Ingen af disse huller er visuelle systemregler eller påstået løst her.

## Colors

Én varm accent møder et let varmt neutralt spektrum. Værdierne i frontmatter følger CSS direkte. Sidecarens otte-trins farveramper er syntetiske panelprøver, ikke yderligere CSS-tokens.

### Primary

- **Klipperød** (`accent`): handlinger, udvalgte overskriftsord, proceslinje og den store kontaktflade.
- **Dyb klipperød** (`accent-hover`): primære knappers hovertilstand.

### Neutral

- **Papir** (`paper`): hovedbaggrund og navigation.
- **Blæk** (`ink`): læsetekst og mørk konceptsektion.
- **Dæmpet blæk** (`muted`): forklarende tekst på lyse flader.
- **Papirkant** (`line`): skillelinjer og lys sekundær tekst på mørke flader.
- **Creme** (`cream`): omvendt tekst, pakkeflade, formularstreger og 9:16-rammens hjørner.

**The One Accent Rule.** Brug den varme røde som systemets eneste accent; store røde flader er tilladt i kontaktsektionen.

## Typography

**Display Font:** Instrument Sans med sans-serif fallback, selvhostet.
**Body Font:** Manrope med sans-serif fallback, selvhostet.

**Character:** To rene grotesker med tæt overskriftssats og rolig brødtekst. Ingen særskilt monospace- eller labelfont.

- **Display:** Heroens grundrolle står i frontmatter; ved 1150 px bliver den `clamp(80px,9.4vw,130px)`, ved 850 px `clamp(84px,13vw,120px)`, ved 600 px `clamp(57px,13.45vw,81px)` med linjehøjde 1.02, og ved 360 px `clamp(48px,13.6vw,57px)`. Hele ord bevares.
- **Headline:** Sektionstitler bruger den angivne clamp. Mobil bruger overvejende 42 px / 1.07 og 37 px på de smalleste skærme; kontakt og juridiske sider har egne størrelser.
- **Title:** Den angivne grundrolle har lokale variationer til service-, pakke- og procesoverskrifter.
- **Body:** Grundsatsen er frontmatterens body. Forklarende hovedtekst er 16 px efter læsbarhedsrettelserne; udvalgt mobiltekst er 15 px, pakkelister 14 px. Afsnit er højst 65ch; flere sektioner bruger smallere mål.
- **Label:** Knappens labelrolle er angivet i frontmatter. Navigation er 14 px, mens faktiske metadata varierer mellem 10 og 13 px; de små mål er ikke en anbefalet brødtekstskala.

**The Whole Word Rule.** Lad overskrifter skalere og ombryde mellem ord; undgå brud midt i ord.

## Layout

Den åbne container er højst 1480 px. Grundgutter er 56 px pr. side, 36 px under 1150 px, 20 px under 600 px og 16 px under 360 px. Sektionernes vertikale luft bruger section-tokenet og bliver 80 px på mobil.

Desktop kombinerer stor hero med smal tekstkolonne, asymmetriske billedpar og åbne lister. Heroen bliver én kolonne under 850 px. Under 600 px følger handlingerne teksten før billedet, billeder og indhold stabler, og procesoverskriften er statisk. Pakker går fra tre kolonner til vandrette pakker under 850 px og til lodrette kort under 600 px. Sticky navigation er 94 px, 80 px under 850 px og 75 px under 600 px.

## Elevation & Depth

Fladerne er flade; billedbeskæring, tonal kontrast og skillelinjer skaber dybde. Den eneste anvendte skygge er en svag `0 4px 16px #20211f12` under den runde bevægelseskontrol. Den er ikke en generel kortskygge.

**The Flat Surface Rule.** Skab struktur med luft, farveflader og linjer; kort og indhold får ikke kontrolknappens skygge.

## Shapes

Billeder, knapper, formularer og pakkecontainere har skarpe hjørner. Små servicetags er pilleformede; bevægelseskontrollen og små prikker er cirkulære. En deklareret 12 px-radius er ikke anvendt som gennemgående form og er derfor ikke en normativ radius her. Den fotografiske scene har en centreret 9:16-ramme med cremefarvede hjørnestreger, ikke en fuld rød kant.

## Components

### Buttons

Rene, rektangulære handlinger. Primær og outline bruger frontmatterens farver og padding, mindst 54 px højde og 20 px afstand til pilen. Outline har en tynd blækkant og vender til blæk/creme på hover. Primær bliver dybere rød. Pilens hoverflyt er 3 px mod øverste højre hjørne. Globalt tastaturfokus er en 2 px kontur i tekstfarven med 5 px afstand. Mobil og pakkeknapper har dokumenterede lokale størrelser.

Kontaktknappen bruger den enkle installerede shadcn Button med stedets skarpe creme/blæk-tilpasning, 52 px minimumshøjde og 55 px på mobil. Bibliotekets ubrugte varianter er ikke en del af dette systems repertoire.

### Chips

Små serviceord med tynd papirkant, tag-radius og kompakt padding. De er metadata, ikke interaktive filtre; ingen valgt tilstand findes.

### Cards / Containers

Pakkernes tre sammenhængende felter har fælles tynd kant og indvendige skillelinjer. Den sidste pakke er blæk med cremefarvet tekst. Ingen kortskygge. Konceptartikler består af reelle fotografier, tydelig konceptmærkning, tekst og en native disclosure; de udgiver sig ikke for kundecases.

### Inputs / Fields

Transparente felter på den røde kontaktflade med cremefarvet tekst og én bundlinje. Ingen flydende label; synlige labels bliver stående. Mobilfelter har 16 px tekst. Fokus bruger global kontur. Native required/type/minLength suppleres af validering og en statusbesked; der findes ikke et særskilt visuelt fejlfarvesystem.

### Navigation

Papirfarvet sticky header med typografisk ordmærke. Desktoplinks har en indtrækkende understregning på hover. Under 600 px åbner en 44 px menuknap en række store tekstlinks; Escape lukker og genskaber fokus. En no-script-navigation findes. Bevægelseskontrollen er fast placeret i navigationsbåndet, 44 px, med tooltip og pause-/afspiltilstand.

### The editorial frame and motion

Heroens typografi er en server/CSS-adapter af React Bits BlurText: ordsplittet markup, synlig tekst, 70 ms stagger og 0.8 s vertikal ankomst uden blur. Der kører ingen React Bits runtime-animation.

En deferred Engine indlæser Lenis og GSAP efter første wheel-, touch-, scroll- eller tastaturinteraktion. Lenis bruger varighed 1.05 og GSAP-ticker. GSAP-reveals flytter synligt indhold 34 px over 0.85 s; fra 900 px får filmfoto og produktfoto parallax, 9:16-rammen går fra scaleX 1.8 til 1, og proceslinjen følger scroll.

Den officielle Magic UI Marquee er server-renderet med CSS-animation, 45 s varighed, gentagelser skjult for skærmlæsere og pause ved hover. Pausekontrollen stopper marquee og scrollmotor; den er ikke en stopknap for den særskilte brugerstartede konceptsekvens. Sekvensen har egen stopknap og slutter efter 5.4 s. Reduced motion slår CSS-animationer, Lenis og GSAP fra og lader alt indhold stå synligt. Ingen WebGL eller automatisk video.

## Do's and Don'ts

### Do:

- Do brug papir og blæk som læseflade og varm rød til betoning og handling.
- Do behold store overskrifter hele og læsbare på små skærme.
- Do mærk koncepter og illustrationsfotos tydeligt, indtil reelt kundearbejde findes.
- Do bevar servertekst, tastaturfokus, brugerens pausevalg og reduced motion.

### Don't:

- Don't indføre gradienter, dekorative småoverskrifter eller monospace-kostume.
- Don't opfinde kundebeviser, portrætter, priser eller tidligere designgodkendelser.
- Don't gøre de runde tags og bevægelseskontrollen til en generel rund kortstil.
- Don't gøre desktop-parallax nødvendig for forståelsen af indholdet.

<!-- Den oprindelige fembloks retningskontrakt bevares ordret nedenfor. -->

## THESIS
EF Agency redigerer kundens råmateriale til korte, forståelige fortællinger. Siden skal gøre det håndværk synligt og føre en virksomhedsejer fra interesse til en konkret samtale.

## OWN-WORLD
Et åbent redaktionelt klippebord: papirfarvet grund, blæk, én varm rød, store groteske overskrifter og fotografi med præcise 9:16-udsnit. Ingen dekorative småoverskrifter eller opdigtet proof. Filmiske detaljer bruges til at vise format, ikke til at simulere en kompliceret redigeringsapp.

## STORY
Kortvideoer og kontakt i første skærm → klippebordets formatbevægelse → tre konkrete ydelser → to tydeligt mærkede konceptretninger → proces → pakker → stiftere → spørgsmål → direkte kontakt. Koncepter erstattes med rigtige cases, når de faktisk findes.

## FIRST VIEWPORT
Stor tolinjet overskrift, kort forklaring og tydelig kontaktknap. Desktop har panorama under teksten; mobil får begge handlinger før billedet. Signatur: det brede optagebillede får en scrollstyret 9:16-ramme på desktop. Global bevægelseskontrol bor i den faste navigation og dækker ingen contentknap.

## FORM
Kodebaseret implementering, udtrykkeligt delegeret af ejeren, uden ekstra valg- eller godkendelsesrunde. Ingen godkendt komposition eller ekstern QUALITY BAR-card foreligger; det må ikke fremstilles som en tidligere kundegodkendelse. Den første reelle desktop- og mobilrender i .impeccable/review er kodeforløbets visuelle kritikreference, ikke en ekstern standard. Det målbare ambitionsniveau er manualens læsbarhed, reelle billeder, konsistente tokens, mobilfit, originalt layout og tydelig motion med reduceret alternativ.

Impeccable concept-seed blev kørt efter PRODUCT.md. Den faktiske outputlog findes i arbejdsmaterialet work/design-roll.txt i chatmappen (seed:45d907858c4561f9). En anden roll.json er ikke i sig selv en ejergodkendt retning. Referencer om processens form må aldrig tilsidesætte ejerens direkte instruktion om at bygge uden spørgsmål.
