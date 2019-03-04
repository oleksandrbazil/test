import React from "react";
import { Button } from "react-bootstrap";

const TemplateSwitcher = ({ templates, templateColors, onClick }) => {
  return (
    <>
      {templates.map((item, index) => (
        <Button
          key={`templateSwitcher_${index}`}
          variant={templateColors[item.id] || templateColors[0]}
          onClick={() => onClick(item.id)}
        >
          template ${item.id}
        </Button>
      ))}
      <Button onClick={() => onClick()} variant="danger">
        Random
      </Button>
    </>
  );
};

TemplateSwitcher.defaultProps = {
  tempaltes: [],
  templateColors: {},
  onClick: () => {}
};

export default TemplateSwitcher;
