# github-copilot-lambda-deployment-test

This project contains a simple AWS Lambda function that is deployed using the Serverless Framework and GitHub Actions.

## Prerequisites

- Node.js and npm installed
- Serverless Framework installed (`npm install -g serverless`)
- AWS account with access to AWS Lambda
- GitHub account

## Project Structure

- `.github/workflows/deploy.yml`: GitHub Actions workflow for deploying the Lambda function
- `src/handler.js`: The handler function for the Lambda function
- `serverless.yml`: Serverless Framework configuration file
- `package.json`: npm configuration file

## Deployment

The Lambda function is automatically deployed when a push is made to the main branch of the GitHub repository. The deployment is handled by the GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

The workflow uses the `windows-latest` runner and the `npx serverless deploy` command to deploy the function. It uses GitHub's OpenID Connect feature to assume a role in your AWS account.

To set up the workflow, you need to configure your AWS credentials and the AWS region in the GitHub repository's secrets. The secrets should be named `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_REGION`.

## Usage

Once the function is deployed, you can invoke it using the AWS CLI or the AWS Management Console. The function name is `github-copilot-lambda-deployment-test`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.