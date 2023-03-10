<script>
    export let value = '';
    export let readonly = false;
    export let disabled = false;
    export let required = false;
    export let title = null;
    export let label = '';
    export let message = '';
    export let attrs = {};
    export let dataFormat = '';
    $: {
        attrs = {
            disabled: disabled ? disabled : undefined,
            readonly: readonly ? readonly : undefined,
        };
    }
    function keyupInput(e) {
        if (dataFormat == 'date') {
            let str = e.target.value;
            str = str.replace(/[^0-9]/gi, '');
            let formatNum = '';
            try {
                if (str.length >= 7) {
                    formatNum = str.replace(/(\d{4})(\d{2})(\d{1,2})/, '$1-$2-$3');
                } else if (str.length >= 5) {
                    formatNum = str.replace(/(\d{4})(\d{1,2})/, '$1-$2');
                }
            } catch (e) {
                formatNum = num;
                console.error(e);
            }
            if (formatNum != '') {
                console.log('result : ', formatNum);
                e.target.value = formatNum;
            }
        } else if (dataFormat == 'number') {
            let str = e.target.value;
            str = str.replace(/[^0-9]/gi, '');
            e.target.value = str;
        }
    }
</script>

<div class="wrapper">
    <label {title}>
        <span class="label"
            >{label}
            {#if required}
                *
            {/if}
        </span>
        <input bind:value {...attrs} on:keyup={keyupInput} />
    </label>
    {#if !!message}
        <div class="message">{message}</div>
    {/if}
</div>

<style>
    .wrapper {
        width: 100%;
        font-size: 12px;
    }
    .wrapper label {
        display: flex;
        align-items: center;
        border: 0.5px solid var(--border);
        height: 30px;
        box-sizing: border-box;
    }
    .wrapper label .label {
        margin: 0 10px;
    }
    .wrapper label input {
        height: 100%;
        background: inherit;
        border: none;
        color: white;
        outline: 0;
    }
    .wrapper :global(.thin) {
        margin-top: -8px !important;
    }
    .message {
        color: var(--accent);
    }
</style>
