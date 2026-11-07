import type { NextConfig } from 'next';
const dev=process.env.NODE_ENV === 'development';
const csp = ["default-src 'self'", `script-src 'self' 'unsafe-inline'${dev?" 'unsafe-eval'":''}`, "style-src 'self' 'unsafe-inline'", "img-src 'self' data: blob:", "font-src 'self'", `connect-src 'self'${dev?' ws:':''}`, "frame-ancestors 'none'", "base-uri 'self'", "form-action 'self'", "object-src 'none'"].join('; ');
const nextConfig: NextConfig = {
 poweredByHeader: false,
 turbopack: { root: process.cwd() },
 images: { qualities: [70, 80] },
 async headers() { return [{ source: '/(.*)', headers: [
 { key: 'Content-Security-Policy', value: csp },
 { key: 'X-Content-Type-Options', value: 'nosniff' },
 { key: 'X-Frame-Options', value: 'DENY' },
 { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
 { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
 { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
 ...(process.env.SITE_URL?.startsWith('https:') ? [{key:'Strict-Transport-Security',value:'max-age=31536000; includeSubDomains'}] : [])
 ] }]; }
};
export default nextConfig;
