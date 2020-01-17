import {
  GET_ALL_FARMS,
  CREATE_FARM,
  EDIT_FARM,
  DELETE_FARM,
  VIEW_FARM,
  CLOSE_FARM,
  SEARCH_QUERY_CHANGE,
  LOADING_UI,
  TOGGLE_CREATE_FARM,
  STOP_LOADING
} from '../types';

const initialState = {
  allFarms: [],
  showModal: false,
  selectedFarm: {},
  searchQuery: '',
  loading: false,
};

export const farmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FARMS:
      return {
        ...state,
        loading: false,
        allFarms: action.payload
      };

    case CREATE_FARM:
      return {
        ...state,
        loading: false,
        allFarms: [...state.allFarms, action.payload]
      };

    case EDIT_FARM:
      return {
        ...state,
        loading: false,
        allFarms: state.allFarms.map(farm =>
          farm.id === action.payload.id ? action.payload : farm
        )
      };

    case LOADING_UI:
      return {
        ...state,
        loading: true
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };

    case SEARCH_QUERY_CHANGE:
      return {
        ...state,
        searchQuery: action.payload
      };

    case VIEW_FARM:
      return {
        ...state,
        showModal: true,
        selectedFarm: state.allFarms.find(
          farm => farm.id === action.payload
        )
      };

    case CLOSE_FARM:
      return {
        ...state,
        showModal: false,
        selectedFarm: {}
      };

    case DELETE_FARM:
      return {
        ...state,
        loading: false,
        allFarms: state.allFarms.filter(
          farm => farm.id !== action.payload.id
        )
      };

    case TOGGLE_CREATE_FARM:
      return {
        ...state,
        showCreateFarm: !state.showCreateFarm
      };
    default:
      return state;
  }
};
