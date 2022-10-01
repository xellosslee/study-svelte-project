import Home from './pages/home';
import { NotFound } from './pages/errors';

let routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/errors',
		component: NotFound,
		name: 'Errors',
	},
	{
		path: '/*',
		component: NotFound,
	},
];

export default routes;
