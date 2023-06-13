import { Global } from '@emotion/react';
import Artwork from './Artwork';
import React from 'react';
import globalInject from '../style/DefaultStyle';
import NavHeader from './NavHeader';
import Artis from './Artis';
const LineUp = (): React.JSX.Element => {
	return (
		<React.Fragment>
			<Global styles={globalInject} />
			<NavHeader title='line up' />
			<Artis />
			<Artwork />
		</React.Fragment>
	);
};
export default LineUp;
