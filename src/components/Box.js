import React from 'react';
import styled from 'styled-components';
import '../css/reset.css';

const BoxWrapper = styled.div`
  padding: 10px;
  border: 1px solid black;
  background: #ccc;
`;

const BoxContent = styled.div`
  padding: 10px;
  border: 1px dotted red;
  background: #888;
`;

class Box extends React.Component {
  renderOrder = (key) => {
    const count = this.props.contents[key];
    const recipe = this.props.recipes[key];
    for (let i = 0; i < count; i++) {
      return <li key={key + i}>{recipe.title}</li>;

      // This is currently only adding the items once to the box (visually, state is correct).
    }
  };

  render() {
    const orderIds = Object.keys(this.props.contents);

    // OOPS. Wrote the box to make a count of each item on a single line, user story asks for each item to appear indiviudually. A recipe added twice will appear two times.

    return (
      <BoxWrapper>
        <BoxContent>{orderIds.map(this.renderOrder)}</BoxContent>
      </BoxWrapper>
    );
  }
}

export default Box;
