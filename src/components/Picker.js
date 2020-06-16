import React from 'react';
import RecipeCard from './RecipeCard';
import sampleRecipes from '../recipes';
import '../css/picker.css';


class Picker extends React.Component {
	state = {
		recipes: {},
	}

	loadSampleRecipes = () => {
		this.setState({recipes: sampleRecipes});
	}

	render() {
		return (
			<div className="card-wrapper">
				{Object.keys(this.state.recipes)
					.map(key => 
					<RecipeCard
						key={key}
						title={this.state.recipes[key].title}
						image={this.state.recipes[key].image}
						protein={this.state.recipes[key].protein}
					/>)
				}
				<button onClick={this.loadSampleRecipes}>Load Sample Recipes</button>
			</div>
		);
	}
}

export default Picker;