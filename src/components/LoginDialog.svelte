<script>
	export let visible = false
	export let username = ''
	export let password = ''

	import { Dialog, Textfield, Button } from 'svelte-mui/src'
</script>

<Dialog width="290" bind:visible>
	<div slot="title">Welcome!</div>

	<Textfield name="username" autocomplete="off" required bind:value={username} label="username" message="Your account name" />
	<Textfield type="password" name="password" autocomplete="off" required bind:value={password} label="password" message="Your password" />

	<div slot="actions" class="actions center">
		<Button color="primary" disabled>Submit</Button>
	</div>

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
