import artwork from '../../assets/artwork.png';
import React from 'react';
import styled from '@emotion/styled';
const ArtworkStyle = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: -10;
	width: 100%;
	img {
		position: relative;
		width: 380px;
		opacity: 50%;
	}
`;
const Artwork = (): React.JSX.Element => {
	return (
		<React.Fragment>
			<ArtworkStyle>
				<img
					src={artwork}
					alt='artwork'
				/>
			</ArtworkStyle>
		</React.Fragment>
	);
};
export default Artwork;
