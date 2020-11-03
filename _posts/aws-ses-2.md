---
title: 'Creating an email contact form using Flask and AWS -  Part 2 (Flask API and deployment)'
date: '1601301600'
tags: ['AWS', 'Python']
---

In the lambda directory, create a new python file called ***handler.py***. This file will contain the Flask application, the AWS SDK code to send an email and the code for handling the Lambda Proxy Integration Payload.


In the __main__ block, the ***lambda_handler*** function uses the modified wsgi interface from the aswgi module and sends HTTP requests to the Flask Application.

&nbsp;
&nbsp;

The function ***contact_message*** is registered in the Flask application to handle POST requests at the path **/contact**. It will read the provided contact form fields which are sent as Form Data and are read from the request variable provided by Flask. The name, email and message are placed in the placeholder body and sent using the ***send_email*** call from the AWS SDK.



~~~python
import awsgi
from flask import Flask, request, jsonify
import boto3
from botocore.exceptions import ClientError

app = Flask(__name__)

SENDER = "email@gmail.com"

RECIPIENT = "email@gmail.com"


# If necessary, replace us-west-2 with the AWS Region you're using for Amazon SES.
AWS_REGION = "us-east-2"

@app.route("/contact", methods=['POST'])
def contact_message():

    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        SUBJECT = f"Portfolio Contact Message from {name}"

        # The email body for recipients with non-HTML email clients.
        BODY_TEXT = (f"""Portfolio Contact Message\r\n
             Contact Name: {name}\r\n
             Contact Email: {email}\r\n
             Contact Message: {message}\r\n
             """
        )
        BODY_HTML = f"""<html>
        <head></head>
        <body>
        <h1>Contact Message from Portfolio</h1>
        <h2>Name:</h2> 
        <p>{name}</p>
        <h2>Email:</h2>
        <p>{email}</p>
        <h2>Message:</h2>
        <p>
            {message}
        </p>
        </body>
        </html>
        """

        # The character encoding for the email.
        CHARSET = "UTF-8"

        # Create a new SES resource and specify a region.
        client = boto3.client('ses',region_name=AWS_REGION)

        # Try to send the email.
        try:
            #Provide the contents of the email.
            response = client.send_email(
                Destination={
                    'ToAddresses': [
                        RECIPIENT,
                    ],
                },
                Message={
                    'Body': {
                        'Html': {
                            'Charset': CHARSET,
                            'Data': BODY_HTML,
                        },
                        'Text': {
                            'Charset': CHARSET,
                            'Data': BODY_TEXT,
                        },
                    },
                    'Subject': {
                        'Charset': CHARSET,
                        'Data': SUBJECT,
                    },
                },
                Source=SENDER,
                # If you are not using a configuration set, comment or delete the
                # following line
                #ConfigurationSetName=CONFIGURATION_SET,
            )
        # Display an error if something goes wrong.	
        except ClientError as e:
            print(e.response['Error']['Message'])
        else:
            print("Email sent! Message ID:"),
            print(response['MessageId'])

        return jsonify(status=200, message='OK')

def lambda_handler(event, context):
    return awsgi.response(app, event, context)
~~~

&nbsp;
&nbsp;

The next step will be the archive the lambda code in a zip file, along with the virtualenv libraries.


&nbsp;
&nbsp;

First, make sure to not be in a virtual environment, and then  archive the library files located at **lambda/env/lib/python3.8/site-packages** (make sure to change the python version in the path if you're not using 3.8) and the **lambda/handler.py** in to a zip file called **function.zip**.

```
cd ./lambda
zip -r9 ./lambda/env/lib/python3.8/site-packages ./lambda/handler.py function
```
&nbsp;
&nbsp;

Next, while in the root project directory (where the cdk project was initialized). Activate the project level virtual environment and then run the cdk deploy command to send the lambda code and provision the necessary services.

```
. ./env/bin/activate
cdk deploy
```

