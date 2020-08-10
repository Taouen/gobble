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
  bottom: ${(props) => {
    if (props.expanded) {
      return '0%';
    } else {
      return `calc(0% - ${props.contents})`;
    }
  }};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  left: 0;
  padding: 30px 20px 20px 20px;
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
  margin-bottom: 30px;
  padding-bottom: 20px;
  /*   width: 100%; */
`;

const Full = styled.span`
  color: red;
  font-weight: bold;
`;

class MobileBox extends React.Component {
  render() {
    const { contents, expanded } = this.props;

    return (
      <BoxTray
        contents={`0% - (${contents.length * 210}px + 20px)`}
        expanded={expanded}
      >
        <BoxInfo onClick={this.props.expandBox}>
          {contents.length === 6 ? (
            <h3>
              Your box is <Full>full!</Full>
            </h3>
          ) : (
            <h3>Add up to {6 - contents.length} more recipes!</h3>
          )}
        </BoxInfo>
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
      </BoxTray>
    );
  }
}

export default MobileBox;
