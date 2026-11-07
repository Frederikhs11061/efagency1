import type { SVGProps } from 'react';
export function Arrow({ diagonal = false, ...props }: SVGProps<SVGSVGElement> & { diagonal?: boolean }) {
 return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-6-6 6 6-6 6'} /></svg>;
}
export function Play(props: SVGProps<SVGSVGElement>) {return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="m9 5 11 7-11 7V5Z"/></svg>;}
export function Pause(props: SVGProps<SVGSVGElement>) {return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M7 5h4v14H7zm7 0h4v14h-4z"/></svg>;}
export function Check() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>; }
