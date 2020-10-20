import React from "react";
import ImageCard from "./ImageCard";

export default function ImageGrid({ items = [] }) {
  return (
    <div className="grid-container">
      {items.length !== 0
        ? items.map((image) => (
            <span key={image.name} className="grid-item">
              <ImageCard
                imageName={image.imageName}
                imageUrl={image.imageUrl}
              />
            </span>
          ))
        : "loading..."}
    </div>
  );
}
