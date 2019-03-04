import React, { Component } from "react";
import "./App.css";
import DynamicComponent from "./components/dynamic-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Site Title</header>
        <main>
          <DynamicComponent />
        </main>
      </div>
    );
  }
}

export default App;
