import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { clickhandeler } = props;
  return (
    <div className="calucator-buttons">
      <div className="row">
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="AC" />
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="+/-" />
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="%" />
        <Button clickhandeler={clickhandeler} name="÷" />
      </div>
      <div className="row">
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="7" />
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="8" />
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="9" />
        <Button clickhandeler={clickhandeler} name="x" />
      </div>
      <div className="row">
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="4" />
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="5" />
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="6" />
        <Button clickhandeler={clickhandeler} name="-" />
      </div>
      <div className="row">
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="1" />
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="2" />
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="3" />
        <Button clickhandeler={clickhandeler} name="+" />
      </div>
      <div className="row">
        <Button
          clickhandeler={clickhandeler}
          color="#DCDCDC"
          wide="50%"
          name="0"
        />
        <Button clickhandeler={clickhandeler} color="#DCDCDC" name="." />
        <Button clickhandeler={clickhandeler} name="=" />
      </div>
    </div>
  );
};
ButtonPanel.propTypes = {
  clickhandeler: PropTypes.func.isRequired,
};
export default ButtonPanel;
