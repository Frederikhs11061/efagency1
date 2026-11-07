import { ImageResponse } from 'next/og';
export const alt='EF Agency — Ikke bare endnu et opslag.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function OG(){return new ImageResponse(<div style={{width:'100%',height:'100%',background:'#101110',color:'#f7f7f2',padding:65,display:'flex',flexDirection:'column',justifyContent:'space-between'}}><div style={{display:'flex',fontSize:40,fontWeight:600}}>ef | agency.</div><div style={{display:'flex',flexDirection:'column',fontSize:84,fontWeight:700,lineHeight:1,letterSpacing:-3}}><span>IKKE BARE</span><span>ENDNU ET OPSLAG.</span></div><div style={{display:'flex',justifyContent:'space-between',fontSize:24,color:'#ffd85a'}}><span>Videoredigering & content</span><span>EF Agency ↗</span></div></div>,size);}
