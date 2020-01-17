import { axiosWithAuth } from '../../utils/axiosAuth';
import {
  LOADING,
  GET_ALL_FARMS,
  CREATE_FARM,
  DELETE_FARM,
  VIEW_FARM,
  CLOSE_FARM,
  SEARCH_QUERY_CHANGE,
  TOGGLE_CREATE_FARM,
  STOP_LOADING
} from '../types';

export const getAllFarms = () => dispatch => {
  dispatch({ type: LOADING });
  axiosWithAuth()
    .get('/farms')
    .then(({ data }) => {
      dispatch({
        type: GET_ALL_FARMS,
        payload: data.data
      });
    })
    .catch(err => {
      dispatch({type: STOP_LOADING})
    });
};

export const createFarm = farmDetails => dispatch => {
  dispatch({ type: LOADING });
  axiosWithAuth()
    .post('/farms', farmDetails)
    .then(({ data }) => {
      dispatch({
        type: CREATE_FARM,
        payload: data
      });
    })
    .catch(err => {
      dispatch(getAllFarms());
    });
};

export const viewFarm = id => {
  return {
    type: VIEW_FARM,
    payload: id
  };
};

export const closeFarm = () => {
  return {
    type: CLOSE_FARM
  };
};

export const searchQueryChange = value => {
  return {
    type: SEARCH_QUERY_CHANGE,
    payload: value
  };
};

export const deleteFarm = id => dispatch => {
  dispatch({ type: LOADING });
  axiosWithAuth()
    .delete(`/farms/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_FARM
      });
    });
};

export const toggleCreateFarm = () => {
  return {
    type: TOGGLE_CREATE_FARM
  };
};
