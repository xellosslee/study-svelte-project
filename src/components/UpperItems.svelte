<script>
    import { onMount } from 'svelte';
    import { Textfield, Radio, Button, Datefield } from 'svelte-mui';
    /** Custom Item attribute
     * @param type type
     * @param label label
     * @param field field (rest api with server on communicate)
     * @param func func in locally using javascript function name
     * @param data data from input and send api server
     * @param list if type radio, select then must has this attribute
     * @param required
     * @param group if change input group
     * */
    export let upperItemlist = [];
    // Set default Group : When props sets curGroup changed it
    export let curGroup = 'a';
    let filterdList = [];

    groupChange(curGroup);
    // Internal group select
    export function groupChange(val) {
        curGroup = this?.value || val;
        console.log('show group ' + curGroup);
        filterdList = upperItemlist.filter((e) => {
            if (e.group == null || e.group.indexOf(curGroup) > -1) {
                return true;
            } else {
                return false;
            }
        });
    }
    export function getValues() {
        let requireCheck = filterdList.filter((e) => {
            e.required && (e.data == null || e.data == '');
        });
        if (requireCheck) {
            console.log('');
        }
        return filterdList.map((e) => {
            return { field: e.field, value: e.data };
        });
    }
</script>

<div class="upperItemsWrap">
    {#each filterdList as { type, label, func, data, list, required }}
        <div class="upperItem">
            {#if type == 'text'}
                <Textfield
                    style="margin: 6px 0;"
                    {label}
                    outlined="true"
                    bind:data
                    {required}
                />
            {:else if type == 'group-radio'}
                {label}
                <div style="display: flex;">
                    {#each list as item}
                        <Radio
                            bind:group={data}
                            value={item.data}
                            on:change={groupChange}
                        >
                            {item.label}
                        </Radio>
                    {/each}
                </div>
            {:else if type == 'radio'}
                {label}
                <div style="display: flex;">
                    {#each list as item}
                        <Radio
                            bind:group={data}
                            value={item.data}
                            on:change={func}
                        >
                            {item.label}
                        </Radio>
                    {/each}
                </div>
            {:else if type == 'date'}
                <Datefield
                    {label}
                    value={data}
                    format="YYYY-MM-DD"
                    message="YYYY-MM-DD"
                    on:date-change={func}
                    {required}
                />
            {:else if type == 'button'}
                <Button color="primary" on:click={func}>{label}</Button>
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
