import React from "react";

export default function ImageCard({ imageName, imageUrl }) {
  const imageId = imageUrl.split("images/")[1];

  return (
    <div className="image-card">
      <img
        id={imageId}
        className="preview-image"
        src={imageUrl}
        alt={imageName}
      />
      <div className="container">{imageName}</div>
    </div>
  );
}
