<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components';
</script>

<svelte:head>
	<title>{page.status} · Chicago Builders</title>
</svelte:head>

<section
	class="relative flex min-h-[80vh] flex-col justify-center px-4 pt-20 md:px-6"
>
	<div class="mx-auto w-full max-w-6xl">
		<div class="mb-8 animate-fade-up">
			<p class="font-mono text-sm tracking-wide text-white/40">Error {page.status}</p>
			<h1
				class="mt-4 font-display text-[clamp(3rem,12vw,8rem)] leading-[0.85] tracking-tight text-white"
			>
				{page.status === 404 ? 'Page Not' : 'Something'}
				<br />
				<span class="text-white/60">{page.status === 404 ? 'Found' : 'Broke'}</span>
			</h1>
		</div>

		<div class="max-w-2xl animate-fade-up" style="animation-delay: 0.1s;">
			<p class="text-lg leading-relaxed text-white/60 md:text-xl">
				{page.status === 404
					? "That page doesn't exist. Head home or check the upcoming events."
					: page.error?.message || 'Something went wrong on our end.'}
			</p>
		</div>

		<div class="mt-10 flex animate-fade-up items-center gap-4" style="animation-delay: 0.2s;">
			<Button href="/">Back to Home</Button>
		</div>
	</div>
</section>
