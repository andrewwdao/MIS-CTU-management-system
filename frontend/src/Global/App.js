import React from 'react';

import '../css/Main.css';
import '../css/Login.css';

import Login from './Login';
import Data from './Data';
import GeneralPurposeModal from './GeneralPurposeModal'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshToken: '',
    //   accessToken: '',
    //   host: 'http://localhost:8000', // Backend API host
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

    localStorage.setItem("apiHost", 'http://127.0.0.1:8000');
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

      fetch(localStorage.getItem("apiHost") + '/auth/token/refresh/', requestOptions).then(
        res => res.json()
      ).then(
        token => {
          // The 'Bearer ' prefix is required
          // this.setState({accessToken: 'Bearer ' + token.access});
          localStorage.setItem("accessToken", 'Bearer ' + token.access);
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
        refresh: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU4ODk0MDA5NywianRpIjoiYjI3MWU5Y2Y4ZWNiNGNlZGIxMjI4MTI0YzQ0NDY2ZWEiLCJ1c2VyX2lkIjoxfQ.3vYd4f6_vt-a-GKUOW5BPTNlJE-U2gYskAxD8x_W6ps'
      })
    };

    fetch(localStorage.getItem("apiHost") + '/auth/token/refresh/', requestOptions).then(
      res => res.json()
    ).then(
      token => {
        // this.setState({accessToken: 'Bearer ' + token.access});
        localStorage.setItem("accessToken", 'Bearer ' + token.access);
      }
    );
  }

  handleSuccessfulLogin(token) {
    this.setState({
    //   accessToken: token.access,
      refreshToken: token.refresh
    });

    // Get the new access token immediately
    this.refreshToken();

    // Refresh the token every 5 mins
    this.tokenRefresher = setInterval(this.refreshToken, 300000);
  }

  handleLogout() {
    this.setState({
    //   accessToken: '',
      refreshToken: ''
    });

    // Clear the access token
    localStorage.setItem("accessToken", '');

    // Stop the token refresher on log out
    clearInterval(this.tokenRefresher);
  }

  render() {
    return (
      <div>
        <Data />
      </div>
    );
  }
}

export default App;
