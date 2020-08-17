import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';
import '../css/reset.css';

const BoxWrapper = styled.div`
  background: #ccc;
  border: 1px solid black;
  display: none;
  grid-area: box;
  padding: 10px;
  text-align: center;

  @media (min-width: 992px) {
    display: inline-block;
  }
`;
const BoxInfo = styled.div`
  align-items: center;
  border-bottom: 1px solid #999;
  display: flex;
  font-size: 1.2rem;
  height: 44px;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  @media (min-width: 576px) {
    height: 60px;
  }
`;
const CheckoutButton = styled.button`
  background: green;
  border: none;
  border-radius: 2px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 90%;
  &.small {
    font-size: inherit;
    padding: 0.25rem;
    transition: opacity 0.5s;
    width: auto;
  }
  @media (min-width: 576px) {
    cursor: pointer;
    padding: 2vh;
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
        <BoxInfo>
          {contents.length === 6 ? (
            <h3>Your box is full!</h3>
          ) : (
            <h3>{contents.length} Items (Maximum 6)</h3>
          )}
          <CheckoutButton className="small">Checkout</CheckoutButton>
        </BoxInfo>
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
