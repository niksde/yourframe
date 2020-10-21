const AWS = require("aws-sdk");
const multer = require("multer");
const multers3 = require("multer-s3");
const { fileFilter, fileName } = require("../lib/file");

const s3 = new AWS.S3();
const imageBucketName = process.env.IMAGES_BUCKET_NAME;

const upload = multer({
  fileFilter,
  storage: multers3({
    s3,
    bucket: imageBucketName,
    contentType: function (req, file, cb) {
      cb(null, file.mimetype);
    },
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const originalFile = fileName(req, file);
      cb(null, originalFile);
    },
  }),
});

module.exports = upload;
