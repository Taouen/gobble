import React from 'react';
import styled from 'styled-components';

const BoxCard = styled.div`
  background: #999;
  display: flex;
  font-size: 3em;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  place-items: center;
`;

const Image = styled.img`
  grid-column: 1 / 1;
  object-fit: cover;
`;

const RemoveButton = styled.span`
  font-size: 2em;
  font-weight: bold;
  margin-right: 10px;
  @media (min-width: 992px) {
    cursor: pointer;
    transition: 0.3s;
    font-size: 150%;

    &:hover {
      color: white;
    }
  }
`;

class BoxItem extends React.Component {
  render() {
    const { title, image } = this.props;

    return (
      <BoxCard>
        <Image src={image} height="100px" width="100px" alt="" />
        {title}
        <RemoveButton
          onClick={() => this.props.removeFromBox(this.props.identifier)}
        >
          &times;
        </RemoveButton>
      </BoxCard>
    );
  }
}

export default BoxItem;
