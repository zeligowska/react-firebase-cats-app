import React from 'react';
import { Link } from 'react-router-dom';

const createStyles = (show) => ({
  display: show ? 'block' : 'none'
});

export default ({ isAuthorized }) => (
  <ul>
    <li>
      <Link to="/"><button>Home</button></Link>
    </li>
    <li style={createStyles(!isAuthorized)}>
      <Link to="/login"><button>Login</button></Link>
    </li>
    <li style={createStyles(!isAuthorized)}>
      <Link to="/register"><button>Register</button></Link>
    </li>
    <li style={createStyles(isAuthorized)}>
      <Link to="/logout"><button>Logout</button></Link>
    </li>
    <li style={createStyles(isAuthorized)}>
      <Link to="/upload"><button>Upload</button></Link>
    </li>
  </ul>
);