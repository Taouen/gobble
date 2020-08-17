import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';

const BoxTray = styled.div`
  align-items: center;
  background: #ccc;
  border: 1px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  bottom: ${(props) => (props.expanded ? '0' : '-456px')};
  display: flex;
  flex-direction: column;
  font-family: serif;
  height: 500px;
  justify-content: space-between;
  padding-bottom: 4vh;
  position: fixed;
  transition: 0.5s;
  width: 100%;
  @media (min-width: 576px) {
    bottom: ${(props) => (props.expanded ? '0' : '-227px')};
    height: 275px;
  }
  @media (min-width: 992px) {
    display: none;
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
const BoxContents = styled.div`
  align-items: center;
  border-bottom: 1px solid #999;
  height: 80%;
  margin-bottom: 2vh;
  overflow: scroll;
  width: 100%;
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
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
    opacity: ${(props) => (props.expanded ? '0' : '1')};
    padding: 0.25rem;
    transition: opacity 0.5s;
    width: auto;
  }
  @media (min-width: 576px) {
    padding: 2vh;
  }
`;

class MobileBox extends React.Component {
  state = {
    expanded: false,
  };

  expandBox = () => {
    const isExpanded = this.state.expanded;
    this.setState({ expanded: !isExpanded });
  };

  render() {
    const { contents } = this.props;

    return (
      <BoxTray expanded={this.state.expanded}>
        <BoxInfo onClick={this.expandBox}>
          {contents.length === 6 ? (
            <h3>Your box is full!</h3>
          ) : (
            <h3>{contents.length} Items (Maximum 6)</h3>
          )}
          <CheckoutButton
            className="small"
            expanded={this.state.expanded}
            onClick={this.expandBox}
          >
            Checkout
          </CheckoutButton>
        </BoxInfo>
        <BoxContents>
          {contents.map((recipe, i) => {
            return (
              <BoxItem
                contents={contents.length}
                key={i}
                identifier={recipe.identifier}
                image={recipe.image}
                removeFromBox={this.props.removeFromBox}
                title={recipe.title}
              />
            );
          })}
        </BoxContents>
        <CheckoutButton>Checkout</CheckoutButton>
      </BoxTray>
    );
  }
}

export default MobileBox;
