import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';
import '../css/reset.css';

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
              identifier={recipe.identifier}
              title={recipe.title}
              image={recipe.image}
              removeFromBox={this.props.removeFromBox}
            />
          );
        })}
      </BoxWrapper>
    );
  }
}

export default Box;
