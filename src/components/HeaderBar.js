import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  align-items: center;
  color: white;
  display: flex;
  grid-area: title;
  justify-content: space-between;
  margin: 20px 0;
  padding: 0 20px;
  @media (min-width: 992px) {
    padding: 0;
  }
`;
const Button = styled.button`
  background: green;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.7em;
  height: 3em;
  margin-left: 20px;
  padding: 15px;
  &:hover {
    box-shadow: inset 0 0 3px #000000;
  }
  @media (min-width: 992px) {
    font-size: 1em;
    height: 30px;
    margin-left: 10px;
    padding: 0 8px;
  }
`;
const Title = styled.h1`
  font-size: 3.8em;
  @media (min-width: 992px) {
    font-size: 2em;
  }
`;

class HeaderBar extends React.Component {
  render() {
    return (
      <Header className={this.props.className}>
        <Title>Box for week of July 17</Title>
        <div>
          <Button onClick={this.props.saveBox}>Save Changes</Button>
          <Button onClick={this.props.exitPicker}>Exit Picker</Button>
        </div>
      </Header>
    );
  }
}

export default HeaderBar;
