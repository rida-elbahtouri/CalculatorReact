import React from "react";
import PropTypes from "prop-types";
const Button = (props) => {
  const { name } = props;
  return (
    <button type="button" name={name} id={name} className="button">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
