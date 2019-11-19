import React, { Component } from "react";
import { login } from "./../services/authService";

class Login extends Component {
  state = { username: "", password: "" };

  handleSubmit = async () => {
    try {
      const { username, password } = this.state;
      const { data } = await login(this.state.username, this.state.password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user.username);
      window.location = "/requests";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        //this.setState({ errors });
      }
    }
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="col-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.handleChange}
                value={username}
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.handleChange}
                value={password}
              ></input>
            </div>
            <div className="form-group">
              <button
                type="button"
                onClick={this.handleSubmit}
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
