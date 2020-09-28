import React from "react";
import PropTypes from "prop-types";
const Button = (props) => {
  
  const { name, color, wide } = props;

  return (
    <button
      type="button"
      style={{ backgroundColor: color, width: wide }}
      name={name}
      id={name}
      className="button"
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.string,
};


Button.defaultProps = {
  color: "#F08D45",
  wide: "25%",
};

export default Button;
