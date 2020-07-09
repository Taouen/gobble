import React from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';
import sampleRecipes from '../recipes';
import Box from './Box';
import CategoryBar from './CategoryBar';
import { v1 as uuid } from 'uuid';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-areas:
    'menu box'
    'recipes box';
`;
const RecipeCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-area: recipes;
`;
const StyledBox = styled(Box)`
  grid-area: box;
`;

class Picker extends React.Component {
  state = {
    recipes: [],
    box: [],
    boxFull: false,
    categories: [
      'All',
      'Chicken',
      'Beef',
      'Pork',
      'Fish',
      'Egg',
      'Vegetarian',
      'Vegan',
    ],
    activeCategory: 'All',
  };

  componentDidMount = () => {
    // trying to generate categories state from list of recipes

    const categories = [];
    sampleRecipes.map((recipe) => {
      if (categories.findIndex(recipe.protein)) {
        return;
      } else {
        categories.push(recipe.protein);
      }
    });
    this.setState({ categories });
    this.setState({ recipes: sampleRecipes });
  };

  filterCategory = (protein) => {
    let currentCategory = this.state.activeCategory;
    currentCategory = protein;
    this.setState({ activeCategory: currentCategory });
  };

  addToBox = (id) => {
    if (this.state.boxFull) {
      alert('Your box is full! Remove recipes before adding more.');
    } else {
      const box = this.state.box;
      const index = this.state.recipes.findIndex((recipe) => recipe.id === id);
      const recipe = { ...this.state.recipes[index] };
      const identifier = uuid();
      recipe.identifier = identifier;
      box.push(recipe);
      this.setState({ box });
      if (this.state.box.length === 6) {
        this.setState({ boxFull: true });
      }
    }
  };

  removeFromBox = (identifier) => {
    const box = this.state.box;
    const index = box.findIndex((i) => i.identifier === identifier);
    box.splice(index, 1);
    this.setState({ box });
    this.setState({ boxFull: false });
  };

  render() {
    const { recipes, categories, activeCategory } = this.state;
    return (
      <Wrapper>
        <CategoryBar
          categories={categories}
          filterCategory={this.filterCategory}
        />
        <RecipeCards>
          {recipes.map((recipe) => {
            if (activeCategory === 'All' || recipe.protein === activeCategory) {
              return (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                  protein={recipe.protein}
                  addToBox={this.addToBox}
                />
              );
            }
          })}
        </RecipeCards>
        <StyledBox
          contents={this.state.box}
          recipes={this.state.recipes}
          removeFromBox={this.removeFromBox}
        />
      </Wrapper>
    );
  }
}

export default Picker;
