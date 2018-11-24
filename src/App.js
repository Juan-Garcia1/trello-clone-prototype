import React, { Component } from "react";
import "./App.css";

// import List from "./Components/List/List"
import Board from "./Components/Board/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
