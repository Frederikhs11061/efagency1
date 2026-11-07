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
 faq:z.array(z.object({question:text,answer:text})),
});
const parsed = schema.safeParse(source);
if (!parsed.success) throw new Error(`Indholdet kan ikke bygges: ${parsed.error.message}`);
export const content = parsed.data;
