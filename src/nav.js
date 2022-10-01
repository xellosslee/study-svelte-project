import Home from './pages/home/Home.svelte';
import { Transaction } from './pages/menus';
import { NotFound, BadRequest } from './pages/errors';

let routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/errors',
		component: BadRequest,
		name: 'Errors',
	},
	{
		path: '/menu/transaction',
		component: Transaction,
		name: 'Transaction',
	},
	{
		path: '/*',
		component: NotFound,
	},
];

export default routes;
