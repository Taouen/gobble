import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
	font-size: 1.35rem;
	font-family: Arial, Helvetica, sans-serif;
`;

const Card = styled.div`
	border: 1px solid black;
	background: #ccc;
	width: 250px;
	height: 250px;
	margin: 10px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ImageWrapper = styled.div`
	height: 150px;
	overflow: hidden;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const Image = styled.img`
	width: 100%;
	height: auto;
`;

const RecipeTitle = styled.div `
	padding: 10px;	
`;

const AddButton = styled.button.attrs(props => ({
	addToBox: "props.addToBox",
	index: "props.index"
}))`
	background: green;
	color: white;
	border: none;
	width: 80%;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1rem;
	padding: 5px;
	cursor: pointer;
`


class RecipeCard extends React.Component {

	render() {
		const {image, title, protein} = this.props;
		return (
			<Card>
				<ImageWrapper>
					<Image src={image} />
				</ImageWrapper>
				<RecipeTitle>
					<Title>{title}</Title>
					<p>{protein}</p>
				</RecipeTitle>
				<AddButton onClick={() => this.props.addToBox(this.props.index)}>Add to Box</AddButton>
			</Card>
		);
	}
}

export default RecipeCard;