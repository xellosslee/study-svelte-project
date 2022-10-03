import Home from './pages/home/Home.svelte';
import GroupSwitch from './pages/menus/GroupSwitch.svelte';
import InputTypes from './pages/menus/InputTypes.svelte';
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
		path: '/InputTypes',
		component: InputTypes,
		name: 'InputTypes',
	},
	{
		path: '/GroupSwitch',
		component: GroupSwitch,
		name: 'GroupSwitch',
	},
	{
		path: '/*',
		component: NotFound,
	},
];

export default routes;
