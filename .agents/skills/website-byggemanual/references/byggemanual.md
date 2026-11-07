BYGGEMANUAL
Hurtige, sikre og SEO-klare hjemmesider
En komplet instruks til en AI-udvikler om at bygge professionelle, server-renderede hjemmesider for små og mellemstore virksomheder – fra opstartsinterview til lancering. Med stærk teknik, lokal SEO, dansk lovgivning, et design, der ikke ligner AI, og animationer, der får siden til at føles levende.
Til: AI-udvikleren (Claude, ChatGPT, Gemini, Cursor eller lignende – det er underordnet, hvilket værktøj der bygger). Sendes direkte som prompt af projektejeren – der skal ikke udfyldes noget på forhånd.
Version 1.2 · oktober 2026 · Baseret på erfaringerne fra Kystnord.dk

INSTRUKS TIL AI-UDVIKLEREN – LÆS DETTE FØRST
Dette dokument er din opgavebeskrivelse. Projektejeren har sendt det til dig for at få bygget en hjemmeside. Der følger ingen udfyldt brief – den samler du selv.
1. Byg ikke noget endnu. Læs hele dokumentet og det, ejeren eventuelt har skrevet i prompten eller vedhæftet (logo, mockup, billeder, links).
2. Dit første svar er runde 1 af opstartsinterviewet i kapitel 3. Stil kun spørgsmål, der ikke allerede er besvaret.
3. Når alle runder er besvaret: skriv docs/BRIEF.md og docs/STRUKTUR.md (kapitel 3.10 og 6.3), send et kort resumé og vent på "godkendt".
4. Byg derefter efter kapitel 4–14, og verificér med tjeklisten i kapitel 15, før noget kaldes færdigt.
5. Alle krav i dokumentet er bindende. Beder ejeren om noget, der strider mod et krav, så sig det kort, forklar konsekvensen, og lad ejeren beslutte. Ved lovkrav og sikkerhed anbefaler du tydeligt at følge kravet.
6. Værdier fra Kystnord.dk (farver, font, område, tekster) er kun eksempler. Brug dem aldrig i et nyt projekt, medmindre ejeren vælger dem.
7. Design og bevægelse er krav: Spørg i runde 7 (kapitel 3.8), om Impeccable-designskills skal bruges fra start eller til sidst, og hvilket animationsniveau siden skal have. Animationerne bygges efter kapitel 10 med Lenis, GSAP + ScrollTrigger, React Bits og Magic UI.
8. Svar på dansk, kort og præcist.

Indhold
Indhold3
1. Sådan bruges dokumentet5
Sådan starter et projekt5
Undervejs og før lancering5
Grundprincipperne i én sætning hver5
2. Arbejdsgang fra idé til lancering6
Regler for samarbejdet6
3. Opstartsinterview: spørgsmålene AI'en stiller7
3.1 Sådan gennemfører du interviewet7
3.2 Runde 1 – Virksomheden og målet7
3.3 Runde 2 – Ydelser, priser, område og kunder7
3.4 Runde 3 – Sidestruktur og hierarki8
3.5 Runde 4 – Brand og look8
3.6 Runde 5 – Indhold, billeder og tillid8
3.7 Runde 6 – Markedsføring, konti og drift9
3.8 Runde 7 – Design-skills og animationer9
3.9 Hvis ejeren har vedhæftet filer10
3.10 Skabelon: docs/BRIEF.md10
3.11 Resumé til godkendelse11
4. Teknisk fundament12
4.1 Stak12
4.2 Mappestruktur12
4.3 Server-rendering – reglerne (ingen SPA)13
4.4 Miljøvariabler og hemmeligheder13
5. Hastighed og Core Web Vitals14
Sådan opnås det14
6. SEO – klar til Google15
6.1 Teknisk SEO15
6.2 Sitemap og datoer (lastmod)15
6.3 Hierarki: planlagt struktur, og schema følger links16
6.4 Struktureret data (JSON-LD)17
6.5 Lokal SEO17
6.6 One-pager eller undersider?17
6.7 Indhold18
7. Sikkerhed19
7.1 HTTP-headere19
7.2 API-endpoints og formularer19
7.3 Øvrige regler19
7.4 Test før lancering20
8. Dansk lovgivning21
8.1 Oplysningspligt (e-handelsloven § 7)21
8.2 Markedsføringsloven21
8.3 GDPR og privatlivspolitik21
8.4 Cookies og samtykke21
8.5 Øvrige sider og hensyn21
9. Design, der ikke ligner AI23
9.1 Gør23
9.2 Undgå23
9.3 Mobil først23
9.4 Visuel kontrol – altid23
9.5 Impeccable design skills24
10. Animation og motion26
10.1 Roller – de fire værktøjer26
10.2 Beslutningsregler26
10.3 Teknisk opsætning27
10.4 Stylingprincipper28
10.5 Arbejdsgang for animation29
10.6 Tilgængelighed og hastighed30
11. Brandkonsistens31
11.1 Design tokens – én kilde31
11.2 CTA-system31
11.3 Logo31
11.4 Tone og tekst32
12. Standardopbygning af en forside33
13. Redigerbart indhold og billeder34
14. Hosting, konti og drift35
14.1 Hvem ejer hvad35
14.2 Lanceringstrin35
15. Lanceringstjekliste36
16. Kort version af kravene39
17. Ordliste41

Hvis indholdsfortegnelsen er tom i Word: højreklik på den → Opdater felt.
1. Sådan bruges dokumentet
Dokumentet er en fælles opskrift på, hvordan en hjemmeside bygges fra start til lancering. Det er skrevet til en AI som udvikler – det er underordnet, om det er Claude, ChatGPT, Gemini, Cursor eller et andet værktøj – men så projektejeren også kan forstå hvad og hvorfor. Det er generelt – ikke målrettet én kunde. Alt, der er specifikt for kunden, kommer fra opstartsinterviewet.
Dokumentet virker i ethvert AI-værktøj, der kan bygge kode (fx Claude Code, ChatGPT/Codex, Cursor eller Gemini CLI). Har værktøjet ikke adgang til filer, terminal eller GitHub, siger AI'en det med det samme og leverer i stedet koden fil for fil med de kommandoer, ejeren selv skal køre. Alt, der ikke er kørt eller målt, markeres som "ikke verificeret".
Sådan starter et projekt
Projektejeren sender dette dokument til AI'en – gerne sammen med logo, mockup, billeder eller links. Ejeren må gerne skrive løse oplysninger om projektet i samme besked, men behøver ikke.
AI'en stiller spørgsmålene i opstartsinterviewet (kapitel 3) i korte runder. Ejeren svarer frit; "ved ikke" er et gyldigt svar.
AI'en samler svarene i docs/BRIEF.md og en sideplan i docs/STRUKTUR.md og beder om godkendelse.
AI'en bygger, verificerer og leverer efter resten af dokumentet.
Undervejs og før lancering
Undervejs: Ejeren kan henvise til et kapitel, fx "følg kapitel 9 om design" eller "kør tjeklisten i kapitel 15".
Før lancering: Tjeklisten i kapitel 15 gennemgås. Intet lanceres, før alle punkter er grønne eller bevidst fravalgt af ejeren.
Grundprincipperne i én sætning hver
Spørg før du bygger: Kunden, brandet og sidestrukturen afklares i interviewet – intet gættes.
Struktur før kode: URL-hierarkiet planlægges og godkendes, før første side bygges. Menu, links, brødkrummer, sitemap og struktureret data genereres fra samme sideliste.
Server-renderet og statisk først: Al tekst står i den HTML, serveren sender – hurtigt for brugerne og let for Google og AI-crawlere at læse.
Ærlige signaler: Datoer, struktureret data og interne links må aldrig modsige hinanden eller virkeligheden.
Sandhed før salg: Ingen opdigtede tal, certificeringer, anmeldelser eller adresser. Mangler en oplysning, markeres den som mangel.
Verificér før du påstår: "Det virker" betyder, at det er set og målt – på mobil og computer.
Én kilde til alt: Firmaoplysninger, sider, farver, fonte og tekster står ét sted og genbruges overalt.
Ligner et menneske har designet det: Luft, rolig typografi, ægte billeder og få, tydelige handlinger.
Levende, men ikke larmende: Animation og scroll-effekter er et krav (kapitel 10), men som et lag oven på færdigt layout og færdig tekst – aldrig på bekostning af indhold, hastighed eller tilgængelighed.
2. Arbejdsgang fra idé til lancering
Fase
Hvad sker der
Resultat
1. Interview
AI'en stiller spørgsmålene i kapitel 3 i runder. Sidestruktur og URL-plan besluttes (kapitel 6.3 og 6.6). Afklar om der skal køres annoncer (kræver cookiebanner), og hvordan design-skills og animation skal bruges (runde 7).
Godkendt docs/BRIEF.md og docs/STRUKTUR.md
2. Design
Farver, fonte, logo-varianter og CTA-system fastlægges som design tokens ud fra interviewet (kapitel 11). Mockup bruges som retning, ikke som facit. Er Impeccable valgt fra start, sættes det op her (kapitel 9.5).
Design tokens og sektionsplan
3. Byg
Next.js-projekt sættes op (kapitel 4). Sidelisten (src/lib/pages.ts) oprettes først. Indhold lægges i indholdsfiler, som kan redigeres uden kode. Er Impeccable valgt til sidst, køres det derefter som eget trin, og til sidst bygges animationslaget (kapitel 10) – hver del i egne commits.
Kørende side lokalt
4. Verificér
Visuel gennemgang ved alle bredder, lint, typecheck, build, linktjek, HTML-test med curl, sitemap- og schema-tjek, Lighthouse, sikkerhedstest af formularer og animationstjek (kapitel 10.6).
Dokumenteret kvalitet
5. Lancering
Domæne, e-mail-afsender, miljøvariabler, Search Console og Google Business Profile (kapitel 14).
Siden er live og indekseres
6. Drift
Indhold opdateres via redigeringsværktøjet (med ny "Sidst opdateret"-dato på ændrede sider), afhængigheder holdes opdateret, målinger følges.
Siden holdes sund

Regler for samarbejdet
AI'en committer og pusher til GitHub (hvis værktøjet har adgang), når en opgave er færdig og verificeret – aldrig halvfærdigt arbejde.
Store eller svært reversible ændringer (fx farvesystem eller URL-struktur) lægges i deres egen commit, så de kan fortrydes med ét git revert. Det gælder også et Impeccable-pass og animationslaget (kapitel 9.5 og 10).
Hver leverance afsluttes med en kort status: hvad er lavet, hvad er verificeret, og hvad mangler stadig (fx CVR eller billedrettigheder).
Beslutninger, der er truffet (fx "one-pager" eller URL-planen), genforhandles ikke uopfordret.
Kommunikation foregår på dansk, kort og præcist.
3. Opstartsinterview: spørgsmålene AI'en stiller
Ejeren udfylder ikke noget på forhånd. AI'en indsamler alt, der skal bruges, ved at stille spørgsmålene nedenfor. Svarene bliver til projektets brief (docs/BRIEF.md) og sideplan (docs/STRUKTUR.md), som resten af arbejdet bygger på.
3.1 Sådan gennemfører du interviewet
Læs først, spørg bagefter. Har ejeren skrevet noget i prompten eller vedhæftet filer, så brug det. Spørg ikke om det, der allerede er besvaret – bekræft det i stedet kort ("Jeg har noteret …, er det korrekt?").
Én runde ad gangen. Stil én runde pr. besked, højst ca. 8 spørgsmål, nummereret som i dette kapitel (fx 2.3), så ejeren kan svare "2.3: …". Spring spørgsmål over, der ikke er relevante for projektet.
Skriv spørgsmålene i et letforståeligt sprog. Ejeren er ikke nødvendigvis teknisk. Forklar kort, hvorfor et spørgsmål betyder noget, når det ikke er indlysende.
Giv forslag, men beslut ikke. Er ejeren i tvivl (fx om farver eller sidestruktur), så giv 2–3 konkrete forslag med en anbefaling. Ejeren vælger.
"Ved ikke" og "senere" er gyldige svar. Markér feltet MANGLER i briefen og byg videre. Gæt aldrig.
Lovpligtige oplysninger er markeret (lov). Mangler de ved lancering, skal det stå tydeligt i statusrapporten.
Opfølgning: Er et svar uklart eller modsiger et andet, så spørg kort igen i næste runde.
Runde 7 er altid med: Spørg om Impeccable-timing og animationsniveau, også selvom ejeren ikke selv nævner dem. De to valg afgør, hvordan resten af siden bygges.
Afslutning: Efter sidste runde skriver du docs/BRIEF.md (skabelon i 3.10) og docs/STRUKTUR.md (kapitel 6.3), sender et resumé (3.11) og venter på "godkendt", før du bygger.
3.2 Runde 1 – Virksomheden og målet
Hvad hedder virksomheden, som den skal stå på hjemmesiden – og hvad er det registrerede navn i CVR? (lov)
Hvad er CVR-nummeret? (lov)
Hvad er virksomhedens fysiske adresse, og må den vises på siden? En enkeltmandsvirksomheds adresse er ofte ejerens privatadresse – den skal alligevel vises efter loven. (lov)
Hvilken e-mail og hvilket telefonnummer skal kunderne bruge? (e-mail er lov)
Hvem står bag virksomheden? Fortæl kort om personen: baggrund, erfaring, og hvorfor virksomheden blev startet.
Hvad sælger virksomheden – kort fortalt – og sælger I til private, erhverv eller begge?
Hvad er den vigtigste handling, en besøgende skal foretage: ringe, udfylde en formular, booke tid eller købe?
Har I en hjemmeside eller et domæne i dag? Hvis ja: hvilken adresse? (Gamle sider skal videresendes, så I ikke mister placeringer i Google.)
3.3 Runde 2 – Ydelser, priser, område og kunder
Hvilke ydelser tilbyder I? Skriv dem alle – gerne grupperet, fx "Have", "Vedligehold", "Tilsyn".
Hvilke ydelser tjener I mest på, eller vil I gerne have flere af?
Hvad koster ydelserne for private – timepris, pakkepris eller "fra"-pris inkl. moms? Hvad er inkluderet (fx kørsel)? (lov: priser til private skal stå inkl. moms)
Hvad er jeres åbningstider eller svartid? Kun de reelle – de bruges også i Google.
Hvilket område dækker I primært (typisk én kommune)? Hvilke byer kører I faktisk til – og er der områder, I ikke dækker?
Hvem er jeres typiske kunde? Beskriv 1–3 kundetyper, fx "sommerhusejer fra Tyskland" eller "travl børnefamilie".
Hvilke 2–3 konkurrenter eller lignende virksomheder kender I? Links er nok.
3.4 Runde 3 – Sidestruktur og hierarki
Strukturen besluttes nu, fordi den er svær at ændre senere uden at miste placeringer i Google. Forklar kort forskellen på en one-pager og undersider (kapitel 6.6), før du stiller spørgsmålene.
Skal siden være én lang side (one-pager) eller have en underside pr. ydelse? Min anbefaling ud fra jeres svar er: … (giv en anbefaling).
Er der ydelser, som folk søger direkte efter på Google, eller som I vil køre annoncer for? De bør have deres egen side.
Forventer I at tilføje sider senere – fx blog/nyheder, referencer/cases, flere ydelser eller jobopslag? (Pladsen i URL-strukturen planlægges nu.)
Er der sider, der ikke skal findes i Google, men stadig skal kunne tilgås (fx en side kun til eksisterende kunder)?
Efter svarene foreslår AI'en en konkret URL-plan (se kapitel 6.3) med sidetype, H1 og forælder for hver side og beder ejeren godkende den.
3.5 Runde 4 – Brand og look
Har I et logo? Send det gerne som SVG eller transparent PNG (mindst 2000 px bredt). Findes der en lys og en mørk version?
Har I faste farver (hex-koder)? Hvis ikke: hvilke farver forbinder I med virksomheden – eller hvilke vil I undgå?
Har I faste skrifttyper? Hvis ikke: skal udtrykket være moderne, klassisk, robust/håndværkeragtigt, eksklusivt eller noget helt andet?
Hvilke 3 ord skal en besøgende tænke om jer efter 5 sekunder på siden? (fx "lokal, pålidelig, hurtig")
Hvilke 2–3 hjemmesider (gerne fra helt andre brancher) kan I godt lide – og hvad ved dem?
Er der noget, I ikke vil have – farver, stilarter, ord eller billedtyper?
Hvordan skal teksten tale: "du" eller "De", uformel eller formel, må der være humor?
Har I et slogan eller en fast vending, og findes der materialer, siden skal ligne – fx visitkort, bilreklame, skilte eller arbejdstøj?
3.6 Runde 5 – Indhold, billeder og tillid
Skal AI'en skrive teksterne ud fra jeres svar, eller har I selv tekster, der skal bruges?
Har I egne billeder af jer selv, jeres arbejde, biler eller lokalområdet? Hvem har taget dem, og må de bruges på nettet og i annoncer? Har genkendelige personer givet lov?
Har I certificeringer, autorisationer, forsikringer eller garantier? Kun det, der kan dokumenteres, kommer på siden.
Har I anmeldelser – og hvor (Google, Trustpilot, Facebook)? Må de vises?
Hvilke 5–8 spørgsmål stiller kunderne jer oftest? (De bliver til FAQ på siden og i Google.)
Er der tal, I gerne vil fremhæve – fx år i branchen eller antal kunder? Kun sande tal.
3.7 Runde 6 – Markedsføring, konti og drift
Skal der køres annoncer på Meta (Facebook/Instagram) eller Google? Så kræver siden et cookiebanner. Har I et pixel-ID?
Hvilke sociale profiler har I? (Links)
Har I en Google Business Profile (virksomhedsprofil på Google Maps)?
Hvem ejer domænet, og hvor ligger DNS og e-mail i dag?
Hvem skal eje konti til hosting (Vercel), kode (GitHub) og e-mail-afsendelse (Resend)? Anbefaling: kunden ejer, udvikleren er medlem (kapitel 14).
Hvem skal redigere tekster og billeder fremover?
Er der en deadline eller en dato, siden skal være klar til?
3.8 Runde 7 – Design-skills og animationer
Runden afklarer, hvordan designet løftes, og hvor meget bevægelse siden skal have. Forklar begreberne i et letforståeligt sprog (se ordlisten i kapitel 17).
Vil I have designet løftet med Impeccable-designskills (kapitel 9.5)? Det er et sæt AI-skills, der får siden til at ligne menneskeværk i stedet for standard-AI. Skal de bruges fra start (designet formes efter dem fra første sektion) eller til sidst (siden bygges først, og Impeccable køres bagefter som et selvstændigt trin, der let kan fortrydes)? Min anbefaling ud fra jeres svar er: ... (giv en anbefaling – fx til sidst, hvis I har logo, farver eller mockup; fra start, hvis designretningen mangler).
Skal Impeccable bruges på hele siden eller kun på udvalgte sektioner, fx forsiden og hero?
Hvor meget bevægelse skal siden have? Afdæmpet (bløde fade-ins og tællende tal), normal (tekst- og baggrundseffekter i hero) eller fuld (scroll-effekter som pin, parallax og animerede baggrunde, se kapitel 10.4)? Animation er standard i dette dokument. Vælger ejeren den helt fra, forklares konsekvensen: siden virker mere statisk.
Hvilke sektioner skal have mest liv – hero, ydelser, tal, referencer/logoer eller CTA? (Giv et forslag ud fra sidelisten i 3.4 og forsidens opbygning i kapitel 12.)
Skal animationerne være de samme på mobil, forenklede eller slået fra? Min anbefaling er forenklede på mobil, så siden forbliver hurtig.
Har I set animationer eller hjemmesider, I godt kan lide – eller bevægelser, I ikke vil have? Links er nok.
Må der installeres Impeccable-skills og Magic UI's MCP-server i AI-værktøjet eller projektet? Det ændrer værktøjets opsætning, ikke hjemmesiden, og kan fjernes igen.
Svarene skrives i BRIEF.md under "Design-skills og animation" (3.10) og bruges til animationstabellen i kapitel 10.5.
3.9 Hvis ejeren har vedhæftet filer
Logo: Tjek format og opløsning. Er det kun JPG eller lille, så sig det og spørg efter original.
Mockup eller skitse: Brug som retning for layout og stemning, ikke som facit. Påpeg, hvis mockuppen bryder krav i kapitel 9 (fx tekst oven på billeder uden kontrast).
Billeder: Spørg ind til rettigheder (3.6, spørgsmål 2), før de bruges.
3.10 Skabelon: docs/BRIEF.md
Skriv svarene ind i denne skabelon. Felter uden svar skrives som MANGLER – aldrig som et gæt.
# Brief – <firmanavn>
Godkendt af ejer: <dato> | Sidst ændret: <dato>
 
## Virksomhed
- Navn på siden: …            - Registreret navn i CVR (lov): …
- CVR (lov): …                - Adresse (lov): …  Vises: ja
- E-mail (lov): …             - Telefon: …
- Ejer og historie: …
- Kunder: private / erhverv / begge
- Vigtigste handling: ring / formular / booking / køb
- Nuværende domæne og gamle URL'er: …
 
## Ydelser, priser og område
- Ydelser (grupperet): …      - Vigtigste ydelser: …
- Priser inkl. moms og hvad der er inkluderet: …
- Åbningstider / svartid: …
- Primært område: …  Byer: …  Dækkes ikke: …
- Kundetyper: …               - Konkurrenter: …
 
## Sidestruktur
- One-pager / undersider. Se docs/STRUKTUR.md
- Planlagte sider senere: …
 
## Brand
- Logo: filer og varianter     - Farver (hex): …
- Fonte: …                    - 3 ord: …
- Inspiration: …              - Undgå: …
- Tone: du/De, formel/uformel, humor
- Slogan og eksisterende materialer: …
 
## Design-skills og animation
- Impeccable: fra start / til sidst (egen branch) / nej
- Impeccable-omfang: hele siden / udvalgte sektioner: …
- Animationsniveau: afdæmpet / normal / fuld / fravalgt af ejer
- Sektioner med mest liv: …
- Mobil: forenklet / som desktop / uden animation
- Animationer ejeren kan lide / ikke vil have: …
- Må installere skills og MCP (Impeccable, Magic UI): ja / nej
 
## Indhold og tillid
- Tekster skrives af: …       - Billeder og rettigheder: …
- Dokumenterede tillidsfaktorer: …
- Anmeldelser: …              - FAQ-spørgsmål: …
 
## Markedsføring og drift
- Annoncer: Meta / Google / nej   - Pixel-ID: …
- Sociale profiler: …        - Google Business Profile: …
- Domæne/DNS/e-mail: …        - Kontoejere: …
- Redaktør fremover: …        - Deadline: …
 
## Mangler
- <liste over alt, der står som MANGLER, med (lov) markeret>
3.11 Resumé til godkendelse
Når briefen og sideplanen er skrevet, sender AI'en et kort resumé i dette format og bygger først, når ejeren har svaret "godkendt" (eller rettet):
Brief og sideplan er klar (docs/BRIEF.md, docs/STRUKTUR.md).
 
Virksomhed: … | Område: … | Vigtigste handling: …
Sider: / (forside), /<ydelse-1>, /<ydelse-2>, …
Look: <farver>, <font>, <3 ord>
Design: Impeccable <fra start / til sidst / nej> | Animation: <afdæmpet / normal / fuld>
Mangler: <liste> – heraf lovpligtigt: <liste>
 
Skriv "godkendt", eller ret det, der skal ændres.
4. Teknisk fundament
4.1 Stak
Del
Valg
Hvorfor
Framework
Next.js (nyeste stabile), App Router
Server Components, statisk generering, billedoptimering og fonte indbygget.
Sprog
TypeScript i strict mode, ingen any
Fejl fanges, før de rammer brugerne.
Styling
Tailwind CSS med design tokens i konfigurationen
Konsistente farver og afstande ét sted.
Komponenter
shadcn/ui (via CLI), Magic UI og React Bits
Færdige komponenter kopieres ind som kildekode i projektet – ingen eksterne scripts.
Animation
Lenis, GSAP + ScrollTrigger, motion (kapitel 10)
Blød scroll, scroll-koreografi og effekter med klare roller.
Design-skills
Impeccable (timing vælges i runde 7)
Design, der ikke ligner standard-AI (kapitel 9.5).
Validering
Zod – samme skema på klient og server
Ens regler, og ukendte felter afvises.
Indhold
JSON-filer valideret ved build + Keystatic (lokal redigering)
Tekst og billeder kan skiftes uden kode.
Sideliste
src/lib/pages.ts – én liste over alle sider
Menu, links, brødkrummer, sitemap og schema kommer fra samme kilde.
Kvalitet
ESLint (flat config), Prettier-stil, npm audit
Ens kode og ingen kendte sårbarheder.
Hosting
Vercel, deploy ved push til main
Hurtigt CDN, HTTPS og preview-links automatisk.
E-mail
Resend (eller tilsvarende) med verificeret domæne
Formularer lander i indbakken, ikke i spam.
Rate limiting
Upstash Redis (serverless)
Beskytter formularer mod misbrug på tværs af servere.

4.2 Mappestruktur
content/                 Redigerbart indhold (JSON) – tekster, ydelser, firmaoplysninger
public/images/           Billeder + CREDITS.json (kilde og licens for hvert billede)
src/app/                 Sider, layout, API-routes, robots.ts, sitemap.ts
src/components/ui/       Små genbrugelige dele: Button, Field, SectionHeading, Icons
src/components/features/ Sektioner: Header, Hero, Services, Contact, Footer …
src/components/motion/   Animation (kapitel 10): MotionProvider, ScrollReveal m.fl.
src/lib/                 pages.ts (sideliste), indholdsskemaer, SEO/JSON-LD, validering,
                         rate limit, sikkerhed
scripts/                 check-links.mjs, check-html.mjs, check-seo.mjs (kapitel 4.3 og 6)
docs/                    BRIEF.md, STRUKTUR.md, INDHOLD.md (redigering),
                         BILLEDER.md, ANIMATION.md
.env.example             Liste over miljøvariabler – uden rigtige værdier
4.3 Server-rendering – reglerne (ingen SPA)
En side, hvor indholdet først bliver bygget af JavaScript i browseren (en single page application, SPA), risikerer at falde ud af Google, og mange nye crawlere – også AI-crawlere som GPTBot, ClaudeBot og PerplexityBot – kører slet ikke JavaScript. Derfor gælder:
Alle sider er Server Components som udgangspunkt og genereres statisk ved build (force-static), når indholdet ikke ændrer sig pr. besøg.
Kun komponenter, der kræver browser-interaktion (menu, formular, cookiebanner, animation), er Client Components – og de holdes små. Tekst sendes til dem som props fra serveren, så den står i HTML.
Animation og server-rendering: Animationskomponenter er Client Components, men de server-renderes stadig, så teksten står i det første HTML-svar. Tekst må aldrig først blive til via en animation, og den skal kunne læses uden JavaScript. Deler en tekstkomponent teksten i spans (fx pr. ord eller bogstav), skal check-html.mjs sammenligne teksten, efter at tags er fjernet – den skal stadig stå i det rå svar (se 10.6).
Forbudt: 'use client' i page.tsx eller layout.tsx, indhold hentet med useEffect/fetch i browseren, klient-routing til indhold (fx React Router), next/dynamic med ssr: false til synligt indhold, og tekst, der kun indsættes af JavaScript efter indlæsning.
Al vigtig tekst – H1, alle H2, ydelser, priser, FAQ-svar, navn, adresse og telefon – skal stå i det første HTML-svar fra serveren.
"Står i DOM'en" er ikke det samme som "står i HTML". Kan teksten ses i browserens udviklerværktøjer, men ikke i svaret fra curl, er den bygget af JavaScript. Det løses ikke ved at bede om "at gøre siden til HTML" – komponenten skal skrives om til en Server Component.
Indholdet valideres ved build. En fejl i en indholdsfil stopper bygningen med en dansk fejlbesked, så en fejl aldrig når ud på siden.
Pladsholdere som {telefon} og {timepris} bruges i tekster, så en ændring kun skal laves ét sted.
Obligatorisk test før hver leverance
Byg en produktionsversion og hent hver side i sitemap.xml uden JavaScript. Et script (scripts/check-html.mjs) gør det automatisk og fejler, hvis en forventet tekst mangler:
npm run build && npm start
 
# For hver URL i sitemap.xml:
curl -s http://localhost:3000/<side> | grep -c "<sidens H1-tekst>"   # skal give 1
 
# Scriptet tjekker for hver side, at det rå HTML-svar indeholder:
#   præcis én <h1>, alle H2-overskrifter fra indholdsfilen, FAQ-svarene,
#   firmanavn, telefon og (hvis den findes) adresse.
Tjek desuden mindst forsiden og én underside i browseren med JavaScript slået fra: al tekst skal kunne læses, og alle links skal virke.
4.4 Miljøvariabler og hemmeligheder
Hemmeligheder (API-nøgler, tokens) ligger kun i .env.local lokalt og i Vercels miljøvariabler – aldrig i Git.
.env.example beskriver alle variabler uden værdier. .gitignore udelukker .env*.
Kun variabler med præfikset NEXT_PUBLIC_ når browseren – brug det aldrig til hemmeligheder.
Hemmeligheder logges aldrig og vises aldrig i fejlbeskeder.
5. Hastighed og Core Web Vitals
Mål
Krav
Betydning
LCP (største element vist)
Under 2,5 s på mobil
Hvor hurtigt siden føles klar.
CLS (layoutspring)
Under 0,1 – helst 0
Indhold må ikke hoppe, mens det indlæses.
INP (reaktionstid)
Under 200 ms
Klik og tryk reagerer med det samme.
Lighthouse (mobil)
Mindst 95 i alle fire kategorier
Samlet sundhedstjek.

Sådan opnås det
Billeder: Altid next/image med korrekt sizes, lazy loading under folden og preload på det største billede i toppen. Begræns kvaliteter (fx 65–72). Kildebilleder højst ca. 2000 px brede.
Fonte: Selvhostede via next/font med font-display: swap og fallback-fonte – ingen kald til Google Fonts fra browseren.
JavaScript: Så lidt som muligt. Animation sker kun med den aftalte stak i kapitel 10 (Lenis, GSAP, React Bits, Magic UI) – ingen andre animations- eller karruselbiblioteker. Animationskoden lazy-loades, og tunge WebGL-baggrunde indlæses sent og forenkles på mobil. Kan kravene i denne tabel ikke holdes, forenkles animationen. Ikoner laves som inline SVG.
Tredjeparter: Ingen scripts (pixel, chat, kort) før der er samtykke, og kun hvis de er nødvendige.
Statisk: Siden bygges som statiske filer, som Vercels CDN serverer tæt på brugeren.
Layout: Faste dimensioner på billeder og logo, så intet flytter sig (CLS = 0).
Måling: Kør Lighthouse én ad gangen mod en produktionsbuild (npm run build && npm start) med --throttling-method=devtools. Samtidige kørsler og simuleret throttling giver misvisende tal.
6. SEO – klar til Google
6.1 Teknisk SEO
Én H1 pr. side, der siger ydelse + område (fx "Tagrenovering i Aalborg"). Derefter logisk H2 → H3 uden spring.
Sidetitel 55–60 tegn og metabeskrivelse 140–155 tegn, unikke pr. side. Undgå dobbelt brandnavn i titlen.
Canonical-URL på hver side og robots.txt genereret af koden. Admin- og API-stier udelukkes i robots.txt (uden en generel "Allow: /" foran).
Semantisk HTML: header, nav, main, section, article, footer, address, dl/dt/dd til nøgletal, rigtige knapper og links.
Alt-tekster, der beskriver motivet – og aldrig påstår et sted, billedet ikke er taget.
Open Graph og Twitter-kort med et delingsbillede på 1200 × 630 px.
Interne links med beskrivende tekst. Menulinks fra undersider peger på /#sektion.
poweredByHeader slået fra, sproget sat til da og ingen brudte links (automatisk linktjek før lancering).
6.2 Sitemap og datoer (lastmod)
Google bruger lastmod i sitemap.xml til at vurdere, hvornår en side skal crawles igen – men kun så længe datoerne er troværdige. Den typiske AI-fejl er lastModified: new Date() i sitemap.ts: så får alle sider dags dato ved hvert build, også sider, der ikke er ændret. Google holder op med at stole på sitemappet, og i værste fald falder sider ud af indekset.
sitemap.ts genereres fra sidelisten (src/lib/pages.ts) og indeholder kun sider, der skal indekseres. Sider med noindex må aldrig stå i sitemap.xml.
Hver side har et felt lastUpdated (ÅÅÅÅ-MM-DD) i sin indholdsfil. Det valideres med Zod (gyldig dato, ikke i fremtiden) og er et datofelt i Keystatic med hjælpeteksten "Sæt dagens dato, når sidens tekst ændres væsentligt".
lastmod i sitemap.xml er sidens egen lastUpdated. Samme dato bruges som dateModified i sidens WebPage-schema, så sitemap og struktureret data aldrig er uenige.
Forbudt som lastmod: new Date(), Date.now(), byggetid, deploytid, filers ændringstid (ændres ved hver kloning) og git-commitdato beregnet ved build (Vercel kloner kun en del af historikken, og én commit rører ofte mange sider).
Datoen ændres kun, når sidens indhold ændres væsentligt – ikke ved stavefejl, designændringer eller kodeændringer, og aldrig på sider, der ikke er rørt.
Findes der ingen pålidelig dato for en side, udelades lastmod for den side hellere end at gætte.
changefreq og priority ignoreres af Google og må gerne udelades.
// Forkert – alle sider får dags dato ved hvert build
const lastModified = new Date();
 
// Rigtigt – hver side bruger sin egen redigerede dato
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.filter((page) => page.index).map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: content(page).lastUpdated, // fx "2026-09-16"
  }));
}
Test: Byg to gange uden indholdsændringer → sitemap.xml er identisk. Ret én sides tekst og dato, og byg igen → kun den sides lastmod er ændret.
6.3 Hierarki: planlagt struktur, og schema følger links
Får AI'en lov til at opfinde strukturen undervejs, ender URL'er, menu, brødkrummer og struktureret data med at sige forskellige ting om, hvordan siden hænger sammen – især når der er mange undersider. Modstridende signaler svækker siden i Google. Derfor planlægges strukturen først, og alt andet genereres fra den.
Før der bygges: docs/STRUKTUR.md
URL-planen skrives og godkendes i interviewet (runde 3), før første side bygges. For hver side står:
URL
Sidetype
H1
Forælder
Schema
Indekseres
/
Forside
Ejendomsservice i Jammerbugt
–
WebPage + LocalBusiness
Ja
/varmepumpeservice
Ydelse
Varmepumpeservice i Jammerbugt
/
WebPage + Service
Ja
/privatlivspolitik
Juridisk
Privatlivspolitik
/
WebPage
Nej (noindex)

Eksemplet er fra Kystnord.dk. Nye sider tilføjes kun ved først at opdatere STRUKTUR.md og derefter sidelisten.
Reglerne
Én kilde: Alle sider står i src/lib/pages.ts (URL, navn, forælder, sidetype, indekseres ja/nej). Menu, footer-links, interne links, brødkrummer, sitemap og JSON-LD genereres herfra. Ingen hardkodede sti-strenge andre steder.
Højst 3 niveauer (fx /ydelser/varmepumper/service), og hvert led i en URL skal være en rigtig side, der svarer 200. Ingen tomme mapper.
Forælder er den samme overalt: forælderen i URL'en = forrige led i brødkrummen = den side, der linkes op til = isPartOf/forælder i struktureret data.
Brødkrummer: Kun rigtige sider – aldrig #ankre (for Google er /#services bare forsiden igen). Den synlige brødkrumme og BreadcrumbList bygges af samme data. Forsiden har ingen brødkrumme.
Én entitet – ét @id: Hver ting (virksomheden, en ydelse, en FAQ) defineres ét sted, på sin kanoniske side, med et fast @id (fx https://domæne.dk/varmepumpeservice#service). Andre sider henviser til samme @id med samme name og url – de definerer den aldrig igen med et andet navn eller id.
Samme URL overalt: Den kanoniske URL, URL'en i sitemap, i interne links og i JSON-LD er identisk (samme www/uden www, samme skråstreg i slutningen).
JSON-LD må kun pege på sider i sitemap (eller eksterne profiler). En side, der er noindex eller ikke findes, må ikke optræde som url i schema.
Alt i én @graph pr. side, så enhederne kan henvise til hinanden med @id.
Automatisk tjek (scripts/check-seo.mjs)
Kører mod produktionsbuilden før hver leverance og fejler, hvis:
en URL i JSON-LD (url, item, @id uden #) ikke står i sitemap.xml,
samme @id har forskellige name eller url på to sider,
en brødkrumme indeholder et #-anker, eller dens led ikke svarer til URL-hierarkiet,
en side i sitemap svarer andet end 200, har noindex eller en canonical, der peger et andet sted hen,
lastmod i sitemap.xml er forskellig fra dateModified i sidens WebPage.
6.4 Struktureret data (JSON-LD)
Alle data samles i én @graph og følger reglerne i 6.3:
Organization og WebSite på alle sider (navn, logo, kontakt, CVR som vatID, stifter).
LocalBusiness (med den mest præcise undertype): telefon, åbningstider, prisniveau, areaServed, adresse og koordinater – kun når de findes i virkeligheden. Ydelseskataloget (hasOfferCatalog) henviser til ydelsessidernes egne Service-@id'er.
På en ydelsesside: WebPage (med dateModified og breadcrumb) + Service (sidens hovedentitet) + FAQPage, hvis der er en FAQ, + BreadcrumbList.
Test i Googles Rich Results Test og Schema Markup Validator før lancering.
6.5 Lokal SEO
Vælg ét tydeligt primært område (typisk en kommune), og vær konsekvent i titel, H1, tekster og struktureret data.
Ingen lister med bynavne i sidefod eller tekst – det ligner keyword stuffing og skader mere, end det gavner. Nævn byer naturligt, hvor de giver mening (fx i FAQ og beskrivelser).
Tjek geografien: en bugt, et landsdelsnavn og en kommune er ikke det samme. Nævn kun byer, der ligger i området.
Lav ikke én side pr. by med næsten ens tekst ("doorway pages"). Byspecifikke sider kun med reelt unikt indhold.
NAP-konsistens: Navn, adresse og telefon skal stå præcis ens på hjemmeside, Google Business Profile, Facebook og kataloger.
Google Business Profile er den vigtigste lokale faktor: rigtig kategori, serviceområde, billeder, åbningstider og løbende anmeldelser.
Servicevirksomheder uden kundebesøg kan skjule adressen i Google Business Profile, men hjemmesiden skal stadig vise den (lov).
6.6 One-pager eller undersider?

One-pager
Undersider pr. ydelse
Pris og tid
Billigst og hurtigst
Mere tid til tekst og design
SEO
God til ét område og brandsøgninger
Bedre til at rangere på hver ydelse
Annoncer
Én fælles landingsside
Målrettede landingssider pr. annonce
Vedligehold
Simpelt
Mere indhold at holde opdateret

Tommelfingerregel: Start med en one-pager for små virksomheder med begrænset budget. Tilføj undersider, når en ydelse har reel søgevolumen eller får sin egen annoncekampagne. Beslutningen træffes af ejeren i interviewet og står i STRUKTUR.md.
6.7 Indhold
Skriv til mennesker først: konkret, lokalt og uden fyldord.
Hver ydelse beskrives med hvad, for hvem og hvor.
En FAQ med rigtige spørgsmål fra kunder hjælper både brugere og søgemaskiner.
Påstande som "certificeret", "forsikret", "bæredygtigt" eller "Danmarks bedste" kræver dokumentation (se kapitel 8).
7. Sikkerhed
Sikkerheden følger OWASP Top 10. Alle krav gælder, selv på en lille side – en kontaktformular er en offentlig indgang til serveren.
7.1 HTTP-headere
Header
Indstilling
Content-Security-Policy
Streng: default-src 'self'. Tredjepartsværter tilføjes kun, når de faktisk bruges (fx Meta, når pixel-ID er sat).
Strict-Transport-Security
max-age på mindst et år, includeSubDomains – kun HTTPS.
X-Content-Type-Options
nosniff
X-Frame-Options
DENY (siden må ikke vises i iframes)
Referrer-Policy
strict-origin-when-cross-origin
Permissions-Policy
Slå kamera, mikrofon, geolokation m.m. fra.
Cross-Origin-Opener-Policy
same-origin

7.2 API-endpoints og formularer
Kun de nødvendige metoder (fx POST) – andre giver 405.
Samme oprindelse: Tjek Origin/Referer, afvis fremmede domæner (403). CORS aldrig med * på endpoints, der modtager data.
Content-Type skal være JSON (ellers 415), og kropsstørrelsen er begrænset (ellers 413).
Streng validering med Zod: typer, længder, formater – ukendte felter afvises (400).
Rate limiting pr. IP i flere vinduer (burst, time, døgn) med "strafboks" ved misbrug. Svar 429 med Retry-After-header.
Honeypot-felt mod bots: udfyldte honeypots afvises stille (botten får et normalt svar).
Fejlhåndtering: Brugeren får en venlig, generel besked – aldrig stacktraces eller interne detaljer. Logs indeholder ikke personoplysninger eller hemmeligheder.
Tekst fra formularer escapes, før den sættes ind i e-mails (ingen HTML-injektion).
7.3 Øvrige regler
Redigeringsværktøjer (fx Keystatic) kører kun lokalt. I produktion svarer deres stier 404.
Links, der kommer fra indhold (fx sociale medier), valideres: kun https og kun det rigtige domæne – så javascript:-links ikke kan snige sig ind.
Billedoptimering tillader kun egne billeder (ingen åbne remotePatterns).
npm audit før hver lancering og løbende opdatering af afhængigheder.
Ingen login eller admin på den offentlige side, medmindre det er nødvendigt – og så med rollebaseret adgang.
7.4 Test før lancering
GET  /api/kontakt                         → 405
POST fra fremmed Origin                  → 403
POST med forkert Content-Type            → 415
POST med for stor krop                   → 413
POST med ugyldige/ukendte felter         → 400
POST med udfyldt honeypot                → 200/204, men intet sendes
Mange POST-kald hurtigt efter hinanden   → 429 + Retry-After
Gyldig POST                              → 200/204 og mail modtaget
8. Dansk lovgivning
Bemærk
Kapitlet er en praktisk tjekliste, ikke juridisk rådgivning. Ved tvivl kontaktes en advokat.
8.1 Oplysningspligt (e-handelsloven § 7)
Virksomhedens navn som registreret i CVR, CVR-nummer, geografisk adresse og e-mail skal være let tilgængelige – typisk i sidefoden og på de juridiske sider.
En enkeltmandsvirksomheds adresse er ofte ejerens privatadresse. Den er offentlig i CVR, men gør ejeren opmærksom på, at den vises.
8.2 Markedsføringsloven
Priser over for forbrugere skal vises inklusive moms og andre obligatoriske afgifter (§ 6).
Alle påstande skal kunne dokumenteres – det gælder "certificeret", "forsikret", "prisgaranti", anmeldelser og tal.
Miljøpåstande som "bæredygtigt", "grønt" eller "klimavenligt" (også i logo og slogans) skal være konkrete og dokumenterede. Forbrugerombudsmanden er streng på området.
Anmeldelser må ikke være opdigtede, købte eller selektivt udvalgt på en vildledende måde.
8.3 GDPR og privatlivspolitik
Privatlivspolitik med dataansvarlig, formål, retsgrundlag, modtagere (fx e-mail-tjeneste, hosting), opbevaringstid og de registreredes rettigheder.
Kontaktformularen indsamler kun det nødvendige. Henvisning til privatlivspolitikken ved formularen.
Databehandleraftaler med leverandører (Vercel, e-mail-tjeneste, Redis).
Ved Meta Pixel: fælles dataansvar med Meta for indsamlingen (EU-Domstolens Fashion ID-dom) – skal fremgå af politikken.
8.4 Cookies og samtykke
Cookies og sporing, der ikke er strengt nødvendige, kræver forudgående, aktivt samtykke.
Knapperne "Afvis" og "Accepter" skal være lige synlige og lige lette at bruge (Datatilsynets og Digitaliseringsstyrelsens vejledning).
Ingen tracking-scripts indlæses før samtykke. Afvisning sletter evt. eksisterende tracking-cookies.
Samtykket kan altid trækkes tilbage via et link i sidefoden. Gem samtykket i højst 12 måneder, og versionér det.
Log en anonym samtykkekvittering (version, tidspunkt, valg) som dokumentation.
Cookieløs statistik (fx Vercel Web Analytics) kræver ikke samtykke, men skal nævnes i cookiepolitikken.
Cookiebanner er nødvendigt, så snart der køres annoncer med pixel/tag – byg det selv, så det er let og hurtigt.
8.5 Øvrige sider og hensyn
Handelsbetingelser, hvis der sælges ydelser til forbrugere (pris, betaling, fortrydelsesret, reklamation).
Tilgængelighed: Byg efter WCAG 2.2 AA (kontrast, tastaturnavigation, fokusmarkering, alt-tekster, touch-mål). Lovkrav for offentlige, god praksis for alle.
Billedrettigheder: Kun egne billeder eller dokumenterede licenser (fx CC0). CC0 dækker ikke genkendelige personer eller varemærker. Fotografens tilladelse skal foreligge for professionelle portrætter.
Registrér kilde og licens for hvert billede i public/images/CREDITS.json.
9. Design, der ikke ligner AI
Mange AI-genererede sider ligner hinanden: tætpakket indhold, gradienter overalt, emoji-ikoner og tolv ens kort. Målet er det modsatte – en rolig, professionel side, der ligner, at en erfaren designer har lavet den til netop denne virksomhed. Udtrykket bygger på svarene fra interviewets runde 4 og runde 7.
9.1 Gør
Luft: Store, ens sektionsafstande (fx 80/96/128 px på mobil/tablet/desktop) og god afstand mellem overskrift, tekst og knapper.
Rolig typografi: Højst to fontfamilier (gerne én). En fast skala for overskrifter og brødtekst (min. 16–17 px), linjehøjde 1,5–1,7 og højst ca. 70 tegn pr. linje.
Ægte billeder: Personen bag virksomheden, rigtige opgaver, lokale omgivelser. Et ægte portræt skaber mere tillid end noget andet.
Få, tydelige handlinger: Én primær handling pr. skærm.
Gruppér indhold: 2–4 hovedkategorier frem for mange små kort. På mobil vises lister som kompakte mærkater eller vandrette swipe-rækker.
Ensartede detaljer: Samme hjørneradius, skygge og ikonstil overalt.
Rytme: Skift mellem hvide sektioner og få mørke brandsektioner for at skabe struktur.
9.2 Undgå
Emojis og generiske ikonpakker som pynt, glitter, glasmorfisme og neon-gradienter.
Små VERSALER med ekstra spærring over hver overskrift.
Script- og "håndskrift"-fonte og tekst, der står oven på billeder uden tilstrækkelig kontrast.
Tomme floskler ("Vi brænder for kvalitet"), opdigtede tal og stockfotos med smilende modeller.
Farveopacitet på tekst, der falder under kontrastkravet.
Overskrifter, hvor et ord deles midt i (fx "sommerhusservi-ce"). Tilpas størrelsen pr. skærmbredde.
9.3 Mobil først
Designet laves til 360–390 px først og udvides derefter.
Hero på mobil: Overskrift, kort tekst og begge vigtigste knapper skal kunne ses uden at scrolle, men ikke klemt helt op under menuen.
Touch-mål på mindst 44 × 44 px. Telefonnumre er altid klikbare (tel:).
Ingen vandret scroll på siden. Kun bevidste swipe-rækker må scrolle sidelæns.
Sticky header med logo, ringeknap og menu. En tynd announcement bar øverst kan vise område og kontakt.
9.4 Visuel kontrol – altid
Hver sektion ses igennem ved 320, 360, 375, 390, 768, 1024, 1280 og 1440 px. Der tjekkes for overlap, afskåret tekst, tekst der flyder ud af knapper, ordbrud i overskrifter og billedudsnit. En side er ikke "mobiloptimeret", før det er set. Med animation slået til gennemgås hvert trin desuden med reduceret bevægelse slået til (kapitel 10.6).
9.5 Impeccable design skills
For at få designet til at ligne menneskeværk bruges Impeccable-designskills (impeccable.style, open source, skabt af Paul Bakaus). Impeccable er en skill og et sæt kommandoer, der giver AI-værktøjet et fælles designsprog og en liste over typiske AI-designfejl, som det skal undgå. Det passer direkte til målet i dette kapitel. Skills'ene bruges i alle projekter, medmindre ejeren i runde 7 har sagt nej.
Installation (kræver ejerens ok, runde 7): Kør npx impeccable install fra projektets rod. Kommandoen finder selv AI-værktøjet (fx Claude Code, Cursor, Codex CLI, Gemini CLI eller GitHub Copilot) og lægger skills'ene det rigtige sted. Genindlæs værktøjet bagefter. Ældre vejledninger nævner npx impeccable skills install eller npx skills add pbakaus/impeccable – tjek impeccable.style for den aktuelle fremgangsmåde.
Første opsætning: Kør /impeccable init (i Codex åbnes skill'en via /skills eller $impeccable). Opsætningen opretter PRODUCT.md og tilbyder DESIGN.md. Skriv dem ud fra docs/BRIEF.md (målgruppe, tone, farver, fonte, det der skal undgås), så de aldrig modsiger briefen.
Kommandoer: audit (find fejl), critique (designkritik), normalize (ret afvigelser fra tokens), distill (fjern unødig kompleksitet), polish (sidste finpudsning), bolder og quieter (justér udtrykket) og craft (planlæg og byg med visuel iteration). I nyere versioner skrives de som /impeccable polish, i ældre som /polish.
Detektor: npx impeccable detect src/ scanner koden for typiske AI-designfejl (fx lilla gradienter, bounce-easing, mørke glows, små touch-mål og sprungne overskriftsniveauer) uden at bruge AI. Kør den før hver leverance, og ret fundene.
Dokumentets krav vinder: Impeccable må aldrig bryde kravene i dette dokument – server-rendering, kontrast, tokens fra interviewet, CTA-system og lovkrav. Opstår en konflikt, gælder dokumentet, og AI'en siger det kort til ejeren.
Kun ét animationssystem: Brug ikke Impeccables animationskommando til at tilføje bevægelse. Al bevægelse følger kapitel 10.
Fra start eller til sidst
Ejeren vælger i runde 7, om Impeccable bruges fra start eller til sidst. AI'en forklarer forskellen og giver en anbefaling:
Valg
Fra start
Til sidst
Sådan
Installeres og køres, før første sektion bygges (/impeccable init og craft). Designet formes efter skills'ene hele vejen.
Siden bygges først efter kapitel 9 og 11. Derefter køres audit, critique og polish som et selvstændigt trin i egen branch (fx design/impeccable).
Fordel
Ensartet udtryk fra første linje og færre rettelser til sidst.
Let at fortryde: hvert trin ligger i egen commit, og hele passet kan droppes med git revert eller ved at slette branchen.
Ulempe
Svært at fortryde, fordi det er vævet ind i al kode og alle valg.
Kan give flere rettelser til sidst og kræver en ekstra gennemgang.
Passer til
Ejeren har ingen mockup eller klar designretning.
Ejeren har logo, faste farver eller en mockup.

Sådan køres Impeccable til sidst
Sikkerhedsnet: Opret et git-tag (fx før-impeccable) lige før trinnet, så alt kan rulles tilbage.
Ét trin ad gangen: audit, critique, rettelser, polish. Hvert trin i sin egen commit med en beskrivende besked (fx "Impeccable: polish hero"), så ét trin kan fortrydes uden at miste de andre.
Kun udtryk: Passet må ikke ændre tekster, URL'er, sidelisten eller struktureret data.
Verificér igen: Kør HTML-test, check-seo og Lighthouse efter passet (kapitel 15).
Rækkefølge: Impeccable-passet køres før animationslaget (kapitel 10), fordi animation ikke må ændre layout.
Hvis Impeccable bruges fra start
Store designvalg (farvesystem, typografi) lægges stadig i deres egen commit (kapitel 2), så de kan fortrydes.
Ejerens valg skrives i docs/BRIEF.md og genforhandles ikke uopfordret.
10. Animation og motion
Siden skal føles dyr og levende. Animation og scroll-effekter er derfor et krav i dette dokument – ejeren vælger kun niveauet i runde 7 (se 10.4). Når siden animeres, arbejder AI'en som senior front-end-udvikler med fokus på award-level motion design: siden styles i Next.js (App Router), Tailwind og shadcn/ui med TypeScript, så den føles dyr og levende uden at ændre layout eller copy.
Bemærk
Animation er et lag oven på et færdigt layout med færdig tekst. Den bygges efter basissiden (og efter Impeccable-passet, hvis det er valgt til sidst), i egne commits, så den kan fortrydes. Animationen må aldrig koste indhold, hastighed eller tilgængelighed: kan kravene i kapitel 5 ikke holdes, forenkles animationen – kravene sænkes ikke.
10.1 Roller – de fire værktøjer
Værktøj
Rolle
Bruges til
Lenis (github.com/darkroomengineering/lenis)
Kun smooth scroll. Én global provider i root layout.
Blød scroll på hele siden. Bruges altid, medmindre reduceret bevægelse er slået til.
GSAP + ScrollTrigger (github.com/greensock/GSAP)
Al scroll-styret koreografi.
Pin, scrub, parallax, timelines, staggered reveals og sektionsovergange.
React Bits (github.com/DavidHDev/react-bits)
Små effekter.
Animeret tekst (SplitText, BlurText, ShinyText, CountUp), baggrunde (Aurora, Particles, Silk, Grid) og knap-/kort-effekter. Installeres via deres CLI (shadcn eller jsrepo) i TypeScript + Tailwind-varianten.
Magic UI (magicui.design)
Færdige sektionskomponenter.
Marquee, Bento Grid, Animated Beam, Border Beam, Number Ticker, Shimmer Button, Blur Fade, Globe og Dock. Installeres med shadcn CLI: npx shadcn@latest add "https://magicui.design/r/<komponent>".

Magic UI MCP: Magic UI har en officiel MCP-server, så AI-værktøjet kan finde og installere komponenter direkte (magicui.design/docs/mcp). Installér den med pnpm dlx @magicuidesign/cli@latest install cursor – erstat cursor med claude, windsurf, cline eller roo-cline efter værktøj – og genstart værktøjet. Er MCP ikke tilgængelig, bruges shadcn-kommandoen ovenfor. Installationen kræver ejerens ok (runde 7).
10.2 Beslutningsregler
Skal en sektion bygges (logo-bånd, feature-grid, stats, integrationer)? Magic UI først.
Skal tekst, baggrund eller knap have liv? React Bits.
Skal noget reagere på scroll-position (pin, scrub, parallax, sekvens mellem sektioner)? GSAP.
Skal scroll føles blød? Lenis – altid og globalt.
Små hover- og enter-animationer på enkeltkomponenter: brug komponentens egen animation. Skriv ikke GSAP ovenpå.
Aldrig GSAP og motion/framer-motion på samme element eller samme CSS-property.
Gør en Magic UI- og en React Bits-komponent det samme, vælges én – ikke begge.
Komponenter, der strider mod 9.2 (neon, regnbue, glitter og konfetti – fx Rainbow Button, Neon Gradient Card, Sparkles Text, Comic Text, Meteors, Confetti og Cool Mode), vælges fra.
10.3 Teknisk opsætning
Installér: npm i gsap @gsap/react lenis motion (motion bruges af Magic UI). Kør npx shadcn@latest init, hvis projektet ikke har en components.json.
Client Components: Alt med animation er Client Components ("use client") – små wrappers, aldrig page.tsx eller layout.tsx (kapitel 4.3). Root layout forbliver en Server Component og importerer blot MotionProvider, som tager children som prop.
GSAP: Brug useGSAP fra @gsap/react med scope-ref, så oprydning sker automatisk. Registrér plugins (ScrollTrigger og evt. SplitText) ét sted: src/lib/gsap.ts.
Lenis + GSAP skal synkroniseres, ellers brydes ScrollTrigger. Ryd op ved unmount (lenis.destroy() og gsap.ticker.remove).
Lenis CSS: Importér lenis/dist/lenis.css i den globale CSS, som Lenis anbefaler.
Reduceret bevægelse: Respektér prefers-reduced-motion. Lenis og tunge GSAP-animationer slås fra, og indholdet vises statisk (se koden).
Plugins registreres ét sted:
// src/lib/gsap.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
 
gsap.registerPlugin(ScrollTrigger, useGSAP);
 
export { gsap, ScrollTrigger, useGSAP };
Én global provider med Lenis, synkroniseret med GSAP:
// src/components/motion/MotionProvider.tsx
"use client";
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
 
export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return; // statisk indhold, ingen Lenis
 
    const lenis = new Lenis({ autoRaf: false });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
 
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
 
  return <>{children}</>;
}
Root layout forbliver en Server Component:
// src/app/layout.tsx (ingen "use client")
import { MotionProvider } from "@/components/motion/MotionProvider";
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
Eksempel på en scroll-reveal, der kun kører, når brugeren ikke har bedt om mindre bevægelse (bruges under folden):
// src/components/motion/ScrollReveal.tsx
"use client";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
 
export function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
 
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current, {
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );
 
  return <div ref={ref}>{children}</div>;
}
10.4 Stylingprincipper
Layout og copy ændres ikke. Kun bevægelse og effekter tilføjes.
Én signatur-effekt pr. sektion, ikke flere. Easing er ens på hele siden (fx power3.out), og varigheden er 0,6–1,0 s.
Max 1–2 tunge baggrunde (WebGL: Aurora, Silk, Particles) pr. side. De lazy-loades og deaktiveres eller forenkles på mobil. En tekstløs, dekorativ baggrund må indlæses med next/dynamic og ssr: false – den eneste undtagelse fra forbuddet i kapitel 4.3, fordi den ikke indeholder indhold.
Fast fordeling: Hero: React Bits tekst + baggrund. Midtersektioner: Magic UI + GSAP scroll-reveals. CTA: Shimmer Button eller Border Beam.
Kun transform og opacity animeres. Undgå layout-animationer (width, height, top).
Spar på will-change, og test Core Web Vitals (LCP og CLS) efter hver sektion.
Brandets udtryk: Effekter og baggrunde bruger designets tokens og er afdæmpede. Reglerne i 9.2 (ingen neon, glitter eller glasmorfisme) gælder også for animation. Easing og varighed lægges som tokens (kapitel 11.1).
Hero og LCP: Hero-tekst må gerne animeres, men animationen skal starte ved første paint, vare højst ca. 1 s og aldrig skjule hero-billedet. LCP måles stadig under 2,5 s.
Animationsniveau – vælges af ejeren i runde 7. Standard er Fuld:
Niveau
Indhold
Afdæmpet
Lenis og bløde scroll-reveals (Blur Fade eller GSAP) samt tællende tal (Number Ticker). Ingen WebGL-baggrunde.
Normal
Som Afdæmpet, plus React Bits-tekst i hero, én let baggrund og Magic UI-sektioner (Marquee, Bento Grid).
Fuld
Som Normal, plus GSAP pin, scrub og parallax, op til to baggrunde (Aurora, Silk eller Particles) og Border Beam eller Shimmer Button på CTA.

Fravælger ejeren animation helt, siger AI'en kort, at siden så fremstår mere statisk, og noterer valget i BRIEF.md.
10.5 Arbejdsgang for animation
Spørg først: Er sektionsstrukturen eller stakken uklar, spørges ejeren (runde 7 og docs/STRUKTUR.md). Stakken er ellers fastlagt i kapitel 4.
Lav en tabel: sektion, bibliotek, konkret komponent eller effekt og hvorfor. Gem den i docs/ANIMATION.md, og vis den kort til ejeren.
Byg: Giv installationskommandoer, derefter Lenis/GSAP-setup, derefter komponent for komponent med komplet kode – én sektion ad gangen, hver i sin egen commit.
Afslut med tjeklisten "Animation og motion" i kapitel 15 (ydelse og tilgængelighed), og rapportér resultatet i statussen.
Eksempel på tabellens format (udfyldes ud fra projektets sider):
Sektion
Bibliotek
Komponent / effekt
Hvorfor
Hero
React Bits
SplitText på H1 og en let baggrund (kun desktop)
Tekst og baggrund får liv uden at røre layoutet.
Logo-bånd
Magic UI
Marquee
Færdig sektionskomponent.
Ydelser
Magic UI + GSAP
Bento Grid og staggered scroll-reveal
Sektion først, scroll-koreografi ovenpå.
Nøgletal
Magic UI
Number Ticker
Tal, der tæller op, uden egen kode.
Proces
GSAP
Pin og scrub
Reagerer på scroll-position.
CTA
Magic UI
Shimmer Button eller Border Beam
Opmærksomhed på den vigtigste handling.

10.6 Tilgængelighed og hastighed
Reduceret bevægelse: prefers-reduced-motion respekteres. Lenis og tunge GSAP-animationer slås fra, og alt indhold vises statisk. Test i browserens udviklerværktøjer (Rendering, emulér reduced motion).
Tekst i rå HTML: Teksten står stadig i det første HTML-svar og kan læses uden JavaScript (kapitel 4.3). Opdelt tekst får aria-label på forælderen og aria-hidden på spans, så skærmlæsere læser den som én tekst.
CLS = 0: Animation flytter ikke layout. Plads reserveres, og kun transform og opacity animeres.
Pause: Bevægelse, der kører i mere end 5 sekunder (marquee, partikler, baggrunde), kan sættes på pause eller stoppes (WCAG 2.2.2). Ingen blink mere end tre gange i sekundet.
Tastatur og fokus: Fokusmarkering og tastaturnavigation er uændret. Ankerlinks (/#sektion), piletaster, mellemrum og Tab virker med Lenis.
Bundle: Kun de komponenter og GSAP-plugins, der bruges, importeres. Komponenter under folden og WebGL lazy-loades.
Ingen CDN: Alt bundles i projektets eget JavaScript, så CSP i kapitel 7.1 er uændret. Kræver en komponent en udvidelse, tilføjes kun den.
Måling: Kør Lighthouse (mobil) og HTML-testen efter hver sektion. Holdes tallene fra kapitel 5 ikke, forenkles sektionens animation.
11. Brandkonsistens
11.1 Design tokens – én kilde
Alle farver, fonte, radier og skygger defineres ét sted (tailwind.config) ud fra svarene i interviewet. Komponenterne bruger kun disse navne – aldrig løse hex-koder. Så kan hele udtrykket justeres ét sted. Har ejeren ingen farver, foreslår AI'en 2–3 paletter med kontrast, der opfylder AA, og ejeren vælger.
Token
Eksempel (Kystnord.dk)
Bruges til
Primær mørk (navy)
#0B2234 / #12324A
Tekst, mørke sektioner, sidefod, announcement bar
Accent (grøn)
#2D5A3D
Primære knapper, markeringer
Neutrale flader
#F4F7F9 → #D8E2E9
Kort og rolige baggrunde
Sekundær tekst
#4B5F6E
Hjælpetekst (min. 4,5:1 kontrast)
Font
Montserrat, Helvetica som fallback
Overskrifter og brødtekst
Bevægelse
power3.out, 0,6–1,0 s
Ens easing og varighed på alle animationer (kapitel 10).

Værdierne er kun eksempler. I et nyt projekt erstattes de af kundens egne.
11.2 CTA-system
Type
Farve
Bruges til
Primær
Accentfarve (fx grøn)
Alle konverteringer: "Få et tilbud", "Kontakt os", "Send besked", "Vælg pakke".
Sekundær
Mørk brandfarve (fx navy)
Sekundære handlinger og navigation: "Læs mere", "Se ydelser", "Ring".
Undtagelse
Accentfarve
På mørke brandsektioner bruges den primære farve for kontrast.

CTA-farverne ligger som egne tokens (cta-primary, cta-secondary med hover/active), så de kan skiftes eller fortrydes samlet.
Knaptekster er handlinger ("Få et uforpligtende tilbud"), ikke "Klik her".
Lange knaptekster må ombrydes på smalle skærme i stedet for at flyde ud.
11.3 Logo
Modtag logoet som transparent PNG (min. 2000 px bred) eller SVG.
Lav en lys version (til hvid baggrund) og en mørk version (lys tekst til mørke flader).
Favicon, app-ikoner og Google-logo laves ud fra mærket (symbolet) alene – på hvid baggrund, så det kan ses i mørke faner.
Logoet indsættes med faste dimensioner (ingen layoutspring) og en alt-tekst med firmanavnet.
Tjek logoet for påstande (fx "bæredygtigt"), der kræver dokumentation.
11.4 Tone og tekst
Samme stemme overalt, som valgt i interviewet ("vi"/"du", formel/uformel), kort og konkret.
Firmanavn, telefonnummer og priser skrives ens overalt – indsættes via pladsholdere.
Telefonnumre med hårde mellemrum, så de ikke brydes midt i tallet.
12. Standardopbygning af en forside
Sektion
Indhold
Tip
Announcement bar
Område, telefon, e-mail
Tynd og mørk. På mobil kun område og telefon.
Header
Logo, menu, ringeknap
Sticky. Menu fra desktop, burger på mobil. Menuen genereres fra sidelisten.
Hero
H1 (ydelse + område), kort tekst, primær og sekundær CTA, 3 nøgletal
Foto bag tekst med gradient. LCP-billedet preloades. Tekst og baggrund må animeres (kapitel 10).
Ydelser
2–4 hovedkategorier med billede og ydelsesliste
Mærkater på mobil, lister på desktop. Link til hver ydelsesside.
Pakker/abonnement
Fordele og 2–3 pakker
Mørk brandsektion giver rytme.
Om os
Personen bag, ægte foto, konkrete fakta
Kun sande oplysninger.
FAQ
5–8 reelle spørgsmål
Også som FAQPage-data.
Kontakt
Telefon, e-mail, åbningstider, formular
Formularen kan forvælge emne via link.
CTA-bånd
Kort opfordring + knapper
Mørkt overlay på billede.
Footer
Logo (mørk), genveje, ydelser, kontakt, CVR, adresse, juridiske links, cookieindstillinger
Én naturlig sætning om området – ingen bynavneliste.

13. Redigerbart indhold og billeder
content/indstillinger.json: firmaoplysninger, område, priser, åbningstider, SEO-titel og -beskrivelse.
content/forside.json og content/<side>.json: alle tekster og billedstier – og feltet lastUpdated (Sidst opdateret).
src/lib/pages.ts: sidelisten (URL, navn, forælder, indekseres). Ændres kun sammen med docs/STRUKTUR.md.
public/images/: alle billeder – serveres fra eget domæne og ligger i Git. Logoer i public/images/logo/.
Redigering: npm run dev → http://localhost:3000/keystatic → ret teksten → sæt "Sidst opdateret" til dagens dato på de sider, der er ændret væsentligt → gem → commit og push → Vercel bygger siden igen.
Bygningen fejler med en tydelig besked, hvis et felt er tomt eller for langt, en pladsholder er ukendt, en dato er ugyldig eller i fremtiden, eller et billede mangler.
Når et stockfoto erstattes, opdateres CREDITS.json og billedoversigten.
docs/INDHOLD.md forklarer ejeren alt dette på dansk – inkl. hvornår datoen skal ændres, og hvornår den ikke skal.
14. Hosting, konti og drift
14.1 Hvem ejer hvad
Tjeneste
Anbefalet ejer
Bemærkning
GitHub (kode)
Udvikleren
Kunden kan tilføjes som collaborator. Koden kan altid hentes igen med git clone.
Vercel (hosting)
Kunden – udvikleren som medlem
Kunden ejer driften. Gratisplanen (Hobby) er efter vilkårene til ikke-kommerciel brug; kommercielle sider hører til Pro-planen.
Resend (e-mail)
Kunden – udvikleren som medlem
Kræver verificeret domæne (SPF/DKIM). Gratisplanen rækker typisk til en kontaktformular.
Upstash (Redis)
Kunden eller udvikleren
Rate limiting og samtykkelog.
Domæne og DNS
Kunden
Peger på Vercel. Samme sted som e-mail-DNS.
Google Search Console og Business Profile
Kunden
Udvikleren som administrator.

Husk: Grænser og vilkår på gratisplaner ændrer sig. Tjek dem ved opsætning. Ingen af tjenesterne udløber af sig selv efter et fast antal år.
14.2 Lanceringstrin
Opret Vercel-projekt forbundet til GitHub-repoet.
Sæt miljøvariabler i Vercel (site-URL, e-mail-nøgler, Redis, evt. pixel-ID).
Tilføj domænet og ret DNS. Vent på HTTPS-certifikat.
Har kunden en gammel hjemmeside: lav 301-videresendelser fra alle gamle URL'er til de nye (listen fra interviewets runde 1).
Verificér afsenderdomænet i e-mail-tjenesten. Send en testhenvendelse, og tjek spam.
Tilføj siden i Google Search Console, og indsend sitemap.xml.
Opret eller opdater Google Business Profile med samme NAP som siden.
Aktivér cookieløs statistik og evt. annoncepixel (kun efter samtykke).
Kør tjeklisten i kapitel 15 mod den rigtige URL.
15. Lanceringstjekliste
✓
Interview og struktur
☐
docs/BRIEF.md er godkendt af ejeren – alle MANGLER er listet, og lovpligtige mangler er markeret
☐
docs/STRUKTUR.md er godkendt, og src/lib/pages.ts svarer præcis til den
☐
Runde 7 er gennemført: Impeccable-timing (fra start, til sidst eller nej) og animationsniveau står i BRIEF.md

✓
Indhold og jura
☐
Registreret navn, CVR, adresse og e-mail vises (sidefod og juridiske sider)
☐
Priser til forbrugere står inkl. moms
☐
Alle påstande (også i logo) er dokumenterede – ingen opdigtede fakta
☐
Privatlivspolitik, cookiepolitik, handelsbetingelser og tilgængelighedserklæring findes
☐
Billedrettigheder er dokumenteret i CREDITS.json

✓
Teknik og hastighed
☐
npm run lint, typecheck og build uden fejl eller advarsler
☐
npm audit: 0 sårbarheder
☐
Lighthouse mobil ≥ 95 i alle kategorier, CLS = 0
☐
Ingen brudte links (automatisk linktjek)
☐
HTML-test: for hver side i sitemap står H1, H2'er, FAQ og NAP i det rå svar fra curl (scripts/check-html.mjs), og siden kan læses med JavaScript slået fra
☐
Ingen 'use client' i page.tsx eller layout.tsx, og intet synligt indhold hentes i browseren
☐
Ingen hemmeligheder i Git – alle nøgler i Vercel

✓
SEO
☐
Én H1 pr. side, titel 55–60 og beskrivelse 140–155 tegn
☐
Canonical, robots.txt og sitemap.xml fungerer – kun indekserbare sider i sitemap
☐
lastmod kommer fra hver sides lastUpdated – ikke new Date() eller byggetid. To builds uden ændringer giver identisk sitemap.xml
☐
lastmod = dateModified i sidens WebPage-schema
☐
Brødkrummer uden #-ankre og i overensstemmelse med URL-hierarkiet – synligt og i BreadcrumbList
☐
Hver entitet har ét @id med samme navn og url på alle sider, og alle URL'er i JSON-LD står i sitemap (scripts/check-seo.mjs)
☐
JSON-LD validerer i Rich Results Test og Schema Markup Validator
☐
Alt-tekster på alle indholdsbilleder, delingsbillede 1200 × 630
☐
Search Console og Google Business Profile er sat op

✓
Sikkerhed og samtykke
☐
Sikkerhedsheadere er til stede (tjek fx med securityheaders.com)
☐
Formular-endpoint giver 405/403/415/413/400/429 korrekt
☐
Kontaktformular sender mail, og honeypot virker
☐
Cookiebanner: afvis og accepter er lige lette, intet tracking før samtykke, samtykke kan trækkes tilbage

✓
Design og mobil
☐
Gennemgået ved 320/360/375/390/768/1024/1280/1440 px uden overlap eller vandret scroll
☐
Begge CTA'er i hero ses uden scroll på en almindelig telefon
☐
Ingen ordbrud i overskrifter, ingen tekst der flyder ud af knapper
☐
Kontrast opfylder WCAG AA, fokusmarkering synlig ved tastaturnavigation
☐
Logo, favicon og farver er konsistente overalt og svarer til briefen
☐
Impeccable (hvis valgt) er kørt som beskrevet i 9.5 i egne commits, og npx impeccable detect src/ melder ingen fund

✓
Animation og motion
☐
Lenis kører som én global provider i root layout, synkroniseret med GSAP (ticker, lagSmoothing(0)) og ryddet op ved unmount
☐
Rollerne holdes: Lenis = scroll, GSAP = scroll-koreografi, React Bits = tekst/baggrund/knapper, Magic UI = sektioner. Ingen GSAP og motion på samme element eller property
☐
Kun transform og opacity animeres – ingen width-, height- eller top-animationer. Én signatur-effekt pr. sektion, ens easing og varighed
☐
Højst 1–2 tunge WebGL-baggrunde, lazy-loadet og forenklet eller slukket på mobil
☐
prefers-reduced-motion testet: Lenis og tunge animationer er slået fra, og alt indhold vises statisk
☐
Teksten står stadig i det rå HTML (check-html.mjs grøn) og kan læses uden JavaScript. Opdelt tekst har aria-label
☐
Lighthouse mobil ≥ 95, LCP < 2,5 s og CLS = 0 målt med animationerne slået til
☐
Bevægelse over 5 sekunder kan sættes på pause (WCAG 2.2.2). Fokusmarkering og tastaturnavigation er uændret, og ankerlinks virker med Lenis
☐
docs/ANIMATION.md findes og svarer til det byggede (sektion, bibliotek, effekt, hvorfor)

16. Kort version af kravene
En samlet huskeliste til AI'en. Ved tvivl gælder det fulde kapitel.
START
- Byg intet, før opstartsinterviewet (kap. 3) er gennemført, og BRIEF.md
  og STRUKTUR.md er godkendt. Spørg i runder, højst ca. 8 spørgsmål ad gangen.
  Spørg ikke om det, ejeren allerede har skrevet eller vedhæftet.
- Opdigt aldrig fakta: ingen tal, certificeringer, anmeldelser, adresser,
  koordinater eller åbningstider. Manglende svar = MANGLER.
 
ARBEJDSFORM
- Verificér før du påstår noget: se hver sektion ved 320, 360, 375, 390, 768,
  1024, 1280 og 1440 px, kør lint, typecheck, build, linktjek, check-html,
  check-seo og én Lighthouse-kørsel (devtools-throttling) mod en produktionsbuild.
- Commit og push til main, når en opgave er færdig og verificeret. Store,
  reversible ændringer (farvesystem, URL-struktur) i deres egen commit.
- Afslut med: hvad er lavet, hvad er verificeret, hvad mangler.
 
TEKNIK
- Next.js (App Router), Server Components, statisk generering, TypeScript
  strict, Tailwind med design tokens, Zod, ESLint, Vercel.
- Ingen SPA: ingen 'use client' i page/layout, intet indhold hentet i browseren.
  Al tekst skal stå i det rå HTML-svar (test med curl og uden JavaScript).
- Indhold i content/*.json valideret ved build, redigerbart via Keystatic
  (kun lokalt). Pladsholdere for firmanavn, telefon, pris, område.
 
STRUKTUR OG SEO
- URL-plan i docs/STRUKTUR.md før koden. Alle sider i src/lib/pages.ts, og
  menu, links, brødkrummer, sitemap og JSON-LD genereres derfra. Højst 3
  niveauer, hvert URL-led er en rigtig side.
- sitemap.xml: kun indekserbare sider. lastmod = sidens lastUpdated fra
  indholdsfilen, aldrig new Date()/byggetid. Samme dato som dateModified.
- JSON-LD i én @graph pr. side. Én entitet = ét @id på sin kanoniske side;
  andre sider henviser til samme @id med samme navn og url. Brødkrummer uden
  #-ankre. Alle URL'er i JSON-LD står i sitemap.
- Én H1 (ydelse + område), titel 55–60 tegn, beskrivelse 140–155 tegn,
  canonical, Open Graph, poweredByHeader: false.
- Lokal SEO mod det primære område. Ingen bynavnelister, ingen næsten-ens
  bysider. Tjek geografien.
 
HASTIGHED
- LCP < 2,5 s, CLS 0, INP < 200 ms, Lighthouse mobil >= 95 i alle kategorier.
- next/image med sizes og preload på hero-billedet, next/font, inline
  SVG-ikoner, minimal JavaScript, ingen tredjepartsscripts før samtykke.
 
SIKKERHED (OWASP Top 10)
- CSP, HSTS, nosniff, X-Frame-Options DENY, Referrer-Policy,
  Permissions-Policy, COOP.
- API: kun tilladte metoder, same-origin, JSON-only, kropsgrænse, strenge
  Zod-skemaer, honeypot, rate limiting med 429 og Retry-After, generiske
  fejl, ingen persondata i logs, escaping i e-mails.
- Admin kun lokalt (404 i produktion). URL-felter kun https og rigtigt
  domæne. npm audit = 0.
 
JURA (DANMARK)
- Navn, CVR, adresse og e-mail synligt. Priser inkl. moms. Påstande
  dokumenteres. Privatlivs-, cookie-, handels- og tilgængelighedsside.
- Ved annoncer: eget cookiebanner, lige lette Afvis/Accepter, intet tracking
  før samtykke, tilbagekaldelse i footer, anonym samtykkelog. WCAG 2.2 AA.
 
DESIGN OG BRAND
- Ud fra interviewets runde 4. Mobil først, meget luft, højst to fonte,
  ægte billeder, få tydelige handlinger, 2–4 hovedkategorier.
- Ingen emojis, glitter, neon-gradienter, script-fonte, versal-eyebrows,
  floskler eller ordbrud. Touch-mål >= 44 px, AA-kontrast.
- Alle farver, fonte, radier og skygger som tokens ét sted. CTA-system:
  primær = konvertering, sekundær = navigation.
 
ANIMATION OG DESIGN-SKILLS
- Spørg i runde 7: Impeccable fra start / til sidst (egen branch, let at
  revert) / nej, og animationsniveau. Animation er et krav (kap. 10).
- Roller: Lenis = smooth scroll (én global provider), GSAP + ScrollTrigger
  = scroll-koreografi, React Bits = tekst/baggrund/knapper, Magic UI =
  sektionskomponenter. Aldrig GSAP og motion på samme element/property.
- Lenis + GSAP synkroniseres (lenis.on("scroll", ScrollTrigger.update),
  gsap.ticker, lagSmoothing(0)). useGSAP med scope. Ryd op ved unmount.
- Kun transform og opacity. Én signatur-effekt pr. sektion. Højst 1-2
  WebGL-baggrunde, lazy-loadet, forenklet på mobil. Layout/copy urørt.
- prefers-reduced-motion respekteres. Tekst står i rå HTML. LCP < 2,5 s,
  CLS 0, Lighthouse >= 95 holdes – ellers forenkles animationen.
- Impeccable: npx impeccable install, /impeccable init (PRODUCT.md ud fra
  BRIEF.md), kør detect før leverance. Dokumentets krav vinder.
 
LEVERANCE
- Kode i GitHub, klar til Vercel. README med lanceringstjekliste,
  SECURITY.md, docs/BRIEF.md, docs/STRUKTUR.md, docs/INDHOLD.md,
  docs/BILLEDER.md og docs/ANIMATION.md.
17. Ordliste
Begreb
Forklaring
Opstartsinterview
Spørgsmålene i kapitel 3, som AI'en stiller, før der bygges. Svarene bliver til BRIEF.md og STRUKTUR.md.
Server-renderet (SSR/SSG)
Siden bygges på serveren, så browseren modtager færdig HTML. SSG = bygget på forhånd som statiske filer.
SPA
Single page application: en side, hvor indholdet først bygges af JavaScript i browseren. Svær for Google og AI-crawlere at læse.
Server Component
En React-komponent, der kun kører på serveren og ikke sender JavaScript til browseren.
curl
Et kommandolinjeværktøj, der henter en side præcis som serveren sender den – uden JavaScript. Bruges til HTML-testen.
Sitemap / lastmod
sitemap.xml er listen over sider til Google. lastmod er datoen, hvor en side sidst blev ændret.
Sideliste (pages.ts)
Den ene fil med alle sider, som menu, links, brødkrummer, sitemap og struktureret data bygges ud fra.
Core Web Vitals
Googles målinger af brugeroplevelse: LCP (indlæsning), CLS (stabilitet), INP (reaktionstid).
Lighthouse
Chromes værktøj, der måler hastighed, tilgængelighed, best practices og SEO.
JSON-LD
Struktureret data i siden, der fortæller søgemaskiner præcist, hvad virksomheden er og tilbyder.
@id
Et fast id for en entitet i JSON-LD (fx en ydelse), så flere sider kan henvise til præcis samme ting.
Brødkrumme
Stien øverst på en underside, fx "Forside / Varmepumpeservice" – både synlig og som struktureret data.
NAP
Name, Address, Phone – skal være ens alle steder på nettet.
Canonical
Angiver den "rigtige" adresse for en side, så Google ikke ser dubletter.
CSP
Content-Security-Policy: bestemmer, hvilke scripts og ressourcer browseren må indlæse.
Rate limiting
Begrænsning af, hvor mange forespørgsler en afsender må lave på kort tid.
Honeypot
Skjult formularfelt, som kun bots udfylder.
Design tokens
Navngivne værdier for farver, fonte m.m., defineret ét sted og genbrugt overalt.
CTA
Call to action – knap eller link, der opfordrer til en handling.
Hero
Den øverste sektion på forsiden.
LCP-billede
Det største element i toppen – bør preloades.
Miljøvariabel
Indstilling (fx API-nøgle), der ligger uden for koden.
Keystatic
Redigeringsværktøj, der gemmer tekster og billeder direkte i projektets filer.
Commit / push / revert
Gem en ændring i Git / send den til GitHub / fortryd en bestemt ændring.
WCAG
Internationale retningslinjer for tilgængelighed. AA er standardniveauet.
Skill (AI-skill)
En samling instruktioner, som et AI-værktøj indlæser for at blive bedre til en bestemt opgave, fx design.
Impeccable
Open source designskill med kommandoer (fx audit og polish) og en detektor, der hjælper AI-værktøjer med at undgå typisk AI-design (impeccable.style).
MCP
Model Context Protocol: en åben standard, der lader et AI-værktøj bruge eksterne værktøjer, fx Magic UI's komponentbibliotek.
Client Component
En React-komponent, der også kører i browseren ("use client"). Bruges til interaktion og animation, men server-renderes stadig.
Lenis
Bibliotek til blød scroll (smooth scroll).
GSAP / ScrollTrigger
Animationsbibliotek. ScrollTrigger kobler animationer til scroll-position (pin, scrub, parallax).
React Bits
Samling af små animationseffekter: tekst, baggrunde, knapper og kort.
Magic UI
Samling af færdige animerede sektionskomponenter, fx Marquee, Bento Grid og Number Ticker.
prefers-reduced-motion
Browserindstilling, hvor brugeren beder om mindre bevægelse. Animation og smooth scroll skal så slås fra.
