import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const base=process.env.TEST_URL || 'http://127.0.0.1:3000';
const content=JSON.parse(await readFile(new URL('../content/site.json',import.meta.url)));
const routes=['/','/privatliv','/cookies','/samarbejde','/tilgaengelighed'];
const clean=s=>s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ').replace(/<!--.*?-->/g,'').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
for(const route of routes){
 const response=await fetch(base+route);assert.equal(response.status,200,route);const html=await response.text();
 assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,`Én H1 på ${route}`);
 assert.ok(html.includes('noindex'),`Lokal noindex på ${route}`);
 assert.ok(html.includes('lang="da"'));
 for(const header of ['content-security-policy','x-content-type-options','x-frame-options','referrer-policy','permissions-policy','cross-origin-opener-policy'])assert.ok(response.headers.get(header),header);
 const plain=clean(html);
 if(route==='/'){
  for(const text of [content.hero.line1,content.hero.line2,...content.faq.map(f=>f.answer),...content.services.map(f=>f.title),...content.founders.map(f=>f.name),...content.packages.map(f=>f.name),content.email])assert.ok(plain.includes(text),`SSR tekst mangler: ${text}`);
 }
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const [,href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)){
  if(href.startsWith('/#')&&route==='/')assert.ok(ids.has(href.slice(2)),`Manglende anker ${href}`);
  if(href.startsWith('#'))assert.ok(ids.has(href.slice(1)),`Manglende anker ${href}`);
  if(href.startsWith('/')&&!href.includes('#'))assert.equal((await fetch(base+href)).status,200,href);
 }
 console.log(`OK ${route}: HTML, H1, links, sprog, noindex og headers`);
}
for(const route of ['/keystatic','/api/keystatic/test'])assert.equal((await fetch(base+route)).status,404,route);
const sitemap=await(await fetch(base+'/sitemap.xml')).text();assert.equal((sitemap.match(/<loc>/g)||[]).length,0,'Lokal noindex skal have tomt sitemap');
assert.ok((await(await fetch(base+'/robots.txt')).text()).includes('Disallow: /'));
console.log('OK: admin 404 i produktion, tomt sitemap og robots');
