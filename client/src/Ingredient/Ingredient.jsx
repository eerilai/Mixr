import React from 'react';
import './Ingredient.css';

const Ingredient = (props) => (
  <div className="ingredient-container">
    <div className="ingredient">
      <div className="ingredient-name">{props.ingredient}</div>
    </div>
    <div className="buttonContainer">
      <button className="button" onClick={() => props.like()}>LIKE</button>
      <button className="button" onClick={() => props.dislike()}>DISLIKE</button>        
    </div>
  </div>
)

export default Ingredient;