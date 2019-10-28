/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import uuid from 'uuid';
import "regenerator-runtime/runtime";

// Helper to check if identical experience exists
const experienceExists = (experiences, experience) => {
    return experiences.includes(experience);
};

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)
    });
    return await response.json();
}


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
    return (dispatch, getState) => {
        let headers = {"Content-Type": "application/json"};
        return fetch("/api/experience/", {headers,})
            .then(res => res.json())
            .then(experiences => dispatch({
                    type: 'FETCH_EXPERIENCES',
                    experiences
                }))
            };
    };


// ADD_EXPERIENCE
export const addExperience = (experience) => ({
    type: 'ADD_EXPERIENCE',
    experience
});

export const startAddExperience = (experienceData = {}) => {
    return (dispatch, getState) => {
        const {
            title = '',
            company = '',
            description = '',
            startDate = 0,
            endDate = 0
        } = experienceData;
        const experience = {
            id: uuid(),
            title,
            description,
            company,
            start_date: startDate,
            end_date: endDate
        };
        if (!experienceExists(getState().experiences, experience)) {
            console.log(getState().experiences);
            return postData('/api/experience/', experience).then(experience => {
                return dispatch(addExperience(
                    {
                        id: experience.id,
                        title,
                        description,
                        company,
                        startDate,
                        endDate
                    }));
            })
        }
    }
};




