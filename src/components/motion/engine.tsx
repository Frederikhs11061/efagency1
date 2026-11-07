'use client';
import {useEffect,type RefObject} from 'react';
import Lenis from 'lenis';
import {gsap,ScrollTrigger,useGSAP} from '@/lib/gsap';
export default function MotionEngine({container}:{container:RefObject<HTMLDivElement|null>}){
 useEffect(()=>{const query=window.matchMedia('(prefers-reduced-motion: reduce)');let dispose=()=>{};const setup=()=>{dispose();dispose=()=>{};if(query.matches)return;const lenis=new Lenis({autoRaf:false,anchors:true,syncTouch:false,duration:1.05});lenis.on('scroll',ScrollTrigger.update);const tick=(time:number)=>lenis.raf(time*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);dispose=()=>{lenis.off('scroll',ScrollTrigger.update);gsap.ticker.remove(tick);lenis.destroy();gsap.ticker.lagSmoothing(500,33);};};setup();query.addEventListener('change',setup);return()=>{dispose();query.removeEventListener('change',setup);};},[]);
 useGSAP(()=>{if(!container.current?.querySelector('.hero'))return;const mm=gsap.matchMedia();mm.add({desktop:'(min-width: 900px)',motion:'(prefers-reduced-motion: no-preference)'},ctx=>{
 if(!ctx.conditions?.motion)return;
 gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:30,duration:.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 84%',once:true}}));
 gsap.utils.toArray<HTMLElement>('.project').forEach(project=>{
  gsap.fromTo(project.querySelector('.project-visual'),{scale:1.16,yPercent:5},{scale:1,yPercent:-3,ease:'none',scrollTrigger:{trigger:project,start:'top 95%',end:'top 20%',scrub:.8}});
  gsap.from(project.querySelector('.project-display'),{y:65,ease:'none',scrollTrigger:{trigger:project,start:'top 90%',end:'top 40%',scrub:.65}});
 });
 gsap.utils.toArray<HTMLElement>('.process-list li').forEach(step=>{
  const timeline=gsap.timeline({scrollTrigger:{trigger:step,start:'top 84%',end:'top 38%',scrub:.55}});
  timeline.from(step.querySelector('.process-rule'),{scaleX:0,transformOrigin:'left',ease:'none'},0)
   .from(step.querySelector('.process-number'),{y:28,opacity:.4,ease:'power3.out'},0)
   .from(step.querySelector('h3 span'),{yPercent:95,ease:'power3.out'},0)
   .from(step.querySelector('p'),{x:18,opacity:.7,ease:'power3.out'},.12);
 });
 gsap.to('.image-marquee>.animate-marquee',{xPercent:-30,ease:'none',scrollTrigger:{trigger:'.film-strip',start:'top bottom',end:'bottom top',scrub:1}});
 if(ctx.conditions.desktop){
  gsap.to('.hero-art',{yPercent:14,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.to('.hero-title-wrap',{y:85,opacity:.55,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.7}});
  gsap.from('.statement-line:last-child',{x:60,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.statement',start:'top 75%',once:true}});
 }
 });return()=>mm.revert();},{scope:container});
 return null;
}
