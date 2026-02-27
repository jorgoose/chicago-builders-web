<script lang="ts">
	import './layout.css';
	import { Navigation } from '$lib/components';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap"
		rel="stylesheet"
	/>
	<title>Chicago Builders</title>
	<meta
		name="description"
		content="A social club for Chicago's engineers, designers, founders, and tinkers."
	/>

	<!-- Open Graph defaults -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Chicago Builders" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card defaults -->
	<meta name="twitter:card" content="summary" />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Chicago Builders",
		"url": "https://chicagobuilders.io",
		"description": "A social club for Chicago's engineers, designers, founders, and tinkers.",
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
