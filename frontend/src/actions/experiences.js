/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import axios from 'axios'
import "regenerator-runtime/runtime";
import {
    ADD_EXPERIENCE, EDIT_EXPERIENCE, FETCH_EXPERIENCES, REMOVE_EXPERIENCE
} from "./types";
import { requestConfig } from "./auth";
import { returnErrors } from "./messages";


// Fetch Experiences
export const fetchExperiences = () => (dispatch, getState) => {
    console.log("fetchExperiences() called");
    return axios.get("/api/experience/", requestConfig(getState))
        .then(res => dispatch({ type: FETCH_EXPERIENCES, payload: res.data }))
        .catch(err => console.log(err))
};

// ADD_EXPERIENCE
export const addExperience = (experienceData = {}) => (dispatch, getState) => {
    const { startDate = 0, endDate = 0 } = experienceData;
    const experience = {
        ...experienceData,
        start_date: startDate,
        end_date: endDate
    };
    axios.post('/api/experience/', experience, requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: ADD_EXPERIENCE, payload: res.data }),2000))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)))
};

// REMOVE_EXPERIENCE
export const removeExperience = (id) => (dispatch, getState) => {
    const url = `/api/experience/${ id }`;
    axios.delete(url, requestConfig(getState))
        .then((id) => setTimeout(() =>
            dispatch({ type: REMOVE_EXPERIENCE, payload: id }), 2000))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};

export const editExperience = (id, updates) => (dispatch, getState) => {
    const url = `/api/experience/${ id }`;
    axios(url, updates, requestConfig(getState, 'PUT'))
        .then(res => setTimeout(() =>
            dispatch({ type: EDIT_EXPERIENCE, payload: id, updates: updates }),
                                2000))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};

