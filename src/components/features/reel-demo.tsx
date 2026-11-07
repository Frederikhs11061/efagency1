"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Play, Pause, Arrow } from '@/components/ui/icons';
const frames=[{src:'/images/clapperboard.jpg',text:'Det starter med en idé.',label:'Idé & optagelse'},{src:'/images/coffee.jpg',text:'Et øjeblik værd at se.',label:'Klip & fortælling'},{src:'/images/shoe.jpg',text:'Skabt til at skille sig ud.',label:'Klar til dit feed'}];
export function ReelDemo() {
 const [playing,setPlaying]=useState(false);const [frame,setFrame]=useState(0);
 useEffect(()=> {
 if(!playing)return;
 let n=0;
 const id=window.setInterval(()=> {n++;if(n>=frames.length){setPlaying(false);setFrame(0);window.clearInterval(id);}else setFrame(n);},1800);
 return ()=>window.clearInterval(id);
 },[playing]);
 return <div className={`film-stage ${playing?'is-playing':''}`}>
 <div className="film-photo">{frames.map((f,i)=><Image key={f.src} src={f.src} alt={i===0?'Filmklap holdt foran en åben himmel. Illustrationsfoto.':''} fill preload={i===0} fetchPriority={i===0?'high':undefined} quality={80} sizes="(max-width: 700px) 100vw, 95vw" className={`reel-frame ${i===frame?'is-active':''}`} />)}</div>
 <div className="film-top"><span><span className="record-dot"/> EF Agency — The short story</span><span className="format-label">Et nyt perspektiv på dit content</span></div>
 <div className="crop-frame" aria-hidden="true"><i/><i/><i/><i/><span>9:16</span></div>
 <div className="film-caption">{playing?<span className="film-caption-label">{frames[frame].label}</span>:null}<p key={frame}>{playing?frames[frame].text:<>Råt materiale.<br/>Stærk fortælling.</>}</p></div>
 <div className="film-bottom"><span>Visuelt koncept · ikke kundearbejde</span><button onClick={()=>{setFrame(0);setPlaying(!playing);}} >{playing?<Pause/>:<Play/>}{playing?'Stop koncept':'Se et visuelt koncept'}<Arrow diagonal/></button></div>
 <div className="film-playhead" aria-hidden="true"><span style={{transform:`scaleX(${playing?(frame+1)/3:.22})`}}/></div>
 </div>;
}
