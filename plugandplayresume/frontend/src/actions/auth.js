import axios from 'axios';
import { returnErrors } from './messages';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from './types';

//Load user, check token load user

export const loadUser = () => (dispatch, getState) => {
  //set loading to true
  dispatch({ type: USER_LOADING });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//Login
export const login = (username, password) => dispatch => {
  //set the headers to send
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //request body
  const body = JSON.stringify({ username, password });

  axios
    .post('/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//REGISTER
export const register = ({ username, password, email }) => dispatch => {
  //set the headers to send
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //request body
  const body = JSON.stringify({ username, email, password });

  axios
    .post('/api/auth/register', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};
// LOGOUT
export const logout = () => (dispatch, getState) => {
  //get token from localstorage
  //currently broekn here

  axios
    .post('/api/auth/logout/', null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

//config token helper

export const tokenConfig = getState => {
  const token = getState().authReducer.token;

  //set the headers to send
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //if there is a token, add to the headers gonfig
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  return config;
};
