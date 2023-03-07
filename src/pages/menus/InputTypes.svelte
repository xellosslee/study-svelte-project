<script>
    import { onMount } from 'svelte';
    import UpperItems from '../../components/UpperItems.svelte';
    import AGGridSvelte from 'ag-grid-svelte';
    let title = '';
    let upperItems;
    let upperItemList = [
        {
            type: 'group-radio',
            label: 'GroupChange',
            options: {
                A: 'a',
                B: 'b',
            },
            data: 'a',
        },
        {
            type: 'text',
            label: 'CustomerName',
            field: 'userName',
            title: 'Please input customer name',
            required: true,
        },
        {
            type: 'text',
            label: 'CustomerName B',
            field: 'userNameB',
            required: true,
            group: 'b',
        },
        {
            type: 'date',
            label: 'StartDate',
            field: 'startDate',
            data: new Date(),
            required: true,
        },
        {
            type: 'radio',
            label: 'Authorization',
            field: 'join',
            options: {
                yes: 1,
                no: 0,
            },
            data: 1,
            required: false,
        },
        {
            type: 'checkbox',
            html: '<b>Check</b>box',
            field: 'check',
            data: 1,
            required: false,
        },
        {
            type: 'checkbox-group',
            field: 'checkGroup',
            list: [
                'apple',
                'pie',
                'berry',
                'berry',
                'berry',
                'berry',
                'berry',
                'berry',
            ],
            data: [],
            required: false,
        },
        {
            align: 'right',
            type: 'button',
            label: 'Search',
            func: () => {
                let params = upperItems.getValues();
                console.log(params);
                // call api and result set the table or grid
            },
        },
    ];
    onMount(async () => {
        // External group select
        // upperItems.groupChange('a');
    });
</script>

<div class="wrap">
    <UpperItems bind:this={upperItems} {upperItemList} />
    <div class="gridWrap">
        <AGGridSvelte />
    </div>
</div>

<style>
    .wrap {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .gridWrap {
        width: 100%;
        height: 100%;
    }
</style>