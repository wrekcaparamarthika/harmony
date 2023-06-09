import React from 'react';
import Marquee from 'react-fast-marquee';
import styled from '@emotion/styled';
import { artisList, contactPerson } from '../../constants';
import { Link } from 'react-router-dom';
const FooterStyle = styled.div`
	position: fixed;
	bottom: 0%;
	width: 100%;
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
			span {
				height: 2.5rem;
				width: 1px;
				background-color: #fffef4;
			}
			h1 {
				font-size: 26px;
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
						<span />
						<h1>harmony vol#2</h1>
						<span />
						{artisList.map((list, index) => (
							<React.Fragment key={index}>
								<h1>{list.name}</h1>
							</React.Fragment>
						))}
					</section>
				))}
			</Marquee>
		</FooterStyle>
	);
};
export default Harmony;
