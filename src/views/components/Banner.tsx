import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
const BannerStyle = styled.div`
	position: fixed;
	width: 100%;
	left: 50%;
	transform: translateX(-50%);
	padding: 0.75rem;
	background-color: #a6373e;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	div {
		a {
			text-transform: capitalize;
			color: #fffef4;
			text-decoration: none;
			font-size: 15px;
			font-weight: bold;
		}
	}
`;
const Banner = (): React.JSX.Element => {
	return (
		<BannerStyle>
			<div>
				<NavLink to='/ticket'>ticket</NavLink>
			</div>
			<div>
				<NavLink to='/lineup'>lineup</NavLink>
			</div>
			<div>
				<NavLink to='rundown'>rundown</NavLink>
			</div>
			<div>
				<NavLink to='merchandise'>merchandise</NavLink>
			</div>
		</BannerStyle>
	);
};
export default Banner;
