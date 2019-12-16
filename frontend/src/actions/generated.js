import axios from 'axios';
import { FETCH_GENERATED, CREATE_PDF } from './types';
import { requestConfig } from './auth';
import { returnErrors } from './messages';

// Change timeOut here
const TIMEOUT = 1000;

export const fetchGenerated = () => (dispatch, getState) => {
  axios
    .get('/api/resume/', requestConfig(getState))
    .then(res =>
      setTimeout(
        () => dispatch({ type: FETCH_GENERATED, payload: res.data }),
        TIMEOUT
      )
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const createPDF = () => (dispatch, getState) => {
  axios
    .get('/api/resume/add_pdf/', requestConfig(getState))
    .then(res =>
      setTimeout(
        () => dispatch({ type: CREATE_PDF, payload: res.data }),
        TIMEOUT
      )
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
