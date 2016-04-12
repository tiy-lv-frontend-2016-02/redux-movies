import axios from 'axios';
import store from 'store';

export function getMovies() {
  return axios.get('http://localhost:8001/movies').then(function(resp){

    store.dispatch({
      type: 'GET_MOVIES',
      movies: resp.data
    });

  });
}

export function deleteMovie (id) {
  return axios.delete('http://localhost:8001/movies/' + id).then(function(resp){
    getMovies();
  });
}