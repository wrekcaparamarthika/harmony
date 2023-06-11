import { RouterProvider, createHashRouter } from 'react-router-dom';

import LineUp from '../views/components/LineUp';
import React from 'react';
import Fallback from '../views/components/Fallback';

const Merchandise = React.lazy(() =>
	import('../views/components/Merchandise').then(({ Merchandise }) => ({
		default: Merchandise,
	}))
);
const Ticket = React.lazy(() =>
	import('../views/components/Ticket').then(({ Ticket }) => ({
		default: Ticket,
	}))
);
const Default = React.lazy(() =>
	import('../views/layouts/Default').then(({ Default }) => ({
		default: Default,
	}))
);
const Rundown = React.lazy(() =>
	import('../views/components/Rundown').then(({ Rundown }) => ({
		default: Rundown,
	}))
);
const route = createHashRouter([
	{
		path: '/',
		element: <Default />,
	},
	{
		path: '/ticket',
		element: <Ticket />,
	},
	{
		path: '/lineup',
		element: <LineUp />,
	},
	{
		path: '/rundown',
		element: <Rundown />,
	},
	{
		path: '/merchandise',
		element: <Merchandise />,
	},
]);

const Navigation: React.FC = (): React.JSX.Element => {
	return (
		<React.Fragment>
			<React.Suspense fallback={<Fallback />}>
				<RouterProvider router={route} />
			</React.Suspense>
		</React.Fragment>
	);
};
export default Navigation;
