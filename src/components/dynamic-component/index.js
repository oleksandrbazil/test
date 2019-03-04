import React from "react";

const EmptyComponent = () => <></>;

const DynamicComponent = ({ component }) => {
  // available components for rendering
  const components = {
    EMPTY: EmptyComponent
  };
  // define component safely
  const ComponentTagName = components[component] || components["EMPTY"];
  return (
    <>
      <ComponentTagName />
    </>
  );
};

export default DynamicComponent;
