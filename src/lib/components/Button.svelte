<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

	type Variant = 'primary' | 'secondary';

	interface BaseProps {
		variant?: Variant;
		class?: string;
		children: Snippet;
	}

	type ButtonProps = BaseProps &
		HTMLButtonAttributes & {
			href?: never;
		};

	type AnchorProps = BaseProps &
		HTMLAnchorAttributes & {
			href: string;
		};

	type Props = ButtonProps | AnchorProps;

	let { variant = 'primary', class: className = '', children, href, ...rest }: Props = $props();

	const baseClasses =
		'inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus-ring text-sm';

	const variantClasses: Record<Variant, string> = {
		primary: `
			bg-white text-black px-5 py-2.5
			hover:bg-white/90
			active:scale-[0.98]
		`,
		secondary: `
			bg-transparent text-white border border-white/20 px-5 py-2.5
			hover:bg-white/10 hover:border-white/40
			active:scale-[0.98]
		`
	};
</script>

{#if href}
	<a
		{href}
		class="{baseClasses} {variantClasses[variant]} {className}"
		{...rest as HTMLAnchorAttributes}
	>
		{@render children()}
	</a>
{:else}
	<button
		class="{baseClasses} {variantClasses[variant]} {className}"
		{...rest as HTMLButtonAttributes}
	>
		{@render children()}
	</button>
{/if}
