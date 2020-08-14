import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';

const BoxTray = styled.div`
  align-items: center;
  background: #ccc;
  border: 1px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* when I changed the contents to be in a scrollable div, it changed the positioning calculations, need to adjust for max-height of BoxContents */
 /*  bottom: ${(props) => {
   if (props.expanded) {
     return '0%';
   } else {
     return `calc(0% - ${props.contents})`;
   }
 }}; */
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  height: auto;
  padding: 2vw;
  position: fixed;
  transition: 0.3s;
  width: 100%;
  @media (min-width: 992px) {
    display: none;
  }
`;
const BoxInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
  width: 100%;
`;
const Full = styled.span`
  color: red;
  font-weight: bold;
`;

/* Working on the scrollable div, having difficulty with both % and vh units due to the menu bars for the browser disappearing. */
const BoxContents = styled.div`
  height: 50vh;
  overflow: scroll;
`;
const CheckoutButton = styled.button`
  background: green;
  border: none;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
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
