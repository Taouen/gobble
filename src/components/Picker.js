import React from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';
import sampleRecipes from '../recipes';
import Box from './Box';
import CategoryBar from './CategoryBar';
import HeaderBar from './HeaderBar';
import MobileBox from './MobileBox';
import isEqual from 'lodash/isEqual';
import { v1 as uuid } from 'uuid';

/* --- Current Issues & To Do's ---

    - iOS Safari: Landscape view scrolls fixed bottom below the screen while menu bar is showing

*/

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'menu'
    'recipes'
    'box';
  width: 100%;
  @media (min-width: 992px) {
    align-items: flex-start;
    grid-template-areas:
      'title title'
      'menu box'
      'recipes box';
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto auto 1fr;
  }
`;
const RecipeCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  padding-bottom: 140px;
  @media (min-width: 992px) {
    flex-wrap: wrap;
    grid-area: recipes;
    justify-content: start;
    margin: 0;
    padding: 0;
  }
`;

class Picker extends React.Component {
  state = {
    recipes: [],
    box: [],
    boxFull: false,
    categories: [],
    activeCategory: 'All',
  };

  componentDidMount = () => {
    // generate categories state from list of recipes
    const categories = ['All'];
    sampleRecipes.map((recipe) => {
      if (categories.indexOf(recipe.protein) === -1) {
        categories.push(recipe.protein);
      }
    });

    // generate box from localStorage, if no localStorage item, create it as an empty array
    const currentBox = JSON.parse(localStorage.getItem('box'));
    if (currentBox) {
      this.setState({ box: currentBox });
      if (currentBox.length === 6) {
        this.setState({ boxFull: true });
      }
    } else {
      localStorage.setItem('box', JSON.stringify([]));
    }
    this.setState({ categories });
    this.setState({ recipes: sampleRecipes });
  };

  filterCategory = (protein) => {
    this.setState({ activeCategory: protein });
  };

  addToBox = (id) => {
    const { box, boxFull, recipes } = this.state;
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
    }
  };

  removeFromBox = (identifier) => {
    const { box } = this.state;
    const index = box.findIndex((i) => i.identifier === identifier);
    box.splice(index, 1);
    this.setState({ box });
    this.setState({ boxFull: false });
  };

  saveBox = () => {
    if (window.confirm('Save box and close recipe picker?')) {
      localStorage.setItem('box', JSON.stringify(this.state.box));
      this.props.history.push('/');
    }
  };

  exitPicker = () => {
    if (!isEqual(this.state.box, JSON.parse(localStorage.getItem('box')))) {
      if (window.confirm('Do you want to exit without saving?')) {
        this.props.history.push('/');
      }
    } else {
      this.props.history.push('/');
    }
  };

  checkout = () => {
    const { box } = this.state;

    if (box.length < 2) {
      alert(`Add at least ${2 - box.length} more recipe(s) to your box.`);
    } else if (window.confirm('Ready to checkout?')) {
      localStorage.clear();
      this.props.history.push('/checkout');
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
        <Box
          checkout={this.checkout}
          contents={this.state.box}
          recipes={this.state.recipes}
          removeFromBox={this.removeFromBox}
        />
        <MobileBox
          checkout={this.checkout}
          contents={this.state.box}
          recipes={this.state.recipes}
          removeFromBox={this.removeFromBox}
          expandBox={this.expandBox}
          expanded={this.state.expanded}
        />
      </Wrapper>
    );
  }
}

export default Picker;
