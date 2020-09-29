import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line
import calculate from '../Logic/calculate';

import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(btnname) {
    const obj = this.state;
    this.setState(calculate(obj, btnname));
  }

  render() {
    const { total, next } = this.state;
    const result =
      (next ? next.toString() : '0') || (total ? total.toString() : '0');
    return (
      <div className="calculator" id="rootApp">
        <Display result={result} />
        <ButtonPanel clickhandeler={this.handleClick} />
      </div>
    );
  }
}
export default App;
