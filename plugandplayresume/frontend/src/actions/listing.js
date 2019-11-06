import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';
import { GET_LISTING, ADD_LISTING, DELETE_LISTING } from './types';

//GET EXP
export const getListing = () => (dispatch, getState) => {
  axios
    .get('/api/listing/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LISTING,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteListing = id => (dispatch, getState) => {
  axios
    .delete(`/api/listing/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ infoDeleted: 'Info Deleted' }));
      dispatch({
        type: DELETE_LISTING,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addListing = listing => (dispatch, getState) => {
  axios
    .post('/api/listing/', listing, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ infoAdded: 'Info Added' }));
      dispatch({
        type: ADD_LISTING,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const addResume = resume => (dispatch, getState) => {
  // console.log('logging resume', resume);
  axios
    .post('/api/resume/', resume, tokenConfig(getState))
    .then(res => {
      // console.log('resume data: ', res.data);
      dispatch({
        type: ADD_RESUME,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
