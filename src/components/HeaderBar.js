import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  align-items: center;
  color: white;
  display: flex;
  font-family: serif;
  grid-area: title;
  justify-content: space-between;
  margin: 20px 0;
  padding: 0 10px;
`;
const Button = styled.button`
  background: green;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 1vw;
  padding: 0;
  @media (min-width: 576px) {
    padding: 0.25rem;
  }
  @media (min-width: 992px) {
    font-size: 1rem;
    height: 30px;
    margin-left: 10px;
    padding: 0 8px;
    &:hover {
      box-shadow: inset 0 0 3px #000000;
    }
  }
`;
const Title = styled.h1`
  font-size: 1.5rem;
  @media (min-width: 576px) {
    display: block;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
`;

class HeaderBar extends React.Component {
  render() {
    const date = new Date();
    const weekOf = `${date.toLocaleString('default', { month: 'long' })} ${
      date.getDate() - date.getDay()
    }`;
    return (
      <Header className={this.props.className}>
        <Title>
          Box for week of <span>{weekOf}</span>
        </Title>
        <ButtonWrapper>
          <Button onClick={this.props.saveBox}>Save Changes</Button>
          <Button onClick={this.props.exitPicker}>Exit Picker</Button>
        </ButtonWrapper>
      </Header>
    );
  }
}

export default HeaderBar;
