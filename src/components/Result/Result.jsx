import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const { list } = props;
  return (
    <div className="result">
      {list.map(recipe => <p>{recipe.title}</p>)}
    </div>
  );
}

Result.propTypes = {
  list: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default Result;
