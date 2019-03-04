import React from "react";
import Address from "../address";
import Area from "../area";
import Price from "../price";
import Image from "../image";

const EmptyComponent = () => <></>;

// available components for dynamic rendering
const components = {
  EMPTY: EmptyComponent,
  ADDRESS: Address,
  AREA: Area,
  PRICE: Price,
  IMAGE: Image
};

// define component TagName safely
const getTagName = name => components[name] || components["EMPTY"];

const DynamicComponent = ({ component, children, data }) => {
  const TagName = getTagName(component);

  // according to template with id=3 we have to pass children to image component.
  // if we will need to pass children into another components we just need to extend them to handle children property
  if (typeof children === "object" && Array.isArray(children)) {
    children = (
      <>
        {children.map((child, item) => {
          let ChildTagName = getTagName(child.component);
          return <ChildTagName key={`child_${item}`} {...data} />;
        })}
      </>
    );
  }

  return (
    <>
      <TagName {...data}>{children}</TagName>
    </>
  );
};

export default DynamicComponent;
