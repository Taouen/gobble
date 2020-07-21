import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 2.5em;
  font-family: Arial, Helvetica, sans-serif;
  @media (min-width: 992px) {
    font-size: 1.35em;
  }
`;

const Card = styled.div`
  align-items: center;
  background: #ccc;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* height: 400px; */
  margin-bottom: 20px;
  width: 400px;

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
  height: 200px;
`;

const RecipeTitle = styled.div`
  padding: 10px;
`;

const AddButton = styled.button.attrs((props) => ({
  addToBox: 'props.addToBox',
  index: 'props.index',
}))`
  background: green;
  border: none;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  margin-bottom: 20px;
  width: 60%;
  @media (min-width: 992px) {
    cursor: pointer;
    font-size: 1em;
    /*     padding: 5px; */
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
