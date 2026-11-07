'use client';

// React Bits — Copyright (c) 2026 David Haz.
// Adapted under MIT + Commons Clause; see docs/licenses/react-bits-LICENSE.md.

// React Bits SplitText (MIT + Commons Clause), adapted from the installed official registry source.
// Retains font readiness, GSAP word splitting, timeline and cleanup. Unused hover
// physics, alternate effects and loops are omitted from this site's load-only use.
import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {gsap} from 'gsap';
import {SplitText as GSAPSplitText} from 'gsap/SplitText';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(GSAPSplitText,useGSAP);
type Props={text:string;tag?:'span';splitType?:'words';trigger?:'load';className?:string;textAlign?:CSSProperties['textAlign'];duration?:number;delay?:number;ease?:string;from?:gsap.TweenVars;to?:gsap.TweenVars};
export default function SplitText({text,className='',textAlign='left',duration=.7,delay=45,ease='power3.out',from,to}:Props){
 const ref=useRef<HTMLSpanElement>(null);
 const [fontsLoaded,setFontsLoaded]=useState(false);
 useEffect(()=>{let active=true;document.fonts.ready.then(()=>{if(active)setFontsLoaded(true);});return()=>{active=false;};},[]);
 useGSAP(()=>{
  const el=ref.current;if(!el||!fontsLoaded)return;
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   const split=new GSAPSplitText(el,{
    type:'words',aria:'none',smartWrap:true,wordsClass:'split-word',reduceWhiteSpace:false,
    onSplit(self){return gsap.fromTo(self.words,from??{yPercent:95,opacity:1},{...to,yPercent:0,opacity:1,duration,ease,stagger:delay/1000});},
   });
   return()=>split.revert();
  });
  return()=>mm.revert();
 },{scope:ref,dependencies:[fontsLoaded,text,duration,delay,ease,from,to],revertOnUpdate:true});
 return <span ref={ref} className={`split-parent ${className}`} aria-hidden="true" style={{display:'inline-block',textAlign,wordWrap:'normal',visibility:'visible'}}>{text}</span>;
}
