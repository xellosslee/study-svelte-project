<script>
	export let visible = false

	import { Sidepanel } from 'svelte-mui/src'
</script>

<Sidepanel right bind:visible>
	<div class="logo" style="padding-left: 1rem;">Help</div>
	<p>
		<i style="padding: 12px;">Blank</i>
	</p>
</Sidepanel>

<style>
	.logo {
		height: 48px;
		padding: 0 4px;
		display: flex;
		align-items: center;
		color: #fff;
		background: var(--bg-app-bar);
	}
</style>
