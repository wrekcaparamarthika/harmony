import Banner from '../components/Banner';
import { Global } from '@emotion/react';
import globalInject from '../style/DefaultStyle';
import styled from '@emotion/styled';
import Artwork from '../components/Artwork';
import { latarText } from '../../constants';
const MainStyle = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

const LatarStyle = styled.div`
	position: fixed;
	top: 10%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 1rem;
	div {
		background-color: #a6373e;
		padding: 1rem;
		height: 10rem;
		overflow-y: auto;
		p {
			text-indent: 2rem;
			text-align: justify;
			color: #fffef4;
		}
	}
	h1 {
		text-align: center;
		text-transform: uppercase;
		background-color: #a6373e;
		color: #fffef4;
	}
`;
const Default = () => {
	return (
		<MainStyle>
			<Global styles={globalInject} />
			<LatarStyle>
				<div>
					<p>{latarText.paragraph1}</p>
					<p>{latarText.paragraph2}</p>
					<p>{latarText.paragraph3}</p>
				</div>
				<h1>"bangkit dalam harmoni vol. II"</h1>
			</LatarStyle>
			<Banner />
			<Artwork />
		</MainStyle>
	);
};
export default Default;
