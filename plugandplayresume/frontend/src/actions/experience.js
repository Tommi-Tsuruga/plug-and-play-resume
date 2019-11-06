import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';
import {
  GET_BASICINFO,
  DELETE_BASICINFO,
  ADD_BASICINFO,
  ADD_EXPERIENCE,
  GET_EXPERIENCE,
  DELETE_EXPERIENCE
} from './types';

//GET EXP
export const getBasicInfo = () => (dispatch, getState) => {
  axios
    .get('/api/basic/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_BASICINFO,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteBasicInfo = id => (dispatch, getState) => {
  axios
    .delete(`/api/basic/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ infoDeleted: 'Info Deleted' }));
      dispatch({
        type: DELETE_BASICINFO,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addBasicInfo = basicInfo => (dispatch, getState) => {
  axios
    .post('/api/basic/', basicInfo, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ infoAdded: 'Info Added' }));
      dispatch({
        type: ADD_BASICINFO,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addExperience = experience => (dispatch, getState) => {
  axios
    .post('/api/experience/', experience, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ expAdded: 'Exp Added' }));
      dispatch({
        type: ADD_EXPERIENCE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getExperienceInfo = () => (dispatch, getState) => {
  axios
    .get('/api/experience/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_EXPERIENCE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const deleteExperience = id => (dispatch, getState) => {
  axios
    .delete(`/api/experience/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ expDeleted: 'Exp Deleted' }));
      dispatch({
        type: DELETE_EXPERIENCE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
