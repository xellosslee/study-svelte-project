<script>
    import { onMount } from "svelte";
    import UpperItems from "../../components/UpperItems.svelte";
    var upperItems = [
        {
            type: "text",
            label: "UserName",
            field: "userName",
            data: "",
            required: true,
            group: "ab",
        },
        {
            type: "text",
            label: "UserEmail",
            field: "userEmail",
            data: "email",
            required: false,
            group: "a",
        },
        {
            type: "text",
            label: "Phone",
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
            type: "text",
            label: "UserEmail",
            field: "userEmail",
            data: "",
            required: false,
            group: "b",
        },
        {
            type: "button",
            label: "UserEmail",
            field: "userEmail",
            data: "",
            required: false,
            group: "b",
        },
    ];
    onMount(async () => {});
</script>

<UpperItems upperItemlist={upperItems} />
<div />

<style>
</style>
