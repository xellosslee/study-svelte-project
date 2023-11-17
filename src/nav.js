import Home from './pages/home/Home.svelte'
import GroupSwitch from './pages/menus/GroupSwitch.svelte'
import InputTypes from './pages/menus/InputTypes.svelte'
import NotFound from './pages/errors/NotFound.svelte'

let routes = [
	{
		path: '/',
		component: Home,
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
]

export default routes
