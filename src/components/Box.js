import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';
import '../css/reset.css';
import { v4 as uuid } from 'uuid';

const BoxWrapper = styled.div`
  padding: 10px;
  border: 1px solid black;
  background: #ccc;
`;

class Box extends React.Component {
  render() {
    const contents = this.props.contents;

    return (
      <BoxWrapper>
        {contents.map((recipe, i) => {
          return (
            <BoxItem
              key={i}
              title={recipe.title}
              image={recipe.image}
              removeFromBox={() => this.props.removeFromBox(recipe.identifier)}
            />
          );
        })}
      </BoxWrapper>
    );
  }
}

export default Box;
