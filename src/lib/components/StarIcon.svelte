<script lang="ts">
	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<svg viewBox="0 0 24 24" fill="currentColor" class={className}>
	<path
		d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
		fill="currentColor"
	/>
</svg>






