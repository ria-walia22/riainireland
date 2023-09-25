import { createStore } from "redux"; // Import createStore from 'redux' instead of configureStore
import rootReducer from './reducers/index'

const store = createStore(
  rootReducer, // Provide your rootReducer
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Initial state or other options
);

export default store;
