import React from "react";
import uploadIcon from "../assets/upload.svg";

export default function UploadButton({ onChange }) {
  return (
    <div className="button">
      <img src={uploadIcon} className="upload-icon" alt="upload-icon" />
      <label htmlFor="file">Upload</label>
      <input
        type="file"
        id="file"
        style={{ display: "none" }}
        onChange={onChange}
      />
    </div>
  );
}
