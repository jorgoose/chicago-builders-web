<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<span class="font-mono text-xs tracking-widest text-white/40 uppercase">
	{@render children()}
</span>
