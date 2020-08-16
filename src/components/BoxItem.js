import React from 'react';
import styled from 'styled-components';

const BoxCard = styled.div`
  align-items: center;
  border-top: 1px solid #999;
  display: flex;
  font-size: 1.3rem;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.5rem;
  width: 95%;
  :first-child {
    border-top: none;
  }
  @media (min-width: 576px) {
    :nth-child(2) {
      border-top: none;
    }
  }
  @media (min-width: 992px) {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 1rem;
  }
`;
const Image = styled.img`
  object-fit: cover;
  height: 5rem;
  width: 5rem;
  @media (min-width: 992px) {
    height: 35%;
    width: 35%;
  }
`;
const RemoveButton = styled.span`
  font-size: 3rem;
  /* font-weight: bold; */
  @media (min-width: 992px) {
    cursor: pointer;
    transition: 0.3s;
    font-size: 2rem;

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
        <div>{title}</div>
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
