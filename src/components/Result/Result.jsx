import React from 'react';
import PropTypes from 'prop-types';
import RecipeType from './components/Recipe.type';
import Recipe from './components/Recipe';
import './Result.css';

function Result(props) {
  const { list } = props;
  return (
    <div className="result">
      {list.map((recipe, i) => (
        <Recipe
          key={i}
          href={recipe.href}
          ingredients={recipe.ingredients}
          thumbnail={recipe.thumbnail}
          title={recipe.title}
        />
      ))}
    </div>
  );
}

Result.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(RecipeType)).isRequired,
};

export default Result;
