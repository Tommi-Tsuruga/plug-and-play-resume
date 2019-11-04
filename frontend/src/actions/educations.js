/**
 * educations.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import "regenerator-runtime/runtime";
import {httpRequest, fetchRequest} from "../utils";


// Fetch Educations
export const fetchEducations = (educations) => ({
    type: 'FETCH_EDUCATIONS',
    educations
});

export const startFetchEducations = () => {
    return (dispatch, getState) => {
        const headers = {"Content-Type": "application/json"};
        const {token} = getState().auth;
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        fetchRequest("/api/education/", headers)
            .then(educations => dispatch(fetchEducations(educations)));
    }
};


// Add Education
export const addEducation = (education) => ({
    type: 'ADD_EDUCATION',
    schoolName: education.school_name,
    startDate: education.start_date,
    endDate: education.end_date,
    ...education
});

export const startAddEducation = (educationData = {}) => {
    return (dispatch, getState) => {
        const headers = {"Content-Type": "application/json"};
        const {
            schoolName = '',
            startDate = 0,
            endDate = 0
        } = educationData;
        const education = {
            school_name: schoolName,
            start_date: startDate,
            end_date: endDate
        };
        console.log(education);
        const {token} = getState().auth;
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        const body = JSON.stringify(education);
        httpRequest('POST', '/api/education/', headers, body)
            .then(education => dispatch(addEducation(education)))
    }
};




