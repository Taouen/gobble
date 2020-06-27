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

class Picker extends React.Component {
  state = {
    recipes: {},
    box: [],
  };

  loadSampleRecipes = () => {
    this.setState({ recipes: sampleRecipes });
  };

  addToBox = (key) => {
    const box = [...this.state.box];
    box.push(key);
    this.setState({ box });
    // I think I can leave this as is, and use the value of each key to tell react how many of that item to render
  };

  render() {
    const keys = Object.keys(this.state.recipes);

    return (
      <Wrapper>
        <div className="test">
          {keys.map((key) => (
            <RecipeCard
              key={key}
              index={key}
              title={this.state.recipes[key].title}
              image={this.state.recipes[key].image}
              protein={this.state.recipes[key].protein}
              addToBox={this.addToBox}
            />
          ))}
        </div>
        {keys.length === 0 ? (
          <Button onClick={this.loadSampleRecipes}>Load Sample Recipes</Button>
        ) : null}
        <Box contents={this.state.box} recipes={this.state.recipes} />
      </Wrapper>
    );
  }
}

export default Picker;