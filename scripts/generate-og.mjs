import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const OUT = 'static/og-image.png';

const bebasURL =
	'https://raw.githubusercontent.com/google/fonts/main/ofl/bebasneue/BebasNeue-Regular.ttf';

const bebas = await fetch(bebasURL).then((r) => r.arrayBuffer());

const element = {
	type: 'div',
	props: {
		style: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			width: '100%',
			height: '100%',
			backgroundColor: '#000',
			padding: '72px 80px',
			fontFamily: 'Bebas Neue'
		},
		children: [
			{
				type: 'div',
				props: {
					style: {
						color: 'rgba(255,255,255,0.5)',
						fontSize: 28,
						letterSpacing: '0.15em'
					},
					children: 'A SOCIAL CLUB FOR PEOPLE BUILDING THINGS IN CHICAGO'
				}
			},
			{
				type: 'div',
				props: {
					style: {
						color: '#fff',
						fontSize: 260,
						lineHeight: 0.85,
						letterSpacing: '-0.02em',
						display: 'flex',
						flexDirection: 'column'
					},
					children: [
						{ type: 'div', props: { children: 'Chicago' } },
						{
							type: 'div',
							props: { style: { color: 'rgba(255,255,255,0.55)' }, children: 'Builders' }
						}
					]
				}
			},
			{
				type: 'div',
				props: {
					style: {
						color: 'rgba(255,255,255,0.4)',
						fontSize: 24,
						letterSpacing: '0.2em'
					},
					children: 'CHICAGOBUILDERS.IO'
				}
			}
		]
	}
};

const svg = await satori(element, {
	width: 1200,
	height: 630,
	fonts: [{ name: 'Bebas Neue', data: bebas, weight: 400, style: 'normal' }]
});

const png = new Resvg(svg).render().asPng();
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, png);
console.log(`Wrote ${OUT} (${png.length} bytes)`);
