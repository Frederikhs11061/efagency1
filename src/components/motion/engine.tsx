"use client";
import {useEffect,type RefObject} from 'react';
import Lenis from 'lenis';
import {gsap,ScrollTrigger,useGSAP} from '@/lib/gsap';
export default function MotionEngine({container,paused}:{container:RefObject<HTMLDivElement|null>;paused:boolean}){
 const ref=container;
 useEffect(()=> {
 const query=window.matchMedia('(prefers-reduced-motion: reduce)');
 let dispose=()=>{};
 const setup=()=> {
 dispose(); dispose=()=>{}; if(query.matches || paused)return;
 const lenis=new Lenis({autoRaf:false,anchors:true,smoothWheel:true,syncTouch:false,duration:1.05});
 lenis.on('scroll',ScrollTrigger.update);
 const tick=(time:number)=>lenis.raf(time*1000);
 gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);
 dispose=()=> {lenis.off('scroll',ScrollTrigger.update);gsap.ticker.remove(tick);lenis.destroy();gsap.ticker.lagSmoothing(500,33);};
 };setup();query.addEventListener('change',setup);
 return ()=>{dispose();query.removeEventListener('change',setup);};
 },[paused]);
 useGSAP(()=> {
 const mm=gsap.matchMedia();
 mm.add({desktop:'(min-width: 900px)',motion:'(prefers-reduced-motion: no-preference)'},context=> {
 if(paused || !context.conditions?.motion)return;
 gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:34,duration:.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
 if(context.conditions.desktop) {
 gsap.to('.film-photo',{yPercent:9,ease:'none',scrollTrigger:{trigger:'.film-stage',start:'top bottom',end:'bottom top',scrub:1}});
 gsap.fromTo('.crop-frame',{scaleX:1.8},{scaleX:1,ease:'none',scrollTrigger:{trigger:'.film-stage',start:'top 85%',end:'center 30%',scrub:.7}});
 gsap.to('.case-image-shoe',{yPercent:-8,ease:'none',scrollTrigger:{trigger:'.case-shoe',start:'top bottom',end:'bottom top',scrub:1}});
 gsap.to('.process-progress',{scaleY:1,transformOrigin:'top',ease:'none',scrollTrigger:{trigger:'.process-steps',start:'top center',end:'bottom center',scrub:.5}});
 }
 }); return ()=>mm.revert();
 },{scope:ref,dependencies:[paused],revertOnUpdate:true});
return null;
}
