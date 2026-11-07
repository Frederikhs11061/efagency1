# Kilder og tilpasninger

- React Bits BlurText, MIT: https://github.com/DavidHDev/react-bits. Installeret med shadcn fra @react-bits/BlurText-TS-TW. Tilpasset til semantisk span, synlig servertekst, reduced motion og kun den brugte ord-stagger. Word-stagger kører som CSS ved første paint for at spare browserarbejde; H1 ejer den samlede tilgængelige tekst. Den komplette hentede kilde findes i arbejdsgrundlaget; den anvendte afledning er src/components/BlurText.tsx.
- Magic UI Marquee, MIT: https://magicui.design/docs/components/marquee og https://github.com/magicuidesign/magicui. Officielt registry: https://magicui.design/r/marquee.json. Tilføjet aria-hidden til gentagelser og projektets pause/reduced-motion-regler. Nødvendige animation-keyframes er lagt ind manuelt, fordi CLI-installationen kørte før globals.css var oprettet.
- shadcn/ui Button, MIT: https://ui.shadcn.com/docs/components/button. Installeret via CLI; import til projektets cn-hjælper rettet. Bruges i kontaktfeltet.
- Lenis, MIT: https://github.com/darkroomengineering/lenis.
- GSAP/ScrollTrigger og @gsap/react: https://gsap.com og https://github.com/greensock/react. Se pakkernes gældende licenser.
- Impeccable: https://impeccable.style. Installeret projektlokalt i .agents/skills/impeccable uden globale hooks. Context, init-reference, craft, ny designretning, craft-floor, audit, critique-reference og polish-reference læst. Manualens og ejerens direkte instruktion om ingen spørgsmål går forud for skill'ets interviews og valgside. Detektoren er kørt og resultatet dokumenteres i kvalitetsrapporten.
- Billeder/fontlicenser: public/images/CREDITS.json og public/fonts/*OFL.txt.
