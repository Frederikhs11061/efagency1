# Billeder og logo

Den nye side bruger tre art-directede konceptmotiver. Hero/TEMPO og FRISK er skabt med image_gen.imagegen. RITUAL er en faktisk redigering af det oprindelige kaffefoto: lys, farver og baggrund er ændret, mens kande, filter, hånd og hældning er bevaret som udgangspunkt. Originalen coffee.jpg er bevaret separat. Alle tre er tydeligt mærkede visuelle koncepter, ikke kundearbejde eller dokumentariske optagelser fra EF Agency.

| Fil | Anvendelse | Oprindelse |
|---|---|---|
| public/images/hero-mobile-v4.jpg | Mobilhero, TEMPO og billedbånd | AI-redigeret fra hero-v2.jpg; 941 × 1672, særskilt komposition med hel figur og tekstplads |
| public/images/hero-v2.jpg | Desktophero | AI-genereret kampagnestill, koboltblå jakke på betontrappe |
| public/images/ritual-v2.jpg | RITUAL og billedbånd | AI-redigeret fra coffee.jpg, varmt sidelys og mørk baggrund |
| public/images/fresh-v2.jpg | FRISK og billedbånd | AI-genereret, umærket drikkevare med flashlys |
| public/images/logo-light.svg | Mørke flader | Kontureret EF-ordmærke i SVG |
| public/images/logo-dark.svg | Lyse flader og genbrug | Samme identitet i mørk variant |

De præcise prompts og redigeringskilden er gemt i ASSET-PROMPTS.json og public/images/CREDITS.json. Prompts er også indlejret i JPEG-filernes metadata. Billederne er leveret lokalt, komprimeret og serveres i responsive størrelser gennem Next Image. Der er ikke brugt billeder eller kundemateriale fra Clix eller Umault.

Originalens kilde: https://images.unsplash.com/photo-1442512595331-e89e73853f31. Licens: https://unsplash.com/license. De tidligere filmklap- og skofotos er bevarede prototypeaktiver og bruges ikke på siden.

Logoets eksisterende ef | agency.-udtryk er bevaret efter ejerens sidste instruktion. Bogstaverne er eksporteret til vektorkonturer fra Instrument Sans; logoet kræver ingen fontindlæsning. Barlow Condensed Bold bruges til overskrifter, Manrope til læsning. Alle fonte er lokale; OFL-licenser ligger i public/fonts.

Mobilversionen vælges i et art-directed picture via getImageProps for portrætskærme op til 600 px; landskab bruger den brede original. Det er ikke et strakt desktopudsnit. Kilden er bevaret separat; præcis redigeringsprompt findes i ASSET-PROMPTS.json.
