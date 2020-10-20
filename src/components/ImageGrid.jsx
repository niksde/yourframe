import React from "react";
import ImageCard from "./ImageCard";

export default function ImageGrid({ items = [] }) {
  return (
    <div className="grid-container">
      {items.length !== 0
        ? items.map((image, index) => (
            <span key={image.imageName + "-" + index}>
              <ImageCard
                imageName={image.imageName}
                imageUrl={image.imageUrl}
                className="grid-item"
              />
            </span>
          ))
        : "loading..."}
    </div>
  );
}
