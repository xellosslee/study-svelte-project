<script>
	import updateHistory from './updateHistory.md'
	import { onMount } from 'svelte'
	onMount(async () => {})
</script>

<section>
	{@html updateHistory.html}
</section>

<style>
	section :global(p),
	section :global(li) {
		font-family: var(--code-font-family);
		font-size: 14px;
		letter-spacing: 0.01em;
		line-height: 1.5em;
	}
	section :global(pre) {
		background: #212121;
		color: #fff;
		border-radius: 4px;
		padding: 1rem;
		overflow-x: auto;
	}
	section :global(:not(pre) code),
	section :global(:not(pre) code) {
		font-size: 14px;
		color: var(--accent);
	}
</style>
