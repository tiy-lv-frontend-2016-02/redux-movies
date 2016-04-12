import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>Movies</h1>
        {this.props.children}
      </div>
    )
  }
})