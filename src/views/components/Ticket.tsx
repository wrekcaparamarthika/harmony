import React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import globalInject from '../style/DefaultStyle';
import Artwork from './Artwork';
import NavHeader from './NavHeader';
import { presale, spot } from '../../assets';
import { NavLink } from 'react-router-dom';
const TicketStyle = styled.div`
	position: fixed;
	bottom: 20%;
	left: 50%;
	transform: translateX(-50%);
	a {
		section {
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: 320px;
			}
		}
	}
`;
const Ticket = (): React.JSX.Element => {
	return (
		<React.Fragment>
			<Global styles={globalInject} />
			<NavHeader title='ticket' />
			<TicketStyle>
				<NavLink to={'#'}>
					<section>
						<img src={presale} />
					</section>
				</NavLink>
				<NavLink to={'#'}>
					<section>
						<img src={spot} />
					</section>
				</NavLink>
			</TicketStyle>
			<Artwork />
		</React.Fragment>
	);
};
export default Ticket;
