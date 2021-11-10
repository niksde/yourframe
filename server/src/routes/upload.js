const express = require("express");
const upload = require("../models/file-upload");
const fileError = require("../middleware/fileError");
const imagesService = require("../models/imagesService");

const router = express.Router();
const imageUpload = [upload.single("image"), fileError];

router.post("/", imageUpload, async (req, res, next) => {
  let imageName = req.file.location.split("images/")[1];
  imageName = imageName.split(".")[0];
  imageName = imageName.replace("-", " ");

  const imageData = {
    imageName,
    imageUrl: req.file.location,
  };

  const image = await imagesService.save(imageData, res);

  return res.json(image);
});

router.get("/", async (req, res) => {
  const images = await imagesService.getAll(res);
  res.send(images);
});

module.exports = router;
