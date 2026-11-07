import Image from 'next/image';
import { content } from '@/lib/content';
import { anchor, siteUrl, indexable } from '@/lib/pages';
import { Header } from '@/components/features/header';
import { Footer } from '@/components/features/footer';
import { Contact } from '@/components/features/contact';
import { ReelDemo } from '@/components/features/reel-demo';
import { HeroText } from '@/components/motion/hero-text';
import { Marquee } from '@/components/ui/marquee';
import { Arrow, Check } from '@/components/ui/icons';
export const dynamic='force-static';
export const metadata={alternates:siteUrl?{canonical:siteUrl}:undefined};
const steps=[
 ['Vi lærer dig at kende.','Hvad gør din virksomhed særlig? Vi taler om dine kunder, dit udtryk og det indhold, du har brug for.'],
 ['Du filmer. Eller vi gør.','Send os dine optagelser, eller lad os stå for idéer og en filmdag med Content Partner.'],
 ['Vi finder historien.','Klip, hooks, undertekster og musik. Vi samler de små detaljer, der giver videoen retning.'],
 ['Du ser. Vi finpudser.','Én korrekturrunde er med i alle pakker. Så får du færdige videoer, klar til dit feed.'],
];
export default function Home() {
 const c=content;
 return <>
 <Header/>
 <main id="main">
 <section className="hero shell" aria-labelledby="hero-title">

 <div className="hero-heading-row"><h1 id="hero-title" aria-label={`${c.hero.line1} ${c.hero.line2}`}><HeroText text={c.hero.line1}/><span className="hero-second"><HeroText text={c.hero.line2}/></span></h1><div className="hero-aside"><p>{c.hero.intro}</p><a className="button-primary" href={anchor('kontakt')}>Lad os skabe noget <Arrow diagonal/></a><a className="text-link" href={anchor('cases')}>Se, hvad vi har i tankerne <Arrow/></a></div></div>
 <ReelDemo/>
 <div className="hero-footnote"><span>Fra første idé til sidste frame.</span><span>Scroll og se historien <Arrow className="arrow-down"/></span></div>
 </section>
 <div className="capability-strip" aria-label="Vi arbejder med"><Marquee pauseOnHover repeat={3} className="capability-marquee">{['Idéer med retning','Klip med rytme','Ord, der rammer','Content med karakter'].map(t=><span className="marquee-item" key={t}>{t}<span className="marquee-divider" aria-hidden="true"/></span>)}</Marquee></div>
 <section className="services shell section" id="ydelser" aria-labelledby="services-title">
 <div className="section-intro" data-reveal><h2 id="services-title">Du har historien.<br/>Vi giver den <em>liv.</em></h2><div><p>Din virksomhed fortjener mere end bare endnu et opslag. Vi gør det nemmere at vise, hvad du kan, og hvem du er.</p><a className="text-link" href={anchor('pakker')}>Find din contentpakke <Arrow diagonal/></a></div></div>
 <div className="service-list">{c.services.map((s,i)=><article className="service-row" key={s.title} data-reveal><div className={`service-glyph service-glyph-${i}`} aria-hidden="true">{i===0?<><span/><span/><span/></>:i===1?<><span>Aa</span><i/></>:<><span/><span/></>}</div><h3>{s.title}</h3><div><p>{s.description}</p><ul className="tag-list">{s.tags.map(t=><li key={t}>{t}</li>)}</ul></div><Arrow diagonal className="service-arrow"/></article>)}</div>
 </section>
 <section className="cases dark-section section" id="cases" aria-labelledby="cases-title">
 <div className="shell"><div className="section-intro" data-reveal><h2 id="cases-title">Mindre forklaring.<br/><em>Mere fornemmelse.</em></h2><p>Vi er et nyt bureau. Her viser vi visuelle retninger, vi kan skabe — ikke kundecases eller resultater. Dit brand kunne blive vores næste historie.</p></div>
 <div className="case-grid">
 <article className="case-coffee" data-reveal><div className="case-image"><Image src="/images/coffee.jpg" alt="Kaffe hældes langsomt gennem et filter i en glaskande." fill quality={80} sizes="(max-width: 700px) 100vw, 55vw"/><span className="concept-label">Koncept / Kaffebar</span><div className="case-overlay-copy">God kaffe.<br/>God historie.</div><span className="case-format">9:16 · Social storytelling</span></div><div className="case-meta"><h3>Små øjeblikke. Stor appetit.</h3><span>Stemning, detaljer & håndværk</span></div><details className="case-details"><summary>Se idéen bag <Arrow diagonal/></summary><p>Et stemningsfuldt cafékoncept med fokus på hænder, kaffe og de små ritualer. Rolige nærbilleder møder et præcist klippet tempo og en enkel tekst. Illustrationsfoto; konceptet er ikke et udført kundeprojekt.</p></details></article>
 <article className="case-shoe" data-reveal><div className="case-image"><div className="case-image-shoe"><Image src="/images/shoe.jpg" alt="Rød sneaker fotograferet mod en rød baggrund." fill quality={80} sizes="(max-width: 700px) 100vw, 40vw"/></div><span className="concept-label">Koncept / Produkt</span><div className="case-overlay-copy">Skabt til<br/>bevægelse.</div><span className="case-format">9:16 · Product in focus</span></div><div className="case-meta"><h3>Et produkt med hovedrollen.</h3><span>Rytme, farve & attitude</span></div><details className="case-details"><summary>Se idéen bag <Arrow diagonal/></summary><p>Et produktkoncept, hvor form og farve er fortællingen. Skarpe klip, et tydeligt hook og enkel typografi giver produktet scenen. Illustrationsfoto; ingen forbindelse til eller opgave for det viste varemærke.</p></details></article>
 </div>
 <div className="case-close"><p>Vores første rigtige kundehistorier er stadig foran os.</p><a className="text-link" href={anchor('kontakt')}>Skal din være den næste? <Arrow diagonal/></a></div>
 </div>
 </section>
 <section className="process shell section" id="proces" aria-labelledby="process-title"><div className="process-heading" data-reveal><h2 id="process-title">Godt content.<br/>Enkel proces.</h2><p>Du skal kunne bruge tiden på din virksomhed. Vi gør vejen til færdige videoer overskuelig.</p><a className="text-link" href={anchor('kontakt')}>Start med en samtale <Arrow diagonal/></a></div><div className="process-steps"><div className="process-progress" aria-hidden="true"/><ol>{steps.map(([title,description],i)=><li key={title} data-reveal><span className="step-number">0{i+1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></div></section>
 <section className="packages section" id="pakker" aria-labelledby="packages-title"><div className="shell"><div className="section-intro" data-reveal><h2 id="packages-title">Find din rytme.<br/><em>Vi tager klipningen.</em></h2><p>Lidt at starte med eller en fast contentpartner? Vælg et udgangspunkt. Vi tager snakken om dit behov og aftaler pris og vilkår, før vi går i gang.</p></div><div className="package-grid">{c.packages.map((p,i)=><article key={p.name} className={`package package-${i}`} data-reveal><div className="package-top"><h3>{p.name}</h3><span>{i===2?'Hele vejen fra idé til feed':i===1?'Når du vil fylde mere':'Et godt sted at starte'}</span></div><p className="package-quantity"><strong>{p.count}</strong><span>videoer<br/>hver måned</span></p><p className="package-description">{p.description}</p><ul>{p.features.map(f=><li key={f}><Check/>{f}</li>)}</ul><a className={i===2?'button-primary':'button-outline'} href={`mailto:${c.email}?subject=${encodeURIComponent(`Lad os tale om ${p.name}`)}`}>Tal med os om {p.name}<Arrow diagonal/></a></article>)}</div><p className="package-note">Alle pakker har én korrekturrunde pr. video. Det endelige omfang aftaler vi sammen.</p></div></section>
 <section className="about shell section" id="om-os" aria-labelledby="about-title"><div className="about-heading" data-reveal><h2 id="about-title">To mennesker.<br/>Ét fælles <em>blik.</em></h2><div><p>Vi er Emil og Frederik. To kammerater, der har startet EF Agency for at hjælpe virksomheder med at få deres historier ud i verden.</p><p>Vi er i begyndelsen af vores egen historie. Derfor får du et tæt samarbejde med os, der både tager telefonen og sidder med detaljerne.</p></div></div><div className="founder-grid">{c.founders.map(f=><article className="founder" key={f.name} data-reveal><div className="founder-initials" aria-hidden="true">{f.initials}<span/></div><div><h3>{f.name}</h3><p className="founder-role">{f.role}</p><p>{f.description}</p></div></article>)}</div></section>
 <section className="faq shell section" id="faq" aria-labelledby="faq-title"><div data-reveal><h2 id="faq-title">Godt at vide.<br/>Før vi går i gang.</h2><p>Har du noget andet på hjerte?<br/><a className="text-link" href={`mailto:${c.email}`}>Så skriv til os <Arrow diagonal/></a></p></div><div className="faq-list">{c.faq.map(f=><details key={f.question}><summary>{f.question}<span className="details-plus" aria-hidden="true"/></summary><p>{f.answer}</p></details>)}</div></section>
 <section className="contact section" id="kontakt" aria-labelledby="contact-title"><div className="shell"><div className="contact-top" data-reveal><h2 id="contact-title">Din næste video<br/>starter med <em>hej.</em></h2><Arrow diagonal className="contact-big-arrow"/></div><div className="contact-grid"><div><p>En løs idé er rigeligt at starte med.<br/>Fortæl os om din virksomhed, så tager vi den derfra.</p><a className="contact-email" href={`mailto:${c.email}`}>{c.email}<Arrow diagonal/></a><p className="contact-personal">Du skriver direkte til Emil og Frederik.</p></div><Contact email={c.email} packages={c.packages.map(p=>p.name)}/></div></div></section>
 </main><Footer email={c.email}/>
 {siteUrl && indexable?<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':`${siteUrl}/#organization`,name:c.name,url:`${siteUrl}/`,email:c.email,founder:c.founders.map(f=>({'@type':'Person',name:f.name}))},{'@type':'WebSite','@id':`${siteUrl}/#website`,name:c.name,url:`${siteUrl}/`},{'@type':'WebPage','@id':`${siteUrl}/#webpage`,url:`${siteUrl}/`,name:'Kortvideoer. Stort indtryk.',dateModified:c.lastUpdated,isPartOf:{'@id':`${siteUrl}/#website`}}]}).replace(/</g,'\\u003c')}}/>:null}
 </>;
}
