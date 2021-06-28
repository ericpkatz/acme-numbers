import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

const numbers = (state = [1, 2, 3, 4, 5], action)=> {
  if(action.type === 'ADD_NUMBER'){
    state = [...state, action.number];
  }
  return state;
};

const store = createStore(combineReducers({ numbers }));


class App extends Component{
  render(){
    return (
      <hr />
    );
  }
}

render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));


