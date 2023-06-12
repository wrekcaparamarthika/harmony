import React from 'react';

import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import globalInject from '../style/DefaultStyle';
const FallbackStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	h1 {
		background-color: #a6373e;
		padding: 1rem;
		color: #fffef4;
		text-transform: capitalize;
	}
`;
const Fallback: React.FC = (): React.JSX.Element => {
	return (
		<React.Fragment>
			<Global styles={globalInject} />
			<FallbackStyle>
				<h1>harmony</h1>
			</FallbackStyle>
		</React.Fragment>
	);
};

export default Fallback;
