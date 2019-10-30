import axios from "axios";
import { GET_EXPERIENCE } from "./types";

//GET EXP
export const getExperience = () => dispatch => {
  axios
    .get("/api/resume/")
    .then(res => {
      dispatch({
        type: GET_EXPERIENCE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
