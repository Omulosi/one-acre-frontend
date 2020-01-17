import { LOGIN, LOADING, SET_ERRORS, UPDATE_USER_DETAILS, CLEAR_ERRORS, STOP_LOADING } from '../types';

const initialState = {
  loading: false,
  credentials: {},
  errors: {},
  authenticated: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: false,
        authenticated: true,
        credentials: action.payload
      };

    case UPDATE_USER_DETAILS:
      return {
        ...state,
        credentials: action.payload,
        loading: false
      };

    case LOADING:
      return {
        ...state,
        loading: true,
        errors: {}
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };

    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
      };

    default:
      return state;
  }
};
