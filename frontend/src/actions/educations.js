/**
 * educations.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import axios from 'axios';
import "regenerator-runtime/runtime";
import { ADD_EDUCATION, FETCH_EDUCATIONS } from "./types";
import { requestConfig } from "./auth";
import { returnErrors } from "./messages";

// Fetch Educations
export const fetchEducations = () => (dispatch, getState) => {
    axios.get("/api/education/", requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: FETCH_EDUCATIONS, payload: res.data }), 2000))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};

// Add Education
export const addEducation = (educationData = {}) => (dispatch, getState) => {
    const { schoolName = "", startDate = 0, endDate = 0 } = educationData;
    const education = {
        ...educationData,
        school_name: schoolName,
        start_date: startDate,
        end_date: endDate
    };
    axios.post('/api/education/', education, requestConfig(getState))
        .then(res => setTimeout(() =>
            dispatch({ type: ADD_EDUCATION, payload: res.data }), 2000))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};




