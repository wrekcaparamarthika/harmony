import artwork from '../../assets/artwork.png';
import React from 'react';
import styled from '@emotion/styled';
interface IArtworkStyle {
	opacity: string;
}
const ArtworkStyle = styled.div<IArtworkStyle>`
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
		opacity: ${(props) => props.opacity};
	}
`;
const Artwork = ({
	opacity = '50%',
}: {
	opacity?: string;
}): React.JSX.Element => {
	return (
		<React.Fragment>
			<ArtworkStyle opacity={opacity}>
				<img
					src={artwork}
					alt='artwork'
				/>
			</ArtworkStyle>
		</React.Fragment>
	);
};
export default Artwork;
