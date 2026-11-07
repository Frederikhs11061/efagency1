import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../../keystatic.config';
const handlers=makeRouteHandler({config});
export const GET=process.env.NODE_ENV === 'development'?handlers.GET:()=>new Response(null,{status:404});
export const POST=process.env.NODE_ENV === 'development'?handlers.POST:()=>new Response(null,{status:404});
