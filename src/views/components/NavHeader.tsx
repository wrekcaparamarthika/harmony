import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
const NavHeaderStyle = styled.header`
	text-transform: capitalize;
	display: flex;
	justify-content: space-between;
	padding: 0.25rem;
	margin: 0.25rem;
	a {
		color: black;
		text-decoration: none;
	}
`;
interface INavHeader {
	title: string;
}
const NavHeader: React.FC<INavHeader> = ({
	title = 'title',
}): React.JSX.Element => {
	return (
		<NavHeaderStyle>
			<NavLink to={'/'}>
				<h1>back</h1>
			</NavLink>
			<h1>{title}</h1>
		</NavHeaderStyle>
	);
};
export default NavHeader;
