import React from 'react';
import styled from 'styled-components';

const BoxWrapper = styled.div `
	padding: 10px;
	border: 1px solid black;
	background: #ccc;
`;

const BoxContent = styled.div `
	padding: 10px;
	border: 1px dotted red;
	background: #888;
`

class Box extends React.Component {
	render() {
		const order = Object.keys(this.props.contents);

		return (
			<BoxWrapper>
				<BoxContent>
					{/* just added functionality to render the box state into the box. need to change it to add the total of each one, plus the price. */}
					{order}
				</BoxContent>
			</BoxWrapper>
		);
	}
}

export default Box;