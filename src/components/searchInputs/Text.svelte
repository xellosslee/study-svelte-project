<script>
	import { Icon } from 'svelte-mui/src';
	import { edit } from '../icons';
    export let value = ''
    export let readonly = false
    export let disabled = false
    export let required = false
    export let title = null
    export let label = ''
    export let message = ''
    export let attrs = {}
    $: {
        attrs = {
            disabled: disabled ? disabled : undefined,
            readonly: readonly ? readonly : undefined,
        }
    }
</script>

<div class="wrapper">
    <label {title}>
        <span class="label">{label}
            {#if required}
                *
                <!-- <Icon path={edit} size=8 /> -->
            {/if}
        </span>
        <input bind:value {...attrs} />
    </label>
    {#if !!message}
        <div>{message}</div>
    {/if}
</div>

<style>
    .wrapper {
        width: 100%;
        font-size: 12px;
    }
    .wrapper label {
        display: flex;
        align-items: center;
        border: .5px solid var(--border);
        height: 30px;
        box-sizing: border-box;
    }
    .wrapper label .label {
        margin: 0 10px;
    }
    .wrapper label input {
        height: 100%;
        background: inherit;
        border: none;
        color: white;
    }
    .wrapper :global(.thin) {
        margin-top: -8px !important;
    }
</style>
