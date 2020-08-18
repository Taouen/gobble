import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: green;
  padding: 10px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 auto;
  border-radius: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Message = styled.h1`
  color: white;
  font-size: 2rem;
  font-family: 'Times New Roman', serif;
  margin: 50px 0;
  @media (min-width: 992px) {
    font-size: 3rem;
  }
`;

class Checkout extends React.Component {
  returnHome = () => {
    this.props.history.push(`/`);
  };

  render() {
    return (
      <Wrapper>
        <Message>Thanks for shopping with us!</Message>
        <Button onClick={this.returnHome}>Back to Home</Button>
      </Wrapper>
    );
  }
}
export default Checkout;
