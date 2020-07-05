import React from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';
import sampleRecipes from '../recipes';
import Box from './Box';
import { v1 as uuid } from 'uuid';

const Button = styled.button`
  border: none;
  background: green;
  padding: 10px;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  margin: 0 auto;
  border-radius: 10px;
`;
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
const CategoryBar = styled.ul`
  display: flex;
  justify-content: space-around;
  grid-area: menu;
  color: white;
  padding: 10px;
`;
const StyledBox = styled(Box)`
  grid-area: box;
`;

class Picker extends React.Component {
  state = {
    recipes: [],
    box: [],
    boxFull: false,
    proteins: ['Chicken', 'Beef', 'Pork', 'Fish', 'Egg', 'Vegetarian', 'Vegan'],
  };

  loadSampleRecipes = () => {
    this.setState({ recipes: sampleRecipes });
  };

  addToBox = (id) => {
    if (this.state.boxFull) {
      alert('Box is full! Remove recipes before adding more.');
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
    const { recipes, proteins } = this.state;
    return (
      <Wrapper>
        <CategoryBar>
          {proteins.map((protein, i) => (
            <li key={i}>{protein}</li>
          ))}
        </CategoryBar>
        <RecipeCards>
          {recipes.map((recipe) => {
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
          })}
        </RecipeCards>
        {recipes.length === 0 ? (
          <Button onClick={this.loadSampleRecipes}>Load Sample Recipes</Button>
        ) : null}
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
