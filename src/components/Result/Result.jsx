import React from 'react';
import PropTypes from 'prop-types';
import RecipeType from './components/Recipe.type';
import Recipe from './components/Recipe';

function Result(props) {
  const { list } = props;
  return (
    <div className="result">
      {list.map(recipe => (
        <Recipe
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
