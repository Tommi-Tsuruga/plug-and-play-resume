/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import uuid from 'uuid';

// Helper to check if identical experience exists
const experienceExists = (experiences, experience) => {
    experiences.some((e) => e.id === experience.id)
};


// REMOVE_EXPERIENCE
export const removeExperience = ({id} = {}) => ({
    type: 'REMOVE_EXPERIENCE',
    id
});

// EDIT_EXPERIENCE
export const editExperience = (id, updates) => ({
    type: 'EDIT_EXPERIENCE',
    id,
    updates
});

// Async actions
// Fetch Experiences
export const fetchExperiences = () => {
    return dispatch => {
        let headers = {"Content-Type": "application/json"};
        return fetch("/api/experience/", {headers,})
            .then(res => res.json())
            .then(experiences => {
                const curExperiences = store.getState().experiences;
                return dispatch({
                    type: 'FETCH_EXPERIENCES',
                    experiences
                })
            })
    }
};

// ADD_EXPERIENCE
export const addExperience = (experienceData = {}) => {
    return (dispatch, getState) => {
        const {
            id = uuid(),
            title = '',
            company = '',
            description = '',
            startDate = 0,
            endDate = 0
        } = experienceData;
        const experience = {
            id,
            title,
            description,
            company,
            startDate,
            endDate
        };
        if (!experienceExists(getState.experiences, experience)) {
            let headers = {"Content-Type": "application/json"};
            let body = JSON.stringify(experience);
            console.log(experience);
            return fetch("/api/experience/id", {headers, method: "POST", body})
                .then(res => res.json())
                .then(experience => {
                    return dispatch({
                        type: 'ADD_EXPERIENCE',
                        experience
                    })
                })
        }
    }
};




