import React from 'react';
import styled from 'styled-components';

const BoxCard = styled.div`
  background: #999;
  display: flex;
  font-size: 1.2em;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
  align-items: center;
  width: 100%;
  @media (min-width: 992px) {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 1em;
  }
`;

const Image = styled.img`
  grid-column: 1 / 1;
  object-fit: cover;
  height: 250px;
  width: 250px;
  @media (min-width: 992px) {
    height: 100px;
    width: 100px;
  }
`;

const InfoPanel = styled.div`
  /*   text-align: left; */
`;

const RemoveButton = styled.span`
  font-size: 2em;
  font-weight: bold;
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
        <Image src={image} alt="" />
        <InfoPanel>{title}</InfoPanel>
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
