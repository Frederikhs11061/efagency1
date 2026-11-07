import { config, fields, singleton } from '@keystatic/core';
const text=(label:string)=>fields.text({label,validation:{isRequired:true}});
export default config({storage:{kind:'local'},singletons:{site:singleton({label:'EF Agency – indhold',path:'content/site',format:{data:'json'},schema:{
lastUpdated:fields.date({label:'Sidst opdateret',description:'Sæt dagens dato, når teksten ændres væsentligt.',validation:{isRequired:true}}),name:text('Firmanavn'),email:text('Kontaktmail'),description:fields.text({label:'Beskrivelse',multiline:true}),
hero:fields.object({line1:text('Overskrift første linje'),line2:text('Overskrift anden linje'),intro:fields.text({label:'Introduktion',multiline:true})},{label:'Hero'}),
services:fields.array(fields.object({title:text('Overskrift'),description:fields.text({label:'Beskrivelse',multiline:true}),tags:fields.array(text('Mærkat'),{label:'Mærkater',itemLabel:p=>p.value})}),{label:'Ydelser',itemLabel:p=>p.fields.title.value}),
packages:fields.array(fields.object({name:text('Pakkenavn'),count:fields.integer({label:'Antal videoer',validation:{isRequired:true,min:1}}),description:fields.text({label:'Beskrivelse',multiline:true}),features:fields.array(text('Inkluderet'),{label:'Inkluderet',itemLabel:p=>p.value})}),{label:'Pakker',itemLabel:p=>p.fields.name.value}),
founders:fields.array(fields.object({name:text('Navn'),initials:text('Initialer'),role:text('Rolle'),description:fields.text({label:'Beskrivelse',multiline:true})}),{label:'Stiftere',itemLabel:p=>p.fields.name.value}),
faq:fields.array(fields.object({question:text('Spørgsmål'),answer:fields.text({label:'Svar',multiline:true})}),{label:'Spørgsmål og svar',itemLabel:p=>p.fields.question.value})
}})}});
