import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';

const BoxTray = styled.div`
  align-items: center;
  background: #ccc;
  border: 1px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  bottom: ${(props) => {
    if (props.expanded) {
      return '0';
    } else {
      return `-456px`;
    }
  }};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  height: 500px;
  justify-content: space-between;
  padding-bottom: 4vh;
  position: fixed;
  transition: 0.5s;
  width: 100%;
  @media (min-width: 576px) {
    bottom: ${(props) => {
      if (props.expanded) {
        return '0';
      } else {
        return `-177px`;
      }
    }};
    height: 225px;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
const BoxInfo = styled.div`
  /*   border: 1px solid purple; */
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 44px;
  justify-content: center;
  padding-bottom: 10px;
  width: 100%;
  @media (min-width: 576px) {
    height: 60px;
  }
`;
const Full = styled.span`
  color: red;
  font-weight: bold;
`;
const BoxContents = styled.div`
  align-items: center;
  border-bottom: 1px solid #999;
  height: 80%;
  margin-bottom: 2vh;
  overflow: scroll;
  width: 100%;
`;
const CheckoutButton = styled.button`
  background: green;
  border: none;
  border-radius: 2px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  width: 90%;
`;

class MobileBox extends React.Component {
  state = {
    expanded: true,
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
            <h3>
              Your box is <Full>full!</Full>
            </h3>
          ) : (
            <h3>Add up to {6 - contents.length} more recipes!</h3>
          )}
        </BoxInfo>
        <BoxContents>
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
        </BoxContents>
        <CheckoutButton>Checkout</CheckoutButton>
      </BoxTray>
    );
  }
}

export default MobileBox;
