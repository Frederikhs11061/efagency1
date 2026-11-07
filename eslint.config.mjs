// Native brand anchors deliberately restore document position; Next router preserves it for the full-height main target.
import { defineConfig, globalIgnores } from 'eslint/config';
import next from 'eslint-config-next/core-web-vitals';
import ts from 'eslint-config-next/typescript';
export default defineConfig([...next, ...ts, {files:['src/components/features/header.tsx','src/components/features/footer.tsx'],rules:{'@next/next/no-html-link-for-pages':'off'}}, globalIgnores(['.next/**','.agents/**','.impeccable/**','work/**','next-env.d.ts'])]);
