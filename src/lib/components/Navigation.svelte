<script lang="ts">
	import Button from './Button.svelte';
	import StarIcon from './StarIcon.svelte';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	const navLinks = [
		{ label: 'About', href: '#about' },
		{ label: 'Philosophy', href: '#philosophy' },
		{ label: 'Community', href: '#community' }
	];
</script>

<nav class="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-sm">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
		<!-- Logo -->
		<a href="/" class="group flex items-center gap-3">
			<StarIcon class="h-5 w-5 text-white transition-transform group-hover:rotate-45" />
			<span class="font-display text-xl tracking-wide text-white">Chicago Builders</span>
		</a>

		<!-- Desktop Navigation -->
		<div class="hidden items-center gap-1 md:flex">
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					class="px-4 py-2 text-sm text-white/60 transition-colors hover:text-white"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Desktop CTA -->
		<div class="hidden md:block">
			<Button href="https://lu.ma/chicago-builders">Join Us</Button>
		</div>

		<!-- Mobile Menu Toggle -->
		<button
			onclick={toggleMenu}
			class="flex h-10 w-10 items-center justify-center text-white/60 transition-colors hover:text-white md:hidden"
			aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={isMenuOpen}
		>
			{#if isMenuOpen}
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M18 6L6 18M6 6l12 12" />
				</svg>
			{:else}
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div class="border-t border-white/10 bg-black md:hidden">
			<div class="flex flex-col gap-1 p-4">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						onclick={() => (isMenuOpen = false)}
						class="px-4 py-3 text-white/60 transition-colors hover:text-white"
					>
						{link.label}
					</a>
				{/each}
				<div class="mt-4">
					<Button href="https://lu.ma/chicago-builders" class="w-full">Join Us</Button>
				</div>
			</div>
		</div>
	{/if}
</nav>
