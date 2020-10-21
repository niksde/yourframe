# YouFrame backend api

Follow bellow instructions for setting up YouFrame backend api.

- install aws cli in your system from this [website]().

# create AWS IAM user and configure it.

- create aws IAM user role of name 'demo-user' and give admin privelleges or specific resource privellegs (lambda, s3, dynamodb).
- run following command in terminal.

```
aws configure --profile demo-user
```

- enter credentials (access key id, secrete access key) of 'demo-user' profile which aws provides

# install serverless package

- install sls using bellow command

```
npm i -g serverless
```

# deploy to aws

```
sls deploy -v
```

Api endpoint will be show in terminal copy it and replace it with value of REACT_APP_API_URL in .env of frontend.

- check logs

```
sls logs -f app -t
```
