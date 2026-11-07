'use client';
import {lazy,Suspense,useEffect,useRef,useState,type ReactNode} from 'react';
const AnimatedContent=lazy(()=>import('@/components/AnimatedContent'));
const ScrollReveal=lazy(()=>import('@/components/ScrollReveal'));
const loadBlur=()=>import('@/components/BlurText');
const BlurText=lazy(loadBlur);
const ScrollFloat=lazy(()=>import('@/components/ScrollFloat'));
const CountUp=lazy(()=>import('@/components/CountUp'));
function useNearViewport<T extends HTMLElement>(margin="120px",preload?:()=>Promise<unknown>){
 const ref=useRef<T>(null);const [active,setActive]=useState(false);
 useEffect(()=>{const el=ref.current;if(!el)return;const query=window.matchMedia('(prefers-reduced-motion: reduce)');let observer:IntersectionObserver|undefined;let warmer:IntersectionObserver|undefined;
 const setup=()=>{observer?.disconnect();warmer?.disconnect();if(query.matches){setActive(false);return;}observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){setActive(true);observer?.disconnect();}},{rootMargin:margin});observer.observe(el);if(preload){warmer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){void preload();warmer?.disconnect();}},{rootMargin:'200px'});warmer.observe(el);}};
 setup();query.addEventListener('change',setup);return()=>{observer?.disconnect();warmer?.disconnect();query.removeEventListener('change',setup);};},[margin,preload]);
 return {ref,active};
}
export function BitsReveal({children,delay=0}:{children:ReactNode;delay?:number}){
 const {ref,active}=useNearViewport<HTMLDivElement>();
 return <div ref={ref} className="bits-reveal"><Suspense fallback={children}>{active?<AnimatedContent distance={35} duration={.85} animateOpacity={false} threshold={.08} delay={delay} ease="power3.out">{children}</AnimatedContent>:children}</Suspense></div>;
}
export function BitsReading({text}:{text:string}){
 const {ref,active}=useNearViewport<HTMLDivElement>();const fallback=<p className="about-lede">{text}</p>;
 return <div ref={ref} className="about-lede-frame"><Suspense fallback={fallback}>{active?<ScrollReveal containerClassName="about-lede" textClassName="about-lede-words" enableBlur={false} baseOpacity={.7} baseRotation={0} effect="fade" splitBy="words" smoothing={.4} wordAnimationEnd="bottom 50%">{text}</ScrollReveal>:fallback}</Suspense></div>;
}
const blurFrom={filter:'blur(4px)',opacity:.7,y:24};const blurTo=[{filter:'blur(0px)',opacity:1,y:0}];const blurEase=[.22,1,.36,1] as [number,number,number,number];
export function BitsName({text}:{text:string}){
 const {ref,active}=useNearViewport<HTMLSpanElement>('0px 0px -18%',loadBlur);
 return <span ref={ref} className="about-blur-line"><Suspense fallback={<span>{text}</span>}>{active?<BlurText text={text} className="about-blur-text" animateBy="words" trigger="load" animationFrom={blurFrom} animationTo={blurTo} easing={blurEase} stepDuration={.65} delay={50}/>:<span>{text}</span>}</Suspense></span>;
}

export function BitsFloat({text}:{text:string}){
 const {ref,active}=useNearViewport<HTMLSpanElement>();
 return <span ref={ref} className="contact-float-line"><Suspense fallback={<span>{text}</span>}>{active?<ScrollFloat splitBy="chars" distance={48} stretch={1} stagger={.025} ease="power3.out" scrollStart="top 88%" scrollEnd="top 42%" smoothing={.55}>{text}</ScrollFloat>:<span>{text}</span>}</Suspense></span>;
}
export function BitsCount({value}:{value:number}){
 const {ref,active}=useNearViewport<HTMLElement>('0px 0px -12%');
 return <strong ref={ref}><span className="sr-only">{value}</span><span aria-hidden="true"><Suspense fallback={value}>{active?<CountUp to={value} duration={.7} easing="expo" trigger="load"/>:value}</Suspense></span></strong>;
}
