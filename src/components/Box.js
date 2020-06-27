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
          return (
            <BoxItem
              key={key + Math.random()}
              title={this.props.recipes[key].title}
              image={this.props.recipes[key].image}
            />
          );
        })}
      </BoxWrapper>
    );
  }
}

export default Box;
