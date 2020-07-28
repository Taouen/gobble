import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';
import '../css/reset.css';

const BoxWrapper = styled.div`
  background: #ccc;
  border: 1px solid black;
  font-size: 3em;
  text-align: center;

  @media (min-width: 992px) {
    font-size: 1em;
    padding: 5px;
  }
`;
const BoxDesktop = styled.div`
  display: ${(props) => (props.expanded ? 'block' : 'none')};
  padding: 20px;
  border-bottom: 1px solid black;
  width: 100%;

  @media (min-width: 992px) {
    display: block;
  }
`;
const BoxMobile = styled.div`
  padding-bottom: 50px;
  padding-top: 20px;
  @media (min-width: 992px) {
    display: none;
  }
`;
const Full = styled.span`
  color: red;
  font-weight: bold;
`;

class Box extends React.Component {
  render() {
    const { contents, expanded } = this.props;

    return (
      <BoxWrapper className={this.props.className}>
        <BoxDesktop expanded={expanded}>
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
          {contents.length === 6 ? (
            <h3>
              Your box is <Full>full!</Full>
            </h3>
          ) : (
            <h3>Add up to {6 - contents.length} more recipes!</h3>
          )}
        </BoxDesktop>
        <BoxMobile onClick={() => this.props.expandBox()}>
          <h3>Items in box: {contents.length}</h3>
        </BoxMobile>
      </BoxWrapper>
    );
  }
}

export default Box;
