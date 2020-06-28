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
    const orderIds = Object.keys(this.props.contents);
    console.log(orderIds);
    return (
      <BoxWrapper>
        {orderIds.map((key) => {
          const id = uuid();
          return (
            <BoxItem
              key={id}
              index={key}
              title={this.props.recipes[orderIds.indexOf(key)].title}
              image={this.props.recipes[orderIds.indexOf(key)].image}
              removeFromBox={this.props.removeFromBox}
            />
          );
        })}
      </BoxWrapper>
    );
  }
}

export default Box;
