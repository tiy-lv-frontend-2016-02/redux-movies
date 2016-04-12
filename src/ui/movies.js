import React from 'react';
import Movie from 'ui/movie';

export default React.createClass({
  render: function () {
    return (
      <div className="movies">
        {this.props.movies.map(function(movie){
          return <Movie key={movie.id} {...movie} />
        })}
      </div>
    )
  }
})