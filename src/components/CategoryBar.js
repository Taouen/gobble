import React from 'react';
import styled from 'styled-components';

const Bar = styled.ul`
  color: white;
  display: flex;
  grid-area: menu;
  justify-content: space-around;
  padding: 10px;
`;
const CategoryButton = styled.button`
  background: ${(props) => (props.active ? 'green' : 'none')};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 2em;

  @media (min-width: 992px) {
    font-size: 1em;
  }
  &:hover {
    background: green;
  }
`;

class Category extends React.Component {
  render() {
    const categories = this.props.categories;

    return (
      <Bar>
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
      </Bar>
    );
  }
}

export default Category;
