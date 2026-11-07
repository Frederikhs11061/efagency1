export const pages = [
 { path: '/', name: 'Forside', parent: null, index: true },
 { path: '/privatliv', name: 'Privatliv', parent: '/', index: false },
 { path: '/cookies', name: 'Cookies', parent: '/', index: false },
 { path: '/samarbejde', name: 'Om et samarbejde', parent: '/', index: false },
 { path: '/tilgaengelighed', name: 'Tilgængelighed', parent: '/', index: false },
] as const;
export const sections = [
 { id: 'ydelser', name: 'Ydelser', menu: true },
 { id: 'cases', name: 'Cases', menu: true },
 { id: 'proces', name: 'Processen', menu: false },
 { id: 'pakker', name: 'Pakker', menu: false },
 { id: 'om-os', name: 'Om os', menu: true },
 { id: 'faq', name: 'Spørgsmål', menu: false },
 { id: 'kontakt', name: 'Kontakt', menu: false },
] as const;
export const anchor = (id: typeof sections[number]['id']) => `/#${id}`;
export const siteUrl = process.env.SITE_URL ? new URL(process.env.SITE_URL).origin : undefined;
export const indexable = Boolean(siteUrl && process.env.SITE_INDEXABLE === 'true');
