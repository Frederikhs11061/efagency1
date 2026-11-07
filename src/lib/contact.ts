import {z} from 'zod';
export const contactSchema=z.object({name:z.string().trim().min(2).max(100),email:z.email(),message:z.string().trim().min(10).max(3000),package:z.string().max(100)}).strict();
export function buildContactMailto(recipient:string,input:z.infer<typeof contactSchema>){
 const data=contactSchema.parse(input);
 const subject=`Lad os tale content – ${data.name}`;
 const body=`Hej EF Agency,\n\n${data.message}\n\nPakke: ${data.package}\nNavn: ${data.name}\nE-mail: ${data.email}`;
 return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
