import React from 'react';
import styled from 'styled-components';
import { v1 as uuidv1 } from 'uuid';
import RecipeCard from './RecipeCard';
import sampleRecipes from '../recipes';
import Box from './Box';
import '../css/picker.css';

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
/*
- menu rendered based on object in state of menu options
-- add to box function, uses key to pick out the box from menu options, and generates a uuid for that item in the box
-- remove from box function, uses uuid on the rendered item to find in the "in the box" array and remove



*/

class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      box: [],
    };

    this.addToBox = this.addToBox.bind(this);
    this.removeFromBox = this.removeFromBox.bind(this);
  }

  loadSampleRecipes = () => {
    this.setState({ recipes: sampleRecipes });
  };

  addToBox = (id) => {
    let box = this.state.box;
    let index = this.state.recipes.findIndex(recipe => recipe.id === id);
    let uuid = uuidv1();
    let recipe = this.state.recipes[index];
    recipe.identifier = uuid;
    console.log(uuid);
    console.log(recipe.identifier);
    box.push(recipe);
    this.setState({ box });
  };

  removeFromBox = (identifier) => {
    console.log(identifier);
    let index = this.state.box.findIndex(i => i.identifier === identifier);
    console.log(index);
    let box = this.state.box;
    const newBox = box.splice(index, 1);
    this.setState({ newBox });
  };

  render() {
    const { recipes }  = this.state;

    return (
      <Wrapper>
        <div className="test">
          {recipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
                protein={recipe.protein}
                addToBox={() => this.addToBox(recipe.id)}
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
