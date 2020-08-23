---
title: 'Creating an email contact form using Flask, AWS SES and AWS Lambda - Part 1'
date: '1597432555'
tags: ['AWS', 'Python']
---

For my contact form on my portfolio site, I opted to write a Lambda function and AWS's Simple Email Service (SES) to send the message to my primary email rather than connect with a third party provider or do-it-myself on a Digital Ocean droplet.

## Setting up sending/recieving emails for AWS SES

In order to use AWS SES, you first need to register an email to use as a recipient/sender (You can use the same email for both).

Log in to your AWS Management Console and go to the SES Management Console. Then go to **Email addresses** and click **Verifiy a New Email Address** and follow the instruction.


## Setting up the Python environment


The Python workspace will consist of two seperate virtual environments. One will be for provisioning and delploying the AWS Lambda Service along with an HTTP API Gateway, this will be done using the Amazon Cloud Development Kit library and the CDK Toolkit (cli). The other Python environent will be be for the Flask API and the AWS SDK library used to send emails using SES.


You need to have the CDK Toolkit installed (It requires node). Follow the instructions [**here**](https://docs.aws.amazon.com/cdk/latest/guide/cli.html).

&nbsp;
&nbsp;


The commands below will create a new project directory for cdk build environemnt and a lambda subdirectory to store the lambda code:

&nbsp;
&nbsp;

```
mkdir -p cdk_flask_ses_lambda/lambda.
cd flask-ses-contact-form-lambda
```
&nbsp;
&nbsp;

Then create the virtual environment for CDK and install the necessary libraries.

```
virtualenv venv
. venv/bin/activate

pip install aws-cdk.aws-apigateway aws-cdk.aws-lambda aws-cdk.aws-iam
```
&nbsp;
&nbsp;

Then setup the cdk environment:
```
cdk init --language python
cdk bootstrap
```

&nbsp;
&nbsp;

At this point the project directory structure should look like this:

~~~
--
~~~
~~~python
def function(x: int) -> int:
    return x + 2
~~~
