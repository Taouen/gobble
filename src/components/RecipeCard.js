import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const Card = styled.div`
  align-items: center;
  background: #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 40vw;
  height: 40vw;

  @media (min-width: 992px) {
    margin: 10px;
    width: 17vw;
    height: 17vw;
  }
`;

const ImageWrapper = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* height: 300px; */
  overflow: hidden;
  width: 100%;

  @media (min-width: 992px) {
    /* height: 150px; */
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
`;

const RecipeTitle = styled.div`
  padding: 10px;
  text-align: center;
`;

const AddButton = styled.button.attrs((props) => ({
  addToBox: 'props.addToBox',
  index: 'props.index',
}))`
  background: green;
  border: none;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  margin-bottom: 20px;
  margin-top: auto;
  padding: 5px;
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
          <Title>{title}</Title>
        </RecipeTitle>
        <AddButton onClick={() => this.props.addToBox(id)}>
          Add to Box
        </AddButton>
      </Card>
    );
  }
}

export default RecipeCard;
