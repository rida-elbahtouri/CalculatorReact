import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line
import calculate from "../Logic/calculate";
import '../App.css';

const App = () => (
  <div className="calculator" id="rootApp">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
