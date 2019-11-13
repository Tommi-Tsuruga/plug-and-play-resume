import axios from 'axios';
import { ADD_BASIC_INFO, FETCH_BASIC_INFO } from "./types";
import { requestConfig } from "./auth";
import { returnErrors } from "./messages";

// Fetch BasicInfo
export const fetchBasicInfo = () => (dispatch, getState) => {
    axios.get("/api/basic/", requestConfig(getState))
         .then(res => {
             console.log(res.data);
             setTimeout(() =>
             dispatch({ type: FETCH_BASIC_INFO, payload: res.data }), 1000)})
         .catch(err => dispatch(returnErrors(err.response.data, err.status)));
};

export const updateBasicInfo = (basicInfoData = {}) => (dispatch, getState) => {
    const { firstName = '', lastName = '' } = basicInfoData;
    const basicInfo = {
        ...basicInfoData,
        first_name: firstName,
        last_name: lastName,
    };
    axios.post("/api/basic/", basicInfo, requestConfig(getState))
         .then(res => setTimeout(() =>
             dispatch({ type: ADD_BASIC_INFO, payload: res.data }), 1000))
         .catch(err => dispatch(returnErrors(err.response.data, err.status)));
};

