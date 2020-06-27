import React from 'react';
import styled from 'styled-components';

const BoxCard = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 5px;
  place-items: center;
  background: #999;
  margin: 5px;
`;

const Image = styled.img`
  object-fit: cover;
  grid-column: 1 / 1;
`;

class BoxItem extends React.Component {
  render() {
    const { title, image } = this.props;

    return (
      <BoxCard>
        <Image src={image} height="100px" width="100px" alt={title} />
        {title}
      </BoxCard>
    );
  }
}

export default BoxItem;
