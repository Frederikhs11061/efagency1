"use client";
import { useEffect, useRef, useState } from 'react';
import { sections, anchor } from '@/lib/pages';
import { Arrow } from '@/components/ui/icons';
export function Wordmark() { return <span className="wordmark" aria-hidden="true">ef<span className="wordmark-divider"/><span className="wordmark-name">agency<span className="wordmark-dot">.</span></span></span>; }
export function Header() {
 const [open,setOpen] = useState(false);
 const ref=useRef<HTMLElement>(null);
 useEffect(()=> { if(!open)return; const close=(e:KeyboardEvent)=> { if(e.key==='Escape') {setOpen(false);ref.current?.querySelector('button')?.focus();}};window.addEventListener('keydown',close);return ()=>window.removeEventListener('keydown',close);},[open]);
 return <header className="site-header" ref={ref}>
 <a href="/#main" aria-label="EF Agency – forside" className="logo-link"><Wordmark/></a>
 <nav className="desktop-nav" aria-label="Hovedmenu">{sections.filter(s=>s.menu).map(s=><a key={s.id} href={anchor(s.id)}>{s.name}</a>)}</nav>
 <a className="header-contact" href={anchor('kontakt')}>Lad os tale sammen <Arrow diagonal/></a>
 <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open?'Luk menu':'Åbn menu'} onClick={()=>setOpen(!open)}><span/ ><span/ ></button>
 <nav className={`mobile-nav ${open?'is-open':''}`} id="mobile-nav" aria-label="Mobilmenu" inert={!open}>{sections.filter(s=>s.menu || s.id==='kontakt' || s.id==='pakker').map(s=><a key={s.id} href={anchor(s.id)} onClick={()=>setOpen(false)}>{s.name}<Arrow diagonal/></a>)}</nav>
 <noscript><nav className="no-script-nav" aria-label="Navigation uden JavaScript">{sections.filter(s=>s.menu || s.id==='kontakt').map(s=><a key={s.id} href={anchor(s.id)}>{s.name}</a>)}</nav></noscript></header>;
}
