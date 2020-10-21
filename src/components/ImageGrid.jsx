import React from "react";
import ImageCard from "./ImageCard";

export default function ImageGrid({ items = [] }) {
  return (
    <div className="grid-container">
      {items.length !== 0 ? (
        items.map((image, index) => (
          <ImageCard
            imageName={image.imageName}
            imageUrl={image.imageUrl}
            className="grid-item"
            key={image.imageName + "-" + index}
          />
        ))
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
}
