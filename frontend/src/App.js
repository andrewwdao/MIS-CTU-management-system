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
      role: -1,
      token: ''
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSuccessfulLogin(role) {
    this.setState({
      role: role
    });
  }

  handleLogout() {
    this.setState({
      role: -1,
      token: ''
    })
  }

  render() {
    var def = (
      <div>
        {
          this.state.role === -1 ?
          <Login
            handleSuccessfulLogin={this.handleSuccessfulLogin} /> :
          <div>
            <UserList />
            <Nav
              handleLogout={this.handleLogout} />
          </div>
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
