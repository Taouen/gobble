import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';
import '../css/reset.css';

const BoxWrapper = styled.div`
  background: #ccc;
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  grid-area: box;
  display: none;

  @media (min-width: 992px) {
    display: inline-block;
  }
`;
const Full = styled.span`
  color: red;
  font-weight: bold;
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
          <h3>
            Your box is <Full>full!</Full>
          </h3>
        ) : (
          <h3>Add up to {6 - contents.length} more recipes!</h3>
        )}
      </BoxWrapper>
    );
  }
}

export default Box;
