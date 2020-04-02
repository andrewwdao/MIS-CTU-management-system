import React from 'react';

import './UI/Main.css';
import './UI/UserList.css';
import './UI/Nav.css';
import './UI/Dashboard.css';
import './UI/Login.css';

import Login from './Login';
import Nav from './Nav';
import UserList from './UserList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken: '',
      refreshToken: '',
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.tokenRefresher);
  }

  refreshToken() {
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

      fetch('http://127.0.0.1:8000/auth/token/refresh/', requestOptions).then(
        res => res.json()
      ).then(
        token => this.setState({accessToken: token.access})
      );
    }
  }

  handleSuccessfulLogin(token) {
    this.setState({
      accessToken: token.access,
      refreshToken: token.refresh
    });

    this.refreshToken();
    this.tokenRefresher = setInterval(this.refreshToken, 300000);
  }

  handleLogout() {
    this.setState({
      accessToken: '',
      refreshToken: ''
    })

    clearInterval(this.tokenRefresher);
  }

  render() {
    var def = (
      <div>
        {
          this.state.accessToken ? (
          <div>
            <UserList
              accessToken={this.state.accessToken} />
            <Nav
              handleLogout={this.handleLogout} />
          </div>
          ) : (
          <Login
            handleSuccessfulLogin={this.handleSuccessfulLogin} /> 
          )
        }
      </div>
    );

    return (
      <div>
        <UserList />
        <Nav />
      </div>
    );
  }
}

export default App;
