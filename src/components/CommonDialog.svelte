<script>
    export let popupAttr = {
        visible: false,
    };
    import { Dialog } from 'svelte-mui/src';
</script>

<Dialog width="290" bind:visible={popupAttr.visible}>
    <div slot="title">{popupAttr.title || 'title'}</div>

    <div slot="footer" class="footer">
        Don't have account?
        <a href="/singup" class="disabled">Sign Up</a>
    </div>
</Dialog>

<style>
    .footer {
        text-align: center;
        margin-bottom: 1rem;
        font-size: 13px;
    }
    .footer a {
        color: #f50057;
        padding-left: 1rem;
    }
</style>
