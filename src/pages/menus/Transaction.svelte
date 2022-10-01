<script>
    import { onMount } from "svelte";
    import { Textfield } from "svelte-mui";
    var upperItems = [
        {
            label: 'UserName',
            field: 'userName',
            value: '',
            required: true,
        },
        {
            label: 'UserEmail',
            field: 'userEmail',
            value: 'email',
            required: false,
        },
    ];
    onMount(async () => {
    });
</script>

<div class="upperItemsWrap">
	{#each upperItems as { label, value, required }}
        <Textfield label={label} bind:value {required} />
    {/each}
</div>

<style>
    .upperItemsWrap {
        width: 100%;
        min-height: 50px;
        max-height: 200px;
        background: black;
    }
</style>
