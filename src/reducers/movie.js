var movieInitialState = {
  movies: []
};

export default function(state = movieInitialState, action) {
  var newState = Object.assign({}, state)

  switch(action.type) {
    
    case 'GET_MOVIES':
      newState.movies = action.movies;
      
      return newState;

    default:
      return state;
      
  }
}