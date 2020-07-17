import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  color: white;
`;

class HeaderBar extends React.Component {
  render() {
    return (
      <Header>
        Box for week of July 17
        <button onClick={this.props.saveBox}>Save Box</button>
        <button onClick={this.props.exitPicker}>Exit Picker</button>
      </Header>
    );
  }
}

export default HeaderBar;
