/**
 * educations.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import axios from 'axios';
import "regenerator-runtime/runtime";
import {FETCH_EDUCATIONS, ADD_EDUCATION, DELETE_EDUCATION } from "./types";
import { requestConfig } from "./auth";

// Fetch Educations
export const fetchEducations = () => (dispatch, getState) => {
    axios.get("/api/education/", requestConfig(getState))
        .then(res => dispatch({ type: FETCH_EDUCATIONS, ...res }))
        .catch(err => console.log(err));
};

// Add Education
export const addEducation = (educationData = {}) => (dispatch, getState) => {
    const {
        id = 0,
        schoolName = '',
        startDate = 0,
        endDate = 0
    } = educationData;
    const education = {
        ...educationData,
        school_name: schoolName,
        start_date: startDate,
        end_date: endDate
    };
    axios.post('/api/education/', education, requestConfig(getState))
        .then(res => dispatch({ type: ADD_EDUCATION, ...res }))
        .catch(err => console.log(err));
};




