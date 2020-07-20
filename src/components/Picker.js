import React from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';
import sampleRecipes from '../recipes';
import Box from './Box';
import CategoryBar from './CategoryBar';
import HeaderBar from './HeaderBar';
import isEqual from 'lodash/isEqual';
import { v1 as uuid } from 'uuid';

const Wrapper = styled.div`
  display: grid;
  padding: 20px;
  grid-template-areas:
    'title'
    'menu'
    'recipes'
    'box';

  @media (min-width: 992px) {
    grid-template-columns: 4fr 1fr;
    grid-template-areas:
      'title title'
      'menu box'
      'recipes box';
  }
`;
const RecipeCards = styled.div`
  display: flex;
  /* flex-wrap: no-wrap; */
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    grid-area: recipes;
  }
`;
const StyledBox = styled(Box)`
  grid-area: box;
`;
const StyledHeader = styled(HeaderBar)`
  height: 50px;
  grid-area: title;
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

  render() {
    const { recipes, categories, activeCategory } = this.state;
    return (
      <Wrapper>
        <StyledHeader exitPicker={this.exitPicker} saveBox={this.saveBox} />
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
