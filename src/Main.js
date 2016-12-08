import React from 'react';

// React.cloneElement passes down props from Main to first child.
const Main = React.createClass({
  render() {
    return (
      <div>

        { React.cloneElement(this.props.children, this.props) }

      </div>
    );
  }
});
// allows us to go into main application and import Main.js.
export default Main;
