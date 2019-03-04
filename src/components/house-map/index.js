import React from "react";
import DynamicComponent from "../dynamic-component";
import { Card } from "react-bootstrap";

const HouseMap = ({ data, template }) => {
  let bg = "light";
  switch (template.id) {
    case 1:
      bg = "primary";
      break;
    case 2:
      bg = "dark";
      break;
    case 3:
      bg = "success";
      break;
    default:
      break;
  }
  return (
    <Card bg={bg} text="white" className="house">
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
  }
};

export default HouseMap;
