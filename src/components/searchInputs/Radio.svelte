<script>
	import { radioChecked, radioUnchecked } from '../icons'
	import Icon from '../icons/Icon.svelte'
	export let value = ''
	export let readonly = false
	export let disabled = false
	export let required = false
	export let title = null
	export let label = ''
	export let message = ''
	export let attrs = {}
	export let options = {}
	$: {
		attrs = {
			disabled: disabled ? disabled : undefined,
			readonly: readonly ? readonly : undefined,
		}
		value
	}
</script>

<div class="wrapper">
	<div class="item" {title}>
		<span class="label"
			>{label}
			{#if required}
				*
			{/if}
		</span>
		{#each Object.entries(options) as [key, val]}
			<label>
				{key}
				<input type="radio" hidden bind:group={value} value={val} {...attrs} on:change />
				<Icon size="18" color="var(--primary)" path={value === val ? radioChecked : radioUnchecked} />
			</label>
		{/each}
	</div>
	{#if !!message}
		<div class="message">{message}</div>
	{/if}
</div>

<style>
	.wrapper {
		width: 100%;
		font-size: 12px;
	}
	.wrapper > .item {
		display: flex;
		align-items: center;
		border: 0.5px solid var(--border);
		height: 30px;
		box-sizing: border-box;
	}
	.wrapper > .item .label {
		margin: 0 10px;
	}
	.wrapper > .item label {
		margin: 0 10px 0 0;
		line-height: 30px;
	}
	.wrapper > .item input {
		margin: 0 5px;
		vertical-align: middle;
		background: inherit;
		border: none;
		color: white;
	}
	.wrapper :global(.thin) {
		margin-top: -8px !important;
	}
	.message {
		color: var(--accent);
	}
</style>
