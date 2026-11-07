import Image,{getImageProps} from 'next/image';
import {content} from '@/lib/content';
import {anchor,siteUrl,indexable} from '@/lib/pages';
import {Header} from '@/components/features/header';
import {Footer} from '@/components/features/footer';
import {Contact} from '@/components/features/contact';
import {DeferredText} from '@/components/motion/deferred-text';
import {BitsReveal,BitsReading,BitsName,BitsFloat,BitsCount} from '@/components/motion/react-bits';
import Magnet from '@/components/Magnet';
import {HeroText} from '@/components/motion/hero-text';
import {Marquee} from '@/components/ui/marquee';
import {Check} from '@/components/ui/icons';
export const dynamic='force-static';
export const metadata={alternates:siteUrl?{canonical:siteUrl}:undefined};
export default function Home(){const c=content;const e=c.editorial;const mobile=getImageProps({src:'/images/hero-mobile-v4.jpg',alt:'',width:941,height:1672,quality:80,sizes:'100vw'}).props;const desktop=getImageProps({src:'/images/hero-v2.jpg',alt:'',width:1672,height:941,quality:80,sizes:'100vw',loading:'eager',fetchPriority:'high'}).props;return <>
 <Header/>
 <main id="main">
 <section className="hero" aria-labelledby="hero-title">
  <div className="hero-art"><picture><source media="(max-width: 600px) and (orientation: portrait)" srcSet={mobile.srcSet} sizes="100vw"/><img {...desktop} alt=""/></picture></div>
  <div className="hero-shade"/>
  <div className="hero-inner shell"><div className="hero-title-wrap"><h1 id="hero-title" aria-label={e.heroLines.join(' ')}>{e.heroLines.map(line=><HeroText key={line} text={line}/>)}</h1></div>
   <div className="hero-bottom"><div className="hero-intro"><p>{c.hero.intro}</p><div className="hero-actions"><Magnet padding={18} magnetStrength={7} maxOffset={5} spring={{stiffness:190,damping:30,mass:1}} wrapperClassName="magnet-wrapper" innerClassName="magnet-inner"><a className="button-primary" href={anchor('kontakt')}>{e.heroCta}</a></Magnet><a className="hero-work-link" href={anchor('cases')}>{e.workCta}</a></div></div></div>
  </div>
 </section>
 <section className="work section shell" id="cases" aria-labelledby="work-title">
  <div className="work-intro" data-reveal><h2 id="work-title">{e.workTitle}</h2><p>{e.workIntro}</p></div>
  <div className="project-grid">{c.projects.map((p,i)=><details className={`project project-${i}`} key={p.slug}>
   <summary><div className="project-media"><div className="project-visual"><Image src={p.image} alt={p.alt} fill quality={80} sizes={i===2?'100vw':'(max-width: 700px) 100vw, 60vw'}/></div><h3 className="project-display">{p.title}</h3></div><div className="project-caption"><p>{p.type}</p><span>Se koncept</span></div></summary>
   <div className="project-body"><p>{p.description}</p><a className="text-link" href={anchor('kontakt')}>Lad os finde dit udtryk </a></div>
  </details>)}</div>
 </section>
 <section className="services light-section section" id="ydelser" aria-labelledby="services-title"><div className="shell">
  <div className="statement" data-reveal><h2 id="services-title" aria-label={e.servicesTitle.join(' ')}>{e.servicesTitle.map((line,i)=>i===1?<DeferredText key={line} text={line}/>:<span className="statement-line" key={line}>{line}</span>)}</h2><p>{e.servicesIntro}</p></div>
  <div className="services-list">{c.services.map((s,i)=><BitsReveal key={s.title} delay={i*.05}><article className="service-row"><h3>{s.title}</h3><p>{s.description}</p></article></BitsReveal>)}</div>
  <a className="text-link" href={anchor('pakker')}>Find din contentpakke </a>
 </div></section>
 <section className="process section shell" id="proces" aria-labelledby="process-title"><div className="process-intro" data-reveal><h2 id="process-title">{e.processTitle}</h2><p>{e.processIntro}</p></div><ol className="process-list">{c.process.map((s,i)=><li key={s.title}><span className="process-rule" aria-hidden="true"/><span className="process-number" aria-hidden="true">0{i+1}</span><div className="process-step"><h3><span>{s.title}</span></h3><p>{s.description}</p></div></li>)}</ol></section>
 <div className="film-strip" aria-label="Visuelle konceptretninger"><Marquee repeat={2} className="image-marquee">{c.projects.map(p=><div className="strip-frame" key={p.slug}><Image src={p.image} alt="" fill sizes="(max-width: 600px) 70vw, 35vw" quality={70}/><span>{p.title}</span></div>)}</Marquee></div>
 <section className="packages section shell" id="pakker" aria-labelledby="packages-title"><div className="section-heading" data-reveal><h2 id="packages-title">{e.packagesTitle.map(t=><span key={t}>{t}</span>)}</h2><p>{e.packagesIntro}</p></div><div className="package-list">{c.packages.map((p,i)=><article className={`package-row package-${i}`} key={p.name} data-reveal><div className="package-name"><h3>{p.name}</h3><p>{p.description}</p></div><div className="package-quantity"><BitsCount value={p.count}/><span>videoer<br/>pr. måned</span></div><ul>{p.features.map(f=><li key={f}><Check/>{f}</li>)}</ul><a className="package-link" href={`mailto:${c.email}?subject=${encodeURIComponent(`Lad os tale om ${p.name}`)}`}><span>Tal om {p.name}</span></a></article>)}</div></section>
 <section className="about light-section section" id="om-os" aria-labelledby="about-title"><div className="shell"><div className="about-intro"><h2 id="about-title" aria-label={e.aboutTitle.join(' ')}>{e.aboutTitle.map(t=><BitsName key={t} text={t}/>)}</h2><div className="about-copy" data-reveal><BitsReading text={e.aboutIntro}/><p>{e.aboutBody}</p><a className="text-link" href={anchor('kontakt')}>Tag en snak </a></div></div><div className="founders">{c.founders.map((f,i)=><BitsReveal key={f.name} delay={i*.08}><article className="founder"><h3>{f.name}</h3><p className="founder-role">{f.role}</p><p>{f.description}</p></article></BitsReveal>)}</div></div></section>
 <section className="faq section shell" id="faq" aria-labelledby="faq-title"><h2 id="faq-title" data-reveal>{e.faqTitle}</h2><div className="faq-list">{c.faq.map(f=><details key={f.question}><summary>{f.question}<span aria-hidden="true" className="details-plus"/></summary><p>{f.answer}</p></details>)}</div></section>
 <section className="contact section" id="kontakt" aria-labelledby="contact-title"><div className="shell"><div className="contact-heading"><h2 id="contact-title" aria-label={e.contactTitle.join(' ')}>{e.contactTitle.map(t=><BitsFloat key={t} text={t}/>)}</h2></div><div className="contact-grid"><div className="contact-copy"><p>{e.contactIntro}</p><a className="contact-email" href={`mailto:${c.email}`}>{c.email}</a></div><Contact email={c.email} packages={c.packages.map(p=>p.name)}/></div></div></section>
 </main><Footer email={c.email}/>
 {siteUrl&&indexable?<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':`${siteUrl}/#organization`,name:c.name,url:`${siteUrl}/`,email:c.email,founder:c.founders.map(f=>({'@type':'Person',name:f.name}))},{'@type':'WebSite','@id':`${siteUrl}/#website`,name:c.name,url:`${siteUrl}/`},{'@type':'WebPage','@id':`${siteUrl}/#webpage`,url:`${siteUrl}/`,name:e.heroLines.join(' '),dateModified:c.lastUpdated,isPartOf:{'@id':`${siteUrl}/#website`}}]}).replace(/</g,'\\u003c')}}/>:null}
 </>;}
