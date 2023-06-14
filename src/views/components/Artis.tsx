import React from 'react';
import styled from '@emotion/styled';
interface IArtisStyled {
	img: string;
}
const ArtisStyled = styled.div<IArtisStyled>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0.5rem;
	background-color: #a6373e;
	margin: 2rem;

	height: 300px;
	div {
		height: 300px;
		width: 300px;
		background-image: url(${(props) => props.img});
		background-position: center;
		background-repeat: no-repeat;
		background-size: 280px;
	}
	img {
		width: 280px;
	}
`;

interface IArtis {
	foto: string;
	logo: string;
}
const Artis: React.FC<IArtis> = ({ foto, logo }): React.JSX.Element => {
	const [isActive, setActive] = React.useState<boolean>(false);
	const handleClick = () => {
		setActive((prev) => !prev);
		console.info(isActive);
	};
	return (
		<ArtisStyled img={foto}>
			{!isActive && <div onClick={handleClick} />}
			{isActive && (
				<img
					src={logo}
					onClick={handleClick}
				/>
			)}
		</ArtisStyled>
	);
};
export default Artis;
