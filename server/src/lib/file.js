const slugify = require("slugify");

const fileFilter = (req, file, cb) => {
  const imageTypeCheck =
    file.mimetype === "image/jpeg" || file.mimetype === "image/png";

  if (imageTypeCheck) {
    cb(null, true);
  } else {
    cb(
      new Error(
        `Invalid Mime Type of ${file.fieldname}, only JPEG and PNG allowed`
      ),
      false
    );
  }
};

const fileName = (req, file) => {
  const fileName = slugify(file.originalname);

  return "images/" + fileName;
};

exports.fileFilter = fileFilter;
exports.fileName = fileName;
