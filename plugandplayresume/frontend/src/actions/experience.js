import axios from 'axios';
import {
  GET_BASICINFO,
  DELETE_BASICINFO,
  ADD_BASICINFO,
  GET_ERRORS
} from './types';

//GET EXP
export const getBasicInfo = () => dispatch => {
  axios
    .get('/api/basic/')
    .then(res => {
      dispatch({
        type: GET_BASICINFO,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteBasicInfo = id => dispatch => {
  axios
    .delete(`/api/basic/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_BASICINFO,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addBasicInfo = basicInfo => dispatch => {
  axios
    .post('/api/basic/', basicInfo)
    .then(res => {
      dispatch({
        type: ADD_BASICINFO,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
