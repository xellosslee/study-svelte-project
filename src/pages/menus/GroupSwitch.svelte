<script>
    import { onMount } from 'svelte';
    import UpperItems from '../../components/UpperItems.svelte';
    import AGGridSvelte from 'ag-grid-svelte';
    let curGroup = 'a'; // Initial Group
    let upperItems;
    let upperItemList = [
        {
            type: 'group-radio',
            label: 'GroupChange',
            options: {
                A: 'a',
                B: 'b',
            },
            data: curGroup,
        },
        {
            type: 'text',
            label: 'UserName (all show)',
            field: 'userName',
            data: '',
            required: true,
        },
        {
            type: 'text',
            label: 'UserEmail (only a)',
            field: 'userEmail',
            data: 'email',
            required: false,
            group: 'a',
        },
        {
            type: 'text',
            label: 'Phone (only b)',
            field: 'phone',
            data: '',
            required: false,
            group: 'b',
        },
        {
            type: 'radio',
            label: 'Authorization',
            field: 'isJoin',
            options: {
                yes: 1,
                no: 0,
            },
            data: 1,
            required: false,
            group: 'b',
        },
        {
            align: 'right',
            type: 'button',
            label: 'Search (only a)',
            func: () => {
                console.log('clicked');
            },
            group: 'a',
        },
        {
            align: 'right',
            type: 'button',
            label: 'Search (only b)',
            func: () => {
                console.log('clicked');
            },
            group: 'b',
        },
    ];
    onMount(async () => {
        // External group select
        // upperItems.groupChange('a');
    });
    let api, columnApi;

    const onGridReady = (event) => {
        api = event.api;
        columnApi = event.columnApi;
    };
</script>

<div class="warp">
    <UpperItems bind:this={upperItems} {upperItemList} {curGroup} />
    <div class="ag-theme-alpine">
        <AGGridSvelte {onGridReady} />
    </div>
</div>

<style>
    .warp {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .ag-theme-alpine {
        height: 100%;
    }
</style>
