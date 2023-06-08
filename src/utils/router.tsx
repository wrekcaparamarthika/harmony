import { RouterProvider, createHashRouter } from 'react-router-dom';
import Ticket from '../views/components/Ticket';
import LineUp from '../views/components/LineUp';
import React from 'react';
import Default from '../views/layouts/Default';
import Rundown from '../views/components/Rundown';
import Merchandise from '../views/components/Merchandise';
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

const Navigation = () => {
	return (
		<React.Fragment>
			<RouterProvider router={route} />
		</React.Fragment>
	);
};
export default Navigation;
