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
  @media (min-width: 992px) {
    padding: 0;
  }
`;
const Button = styled.button`
  background: green;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 1vw;
  padding: 0;
  &:hover {
    box-shadow: inset 0 0 3px #000000;
  }
  @media (min-width: 992px) {
    font-size: 1rem;
    height: 30px;
    margin-left: 10px;
    padding: 0 8px;
  }
`;
const Title = styled.h1`
  font-size: 1.5rem;
`;

class HeaderBar extends React.Component {
  render() {
    return (
      <Header className={this.props.className}>
        <Title>Box for week of July 17</Title>
        {/* <div> */}
        <Button onClick={this.props.saveBox}>Save Changes</Button>
        <Button onClick={this.props.exitPicker}>Exit Picker</Button>
        {/*  </div> */}
      </Header>
    );
  }
}

export default HeaderBar;
