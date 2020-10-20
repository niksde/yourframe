import React from "react";

export default function ImageCard({ imageName, imageUrl }) {
  return (
    <div className="image-card">
      <img id={imageName} className="preview-image" src={imageUrl} />
      <div className="container">{imageName}</div>
    </div>
  );
}
