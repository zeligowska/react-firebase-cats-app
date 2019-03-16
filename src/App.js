import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
    if (this.state.isAuthorized) {
      return Cats;
    }
    return null;
  }


  render() {
    const { cats } = this.state;
    return (
      <BrowserRouter>
        <div>
          <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
          </div>
          <Route exact path="/" component={this.renderCats()} />
          <Route path="/register" render = {
            (props) => <Register {...props} setIsAuthorized={this.setIsAuthorized} />
          } />
          <Route path="/login" render = {
            (props) => <Login {...props} setIsAuthorized={this.setIsAuthorized} />
          } />
          {/* <div>
            {this.renderCats()}
          </div> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;