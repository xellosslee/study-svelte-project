<script>
    import { onMount } from "svelte";
    import { Textfield } from "svelte-mui";
    var upperItems = [
        {
            label: "UserName",
            field: "userName",
            value: "",
            required: true,
        },
        {
            label: "UserEmail",
            field: "userEmail",
            value: "email",
            required: false,
        },
        {
            label: "UserEmail",
            field: "userEmail",
            value: "",
            required: false,
        },
        {
            label: "UserEmail",
            field: "userEmail",
            value: "",
            required: false,
        },
        {
            label: "UserEmail",
            field: "userEmail",
            value: "",
            required: false,
        },
        {
            label: "UserEmail",
            field: "userEmail",
            value: "",
            required: false,
        },
        {
            label: "UserEmail",
            field: "userEmail",
            value: "",
            required: false,
        },
    ];
    onMount(async () => {});
</script>

<div class="upperItemsWrap">
    {#each upperItems as { label, value, required }}
        <div class="upperItem">
            <Textfield
                style="margin: 6px 0;"
                {label}
                outlined="true"
                bind:value
                {required}
            />
        </div>
    {/each}
</div>

<style>
    .upperItemsWrap {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        background: var(--bg-color);
    }
    .upperItemsWrap .upperItem {
        min-width: 100px;
        max-width: 400px;
        padding-right: 12px;
        background: var(--bg-color);
    }
</style>
