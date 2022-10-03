<script>
    export let upperItems = [];
    import { Textfield, Radio } from "svelte-mui";
    /** Custom Item attribute
     * @param type type
     * @param label label
     * @param field field (rest api with server on communicate)
     * @param data data from input and send api server
     * @param list if type radio, select then must has this attribute
     * @param required
     * @param group if change input group
     * */
    export let upperItemlist = [];
</script>

<div class="upperItemsWrap">
    {#each upperItemlist as { type, label, field, data, list, required, group }}
        <div class="upperItem">
            {#if type == "text"}
                <Textfield
                    style="margin: 6px 0;"
                    {label}
                    outlined="true"
                    bind:data
                    {required}
                />
            {:else if type == "radio"}
                {label}
                <div style="display: flex;">
                    {#each list as item}
                        <Radio
                            bind:group={data}
                            value={item.data}
                        >
                            {item.label}
                        </Radio>
                    {/each}
                </div>
            {/if}
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
