import axios from 'axios';
import "regenerator-runtime/runtime";
import {FETCH_BASIC_INFO, UPDATE_BASIC_INFO} from "./types";
import {requestConfig} from "./auth";

// Fetch BasicInfo
export const fetchBasicInfo = () => (dispatch, getState) => {
    axios.get("/api/basic/", requestConfig(getState))
        .then(res => dispatch({type: FETCH_BASIC_INFO, ...res}))
        .catch(err => console.log(err));
};

export const UpdateBasicInfo = (update) => (dispatch, getState) => {
    const {
        firstName = '',
        lastName = '',
        email = ''
    } = update;
    const basicInfo = {
        first_name: firstName,
        last_name: lastName,
        ...update
    };
    axios.post("/api/basic/", basicInfo, requestConfig(getState))
        .then(res => dispatch({type: UPDATE_BASIC_INFO, ...res}))
        .catch(err => console.log(err));
};