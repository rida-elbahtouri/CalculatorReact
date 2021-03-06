import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, color, wide, clickhandeler,
  } = props;
  return (
    <button
      type="button"
      style={{ backgroundColor: color, width: wide }}
      name={name}
      id={name}
      className="button"
      onClick={() => clickhandeler(name)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  clickhandeler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  color: '#F08D45',
  wide: '25%',
};

export default Button;
