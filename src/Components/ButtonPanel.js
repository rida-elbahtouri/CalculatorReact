import React from "react";
import Button from "./Button";
const ButtonPanel = () => {
  return (
    <div className="calucator-buttons">
      <div className="row">
        <Button color="#DCDCDC" name="AC" />
        <Button color="#DCDCDC" name="+/-" />
        <Button color="#DCDCDC" name="%" />
        <Button name="÷" />
      </div>
      <div className="row">
        <Button color="#DCDCDC" name="7" />
        <Button color="#DCDCDC" name="8" />
        <Button color="#DCDCDC" name="9" />
        <Button name="x" />
      </div>
      <div className="row">
        <Button color="#DCDCDC" name="4" />
        <Button color="#DCDCDC" name="5" />
        <Button color="#DCDCDC" name="6" />
        <Button name="-" />
      </div>
      <div className="row">
        <Button color="#DCDCDC" name="1" />
        <Button color="#DCDCDC" name="2" />
        <Button color="#DCDCDC" name="3" />
        <Button name="+" />
      </div>
      <div className="row">
        <Button color="#DCDCDC" wide="50%" name="0" />
        <Button color="#DCDCDC" name="." />
        <Button name="=" />
      </div>
    </div>
  );
};

export default ButtonPanel;
