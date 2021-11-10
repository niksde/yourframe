const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function scan(params, res) {
  let result;
  try {
    result = await dynamodb.scan(params).promise();
  } catch (error) {
    console.log(error);
    res.status(500).send(error.details[0].message);
  }
  return result.Items;
}

async function put(params, res) {
  try {
    await dynamodb.put(params).promise();
  } catch (error) {
    console.log(error);
    if (res) res.status(500).send(error.details[0].message);
    if (done) done(error.details[0].message, false);
  }
}

module.exports = {
  scan,
  put,
};
