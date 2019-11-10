import axios from 'axios';
import "regenerator-runtime/runtime";
import {FETCH_BASIC_INFO, ADD_BASIC_INFO} from "./types";
import {requestConfig} from "./auth";
import basicInfo from "../reducers/basicInfo";

// Fetch BasicInfo
export const fetchBasicInfo = () => (dispatch, getState) => {
    return axios.get("/api/basic/", requestConfig(getState))
        .then(res => {
            dispatch({type: FETCH_BASIC_INFO, data: res.data})})
        .catch(err => console.log(err));
};

export const UpdateBasicInfo = (basicInfoData = {}) => (dispatch, getState) => {
    const {
        firstName = '',
        lastName = '',
        email = ''
    } = basicInfoData;
    const basicInfo = {
        first_name: firstName,
        last_name: lastName,
        ...basicInfoData
    };
    axios.post("/api/basic/", basicInfo, requestConfig(getState))
        .then(res => dispatch({type: ADD_BASIC_INFO, ...res}))
        .catch(err => console.log(err));
}

