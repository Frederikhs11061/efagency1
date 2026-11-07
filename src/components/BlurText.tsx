/**
 * React Bits BlurText, MIT. Installed from @react-bits/BlurText-TS-TW.
 * Server/CSS adaptation of its word-stagger: preserve split-word structure,
 * remove unused effects, keep server text visible and avoid hydration work.
 * https://github.com/DavidHDev/react-bits
 */
import type {CSSProperties} from 'react';
export default function BlurText({text}:{text:string}){
 const words=text.split(' ');
 return <span className="hero-text">{words.map((word,index)=><span key={`${word}-${index}`} aria-hidden="true" className="hero-word" style={{'--word-delay':`${index*70}ms`} as CSSProperties}>{word}{index<words.length-1?' ':null}</span>)}</span>;
}
