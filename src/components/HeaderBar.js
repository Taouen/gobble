import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  color: white;
  display: flex;
  justify-content: space-between;
  grid-area: title;
  margin: 20px 0;
`;
const Button = styled.button`
  background: green;
  border: none;
  color: white;
  cursor: pointer;
  height: 30px;
  margin-left: 10px;

  &:hover {
    box-shadow: inset 0 0 3px #000000;
  }
`;
const Title = styled.h1`
  font-size: 3.5em;
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
