import React from "react";

export default ({ images = [], children }) => (
  <div>
    {images.map((src, index) => (
      <img
        key={`img_${index}`}
        src={src}
        alt="img tag should always have alt"
      />
    ))}
    {children}
  </div>
);
