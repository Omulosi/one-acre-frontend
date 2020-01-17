import axios from 'axios';
import { LOADING, LOGIN, SET_ERRORS, UPDATE_USER_DETAILS } from '../types';
import { axiosWithAuth } from '../../utils/axiosAuth';

import { baseUrl } from '../../config/index';

export const userLogin = (userData, history, setSubmitting) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`${baseUrl}/auth/login`, {
      email: userData.email,
      password: userData.password
    })
    .then(({ data }) => {
      const user = data.data[0].user;
      dispatch({
        type: LOGIN, payload: user
      });
      const token = data.data[0].access_token;
      localStorage.setItem('token', `${token}`);
      history.push('/dashboard/profile');
      setSubmitting(false);
      localStorage.setItem('profile', JSON.stringify(user));
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      setSubmitting(false);
    });
};

export const userSignUp = (userData, history, setSubmitting) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`${baseUrl}/auth/register`, userData)
    .then(({ data }) => {
      dispatch(userLogin(userData, history, setSubmitting));
      setSubmitting(false);
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      setSubmitting(false);
    });
};

export const updateUser = (user, field, newData, setSubmitting) => dispatch => {
  dispatch({ type: LOADING })
  axiosWithAuth()
    .patch(`/users/${user.id}/${field}`, newData)
    .then(({ data }) => {
      const user = data.data[0];
      dispatch({
        type: UPDATE_USER_DETAILS, payload: user
      });
      localStorage.setItem('profile', JSON.stringify(user));
      setSubmitting(false);

    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

