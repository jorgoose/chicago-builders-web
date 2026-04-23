<script lang="ts">
	import './layout.css';
	import { Footer, Navigation } from '$lib/components';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
	<title>Chicago Builders</title>
	<meta
		name="description"
		content="A social club for people building things in Chicago."
	/>

	<!-- Open Graph defaults -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Chicago Builders" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content="https://chicagobuilders.io/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Chicago Builders — a social club for people building things in Chicago" />

	<!-- Twitter Card defaults -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://chicagobuilders.io/og-image.png" />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Chicago Builders",
		"url": "https://chicagobuilders.io",
		"description": "A social club for people building things in Chicago.",
		"sameAs": [
			"https://www.instagram.com/chicagobuilders/",
			"https://luma.com/chicago-builders"
		]
	})}</script>`}
</svelte:head>

<Navigation />

<main>
	{@render children()}
</main>

<Footer />
