import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import HouseMap from "./components/house-map";
import { Container, Row, Col } from "react-bootstrap";
import TemplateSwitcher from "./components/template-switcher";

const DATA_URL = "http://demo4452328.mockable.io/properties";
const TEMPLATES_URL = "http://demo4452328.mockable.io/templates";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      templates: [],
      templateColors: {
        0: "secondary", // defaut color for case when template can't be found by id
        1: "primary",
        2: "dark",
        3: "success"
      },
      currentTemplateId: 0
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

  setCurrentTemplateId(id = 0) {
    this.setState({ currentTemplateId: id });
  }

  render() {
    const { data, templates, templateColors, currentTemplateId } = this.state;

    return (
      <div className="App">
        <header className="App-header">Site Title</header>
        <main>
          <Container fluid>
            <Row>
              <TemplateSwitcher
                templates={templates}
                templateColors={templateColors}
                onClick={e => this.setCurrentTemplateId(e)}
              />
            </Row>
            <Row>
              {data.map((item, index) => {
                let randomTemplate, currentTemplate;

                randomTemplate =
                  templates[Math.floor(Math.random() * templates.length)];

                // try to find current template in templates array
                currentTemplate = templates.find(
                  template => template.id === currentTemplateId
                );

                // if current template not found set as random
                if (!currentTemplate) {
                  currentTemplate = randomTemplate;
                }

                // define template color according to currentTemplate
                let templateColor = currentTemplate
                  ? templateColors[currentTemplate.id]
                  : templateColors[0];
                return (
                  <Col md="6" xl="4" className="mb-4" key={`item-${index}`}>
                    <HouseMap
                      template={currentTemplate}
                      templateColor={templateColor}
                      data={item}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}

export default App;
