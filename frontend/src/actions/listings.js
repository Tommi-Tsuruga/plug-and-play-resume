import axios from 'axios';
import { requestConfig } from './auth';
import {
    ADD_LISTING, ADD_RESUME, DELETE_LISTING, FETCH_LISTINGS
} from './types';
import { returnErrors } from "./messages";

//GET EXP
export const fetchListing = () => (dispatch, getState) => {
    axios.get('/api/listing/', requestConfig(getState))
         .then(res => setTimeout(() =>
             dispatch( { type: FETCH_LISTINGS, payload: res.data }), 1000))
         .catch(err => returnErrors(err.response.data, err.response.status));
};

export const deleteListing = id => (dispatch, getState) => {
    axios.delete(`/api/listing/${ id }`, requestConfig(getState))
         .then(res => setTimeout(() =>
             dispatch({ type: DELETE_LISTING, payload: res.data }), 1000))
         .catch(err => returnErrors(err.response.data, err.response.status));
};

export const addListing = (listingData = {}) => (dispatch, getState) => {
    const { id = 0, listingTitle = '', listing = '' } = listingData;
    const listingInfo = { ...listingData };
    axios.post('/api/listing/', listingInfo, requestConfig(getState))
         .then(res => setTimeout(() =>
             dispatch({ type: ADD_LISTING, payload: res.data }), 1000))
         .catch(err =>
             dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addResume = (resume) => (dispatch, getState) => {
    console.log('logging resume', resume);
    axios.post('/api/resume/', resume, requestConfig(getState))
         .then(res => setTimeout(() =>
             dispatch({ type: ADD_RESUME, payload: res.data }), 1000))
         .catch(err =>
             dispatch(returnErrors(err.response.data, err.response.status)));
};
