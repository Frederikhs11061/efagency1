# Struktur
| URL | Type | H1 | Forælder | Indeksering nu |
|---|---|---|---|---|
| / | Forside/onepager | Ikke bare endnu et opslag. | – | Nej |
| /privatliv | Information | Privatliv | / | Nej |
| /cookies | Information | Cookies | / | Nej |
| /samarbejde | Information | Om et samarbejde | / | Nej |
| /tilgaengelighed | Information | Tilgængelighed | / | Nej |

Navigation på forsiden: ydelser, cases, om os, kontakt. Pakker og proces nås via interne links. Alle ruter og ankre findes i src/lib/pages.ts. Lokal udgave er noindex og sitemap er derfor tomt; canonical og JSON-LD med domæne udsendes først, når SITE_URL og SITE_INDEXABLE er konfigureret. Intet falsk produktionsdomæne. lastUpdated er 2026-11-07 og må kun ændres med væsentligt indhold.
