import React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import globalInject from '../style/DefaultStyle';
import { NavLink } from 'react-router-dom';
const UnderMaintenanceStyle = styled.div`
	position: absolute;
	z-index: 999;
	background-color: #00000060;
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0%;
	h1 {
		font-size: medium;
		font-style: italic;
		color: #fffef4;
		text-transform: capitalize;
		background-color: #a6373e;
		padding: 0.5rem;
		a {
			color: #fffef4;
		}
	}
`;

export const UnderMaintenance = ({
	title = 'title',
}: {
	title: string;
}): React.JSX.Element => {
	React.useEffect(() => {
		document.body.style.overflow = 'hidden';
		document.title = 'go back soon!';
		return () => {
			document.title = 'Harmony';
			document.body.style.overflow = 'unset';
		};
	}, []);
	return (
		<React.Fragment>
			<Global styles={globalInject} />
			<UnderMaintenanceStyle>
				<h1>
					{title} under maintenance
					<br />
					<NavLink to={'/'}>go back to home!</NavLink>
				</h1>
			</UnderMaintenanceStyle>
		</React.Fragment>
	);
};
