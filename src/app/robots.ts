import type { MetadataRoute } from 'next';
import { siteUrl, indexable } from '@/lib/pages';
export default function robots():MetadataRoute.Robots {return {rules:{userAgent:'*',disallow:indexable?['/api/','/keystatic/']:['/']},...(indexable && siteUrl?{sitemap:`${siteUrl}/sitemap.xml`}:{})};}
