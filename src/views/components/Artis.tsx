import test from '../../assets/test.png';
import React from 'react';
import styled from '@emotion/styled';
interface IArtisStyled {
	img: string;
}
const ArtisStyled = styled.div<IArtisStyled>`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	img {
		width: 280px;
	}
`;
const Artis: React.FC = (): React.JSX.Element => {
	return (
		<ArtisStyled img={test}>
			<img
				src={test}
				alt=''
			/>
		</ArtisStyled>
	);
};
export default Artis;
