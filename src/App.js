import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';

import Register from './Register';
import Cats from './Cats';
import Login from './Login'
import Logout from './Logout'
import { auth } from './firebase';

class App extends Component {

  state = {
    isAuthorized: false
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if(user) {
        this.setState({ isAuthorized: true });
      } else {
        this.setState({ isAuthorized: false });
      }
    })
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
            <Link to="/logout"><button>Logout</button></Link>
          </div>
          <Route exact path="/" component={this.renderCats()} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          {/* <div>
            {this.renderCats()}
          </div> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;