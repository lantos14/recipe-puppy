import React from 'react';
import RecipeType from './Recipe.type';
import './Recipe.css';

function Recipe(props) {
  const { title } = props;
  return (
    <div className="recipe">
      <p>{title}</p>
    </div>
  );
}

Recipe.propTypes = RecipeType;

export default Recipe;
