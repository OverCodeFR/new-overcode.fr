import fs from 'fs';
import path from 'path';

const domain = 'https://www.overcode.fr';

const staticPages = [
    '', // page d'accueil
    'mentions-legales',
    'cgv',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
    .map((page) => {
        return `
  <url>
    <loc>${domain}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('✅ sitemap.xml généré dans /public');
