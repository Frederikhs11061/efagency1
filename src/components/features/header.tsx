"use client";
import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import {sections,anchor} from '@/lib/pages';
export function Wordmark({dark=false}:{dark?:boolean}){return <Image className="wordmark" src={`/images/logo-${dark?'dark':'light'}.svg`} width={176} height={48} alt="EF Agency"/>;}
export function Header(){
 const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);
 const button=useRef<HTMLButtonElement>(null);
 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>32);window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll);},[]);
 useEffect(()=>{if(!open)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);button.current?.focus();}};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close);},[open]);
 return <header className={`site-header ${scrolled?'is-scrolled':''} ${open?'menu-is-open':''}`}>
 <a className="logo-link" href="/#main" aria-label="EF Agency – forside"><Wordmark/></a>
 <nav className="desktop-nav" aria-label="Hovedmenu">{['cases','ydelser','om-os'].map(id=>{const s=sections.find(s=>s.id===id)!;return <a href={anchor(s.id)} key={s.id}>{s.name}</a>;})}</nav>
 <div className="header-actions"><a className="header-contact" href={anchor('kontakt')}>Lad os tale</a><button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open?'Luk menu':'Åbn menu'} onClick={()=>setOpen(!open)}><span/><span/></button></div>
 <nav id="mobile-nav" className={`mobile-nav ${open?'is-open':''}`} inert={!open} aria-label="Mobilmenu">{sections.filter(s=>s.menu||s.id==='kontakt'||s.id==='pakker').map(s=><a key={s.id} href={anchor(s.id)} onClick={()=>setOpen(false)}>{s.name}</a>)}</nav>
 <noscript><nav className="no-script-nav" aria-label="Navigation uden JavaScript">{sections.filter(s=>s.menu||s.id==='kontakt').map(s=><a key={s.id} href={anchor(s.id)}>{s.name}</a>)}</nav></noscript>
 </header>;
}
