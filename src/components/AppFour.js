import React, { Component } from "react";

export default class AppFour extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    alert(`${this.state.username} is logged in!`)
  }

  render() {
    return (
      <div>
        <h4>App Four</h4>
        <form>
          <input
            type="text"
            onChange={(e) => this.setState({ username: e.target.value })}
            required
          />
          <input
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
            required
          />
          <button onClick={this.logIn}>Login</button>
        </form>
      </div>
    );
  }
}
