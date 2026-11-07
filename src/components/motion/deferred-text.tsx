'use client';
import {lazy,Suspense,useEffect,useRef,useState} from 'react';
const SplitText=lazy(()=>import('@/components/SplitText'));
const from={yPercent:95,opacity:1};const to={yPercent:0,opacity:1};
export function DeferredText({text}:{text:string}){
 const ref=useRef<HTMLSpanElement>(null);const [active,setActive]=useState(false);
 useEffect(()=>{const el=ref.current;if(!el)return;const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){setActive(true);observer.disconnect();}},{rootMargin:'180px'});observer.observe(el);return()=>observer.disconnect();},[]);
 return <span ref={ref} className="statement-line" ><Suspense fallback={<span>{text}</span>}>{active?<SplitText text={text} tag="span" splitType="words" trigger="load" textAlign="left" duration={.7} delay={45} ease="power3.out" from={from} to={to}/>:<span>{text}</span>}</Suspense></span>;
}
