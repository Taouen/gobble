import React from 'react';
import styled from 'styled-components';

const Bar = styled.ul`
  display: flex;
  justify-content: space-around;
  grid-area: menu;
  color: white;
  padding: 10px;
`;
const CategoryButton = styled.button`
  color: white;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 2px solid #333;
  font-size: 1em;

  &:hover {
    border-bottom: 2px solid green;
  }
`;

class Category extends React.Component {
  render() {
    const categories = this.props.categories;

    return (
      <Bar>
        {categories.map((protein, i) => (
          <li key={i}>
            <CategoryButton onClick={() => this.props.filterCategory(protein)}>
              {protein}
            </CategoryButton>
          </li>
        ))}
      </Bar>
    );
  }
}

export default Category;
