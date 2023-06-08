import React from 'react';
import Artwork from './Artwork';
import NavHeader from './NavHeader';
import { Global } from '@emotion/react';
import globalInject from '../style/DefaultStyle';
import { Merch1, Merch2, Merch3, Merch4 } from '../../assets';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
const MerchStyle = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	height: 100vh;
	gap: 5rem;
	img {
		width: 320px;
	}
	section:nth-of-type(1) {
		display: flex;
		flex-direction: column;
		img:nth-of-type(2) {
			position: absolute;
			top: 10rem;
			left: 5rem;
		}
	}
	section:nth-of-type(2) {
		display: flex;
		flex-direction: column;
		img:nth-of-type(2) {
			position: absolute;
			top: 30rem;
			left: 5rem;
		}
	}
	section:nth-of-type(3) {
		height: 5rem;
		background-color: #a6373e;
		color: #fffef4;
		position: fixed;
		top: 50%;
		text-transform: capitalize;
		padding: 1rem;
		a {
			color: #fffef4;
			text-decoration: none;
			cursor: pointer;
		}
	}
`;
const Merchandise = () => {
	return (
		<React.Fragment>
			<Global styles={globalInject} />
			<NavHeader title='merchandise' />
			<MerchStyle>
				<section>
					<img src={Merch3} />
					<img src={Merch1} />
				</section>
				<section>
					<img src={Merch4} />
					<img src={Merch2} />
				</section>
				<section>
					<h1>contact person</h1>
					<Link
						to={
							'https://api.whatsapp.com/send/?phone=%2B6281239277187&text&type=phone_number&app_absent=0'
						}>
						suralaga
					</Link>
					<br />
					<Link
						to={
							'https://api.whatsapp.com/send/?phone=%2B6287758706555&text&type=phone_number&app_absent=0'
						}>
						devani rata
					</Link>
				</section>
			</MerchStyle>
			<Artwork />
		</React.Fragment>
	);
};

export default Merchandise;
