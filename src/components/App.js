import React from 'react';
import styled from 'styled-components';
import '../css/reset.css';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center;
  flex-direction: column;
`;
const Message = styled.h1`
  color: white;
  font-size: 2.2rem;
  font-family: 'Times New Roman', serif;
  margin: 50px 0;
  @media (min-width: 992px) {
    font-size: 3rem;
  }
`;
const SubMessage = styled.h2`
  color: white;
  font-size: 1.4rem;
  margin-bottom: 25px;
`;
const Paragraph = styled.p`
  color: white;
  width: 70%;
  margin-bottom: 25px;
`;
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

class App extends React.Component {
  openPicker = () => {
    this.props.history.push(`/picker`);
  };

  render() {
    return (
      <Wrapper>
        <Message>Welcome to Gobble!</Message>
        <SubMessage>Make Dinner in 15 Minutes</SubMessage>

        <Paragraph>
          Gobble's chefs do all the prep work, like peeling, chopping &
          marinating, so you can cook a fresh homemade dinner in just 15
          minutes.
        </Paragraph>
        <Button onClick={this.openPicker}>Open Recipe Picker</Button>
      </Wrapper>
    );
  }
}

export default App;
