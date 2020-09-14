---
title: 'Creating an email contact form using Flask and AWS -  Part 2 (Flask API and deployment)'
date: '1598159056'
tags: ['AWS', 'Python']
---

~~~python
import awsgi
from flask import Flask, request, jsonify
import boto3
from botocore.exceptions import ClientError

app = Flask(__name__)

SENDER = "koremohamed@gmail.com"

RECIPIENT = "mohamedkore@gmail.com"


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
