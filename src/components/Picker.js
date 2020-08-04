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

    - Desktop: when a protein category is selected and items added to the box, it pushes the recipe cards further down the page. Category bar gets taller for some reason.
    - Mobile: On inital load, the Picker is super zoomed in.
    - Mobile: when you add an item to box, the box jumps up slightly before settling back to the normal position.
    - Mobile (iphone): When you select a category, the page zooms in, and you cannot zoom back to normal view.
    - Firefox Android: when exiting picker, landing page reflects zoom level of picker.
    - Mobile: when the box becomes too large for the screen, the user must remove items from the box in order to close it.

*/

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'menu'
    'recipes'
    'box';
  width: 95vw;
  @media (min-width: 992px) {
    grid-template-areas:
      'title title'
      'menu box'
      'recipes box';
    grid-template-columns: 3fr 1fr;
  }
`;
const RecipeCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  padding-bottom: 140px;
  @media (min-width: 992px) {
    flex-direction: row;
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
    expanded: false,
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

  expandBox = () => {
    const isExpanded = this.state.expanded;
    this.setState({ expanded: !isExpanded });
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
          contents={this.state.box}
          recipes={this.state.recipes}
          removeFromBox={this.removeFromBox}
        />
        <MobileBox
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
