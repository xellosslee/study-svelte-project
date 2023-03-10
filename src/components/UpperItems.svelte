<script>
    import { onMount } from 'svelte';
    import { Button, Datefield, Checkbox } from 'svelte-mui';
    import { Text, Radio } from './searchInputs';
    import CheckboxGroup from './inputs/CheckboxGroup.svelte';
    /** Custom Item attribute
     * @param type type
     * @param label label
     * @param html html replaced label to html (priority high)
     * @param field field (rest api with server on communicate)
     * @param func func in locally using javascript function name
     * @param data data from input and send api server
     * @param options if type radio, select then must has this attribute
     * @param required
     * @param group if change show group
     * */
    export let upperItemList = [];
    // Set default Group : null
    let curGroup = null;
    let filterList = [];

    $: {
        let group = upperItemList.find((e) => e.type == 'group-radio');
        if (group) {
            // when group-radio is exists then set the group
            curGroup = group.data;
            groupChange(curGroup);
        }
    }
    // Internal group select
    export function groupChange(val) {
        curGroup = this?.value || val;
        console.log('show group ' + curGroup);
        filterList = upperItemList.filter((e) => {
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
        if (requireCheck && requireCheck.length > 0) {
            for (let i = 0; i < requireCheck.length; i++) {
                let item = filterList.find(
                    (ee) => requireCheck[i].field == ee.field
                );
                if (item) {
                    item.message = 'Required input field';
                }
            }
            // refresh filterList
            filterList = filterList;
            return [];
        }
        filterList
            .filter((e) => !e.message)
            .forEach((e,i) => {
                filterList[i].message = null;
            });
        // refresh filterList
        filterList = filterList;
        return filterList
            .filter((e) => e.field)
            .map((e) => {
                return { field: e.field, value: e.data };
            });
    }
    function checkboxGroupAll(e) {
        let on = e.target.checked;
        let chk = filterList.find(
            (ee) => ee.field == e.target.getAttribute('field')
        );
        chk.data = on ? chk.options : [];
    }
    function checkboxGroupClick(e) {
        let chk = filterList.find(
            (ee) => ee.field == e.target.getAttribute('field')
        );
        chk.extra = {
            ...(chk.extra || {}),
            checkedGroup: chk.data.length === chk.options.length,
        };
        chk.extra = {
            ...(chk.extra || {}),
            indeterminate:
                chk.data.length > 0 && chk.data.length < chk.options.length,
        };
    }
</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<div class="upperItemsWrap">
    <div class="inputWrap">
        {#each filterList as { align, type, label, title, html, field, func, data, options, required, extra, ...attrs }}
            {#if align == undefined || align == 'left'}
                <div class="upperItem">
                    {#if type == 'text'}
                        <Text
                            bind:value={data}
                            {label}
                            {title}
                            {required}
                            {...attrs}
                        />
                    {:else if type == 'group-radio'}
                        <Radio
                            bind:value={data}
                            {label}
                            {title}
                            {options}
                            on:change={groupChange}
                        />
                    {:else if type == 'radio'}
                        <Radio
                            bind:value={data}
                            {label}
                            {title}
                            {options}
                            on:change={func}
                        />
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
                        <CheckboxGroup {label} {options} {data} />
                    {:else if type == 'button'}
                        <Button color="primary" on:click={func}>{label}</Button>
                    {/if}
                </div>
            {/if}
            {#if align == 'right'}
                <div class="upperItem right">
                    {#if type == 'button'}
                        <Button color="primary" on:click={func}>{label}</Button>
                    {/if}
                </div>
            {/if}
        {/each}
    </div>
</div>

<style>
    .upperItemsWrap {
        display: flex;
    }
    .inputWrap {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .upperItem {
        min-width: 100px;
        max-width: 400px;
        padding: 0 12px 12px 0;
        background: var(--bg-color);
    }
    .upperItem.right {
        margin-left: auto;
    }
    /* mobile device */
    @media only screen and (max-width: 720px) {
        .upperItem.right {
            width: 100%;
            flex: 1 0 auto;
            text-align: center;
        }
    }
</style>
