import Banner from '../components/Banner';
import { Global } from '@emotion/react';
import globalInject from '../style/DefaultStyle';
import styled from '@emotion/styled';
import Artwork from '../components/Artwork';
const MainStyle = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	padding: 1rem;
`;
const Default = () => {
	return (
		<MainStyle>
			<Global styles={globalInject} />
			<Banner />
			<Artwork />
		</MainStyle>
	);
};
export default Default;
