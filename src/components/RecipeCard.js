import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 3em;
  font-family: Arial, Helvetica, sans-serif;
  @media (min-width: 992px) {
    font-size: 1.35em;
  }
`;

const Card = styled.div`
  background: #ccc;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  border: 1px solid black;
  width: 500px;
  margin-bottom: 20px;

  @media (min-width: 992px) {
    width: 250px;
    height: 250px;
    margin: 10px;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  height: 400px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  @media (min-width: 992px) {
    height: 150px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const RecipeTitle = styled.div`
  padding: 10px;
`;

const AddButton = styled.button.attrs((props) => ({
  addToBox: 'props.addToBox',
  index: 'props.index',
}))`
  background: green;
  color: white;
  border: none;
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
  margin-bottom: 20px;
  @media (min-width: 992px) {
    font-size: 1rem;
    padding: 5px;
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
