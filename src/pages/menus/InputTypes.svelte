<script>
    import { onMount } from 'svelte';
    import UpperItems from '../../components/UpperItems.svelte';
    let curGroup = 'a'; // Initial Group
    let upperItems;
    let upperItemlist = [
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
            type: 'date',
            label: 'StartDate',
            field: 'startDate',
            data: new Date(),
            required: true,
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

<UpperItems bind:this={upperItems} {upperItemlist} {curGroup} />
