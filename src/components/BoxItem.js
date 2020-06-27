import React from 'react';

class BoxItem extends React.Component {
  renderItem = (key) => {
    const recipe = this.props.recipe[key];
    const count = this.props; // can't remember how to find the count item. Needs to be passed down from box, will need to figure it out in there.

    return <li key={key + count}>{recipe.title}</li>;
  };
  // This is the box item, though I think I need the loop in the Box.js file instead.
  render() {
    for (let i = 0; i < 2; i++) {
      return this.renderItem;
    }
  }
}

export default BoxItem;
