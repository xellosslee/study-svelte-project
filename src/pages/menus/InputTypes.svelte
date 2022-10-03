<script>
    import { onMount } from "svelte";
    import UpperItems from "../../components/UpperItems.svelte";
    let curGroup = 'a'; // Initial Group
    let upperItems;
    let upperItemlist = [
        {
            type: "group-radio",
            label: "GroupChange",
            list: [
                { label: "a", data: "a" },
                { label: "b", data: "b" },
            ],
            data: curGroup,
        },
        {
            type: "text",
            label: "UserName",
            field: "userName",
            data: "",
            required: true,
        },
        {
            type: "radio",
            label: "Authorization",
            field: "isJoin",
            list: [
                { label: "yes", data: 1 },
                { label: "no", data: 0 },
            ],
            data: 1,
            required: false,
        },
        {
            type: "button",
            label: "Search",
            func: () => {
                console.log("clicked");
            },
        },
    ];
    onMount(async () => {
        // External group select
        // upperItems.groupChange('a');
    });
</script>

<UpperItems bind:this={upperItems} {upperItemlist} {curGroup} />

<style>
</style>
