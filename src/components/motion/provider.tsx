'use client';
import {useEffect,useRef,useState,type ReactNode} from 'react';
import dynamic from 'next/dynamic';
import {usePathname} from 'next/navigation';
const Engine=dynamic(()=>import('./engine'),{ssr:false});
export function MotionProvider({children}:{children:ReactNode}){
 const isEditor=usePathname().startsWith('/keystatic');const ref=useRef<HTMLDivElement>(null);
 const [enhanced,setEnhanced]=useState(false);
 useEffect(()=>{if(isEditor)return;const activate=()=>setEnhanced(true);const events=['wheel','touchstart','scroll','keydown'] as const;events.forEach(e=>window.addEventListener(e,activate,{once:true,passive:true}));return()=>events.forEach(e=>window.removeEventListener(e,activate));},[isEditor]);
 if(isEditor)return <>{children}</>;
 return <div ref={ref}>{enhanced?<Engine container={ref}/>:null}{children}</div>;
}
