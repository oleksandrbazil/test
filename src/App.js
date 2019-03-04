import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import DynamicComponent from "./components/dynamic-component";

const DATA_URL = "http://demo4452328.mockable.io/properties";
const TEMPLATES_URL = "http://demo4452328.mockable.io/templates";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      templates: []
    };
  }

  componentDidMount() {
    axios.get(DATA_URL).then(response => {
      this.setState({ data: response.data.data });
    });
    axios.get(TEMPLATES_URL).then(response => {
      this.setState({ templates: response.data });
    });
  }

  render() {
    const dataArray = this.state.data;

    return (
      <div className="App">
        <header className="App-header">Site Title</header>
        <main>
          {dataArray.map((item, index) => (
            <div key={`item-${index}`}>
              test
              <DynamicComponent {...item} />
            </div>
          ))}
        </main>
      </div>
    );
  }
}

export default App;
