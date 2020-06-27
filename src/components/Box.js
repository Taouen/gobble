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
    const orderIds = [...this.props.contents];

    return (
      <BoxWrapper>
        {orderIds.map((key) => {
          const exists = orderIds.indexOf(key);
          console.log(exists); // attempting to create a unique key for the BoxItems that I can reference to delete from the contents array. Using Math.random makes a unique identifier, but I can't access it once it's created.
          return (
            <BoxItem
              key={key + Math.random()}
              index={orderIds.indexOf(key) >= 0 ? 'exists' : 'nonexistant'}
              title={this.props.recipes[key].title}
              image={this.props.recipes[key].image}
              removeFromBox={this.props.removeFromBox}
            />
          );
        })}
      </BoxWrapper>
    );
  }
}

export default Box;
