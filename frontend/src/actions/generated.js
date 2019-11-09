import axios from "axios";
import {FETCH_GENERATED} from "./types";
import {requestConfig} from "./auth";

export const fetchGenerated = () => (dispatch, getState) => {
    axios.get("/api/resume/", requestConfig(getState))
        .then(res => dispatch({type: FETCH_GENERATED,  ...res}))
        .catch(err => dispatch(console.log(err)));
};
