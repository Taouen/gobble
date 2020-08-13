import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  color: white;
  /*   display: flex; */
  font-family: Arial, Helvetica, sans-serif;
  grid-area: menu;
  /*   justify-content: space-between; */
  padding: 0 10px;
  width: 100vw;
`;
const CategoriesMenu = styled.ul`
  background: #555;
  display: flex;
  flex-wrap: wrap;
  height: 0;
  /*   justify-content: center; */
  overflow: hidden;
  transition: 0.5s;
  width: 100%;
  &.active {
    height: 6rem;
    overflow: scroll;
    /* need to figure out transition, currently even setting the transition does nothing. */
  }
`;
const CategoryButton = styled.button`
  background: ${(props) => (props.active ? 'green' : 'none')};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 5px;
  padding: 5px 10px; /* apparently the li has a default padding, need this to override */
  /*   width: 100px;  */ /*  not sure what to set here, need all the buttons to be the same width but dont want to use a fixed width */
  &:hover {
    background: green;
  }
`;
const FilterButton = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;
const Arrow = styled.img`
  width: 5vw;
  transition: 0.3s;
  transform: rotate(-180deg);
  &.active {
    transform: rotate(0deg);
    transition: 0.3s;
  }
`;

class Category extends React.Component {
  state = {
    active: true,
  };

  openMenu = () => {
    const isActive = this.state.active;
    this.setState({ active: !isActive });
  };

  render() {
    const categories = this.props.categories;

    return (
      <Bar>
        <FilterButton onClick={this.openMenu}>
          Filter{' '}
          <Arrow
            src="/images/arrow.png"
            className={this.state.active ? 'active' : 'null'}
          />
        </FilterButton>

        <CategoriesMenu className={this.state.active ? 'active' : 'null'}>
          {categories.map((protein, i) => (
            <li key={i}>
              <CategoryButton
                onClick={() => this.props.filterCategory(protein)}
                active={this.props.activeCategory === protein}
              >
                {protein}
              </CategoryButton>
            </li>
          ))}
        </CategoriesMenu>
      </Bar>
    );
  }
}

export default Category;
