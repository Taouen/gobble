import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';
import '../css/reset.css';

const BoxWrapper = styled.div`
  padding: 10px;
  border: 1px solid black;
  background: #ccc;
  text-align: center;
`;

class Box extends React.Component {
  render() {
    const contents = this.props.contents;

    return (
      <BoxWrapper className={this.props.className}>
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
        {contents.length === 6 ? (
          <h3>Your box is full!</h3>
        ) : (
          <h3>Add up to {6 - contents.length} more recipes!</h3>
        )}
      </BoxWrapper>
    );
  }
}

export default Box;
