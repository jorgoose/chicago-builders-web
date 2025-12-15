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
</svelte:head>

<Navigation />

<main>
	{@render children()}
</main>
