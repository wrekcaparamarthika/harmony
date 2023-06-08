import { Global } from '@emotion/react';
import Artwork from './Artwork';
import React from 'react';
import globalInject from '../style/DefaultStyle';
import NavHeader from './NavHeader';
import ComingSoon from './ComingSoon';
const LineUp = (): React.JSX.Element => {
	return (
		<React.Fragment>
			<Global styles={globalInject} />
			<NavHeader title='line up' />
			<ComingSoon title='line up coming soon!' />
			<Artwork />
		</React.Fragment>
	);
};
export default LineUp;
