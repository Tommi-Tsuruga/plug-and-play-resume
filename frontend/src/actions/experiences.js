/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import axios from 'axios'
import "regenerator-runtime/runtime";
import {
    ADD_EXPERIENCE,
    EDIT_EXPERIENCE,
    FETCH_EXPERIENCES,
    REMOVE_EXPERIENCE
} from "./types";
import {requestConfig} from "./auth";


// Fetch Experiences
export const fetchExperiences = () => (dispatch, getState) => {
    console.log("fetchExperiences() called");
        return axios.get("/api/experience/", requestConfig(getState))
            .then(res => dispatch({ type: FETCH_EXPERIENCES, ...res }))
            .catch(err => console.log(err))
};

// ADD_EXPERIENCE
export const addExperience = (experienceData = {}) => (dispatch, getState) => {
    const {
        id = 0,
        title = '',
        company = '',
        description = '',
        startDate = 0,
        endDate = 0
    } = experienceData;
    const experience = {
        ...experienceData,
        start_date: startDate,
        end_date: endDate
    };
    return axios.post('/api/experience/', experience, requestConfig(getState))
        .then(res => dispatch({ type: ADD_EXPERIENCE, ...res }))
        .catch(err => console.log(err))
};


// REMOVE_EXPERIENCE
export const removeExperience = (id) => (dispatch, getState) => {
        const url = `/api/experience/${id}`;
        axios.delete(url, requestConfig(getState))
            .then(({id}) => dispatch({type: REMOVE_EXPERIENCE, id}))
            .catch(err => console.log(err));
};

export const editExperience = (id, updates) => (dispatch, getState) => {
        const url = `/api/experience/${id}`;
        axios(url, updates, requestConfig(getState, 'PUT'))
            .then((res) => dispatch({type: EDIT_EXPERIENCE, id, ...res}))
            .catch(err => console.log(err))
};

