<script>
    import { onMount } from 'svelte';
    import UpperItems from '../../components/UpperItems.svelte';
    import AGGridSvelte from 'ag-grid-svelte';
    import dayjs from 'dayjs';
    let menuTitle = '';
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
            label: 'UserNo',
            field: 'userNo',
            title: 'Please input user no',
            dataFormat: 'number',
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
    let api, columnApi;

    const onGridReady = (event) => {
        api = event.api;
        columnApi = event.columnApi;

        // 테스트 컬럼 및 데이터 설정. 추후 Api를 통해 내려받는 방식으로 구현할 예정
        api.setColumnDefs([
            { field: 'vin', headerName: '차대번호', lockVisible: true },
            { field: 'price', headerName: 'MSRP', valueFormatter: 'price' },
            { field: 'createdAt', headerName: '생성일시' },
        ]);
        api.setRowData([
            {
                vin: 'test',
                price: 10,
                createdAt: dayjs().format('YYYY-MM-DD hh:mm:ss'),
            },
        ]);
    };
    onMount(async () => {
        // External group select
        // upperItems.groupChange('a');
    });
</script>

<div class="wrap">
    {#if menuTitle}
        <h3>{menuTitle}</h3>
    {/if}
    <UpperItems bind:this={upperItems} {upperItemList} />
    <div class="gridWrap">
        <AGGridSvelte {onGridReady} />
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
