import React, { Component } from "react";
import api from "./api";

class App extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const response = await api.get("");

    this.setState({ users: response.data });
  }

  render() {
    const { users } = this.state;
    return (
      <>
        <h1>API Consumir Front React</h1>
        <section>
          {users.map((user) => {
            return (
              <li>
                <span>{user.id}</span>
                <div>
                  <h1> {user.name} </h1>
                  <p>{user.username}</p>
                </div>
                <strong>{user.email}</strong>
              </li>
            );
          })}
        </section>
      </>
    );
  }
}

export default App;
