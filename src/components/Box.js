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
    const orderIds = [...this.props.contents];

    return (
      <BoxWrapper>
        {orderIds.map((recipe) => {
          const id = uuid();
          return (
            <BoxItem
              key={id}
              index={id}
              // I know that the lines below this are wrong. The orderIds.indexOf(recipe) part will always have the wrong index, as it is pulling the index from the box state instead of the recipes state, but I can't figure out how to get the index of the recipe from recipes array.
              title={this.props.recipes[orderIds.indexOf(recipe)].title}
              image={this.props.recipes[orderIds.indexOf(recipe)].image}
              removeFromBox={this.props.removeFromBox}
            />
          );
        })}
      </BoxWrapper>
    );
  }
}

export default Box;
