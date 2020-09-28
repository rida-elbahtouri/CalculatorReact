import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

import "../App.css";
const App = () => {
  return (
    <div id="rootApp">
      <Display />
      <ButtonPanel />
    </div>
  );
};
export default App;
