import React from 'react';
import PropTypes from 'prop-types';
import './NavTitle.css';

function NavTitle(props) {
  const { title } = props;
  return (
    <div className="nav-title">
      <p>{title}</p>
    </div>
  );
}

NavTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavTitle;
