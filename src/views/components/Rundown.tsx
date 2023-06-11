import { Global } from '@emotion/react';
import Artwork from './Artwork';
import React from 'react';
import globalInject from '../style/DefaultStyle';
import NavHeader from './NavHeader';
import ComingSoon from './ComingSoon';
export const Rundown: React.FC = (): React.JSX.Element => {
	return (
		<React.Fragment>
			<Global styles={globalInject} />
			<NavHeader title='Rundown' />
			<ComingSoon title='rundown coming soon!' />
			<Artwork />
		</React.Fragment>
	);
};
