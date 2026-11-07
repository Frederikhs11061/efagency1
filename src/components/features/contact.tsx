"use client";
import Link from 'next/link';
import { useState } from 'react';
import {contactSchema,buildContactMailto} from '@/lib/contact';
import { Arrow } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
export function Contact({email,packages}:{email:string,packages:string[]}) {
 const [status,setStatus]=useState('');
 return <form action={`mailto:${email}`} method="get" className="contact-form" onSubmit={e=>{
 e.preventDefault();const fd=new FormData(e.currentTarget);const parsed=contactSchema.safeParse(Object.fromEntries(fd));
 if(!parsed.success){setStatus('Udfyld navn, en gyldig e-mail og mindst 10 tegn om dit projekt.');return;}
 window.location.href=buildContactMailto(email,parsed.data);
 setStatus('Din mailapp åbnes med beskeden. Send den derfra for at kontakte os.');
 }}>
 <div className="field-row"><label>Dit navn<input name="name" autoComplete="name" minLength={2} maxLength={100} required placeholder="Hvad hedder du?"/></label><label>Din e-mail<input name="email" type="email" autoComplete="email" required placeholder="dig@virksomhed.dk"/></label></div>
 <label>Hvad har du i tankerne?<textarea name="message" required minLength={10} maxLength={3000} rows={3} placeholder="Fortæl lidt om din virksomhed og den slags indhold, du drømmer om."/></label>
 <label>Hvilken pakke er du nysgerrig på?<select name="package" defaultValue="Lad os finde ud af det"><option>Lad os finde ud af det</option>{packages.map(p=><option key={p}>{p}</option>)}</select></label>
 <div className="form-bottom"><p>Vi åbner din mailapp med beskeden.<br/><Link href="/privatliv">Sådan behandler vi dine oplysninger</Link></p><Button type="submit" className="contact-submit">Skriv til os <Arrow diagonal/></Button></div>
 <p role="status" className="form-status">{status}</p>
 </form>;
}
