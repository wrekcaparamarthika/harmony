import React from 'react';

import { Global } from '@emotion/react';
import globalInject from '../style/DefaultStyle';
import Artwork from './Artwork';
import NavHeader from './NavHeader';

const Ticket = () => {
	return (
		<React.Fragment>
			<Global styles={globalInject} />
			<NavHeader title='ticket' />
			<Artwork />
		</React.Fragment>
	);
};
export default Ticket;
