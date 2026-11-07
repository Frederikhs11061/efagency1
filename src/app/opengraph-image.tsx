import { ImageResponse } from 'next/og';
export const alt='EF Agency — Kortvideoer. Stort indtryk.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function OG(){return new ImageResponse(<div style={{width:'100%',height:'100%',background:'#f3f1eb',color:'#20211f',padding:70,display:'flex',flexDirection:'column',justifyContent:'space-between'}}><div style={{display:'flex',fontSize:42,fontWeight:600}}>ef / agency.</div><div style={{display:'flex',flexDirection:'column',fontSize:94,lineHeight:1.06,letterSpacing:-4}}><span>Kortvideoer.</span><span style={{color:'#c63e2d'}}>Stort indtryk.</span></div><div style={{display:'flex',justifyContent:'space-between',fontSize:20}}><span>Kreativt indhold til TikTok & Reels</span><span>EF Agency</span></div></div>,size);}
