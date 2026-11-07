import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { MotionProvider } from '@/components/motion/provider';
import { siteUrl, indexable } from '@/lib/pages';
import './globals.css';
const display=localFont({src:'../../public/fonts/barlow-condensed.woff2',weight:'700',variable:'--font-display',display:'swap'});
const body=localFont({src:'../../public/fonts/manrope.woff2',variable:'--font-body',display:'swap'});
export const metadata: Metadata = {
 metadataBase:new URL(siteUrl ?? 'http://localhost:3000'),
 title:'Kortvideoer til TikTok og Reels for din virksomhed | EF Agency',
 description:'EF Agency skaber kortvideoer til TikTok og Instagram Reels. Få hjælp til klipning, undertekster, idéer og filmning, så din virksomhed bliver set online.',
 robots:{index:indexable,follow:indexable},
 openGraph:{title:'EF Agency — Ikke bare endnu et opslag.',description:'Kreativt indhold og kortvideoer til virksomheder, der vil skille sig ud.',locale:'da_DK',type:'website',images:[{url:'/opengraph-image',width:1200,height:630}]},
 twitter:{card:'summary_large_image'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="da" className={`${display.variable} ${body.variable}`}><body><a className="skip-link" href="#main">Spring til indhold</a><MotionProvider>{children}</MotionProvider></body></html>;}
