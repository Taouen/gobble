import React from 'react';
import styled from 'styled-components';

const BoxCard = styled.div`
  align-items: center;
  border-bottom: 1px solid #999;
  display: flex;
  font-size: 1.3rem;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.5rem;
  width: 95%;
  :last-child {
    border-bottom: none;
  }
 /*  @media (min-width: 576px) {
    :nth-last-child(2) {
      border-bottom: ${(props) =>
        props.contents % 2 === 0 ? 'none' : '1px solid #999'};
    }
  } */
  @media (min-width: 992px) {
    margin: 0;
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
    height: 25%;
    width: 25%;
  }
`;
const Title = styled.div`
  width: 50%;
  text-align: center;
`;
const RemoveButton = styled.span`
  font-size: 3rem;
  padding: 0;
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
    const { title, image, contents } = this.props;

    return (
      <BoxCard contents={contents}>
        <Image src={image} alt="" />
        <Title>{title}</Title>
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
