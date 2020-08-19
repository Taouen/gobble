import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  align-items: center;
  background: #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  height: 70vw;
  margin-bottom: 30px;
  width: 70vw;
  @media (min-width: 576px) {
    font-size: 100%;
    height: 25vw;
    margin: 0 2px 30px 2px;
    width: 25vw;
  }
  @media (min-width: 992px) {
    font-size: 1.2rem;
    height: 17vw;
    margin: 10px;
    width: 17vw;
  }
`;
const ImageWrapper = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 55%;
  overflow: hidden;
  width: 100%;
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
`;
const RecipeTitle = styled.div`
  padding: 0 1vw;
  margin: auto 0;
  text-align: center;
`;
const AddButton = styled.button`
  background: green;
  border: none;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  margin-bottom: 5%;
  padding: 2% 0;
  width: 70%;
  @media (min-width: 992px) {
    cursor: pointer;
  }
`;

class RecipeCard extends React.Component {
  render() {
    const { image, title, id } = this.props;
    return (
      <Card>
        <ImageWrapper>
          <Image src={image} alt="" />
        </ImageWrapper>
        <RecipeTitle>
          <h2>{title}</h2>
        </RecipeTitle>
        <AddButton onClick={() => this.props.addToBox(id)}>
          Add to Box
        </AddButton>
      </Card>
    );
  }
}

export default RecipeCard;
