import { combineReducers } from 'redux';
import experience from './experience';
import errors from './errors';

export default combineReducers({
  //Had to change to map exp instead of resume?
  resumeReducer: experience,
  errorReducer: errors
});
