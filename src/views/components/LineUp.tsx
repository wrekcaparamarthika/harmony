import { Global } from '@emotion/react';
import Artwork from './Artwork';
import React from 'react';
import globalInject from '../style/DefaultStyle';
import NavHeader from './NavHeader';
import Artis from './Artis';
import naff from '../../assets/naff.jpg';
import naff_logo from '../../assets/naff_logo.jpeg';
import artwork from '../../assets/artwork.png';
import next from '../../assets/next.png';
const LineUp = (): React.JSX.Element => {
	return (
		<React.Fragment>
			<Global styles={globalInject} />
			<NavHeader title='line up' />
			<Artis
				foto={naff}
				logo={naff_logo}
			/>
			<Artis
				foto={artwork}
				logo={next}
			/>

			<Artwork />
		</React.Fragment>
	);
};
export default LineUp;
