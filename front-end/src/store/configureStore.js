import { createStore, combineReducers } from 'redux';
import experienceReducer from '../reducers/experiences';
import filterReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      experience: experienceReducer,
      filters: filterReducer
    })
  );
  return store;
};
