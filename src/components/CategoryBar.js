import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  grid-area: menu;
  /*   justify-content: space-between; */
  padding: 0 10px;
  width: 100%;
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
  padding: 5px 10px;
  /*   width: 100px;  */ /*  not sure what to set here, need all the buttons to be the same width but dont want to use a fixed width */
  &:hover {
    background: green;
  }
`;
const FilterButton = styled.h4`
  align-self: center;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;
const Arrow = styled.img`
  transform: rotate(-180deg);
  transition: 0.3s;
  width: 1.5rem;
  &.active {
    transform: rotate(0deg);
    transition: 0.3s;
  }
`;

class Category extends React.Component {
  state = {
    active: false,
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
            alt=""
            className={this.state.active ? 'active' : 'null'}
            src="/images/arrow.png"
          />
        </FilterButton>

        <CategoriesMenu className={this.state.active ? 'active' : 'null'}>
          {categories.map((protein, i) => (
            <li key={i}>
              <CategoryButton
                active={this.props.activeCategory === protein}
                onClick={() => this.props.filterCategory(protein)}
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
