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
    const { filmes } = this.state;
    return (
      <>
        <h1>API Consumir Front React</h1> {console.log(filmes)}
      </>
    );
  }
}

export default App;
