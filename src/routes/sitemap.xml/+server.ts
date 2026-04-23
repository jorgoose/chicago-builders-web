import type { RequestHandler } from './$types';

const BASE = 'https://chicagobuilders.io';

const routes = [
	{ path: '/', priority: '1.0' },
	{ path: '/details', priority: '0.8' },
	{ path: '/why-chicago', priority: '0.8' }
];

const lastmod = new Date().toISOString().split('T')[0];

const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		({ path, priority }) =>
			`	<url>
		<loc>${BASE}${path}</loc>
		<lastmod>${lastmod}</lastmod>
		<priority>${priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>
`;

export const GET: RequestHandler = () =>
	new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600, s-maxage=86400'
		}
	});
