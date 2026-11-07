import type { MetadataRoute } from 'next';
import { pages, siteUrl, indexable } from '@/lib/pages';
import { content } from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap {return indexable && siteUrl?pages.filter(p=>p.index).map(p=>({url:`${siteUrl}${p.path}`,lastModified:content.lastUpdated})):[];}
