import { z } from 'zod';
import source from '../../content/site.json';
const text = z.string().trim().min(1);
const schema = z.object({
 lastUpdated: z.iso.date().refine(v => Date.parse(v) <= Date.now(), 'Datoen må ikke være i fremtiden'),
 name:text, email:z.email(), description:text,
 hero:z.object({line1:text,line2:text,intro:text}),
 services:z.array(z.object({title:text,description:text,tags:z.array(text)})),
 packages:z.array(z.object({name:text,count:z.number().int().positive(),description:text,features:z.array(text)})),
 founders:z.array(z.object({name:text,initials:text,role:text,description:text})),
 editorial:z.object({heroLines:z.array(text),heroCta:text,workCta:text,workTitle:text,workIntro:text,servicesTitle:z.array(text),servicesIntro:text,processTitle:text,processIntro:text,packagesTitle:z.array(text),packagesIntro:text,aboutTitle:z.array(text),aboutIntro:text,aboutBody:text,faqTitle:text,contactTitle:z.array(text),contactIntro:text,footerLine:text}),
 projects:z.array(z.object({slug:text,title:text,subtitle:text,image:text,alt:text,description:text,note:text,type:text})),
 process:z.array(z.object({title:text,description:text})),
 faq:z.array(z.object({question:text,answer:text})),
});
const parsed = schema.safeParse(source);
if (!parsed.success) throw new Error(`Indholdet kan ikke bygges: ${parsed.error.message}`);
export const content = parsed.data;
