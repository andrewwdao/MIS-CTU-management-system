import React from 'react';

import './UI/Main.css';
import './UI/Nav.css';
import './UI/ListView.css';
import './UI/UserList.css';
import './UI/FacultyList.css';
import './UI/Login.css';

// import Login from './Login';
import Nav from './Nav';
import UserList from './UserList/UserList';
import FacultyList from './FacultyList/FacultyList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken: '',
      refreshToken: '',
      host: 'http://localhost:8000/', // Backend API host
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.refreshToken = this.refreshToken.bind(this);

    // FOR DEBUG PURPOSES ONLY
    this.__DEBUG = this.__DEBUG.bind(this);
  }

  componentDidMount() {
    // FOR DEBUG PURPOSES ONLY
    this.__DEBUG();
  }

  componentWillUnmount() {
    // Clear the tokenRefresher interval set before on handleSuccessfulLogin
    clearInterval(this.tokenRefresher);
  }

  // Get the new access token using refresh token
  refreshToken() {
    // If there is a valid refresh token, do the request to update access token
    if (this.state.refreshToken) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh: this.state.refreshToken
        })
      };

      fetch(this.state.host + 'auth/token/refresh/', requestOptions).then(
        res => res.json()
      ).then(
        token => {
          // The 'Bearer ' prefix is required
          this.setState({accessToken: 'Bearer ' + token.access});
        }
      );
    }
  }

  // Bypass the login page with the token we already got (superuser permission)
  __DEBUG() {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU4NzM1NTIyNCwianRpIjoiMjFmZDljOTZkNDlmNDRmYjkwM2U4NGYyYzMyMWQzN2QiLCJ1c2VyX2lkIjoxfQ.2DAvuCZWtRzeUnrvPUCHWIi3bfDe5Qp8CWIyYyoqw1o'
      })
    };

    fetch(this.state.host + 'auth/token/refresh/', requestOptions).then(
      res => res.json()
    ).then(
      token => {
        this.setState({accessToken: 'Bearer ' + token.access});
      }
    );
  }

  handleSuccessfulLogin(token) {
    this.setState({
      accessToken: token.access,
      refreshToken: token.refresh
    });

    // Get the new access token immediately
    this.refreshToken();

    // Refresh the token every 5 mins
    this.tokenRefresher = setInterval(this.refreshToken, 300000);
  }

  handleLogout() {
    this.setState({
      accessToken: '',
      refreshToken: ''
    })

    // Stop the token refresher on log out
    clearInterval(this.tokenRefresher);
  }

  render() {
    return (
      <div>
        <FacultyList
          accessToken={this.state.accessToken}
          host={this.state.host}/>
        <Nav />
      </div>
    );
  }
}

export default App;
