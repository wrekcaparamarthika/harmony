import React from 'react';
import Marquee from 'react-fast-marquee';
import styled from '@emotion/styled';
import { contactPerson } from '../../constants';
import { Link } from 'react-router-dom';
const FooterStyle = styled.div`
	position: fixed;
	bottom: 0%;
	div {
		background-color: #a6373e;
		padding: 0.25rem;
		section {
			display: flex;
			gap: 0.5rem;
			padding: 0.25rem;
			color: #fffef4;
			align-items: center;
			text-transform: capitalize;
			h1 {
				font-size: 16px;
			}
			div {
				display: flex;
				flex-direction: column;
				a {
					color: #fffef4;
				}
			}
		}
	}
`;
const Harmony: React.FC = (): React.JSX.Element => {
	return (
		<FooterStyle>
			<Marquee>
				{Array.from({ length: 1 }).map((_, index) => (
					<section key={index}>
						<h1>contact person for order merchandise :</h1>
						{contactPerson.map((value, indx) => (
							<div key={indx}>
								<Link to={value.cp}>{value.name}</Link>
							</div>
						))}
						<h1>harmony vol#2</h1>
					</section>
				))}
			</Marquee>
		</FooterStyle>
	);
};
export default Harmony;
