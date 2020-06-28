import React from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';
import sampleRecipes from '../recipes';
import { v4 as uuid } from 'uuid';
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
    console.log(key);
    const id = uuid();
    // box.push(key); this works if box state is an array
    box.push(key); // this is an array function i think, you can add a prop to the object more easily like i think box.id = id;

    this.setState({ box });
  };

  removeFromBox = (key) => {
    // detect the key here and use it to select the id, not the key (from the keys.map in the render fundtion)
    const box = [...this.state.box];
    // box.splice(key, 1); this works if box state is an array
    delete box[key];
    this.setState({ box });
  };

  render() {
    // this feels a bit strange, like it's duplicating something... i feel like the menu of recipes ought be an array in the first place
    const originalKeys = [...this.state.recipes];
    // const keys = Object.keys(originalKeys);

    return (
      <Wrapper>
        <div className="test">
          {originalKeys.map((object) => {
            //const id = uuid(); <-- this is generating the key when it's in the menu, not when it's added to the box : correct, That's why its commented out haha
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
