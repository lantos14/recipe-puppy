import React from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {
  const { onChangeFn, inputValue } = props;
  return (
    <div className="search-bar">
      <form>
        <label htmlFor="recipe-input">
          Search:
          <input id="recipe-input" type="text" name="recipe" placeholder="Search for..." onChange={e => onChangeFn(e.currentTarget.value)} value={inputValue} />
        </label>

      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onChangeFn: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default SearchBar;
