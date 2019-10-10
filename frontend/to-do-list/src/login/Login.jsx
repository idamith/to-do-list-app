import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    username: "idotrick",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" name="username" onChange={this.handleChange} />
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <button>login</button>
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
