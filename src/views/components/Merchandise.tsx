import React from 'react';
import Artwork from './Artwork';
import NavHeader from './NavHeader';
import { Global } from '@emotion/react';
import globalInject from '../style/DefaultStyle';
import {
	MERCHANDISE_BLACK,
	MERCHANDISE_SizeChart,
	MERCHANDISE_WHITE,
} from '../../assets';
import { contactPerson } from '../../constants';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
const MerchStyle = styled.div`
	display: flex;
	flex-direction: column;
	button {
		all: unset;
		text-transform: capitalize;
		background-color: #a6373e;
		padding: 1rem;
		align-items: center;
		justify-content: center;
		color: #fffef4;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1rem;
		text-transform: capitalize;
		img {
			width: 340px;
		}
		img:nth-of-type(2) {
			position: absolute;
			top: 35%;
		}
	}
	section:nth-of-type(2) {
		background-color: #a6373e;
		color: #fffef4;
		text-transform: capitalize;
		padding: 1rem;
		height: fit-content;
		z-index: 999;
		position: fixed;
		width: 50%;
		top: 65%;
		border-top-right-radius: 50%;
		border-bottom-right-radius: 50%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 0rem;
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

export const Merchandise: React.FC = (): React.JSX.Element => {
	const [isActive, setActive] = React.useState<boolean>(false);
	const handleActive = () => {
		setActive((prev) => !prev);
	};
	return (
		<React.Fragment>
			<Global styles={globalInject} />
			<NavHeader title='merchandise' />
			<MerchStyle>
				<button onClick={handleActive}>
					{isActive ? 'merchandise' : 'size chart'}
				</button>
				<section>
					<h1>{isActive ? 'size chart' : 'official merchandise'}</h1>
					{!isActive && (
						<React.Fragment>
							<img
								src={MERCHANDISE_WHITE}
								alt={MERCHANDISE_WHITE}
							/>
							<img
								src={MERCHANDISE_BLACK}
								alt={MERCHANDISE_BLACK}
							/>
						</React.Fragment>
					)}
					{isActive && (
						<img
							src={MERCHANDISE_SizeChart}
							alt={MERCHANDISE_SizeChart}
						/>
					)}
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
