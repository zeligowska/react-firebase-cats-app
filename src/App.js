import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Register from './auth/containers/Register';
import Cats from './Cats';
import Login from './auth/containers/Login'
import Logout from './auth/containers/Logout'
import { auth } from './firebase';
import Avatar from './Avatar';
import Menu from './Menu';
import Upload from './Upload';
import Notifications from './ui/containers/Notifications';
import { login, logout} from './auth/actions';

class App extends Component {

  componentDidMount() {
    // db.ref('/cats').remove();
    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.login(user.providerData[0]);
        // console.log(auth.currentUser);
      } else {
        this.props.logout();
      }
    })
  }

  renderCats() {
    if (this.props.isAuthorized) {
      return Cats;
    }
    return null;
  }


  render() {
    //const { cats } = this.state;
    return (
        <BrowserRouter>
          <div>
            <Notifications />
            <Menu isAuthorized={this.props.isAuthorized} />
            {this.props.isAuthorized ? <Avatar user={this.props.user} /> : null}
            {/* <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
            <Link to="/logout"><button>Logout</button></Link>
          </div> */}
            <Route exact path="/" component={this.renderCats()} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/upload" component={Upload} />
            {/* <div>
            {this.renderCats()}
          </div> */}
          </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);