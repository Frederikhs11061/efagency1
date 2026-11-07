'use client';
import {useEffect,type RefObject} from 'react';
import Lenis from 'lenis';
import {gsap,ScrollTrigger,useGSAP} from '@/lib/gsap';
export default function MotionEngine({container}:{container:RefObject<HTMLDivElement|null>}){
 useEffect(()=>{const query=window.matchMedia('(prefers-reduced-motion: reduce)');let dispose=()=>{};const setup=()=>{dispose();dispose=()=>{};if(query.matches)return;const lenis=new Lenis({autoRaf:false,anchors:true,syncTouch:false,duration:1.05});lenis.on('scroll',ScrollTrigger.update);const tick=(time:number)=>lenis.raf(time*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);dispose=()=>{lenis.off('scroll',ScrollTrigger.update);gsap.ticker.remove(tick);lenis.destroy();gsap.ticker.lagSmoothing(500,33);};};setup();query.addEventListener('change',setup);return()=>{dispose();query.removeEventListener('change',setup);};},[]);
 useGSAP(()=>{if(!container.current?.querySelector('.hero'))return;const mm=gsap.matchMedia();mm.add({desktop:'(min-width: 900px)',motion:'(prefers-reduced-motion: no-preference)'},ctx=>{
 if(!ctx.conditions?.motion)return;
 gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:30,duration:.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 94%',once:true}}));
 gsap.utils.toArray<HTMLElement>('.project').forEach(project=>{
  gsap.fromTo(project.querySelector('.project-visual'),{scale:1.1,yPercent:3,opacity:.65},{scale:1,yPercent:-2,opacity:1,ease:'none',scrollTrigger:{trigger:project,start:'top 95%',end:'top 20%',scrub:.8}});
  gsap.from(project.querySelector('.project-display'),{y:45,duration:1,ease:'power3.out',scrollTrigger:{trigger:project,start:'top 75%',once:true}});
 });
 gsap.from('.contact-heading h2>span',{y:40,opacity:.6,duration:.9,stagger:.1,ease:'power3.out',scrollTrigger:{trigger:'.contact-heading',start:'top 85%',once:true}});
 gsap.to('.image-marquee>.animate-marquee',{xPercent:-30,ease:'none',scrollTrigger:{trigger:'.film-strip',start:'top bottom',end:'bottom top',scrub:1}});
 if(ctx.conditions.desktop){
  gsap.to('.hero-art',{yPercent:14,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.to('.hero-title-wrap',{y:85,opacity:.55,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.7}});
  gsap.from('.statement-line:last-child',{x:60,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.statement',start:'top 75%',once:true}});
 }
 });return()=>mm.revert();},{scope:container});
 return null;
}
