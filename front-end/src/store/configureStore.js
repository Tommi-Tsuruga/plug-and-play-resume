/**
 * configureStore.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import { createStore, combineReducers } from 'redux';
import experienceReducer from '../reducers/experiences';
import filterReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      experience: experienceReducer,
      filters: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
