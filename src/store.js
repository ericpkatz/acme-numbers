import { createStore, combineReducers } from 'redux';

const numbers = (state = [1, 2, 3], action)=> {
  if(action.type === 'ADD_NUMBER'){
    state = [...state, action.number];
  }
  return state;
};

const store = createStore(combineReducers({ numbers }));

export default store;



