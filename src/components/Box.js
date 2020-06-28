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
    const orderIds = Object.keys(this.props.contents);

    return (
      <BoxWrapper>
        {orderIds.map((key) => {
          return (
            <BoxItem
              key={key + Math.random()}
              index={orderIds.lastIndexOf(key)}
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
