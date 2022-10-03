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
            label: "UserName (all show)",
            field: "userName",
            data: "",
            required: true,
        },
        {
            type: "text",
            label: "UserEmail (only a)",
            field: "userEmail",
            data: "email",
            required: false,
            group: "a",
        },
        {
            type: "text",
            label: "Phone (only b)",
            field: "phone",
            data: "",
            required: false,
            group: "b",
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
            group: "b",
        },
        {
            type: "button",
            label: "Search (only a)",
            func: () => {
                console.log("clicked");
            },
            group: "a",
        },
        {
            type: "button",
            label: "Search (only b)",
            func: () => {
                console.log("clicked");
            },
            group: "b",
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
