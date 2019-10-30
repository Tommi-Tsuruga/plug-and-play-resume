import axios from "axios";
import { GET_EXPERIENCE, DELETE_EXPERIENCE } from "./types";

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

export const deleteExperience = id => dispatch => {
  axios
    .delete(`/api/resume/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_EXPERIENCE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
