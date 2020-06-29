import React from 'react';
import styled from 'styled-components';
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
  state = {
    recipes: [],
    box: [],
  };

  loadSampleRecipes = () => {
    this.setState({ recipes: sampleRecipes });
  };

  addToBox = (key) => {
    // add the id generation here, and add the resultant id to the box object below
    const box = [...this.state.box];
    const recipes = [...this.state.recipes];
    /* Okay, here is where I'm currently having a problem. The key being supplied to the function is the index of the recipe related to the card. Everything appears to be operating properly, except that the wrong title and image are being rendered into the BoxItem component. */
    console.log(recipes[key]);
    box.push(recipes[key]);

    this.setState({ box });
  };

  removeFromBox = (key) => {
    // detect the key here and use it to select the id, not the key (from the keys.map in the render fundtion)
    const box = [...this.state.box];
    delete box[key];
    this.setState({ box });
  };

  render() {
    const originalKeys = [...this.state.recipes];

    return (
      <Wrapper>
        <div className="test">
          {originalKeys.map((object) => {
            const recipe = originalKeys.indexOf(object);
            return (
              <RecipeCard
                key={recipe}
                index={recipe}
                title={this.state.recipes[recipe].title}
                image={this.state.recipes[recipe].image}
                protein={this.state.recipes[recipe].protein}
                addToBox={this.addToBox}
              />
            );
          })}
        </div>
        {originalKeys.length === 0 ? (
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
