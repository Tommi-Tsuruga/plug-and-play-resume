import axios from 'axios';
import {requestConfig} from './auth';
import {FETCH_LISTINGS, ADD_LISTING, DELETE_LISTING, ADD_RESUME} from './types';

//GET EXP
export const fetchListing = () => (dispatch, getState) => {
    axios.get('/api/listing/', requestConfig(getState))
        .then(res => dispatch({type: FETCH_LISTINGS, ...res}))
        .catch(err => dispatch(console.log));
};

export const deleteListing = id => (dispatch, getState) => {
    axios.delete(`/api/listing/${id}`, requestConfig(getState))
        .then(res => dispatch({type: DELETE_LISTING, id}))
        .catch(err => console.log(err));
};

export const addListing = listing => (dispatch, getState) => {
    axios.post('/api/listing/', listing, requestConfig(getState))
        .then(res => dispatch({type: ADD_LISTING, ...res }))
        .catch(err => dispatch(console.log(err)));
};
export const addResume = resume => (dispatch, getState) => {
    // console.log('logging resume', resume);
    axios
        .post('/api/resume/', resume, requestConfig(getState))
        .then(res => {
            // console.log('resume data: ', res.data);
            dispatch({
                type: ADD_RESUME,
                ...res
            });
        })
        .catch(err =>
            dispatch(console.log(err))
        );
};
