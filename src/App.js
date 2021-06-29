import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Numbers from './Numbers';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class _App extends Component{
  componentDidMount(){
    setInterval(()=> {
      this.props.addNumber(Math.ceil(Math.random()*10));
    }, 1000);
  }
  render(){
    return (
      <div>
        <Route component={ Nav } />
        <main>
          <Route path='/' component={ Home } exact/>
          <Route path='/:filter' component={ Numbers }/>
        </main>
      </div>
    );
  }
}

export default connect(
  (state)=> {
    return {
      numbers: state.numbers
    };
  },
  (dispatch)=> {
    return {
      addNumber: (number)=> dispatch({type: 'ADD_NUMBER', number})
    }
  }
)(_App);
