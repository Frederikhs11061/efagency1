'use client';
import {lazy,Suspense,useEffect,useRef,useState} from 'react';
const loadSplit=()=>import('@/components/SplitText');
const SplitText=lazy(loadSplit);
const from={yPercent:95,opacity:1};const to={yPercent:0,opacity:1};
export function DeferredText({text}:{text:string}){
 const ref=useRef<HTMLSpanElement>(null);const [active,setActive]=useState(false);
 useEffect(()=>{const el=ref.current;if(!el)return;const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){setActive(true);observer.disconnect();}},{rootMargin:'0px 0px -16%'});observer.observe(el);const warmer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){void loadSplit();warmer.disconnect();}},{rootMargin:'200px'});warmer.observe(el);return()=>{observer.disconnect();warmer.disconnect();};},[]);
 return <span ref={ref} className="statement-line" ><Suspense fallback={<span>{text}</span>}>{active?<SplitText text={text} tag="span" splitType="words" trigger="load" textAlign="left" duration={.7} delay={45} ease="power3.out" from={from} to={to}/>:<span>{text}</span>}</Suspense></span>;
}
