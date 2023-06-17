import { Global } from '@emotion/react';
import Artwork from './Artwork';
import React from 'react';
import globalInject from '../style/DefaultStyle';
import NavHeader from './NavHeader';
import Artis from './Artis';
import artwork from '../../assets/artwork.png';
import next from '../../assets/next.png';
import { artisList } from '../../constants';
const LineUp = (): React.JSX.Element => {
	return (
		<React.Fragment>
			<Global styles={globalInject} />
			<NavHeader title='line up' />
			{artisList.map((list, index) => (
				<React.Fragment key={index}>
					<Artis
						foto={list.band}
						logo={list.band_logo}
					/>
				</React.Fragment>
			))}
			<Artis
				foto={artwork}
				logo={next}
			/>

			<Artwork />
		</React.Fragment>
	);
};
export default LineUp;
