"use client";
import {useEffect,useRef,useState,type ReactNode} from 'react';
import dynamic from 'next/dynamic';
import {usePathname} from 'next/navigation';
import {Play,Pause} from '@/components/ui/icons';
// This contains no content; load scroll choreography when scrolling is needed.
const Engine=dynamic(()=>import('./engine'),{ssr:false});
export function MotionProvider({children}:{children:ReactNode}){
 const isEditor=usePathname().startsWith('/keystatic');
 const ref=useRef<HTMLDivElement>(null);
 const [paused,setPaused]=useState(false);
 const [enhanced,setEnhanced]=useState(false);
 useEffect(()=>{
 if(isEditor)return;
 const activate=()=>setEnhanced(true);
 const events=['wheel','touchstart','scroll','keydown'] as const;
 events.forEach(e=>window.addEventListener(e,activate,{once:true,passive:true}));
 return ()=>events.forEach(e=>window.removeEventListener(e,activate));
 },[isEditor]);
 if(isEditor)return <>{children}</>;
 return <div ref={ref} data-motion-paused={paused?'true':'false'}>{enhanced?<Engine container={ref} paused={paused}/>:null}{children}<button className="motion-toggle" aria-label={paused?'Afspil bevægelse':'Pause bevægelse'} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?<Play/>:<Pause/>}<span>{paused?'Afspil bevægelse':'Pause bevægelse'}</span></button></div>;
}
