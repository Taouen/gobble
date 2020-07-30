import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';

const BoxTray = styled.div`
  align-items: center;
  background: #ccc;
  border: 1px solid black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* top positioning working correctly, need to figure out exactly what height to subtract from it. */
  top: calc(100% - 101px);
  display: flex;
  flex-direction: column;
  font-size: 3em;
  left: 0;
  padding: 20px;
  position: fixed;
  width: 100%;
  @media (min-width: 992px) {
    display: none;
  }
`;

const BoxInfo = styled.div`
  align-items: center;
  border-bottom: 2px solid #999;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding-bottom: 20px;
  width: 100%;
`;

/* const BoxWrapper = styled.div`
  text-align: center;
  padding-bottom: 50px;
  padding-top: 20px;

  @media (min-width: 992px) {
    font-size: 1em;
  }
`;
const BoxDesktop = styled.div`
  display: none; ${(props) => (props.expanded ? 'inherit' : 'none')};
  padding: 20px;
  border-bottom: 1px solid black;

  @media (min-width: 992px) {
    display: block;
    border: none;
    padding: 10px;
  }
`;
const BoxMobile = styled.div`
  padding-bottom: 50px;
  padding-top: 20px;
  @media (min-width: 992px) {
    display: none;
  }
`;
const MobileContents = styled.div`
  display: ${(props) => (props.expanded ? 'inherit' : 'none')};
  padding: 0 20px 20px 20px;
`; */
const Full = styled.span`
  color: red;
  font-weight: bold;
`;

class MobileBox extends React.Component {
  render() {
    const contents = this.props.contents;

    return (
      <BoxTray contents={`${contents.length * 290}px`}>
        <BoxInfo>
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
      /* <BoxWrapper className={this.props.className}>
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
      </BoxWrapper> */
    );
  }
}

export default MobileBox;
