import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_GENERATED } from "./types";

export const getGenerated = () => (dispatch, getState) => {
  axios
    .get("/api/resume/", tokenConfig(getState))
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_GENERATED,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
