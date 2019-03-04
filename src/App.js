import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import HouseMap from "./components/house-map";
import { Container, Row, Col } from "react-bootstrap";

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
    const firstTemplate = this.state.templates.find(
      template => template.id === 3
    );

    return (
      <div className="App">
        <header className="App-header">Site Title</header>
        <main>
          <Container fluid>
            <Row>
              {dataArray.map((item, index) => (
                <Col md="6" xl="4" className="mb-4">
                  <HouseMap
                    key={`item-${index}`}
                    template={firstTemplate}
                    data={item}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}

export default App;
