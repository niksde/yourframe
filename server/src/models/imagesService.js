const { v4: uuid } = require("uuid");
const dynamodb = require("../core/dynamodb");

const TableName = process.env.IMAGES_TABLE_NAME;

async function save(imageData, res) {
  const image = {
    id: uuid(),
    ...imageData,
    createdAt: new Date().toISOString(),
  };

  const params = {
    TableName,
    Item: image,
  };

  await dynamodb.put(params, res);

  return image;
}

async function getAll(res) {
  const params = {
    TableName,
  };

  const images = await dynamodb.scan(params, res);

  return images;
}

module.exports = {
  save,
  getAll,
};
