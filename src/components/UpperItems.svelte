<script>
    import { onMount } from 'svelte';
    import { Textfield, Radio, Button, Datefield, Checkbox } from 'svelte-mui';
    import CheckboxGroup from './inputs/CheckboxGroup.svelte';
    /** Custom Item attribute
     * @param type type
     * @param label label
     * @param html html replaced label to html (priority high)
     * @param field field (rest api with server on communicate)
     * @param func func in locally using javascript function name
     * @param data data from input and send api server
     * @param list if type radio, select then must has this attribute
     * @param required
     * @param group if change show group
     * @param extra if item has custom action using in this value
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
            e.required && (e.data == null || e.data == '' || e.data == []);
        });
        if (requireCheck) {
            return null;
        }
        return filterdList.map((e) => {
            return { field: e.field, value: e.data };
        });
    }

    function checkboxGroupAll(e) {
        let on = e.target.checked;
        let chk = filterdList.find(ee => ee.field == e.target.getAttribute('field'));
        chk.data = on ? chk.list : [];
    }
    function checkboxGroupClick(e) {
        let chk = filterdList.find(ee => ee.field == e.target.getAttribute('field'));
        chk.extra = {
            ...chk.extra || {},
            checkedGroup: chk.data.length === chk.list.length
        }
        chk.extra = {
            ...chk.extra || {},
            indeterminate: chk.data.length > 0 && chk.data.length < chk.list.length
        }
    }
</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<div class="upperItemsWrap">
    {#each filterdList as { type, label, html, field, func, data, list, required, extra }}
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
            {:else if type == 'checkbox'}
                <Checkbox bind:checked={data} value={data}>
                    {#if html}
                        {@html html}
                    {:else}
                        {label}
                    {/if}
                </Checkbox>
            {:else if type == 'checkbox-group'}
                <CheckboxGroup
                    {label}
                    {list}
                    {data}
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
    .upperItemsWrap :global(.thin) {
        margin-top: -8px !important;
    }
</style>
