#!/usr/bin/env bash
set -euo pipefail

# Lê params do params.yml (precisa yq)
STACK_NAME=$(yq e '.StackName' params.yml 2>/dev/null || echo "lambda-s3-automation-stack")
REGION=$(yq e '.Region' params.yml 2>/dev/null || echo "us-east-1")
BUCKET=$(yq e '.BucketName' params.yml 2>/dev/null || echo "my-lambda-s3-bucket-$(date +%s)")

# Empacotar e implantar
sam build
sam deploy --stack-name "$STACK_NAME" --region "$REGION"   --capabilities CAPABILITY_IAM   --parameter-overrides BucketName=$BUCKET

echo "Deployment finished. Bucket: $BUCKET"
