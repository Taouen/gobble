import React from 'react';
import '../css/recipeCard.css';

class RecipeCard extends React.Component {
	render() {
		const {image, title, protein} = this.props;
		return (
			<div className="recipe-card">
				<div className="image-holder"></div>
				<h3>{title}</h3>
				<p>{protein}</p>
			</div>
		);
	}
}

export default RecipeCard;