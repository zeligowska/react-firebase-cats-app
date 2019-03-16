import React, { Component } from 'react';
import './App.css';

import Register from './Register';
import Cats from './Cats';
import Login from './Login'

class App extends Component {

  state = {
    isAuthorized: false
  }

  setIsAuthorized = (value) => {
    this.setState({ isAuthorized: value });
  }

  renderCats() {
    if(this.state.isAuthorized) {
      return <Cats />
    }
    return null;
  }


  render() {
    const { cats } = this.state;
    return (
      <div>
        <div>
          <Register setIsAuthorized={this.setIsAuthorized} />
        </div>
        <div>
          <Login setIsAuthorized={this.setIsAuthorized} />
        </div>
        <div>
          {this.renderCats()}
        </div>
      </div>
    );
  }
}

export default App;