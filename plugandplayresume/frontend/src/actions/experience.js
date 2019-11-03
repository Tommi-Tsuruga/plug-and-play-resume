import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_BASICINFO, DELETE_BASICINFO, ADD_BASICINFO } from './types';

//GET EXP
export const getBasicInfo = () => dispatch => {
  axios
    .get('/api/basic/')
    .then(res => {
      dispatch({
        type: GET_BASICINFO,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteBasicInfo = id => dispatch => {
  axios
    .delete(`/api/basic/${id}`)
    .then(res => {
      dispatch(createMessage({ infoDeleted: 'Info Deleted' }));
      dispatch({
        type: DELETE_BASICINFO,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addBasicInfo = basicInfo => dispatch => {
  axios
    .post('/api/basic/', basicInfo)
    .then(res => {
      dispatch(createMessage({ infoAdded: 'Info Added' }));
      dispatch({
        type: ADD_BASICINFO,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
