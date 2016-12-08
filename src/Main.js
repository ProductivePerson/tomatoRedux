import React from 'react';

import tomato from '../public/tomato.ico';
import './css/App.css';

// React.cloneElement passes down props from Main to first child.
const Main = React.createClass({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={tomato} className="App-logo" alt="logo" />
          <p className="App-intro">Lets Guess some movies!</p>
        </div>
        { React.cloneElement(this.props.children, this.props) }

      </div>
    );
  }
});
// allows us to go into main application and import Main.js.
export default Main;
