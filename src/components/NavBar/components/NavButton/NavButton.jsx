import React from 'react';
import PropTypes from 'prop-types';
import './NavButton.css';

function NavButton(props) {
  const { link, text } = props;
  return (
    <a className="nav-button" href={link}>{text}</a>
  );
}

NavButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavButton;
