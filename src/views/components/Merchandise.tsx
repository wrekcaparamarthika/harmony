import React from 'react';
import Artwork from './Artwork';
import NavHeader from './NavHeader';
import { Global } from '@emotion/react';
import globalInject from '../style/DefaultStyle';
import { Merch1, Merch2, Merch3, Merch4 } from '../../assets';
import { contactPerson } from '../../constants';
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
		background-color: #a6373e;
		color: #fffef4;
		text-transform: capitalize;
		padding: 1rem;
		height: fit-content;
		z-index: 999;
		position: fixed;
		width: 50%;
		top: 45%;
		border-top-right-radius: 50%;
		border-bottom-right-radius: 50%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		a {
			color: #fffef4;
			text-decoration: none;
			cursor: pointer;
			font-style: italic;
			font-weight: 700;
		}
		h1 {
			font-size: 16px;
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
					<p>
						untuk preorder bisa langsung klik contact person
						tersebut agar nanti diarahkan ke whatsapp!
					</p>
					{contactPerson.map((value, index) => (
						<React.Fragment key={index}>
							<Link to={value.cp}>{value.name}</Link>
						</React.Fragment>
					))}
				</section>
			</MerchStyle>
			<Artwork />
		</React.Fragment>
	);
};

export default Merchandise;
