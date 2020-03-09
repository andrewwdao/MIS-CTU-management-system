import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
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

    this.props.handleSuccessfulLogin(1);
  }

  render() {
    return (
      <div className="Login-page">
        <div className="Login-form-container">
          <img className="Login-logo" src={require("./UI/logo.jpg")} alt="Logo" />
          <form className="Login-form" onSubmit={this.handleSubmit}>
            <div className="txt-inp-container Login-txt-inp-container">
              <input
                autoComplete="off"
                className={`txt-inp ${this.state.username ? 'has-content' : null}`}
                placeholder="Username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange} />
              <span className="focus-bot"></span>
            </div>
            <br /><br />

            <div className="txt-inp-container Login-txt-inp-container">
              <input
                autoComplete="off"
                className={`txt-inp ${this.state.password ? 'has-content' : null}`}
                placeholder="Password"
                type="text"
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