<script>
	export let visible = false
	export let currentPath = ''
	export let nav = []

	import { Button, Icon, Sidepanel } from 'svelte-mui/src'

	import { arrowBack } from './icons'
	import Nav from './nav/Nav.svelte'
</script>

<Sidepanel bind:visible disableScroll>
	<div class="logo">
		<Button
			icon
			color="inherit"
			on:click={() => {
				visible = false
			}}
		>
			<Icon path={arrowBack} />
		</Button>
		<span style="margin-left:4px;" />
	</div>

	<div style="padding: 8px 0;">
		<Nav
			routes={nav}
			{currentPath}
			on:click={() => {
				visible = false
			}}
		/>
	</div>
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
