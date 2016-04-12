import React from 'react';
import Movies from 'ui/movies';
import store from 'store';
import { getMovies } from 'api/data';

export default React.createClass({
  getInitialState: function () {
    return {
      movies: []
    };
  },
  componentWillMount: function () {
    getMovies()
    store.subscribe(function(){
      var currentStore = store.getState();
      this.setState({
        movies: currentStore.movies
      })
    }.bind(this));
  },  
  render: function () {
    return (
      <Movies movies={this.state.movies} />
    )
  }
})