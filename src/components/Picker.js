import React from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';
import sampleRecipes from '../recipes';
import Box from './Box';
import '../css/picker.css';
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
  grid-template-columns: 3fr 1fr;
`;

class Picker extends React.Component {
  state = {
    recipes: [],
    box: [],
  };

  loadSampleRecipes = () => {
    this.setState({ recipes: sampleRecipes });
  };

  addToBox = (id) => {
    // add the id generation here, and add the resultant id to the box object below
    const box = this.state.box;
    const index = this.state.recipes.findIndex((recipe) => recipe.id === id);
    const recipe = { ...this.state.recipes[index] };
    const identifier = uuid();
    recipe.identifier = identifier;
    // ^ this is adding the identifier to the recipe directly in state, so every duplicate of the recipe ends up with the same identifier

    // sorted it out -- spread the reference into a new object, then applied the identifier only to the new copy of the object.
    box.push(recipe);
    this.setState({ box });
  };

  removeFromBox = (identifier) => {
    const box = this.state.box;
    const index = box.findIndex((i) => i.identifier === identifier);
    box.splice(index, 1);
    this.setState({ box });
  };

  render() {
    const { recipes } = this.state;

    return (
      <Wrapper>
        <div className="test">
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
        </div>
        {recipes.length === 0 ? (
          <Button onClick={this.loadSampleRecipes}>Load Sample Recipes</Button>
        ) : null}
        <Box
          contents={this.state.box}
          recipes={this.state.recipes}
          removeFromBox={this.removeFromBox}
        />
      </Wrapper>
    );
  }
}

export default Picker;
