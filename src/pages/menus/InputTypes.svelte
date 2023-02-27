<script>
    import { onMount } from 'svelte';
    import UpperItems from '../../components/UpperItems.svelte';
    let curGroup = 'a'; // Initial Group
    let upperItems;
    let upperItemList = [
        {
            type: 'group-radio',
            label: 'GroupChange',
            list: [
                { label: 'a', data: 'a' },
                { label: 'b', data: 'b' },
            ],
            data: curGroup,
        },
        {
            type: 'text',
            label: 'UserName',
            field: 'userName',
            required: true,
        },
        {
            type: 'text',
            label: 'UserNameB',
            field: 'userNameB',
            required: true,
            group: 'b'
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
            list: [
                { label: 'yes', data: 1 },
                { label: 'no', data: 0 },
            ],
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
            list: ['apple','pie','berry','berry','berry','berry','berry','berry'],
            data: [],
            required: false,
        },
        {
            type: 'button',
            label: 'Search',
            func: () => {
                console.log(upperItems.getValues());
            },
        },
    ];
    onMount(async () => {
        // External group select
        // upperItems.groupChange('a');
    });
</script>

<UpperItems bind:this={upperItems} {upperItemList} {curGroup} />
