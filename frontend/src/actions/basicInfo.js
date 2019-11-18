import axios from 'axios';
import "regenerator-runtime/runtime";
import { UPDATE_BASIC_INFO, FETCH_BASIC_INFO } from "./types";
import { requestConfig } from "./auth";
import { returnErrors } from "./messages";

// Change timeOut here
const TIMEOUT = 1000;

// Fetch BasicInfo
export const fetchBasicInfo = () => (dispatch, getState) => {
    return axios.get("/api/basic/", requestConfig(getState))
         .then(res => setTimeout( () =>
             dispatch({ type: FETCH_BASIC_INFO, payload: res.data })))
         .catch(err => dispatch(returnErrors(err.response.data, err.status)));
};

// using create or post in django server
export const updateBasicInfo = (basicInfo = {}) => (dispatch, getState) => {
    axios.put("/api/basic/", basicInfo, requestConfig(getState))
         .then(res => setTimeout(() =>
             dispatch({ type: UPDATE_BASIC_INFO, payload: res.data }), TIMEOUT))
         .catch(err => dispatch(returnErrors(err.response.data, err.status)));
};

