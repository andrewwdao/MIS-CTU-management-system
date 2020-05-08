import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      })
    };

    fetch(localStorage.getItem("apiHost") + '/auth/token/', requestOptions).then(
      res => {
        if (res.status === 401) {
          alert("Wrong username/password");
          return '';
        }
        else if (res.status !== 200) {
          console.log("Unexpected error.");
          return '';
        }
        else return res.json();
      }
    ).then(
      token => {
        if (token) {
          localStorage.setItem("accessToken", 'Bearer ' + token.access);
          this.props.handleSuccessfulLogin(token);
        }
      }
    );
    
  }

  render() {
    return (
      <div className="Login-page">
        <div className="Login-form-container">
          <img className="Login-logo" src={require("../images/logo.jpg")} alt="Logo" />
          <form className="Login-form" onSubmit={this.handleSubmit}>
            <div className="txt-inp-container Login-txt-inp-container">
              <input
                autoComplete="off"
                className={`txt-inp ${this.state.email ? 'has-content' : null}`}
                placeholder="Email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange} />
              <span className="focus-bot"></span>
            </div>
            <br /><br />

            <div className="txt-inp-container Login-txt-inp-container">
              <input
                autoComplete="off"
                className={`txt-inp ${this.state.password ? 'has-content' : null}`}
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange} />
              <span className="focus-bot"></span>
            </div>
            <br /><br />

            <input className="btn Login-btn" type="submit" value="Log in" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;