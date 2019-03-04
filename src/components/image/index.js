import React from "react";
import { Carousel } from "react-bootstrap";

export default ({ images = [], children }) => {
  const multipleImages = images.length > 1;
  return (
    <Carousel
      interval={null}
      controls={multipleImages}
      indicators={multipleImages}
    >
      {images.map((src, index) => (
        <Carousel.Item key={`img_${index}`}>
          <img
            src={src}
            alt="img tag should always have alt"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <Carousel.Caption>{children}</Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
