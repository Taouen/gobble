import React from 'react';
import styled from 'styled-components';
import '../css/reset.css';

const Button = styled.button`
  border: none;
  background: green;
  padding: 10px;
  color: white;
  font-size: 1.3rem;
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
const Welcome = styled.h1`
  font-size: 10vw;
  font-family: 'Times New Roman', serif;
  margin: 50px 0;
  @media (min-width: 992px) {
    font-size: 3rem;
  }
`;

class App extends React.Component {
  openPicker = () => {
    this.props.history.push(`/picker`);
  };

  render() {
    return (
      <Wrapper>
        <Welcome>Welcome to Gobble!</Welcome>
        <Button onClick={this.openPicker}>Open Recipe Picker</Button>
      </Wrapper>
    );
  }
}

export default App;
