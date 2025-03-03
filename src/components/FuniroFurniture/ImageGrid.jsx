/**
 * This code was generated by Builder.io.
 */
import React from "react";

function ImageGrid({ images, containerClassName, gridClassName, columnClassNames }) {
  return (
    <div className={containerClassName}>
      <div className={gridClassName}>
        {images.map((image, index) => (
          <div key={index} className={columnClassNames ? columnClassNames[index] : ""}>
            <img
              loading="lazy"
              src={image.src}
              alt=""
              className={`object-contain ${image.className}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;