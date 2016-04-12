import React from 'react';
import { deleteMovie } from 'api/data';

export default React.createClass({
  _delete: function () {
    deleteMovie(this.props.id);
  },
  render: function () {
    return (
      <div>
        <p>Movie Name: {this.props.title}</p>
        <p>Rating: {this.props.rating}</p>
        <p>Score: {this.props.score}</p>
        <button onClick={this._delete}>Delete</button>
        <br />
      </div>
    )
  }
})