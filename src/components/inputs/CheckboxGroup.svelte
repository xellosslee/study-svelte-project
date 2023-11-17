<script>
	import { Checkbox } from 'svelte-mui'

	export let list = []
	export let data = []

	// Checkbox 'All' reactive properties
	$: checked = data.length === list.length
	$: indeterminate = data.length > 0 && data.length < list.length

	function onAll(e) {
		let on = e.target.checked

		data = on ? Array.from(list) : []
	}
</script>

<div class="wrapper">
	<Checkbox on:change={onAll} {checked} {indeterminate}>All</Checkbox>
	<hr style="margin-bottom: 6px;" />
	{#each list as t}
		<Checkbox class="thin" bind:group={data} value={t}>
			{t}
		</Checkbox>
	{/each}
</div>

<style>
	.wrapper {
		width: 100%;
	}
	.wrapper :global(.thin) {
		margin-top: -8px !important;
	}
</style>
