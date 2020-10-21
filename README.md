# YouFrame backend api

Follow bellow instructions for setting up YouFrame backend api. Installing nodejs and npm is basic prerequisite.

- install aws cli in your system from this [website (click here)](https://aws.amazon.com/cli/).

# create AWS IAM user and configure it.

- create aws IAM user role of name 'demo-user' and give admin privileges or specific resource privileges to use lambda, s3, and dynamodb.
- run following command in terminal.

```
aws configure --profile demo-user
```

- enter credentials of 'demo-user' profile which aws provides.
- credentials includes access key id, secrete access key, region: ap-south-1, and then last yaml

# install serverless package

- install serverless globally using bellow command

```
npm i -g serverless
```

# deploy to aws

```
sls deploy -v
```

Api endpoint will be shown in terminal.
![screenshot of terminal](https://github.com/NikhilShisode/youframe-api/blob/master/assets/apiendpoint-url.PNG)
<img src="https://github.com/NikhilShisode/youframe-api/blob/master/assets/apiendpoint-url.PNG" alt="screenshot of terminal">

Copy that ServiceEndpoint url and replace it with the value of REACT_APP_API_URL in .env of frontend.
