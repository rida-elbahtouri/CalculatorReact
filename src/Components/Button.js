import React from "react";
import PropTypes from "prop-types";
const Display = (props) => {
  const { name } = props;
  return (
    <button type="button" name={name} id={name} className="button">
      {name}
    </button>
  );
};

Display.propTypes = {
  name: PropTypes.string,
};

export default Display;
