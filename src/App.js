import React, { Component } from "react";

import "./App.css";
import MoviesApp from "./movies/MoviesApp.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesApp />
      </div>
    );
  }
}

export default App;
