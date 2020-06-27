import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';
import '../css/reset.css';

const BoxWrapper = styled.div`
  padding: 10px;
  border: 1px solid black;
  background: #ccc;
`;
// attempting to decosnstruct the box items into a separate component to be rendered multiple times, just not sure how to go about the multiple renders
class Box extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.contents);

    return (
      <BoxWrapper>
        <BoxItem />
      </BoxWrapper>
    );
  }
}

export default Box;
