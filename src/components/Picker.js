import React from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';
import sampleRecipes from '../recipes';
import Box from './Box';
import CategoryBar from './CategoryBar';
import HeaderBar from './HeaderBar';
import { v1 as uuid } from 'uuid';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-areas:
    'title bar'
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
    boxHasChanged: false,
    categories: [],
    activeCategory: 'All',
  };

  componentDidMount = () => {
    // generate categories state from list of recipes
    const categories = ['All'];
    sampleRecipes.map((recipe) => {
      if (categories.indexOf(recipe.protein) !== -1) {
        return;
      } else {
        categories.push(recipe.protein);
      }
    });

    // generate box from localStorage
    const currentBox = JSON.parse(localStorage.getItem('box'));
    if (currentBox) {
      this.setState({ box: currentBox });
    }

    // need to set an initial state for box to use for comparison when saving

    this.setState({ categories });
    this.setState({ recipes: sampleRecipes });
  };

  filterCategory = (protein) => {
    // can this be pared down to just this.setState({ activeCategory: protein})?
    let currentCategory = this.state.activeCategory;
    currentCategory = protein;
    this.setState({ activeCategory: currentCategory });
  };

  addToBox = (id) => {
    const { box, boxFull, boxHasChanged, recipes } = this.state;
    if (boxFull) {
      alert('Your box is full! Remove recipes before adding more.');
    } else {
      const index = recipes.findIndex((recipe) => recipe.id === id);
      const recipe = { ...recipes[index] };
      const identifier = uuid();
      recipe.identifier = identifier;
      box.push(recipe);
      this.setState({ box });
      if (box.length === 6) {
        this.setState({ boxFull: true });
      }
      if (!boxHasChanged) {
        this.setState({ boxHasChanged: true });
      }
    }
  };

  removeFromBox = (identifier) => {
    const { box, boxHasChanged } = this.state;
    const index = box.findIndex((i) => i.identifier === identifier);
    box.splice(index, 1);
    this.setState({ box });
    this.setState({ boxFull: false });
    if (!boxHasChanged) {
      this.setState({ boxHasChanged: true });
    }
  };

  saveBox = () => {
    if (this.state.box.length === 0) {
      localStorage.removeItem('box');
    } else {
      localStorage.setItem('box', JSON.stringify(this.state.box));
    }
    if (window.confirm('Save box and close recipe picker?')) {
      this.props.history.push('/');
    }
  };

  exitPicker = () => {
    const { boxHasChanged } = this.state;
    if (boxHasChanged) {
      if (window.confirm('Do you want to exit without saving?')) {
        this.props.history.push('/');
      }
    } else {
      this.props.history.push('/');
    }
  };

  render() {
    const { recipes, categories, activeCategory } = this.state;
    return (
      <Wrapper>
        <HeaderBar exitPicker={this.exitPicker} saveBox={this.saveBox} />
        <CategoryBar
          categories={categories}
          filterCategory={this.filterCategory}
          activeCategory={this.state.activeCategory}
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
