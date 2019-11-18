/**
 * auth.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import axios from 'axios'
import "regenerator-runtime/runtime";
import {
    AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAIL,
    REGISTER_SUCCESS, USER_LOADED, USER_LOADING
} from "./types";
import { returnErrors } from "./messages";

// Change timeOut here
const TIMEOUT = 1000;

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    axios("/api/auth/user/", requestConfig(getState))
        .then(res => setTimeout(() =>
             dispatch({ type: USER_LOADED, payload: res.data}), TIMEOUT ))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.status));
            dispatch({ type: AUTH_ERROR });
        })
};

export const login = (username, password) => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    const params = { username, password };
    axios.post("/api/auth/login/", params, requestConfig(getState))
         .then(res => setTimeout(() => dispatch({ type: LOGIN_SUCCESS, payload: res.data }), TIMEOUT))
         .catch(err => {
             dispatch(returnErrors(err.response.data, err.status));
             dispatch({ type: LOGIN_FAIL });
         })
};

export const startLogout = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    axios.post("/api/auth/logout/", null, requestConfig(getState))
         .then(res => setTimeout(() => dispatch(
             { type: LOGOUT_SUCCESS, payload: res.data }), TIMEOUT))
         .catch(err => dispatch(returnErrors(err.response.data, err.status)) );
};

export const register = (username, email, password) => (dispatch, getState) => {
    const params = { username, email, password };
    dispatch({ type: USER_LOADING });
    axios.post("/api/auth/register/", params, requestConfig(getState))
         .then(res => setTimeout(() => dispatch(
             { type: REGISTER_SUCCESS, payload: res.data }), TIMEOUT))
         .catch(err => {
             dispatch(returnErrors(err.response.data, err.status));
             dispatch({ type: REGISTER_FAIL });
         });
};

export const requestConfig = (getState) => {
    const headers = { 'Content-Type': 'application/json' };
    const { token } = getState().auth;
    if (token) {
        headers['Authorization'] = `Token ${ token }`;
    }
    return {
        headers,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrer: 'no-referrer',
    }
};


