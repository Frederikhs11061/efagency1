import {pages,sections,anchor} from '@/lib/pages';
import {content} from '@/lib/content';
import {Wordmark} from './header';
export function Footer({email}:{email:string}){return <footer className="footer"><div className="footer-top shell"><a href="/#main" aria-label="EF Agency – forside"><Wordmark/></a><p>{content.editorial.footerLine}</p><a href={`mailto:${email}`}>{email}</a></div><div className="footer-bottom shell"><span>© 2026 EF Agency</span><nav aria-label="Sidefod">{sections.filter(s=>s.menu).map(s=><a key={s.id} href={anchor(s.id)}>{s.name}</a>)}</nav><nav aria-label="Information">{pages.filter(p=>p.parent).map(p=><a key={p.path} href={p.path}>{p.name}</a>)}</nav></div></footer>;}
