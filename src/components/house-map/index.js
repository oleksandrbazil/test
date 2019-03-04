import React from "react";
import DynamicComponent from "../dynamic-component";
import { Card } from "react-bootstrap";

const HouseMap = ({ data, template, templateColor }) => {
  return (
    <Card bg={templateColor} text="white" className="house">
      <Card.Body>
        {template.template.map((item, index) => {
          return (
            <DynamicComponent
              key={`dynamicComponent_${index}`}
              {...item}
              data={data}
            />
          );
        })}
      </Card.Body>
    </Card>
  );
};

HouseMap.defaultProps = {
  template: {
    id: 0,
    template: []
  },
  templateColor: null
};

export default HouseMap;
