import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const { clickhandeler } = props;
  return (
    <div className="calucator-buttons">
      <div className="row">
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="AC" />
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="+/-" />
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="%" />
        <Button clickHandeler={clickhandeler} name="÷" />
      </div>
      <div className="row">
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="7" />
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="8" />
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="9" />
        <Button clickHandeler={clickhandeler} name="x" />
      </div>
      <div className="row">
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="4" />
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="5" />
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="6" />
        <Button clickHandeler={clickhandeler} name="-" />
      </div>
      <div className="row">
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="1" />
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="2" />
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="3" />
        <Button clickHandeler={clickhandeler} name="+" />
      </div>
      <div className="row">
        <Button
          clickHandeler={clickhandeler}
          color="#DCDCDC"
          wide="50%"
          name="0"
        />
        <Button clickHandeler={clickhandeler} color="#DCDCDC" name="." />
        <Button clickHandeler={clickhandeler} name="=" />
      </div>
    </div>
  );
};
ButtonPanel.propTypes = {
  clickhandeler: PropTypes.isRequired,
};
export default ButtonPanel;
