import React from "react";
import DynamicComponent from "../dynamic-component";

const HouseMap = ({ data, template }) => {
  return (
    <div className="house">
      {template.template.map((item, index) => {
        return (
          <DynamicComponent
            key={`dynamicComponent_${index}`}
            {...item}
            data={data}
          />
        );
      })}
    </div>
  );
};

HouseMap.defaultProps = {
  template: {
    template: []
  }
};

export default HouseMap;
