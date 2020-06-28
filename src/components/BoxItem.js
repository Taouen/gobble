import React from 'react';
import styled from 'styled-components';

const BoxCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  place-items: center;
  background: #999;
  margin: 5px;
`;

const Image = styled.img`
  object-fit: cover;
  grid-column: 1 / 1;
`;

const RemoveButton = styled.span`
  cursor: pointer;
`;

class BoxItem extends React.Component {
  render() {
    const { title, image } = this.props;

    return (
      <BoxCard>
        <Image src={image} height="100px" width="100px" alt={title} />
        {title}
        <RemoveButton onClick={() => this.props.removeFromBox(this.index)}>
          &times;
        </RemoveButton>
      </BoxCard>
    );
  }
}

export default BoxItem;
