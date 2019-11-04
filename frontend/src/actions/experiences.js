/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import "regenerator-runtime/runtime";
import {httpRequest, fetchRequest} from "../utils";


// ADD_EXPERIENCE
export const addExperience = (experience) => ({
    type: 'ADD_EXPERIENCE',
    experience: {
        startDate: experience.start_date,
        endDate: experience.end_date,
        ...experience
    }
});

export const startAddExperience = (experienceData = {}) => {
    return (dispatch, getState) => {
        const headers = {"Content-Type": "application/json"};
        const {
            title = '',
            company = '',
            description = '',
            startDate = 0,
            endDate = 0
        } = experienceData;
        const experience = {
            title,
            company,
            description,
            start_date: startDate,
            end_date: endDate
        };
        console.log(experience);
        const {token} = getState().auth;
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        const body = JSON.stringify(experience);
        console.log(body);
        httpRequest('POST', '/api/experience/', headers, body)
            .then(experience => dispatch(addExperience(experience)))
    }
};


// REMOVE_EXPERIENCE
export const removeExperience = (id) => ({
    type: 'REMOVE_EXPERIENCE',
    id
});

export const startRemoveExperience = (id) => {
    return (dispatch, getState) => {
        const headers = {"Content-Type": "application/json"};
        const {token} = getState().auth;
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        const url = `/api/experience/${id}`;
        httpRequest('DELETE', url)
            .then(({id}) => dispatch(removeExperience(id)));
    }
};


// EDIT_EXPERIENCE
export const editExperience = (id, updates) => ({
    type: 'EDIT_EXPERIENCE',
    id,
    updates
});

export const startEditExperience = (id, updates) => {
    return (dispatch, getState) => {
        const url = `/api/experience/${id}`;
        const headers = {"Content-Type": "application/json"};
        const {token} = getState().auth;
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        httpRequest('PUT', url, headers, updates)
            .then(({id, updates}) =>
                dispatch(editExperience(id, updates))
            );
    }
};


// Fetch Experiences
export const fetchExperiences = (experiences) => ({
    type: 'FETCH_EXPERIENCES',
    experiences
});

export const startFetchExperiences = () => {
    return (dispatch, getState) => {
        const headers = {"Content-Type": "application/json"};
        const {token} = getState().auth;
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        fetchRequest("/api/experience/", headers)
            .then(experiences => dispatch(fetchExperiences(experiences)));
    }
};

