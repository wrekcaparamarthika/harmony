import React from 'react';
import styled from '@emotion/styled';
interface IComingSoon {
	title: string;
}
const ComingSoonStyle = styled.div`
	padding: 0.25rem;
	display: flex;
	justify-content: center;
`;
const ComingSoon: React.FC<IComingSoon> = ({
	title = 'title',
}): React.JSX.Element => {
	return (
		<ComingSoonStyle>
			<h1>{title}</h1>
		</ComingSoonStyle>
	);
};
export default ComingSoon;
