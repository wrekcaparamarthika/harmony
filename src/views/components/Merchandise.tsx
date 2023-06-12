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
		z-index: 999;
		position: fixed;
		width: 100%;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0%;
		flex-direction: column;
		margin: 0rem;
		display: flex;
		justify-content: center;
		padding: 0.5rem;
		h1 {
			text-align: center;
		}
		p {
			text-align: center;
		}
		div {
			display: flex;
			flex-direction: row;
			justify-content: center;
			a {
				color: #fffef4;
				text-decoration: none;
				cursor: pointer;
				font-style: italic;
				font-weight: 700;
				text-decoration: underline;
				padding: 0.5rem;
			}
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
						untuk pre - order bisa langsung klik contact person
						tersebut agar nanti diarahkan ke whatsapp!
					</p>
					<div>
						{contactPerson.map((value, index) => (
							<React.Fragment key={index}>
								<Link to={value.cp}>{value.name}</Link>
							</React.Fragment>
						))}
					</div>
				</section>
			</MerchStyle>
			<Artwork />
		</React.Fragment>
	);
};
