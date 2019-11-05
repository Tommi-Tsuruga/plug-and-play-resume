import { combineReducers } from 'redux';
import experience from './experience';
import listing from './listing';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  //Had to change to map exp instead of resume?
  resumeReducer: experience,
  errorReducer: errors,
  messageReducer: messages,
  authReducer: auth,
  listingReducer: listing
});
