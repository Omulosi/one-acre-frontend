import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { userReducer } from './reducers/userReducer';
import { farmReducer } from './reducers/farmReducer';


const rootReducer = combineReducers({
  user: userReducer,
  farm: farmReducer
});


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
