import axios from 'axios';
import { ADD_LISTING, ADD_RESUME, DELETE_LISTING, EDIT_LISTING, FETCH_LISTINGS
} from './types';
import { returnErrors } from "./messages";
import { requestConfig } from "../lib";

// Change timeOut here
const TIMEOUT = 0;

//GET EXP
export const fetchListing = () => (dispatch, getState) => {
    axios.get('/api/listing/', requestConfig(getState))
         .then(res => setTimeout(() =>
             dispatch( { type: FETCH_LISTINGS, payload: res.data }), TIMEOUT))
         .catch(err => returnErrors(err.response.data, err.response.status));
};

export const deleteListing = id => (dispatch, getState) => {
    axios.delete(`/api/listing/${id}/`, requestConfig(getState))
         .then(res => { console.log(res); setTimeout(() =>
             dispatch({ type: DELETE_LISTING, payload: id }), TIMEOUT)})
         .catch(err => returnErrors(err.response.data, err.response.status));
};

export const addListing = (listingData = {}) => (dispatch, getState) => {
    const { id = 0, listingTitle = '', listing = '' } = listingData;
    const listingInfo = { ...listingData };
    const listingString = JSON.stringify(listingInfo);
    axios.post('/api/listing/', listingString, requestConfig(getState))
         .then(res => setTimeout(() =>
             dispatch({ type: ADD_LISTING, payload: res.data }), TIMEOUT))
         .catch(err =>
             dispatch(returnErrors(err.response.data, err.response.status)));
};

export const editListing = (id, listingData) => (dispatch, getState) => {
    const listing = JSON.stringify(listingData);
    console.log("logging listing to edit", listing);
    axios.put(`api/listing/${id}/`, listing, requestConfig(getState))
             .then(res => setTimeout(() =>
             dispatch({ type: EDIT_LISTING, payload: res.data, id }), TIMEOUT))
         .catch(err =>
             dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addResume = (resume) => (dispatch, getState) => {
    const resumeData = JSON.stringify(resume);
    console.log(requestConfig(getState));
    console.log('logging resume', resumeData);
    axios.post('/api/resume/', resumeData, requestConfig(getState))
         .then(res => setTimeout(() =>
             dispatch({ type: ADD_RESUME, payload: res.data }), TIMEOUT))
         .catch(err =>
             dispatch(returnErrors(err.response.data, err.response.status)));
};
