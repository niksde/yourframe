import React, { useEffect, useState } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import UploadButton from "./components/UploadButton";
import { saveImage, getImages } from "./services/imageService";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: images } = await getImages();
      setImages([...images]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file.type.includes("image")) {
      console.log("cannot upload non image file");
      return;
    }
    try {
      const { data: image } = await saveImage(file);
      setImages((prevState) => [image, ...prevState]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <main className="app-container">
        <UploadButton onChange={handleFileChange} />
        <ImageGrid items={images} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
