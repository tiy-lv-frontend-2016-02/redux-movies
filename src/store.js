import { createStore } from 'redux';

// App Reducers
import movieReducer from './reducers/movie';

var store = createStore(movieReducer);

export default store;