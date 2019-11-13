---
title: Front Channel Sample

toc_footers:
  - <a href='/'>API reference</a>
  - <a href='https://frontapp.com/signup?affiliate=developers'>Create a developer account</a>
  - <a href='plugin.html'>Plugin API documentation</a>
  - <a href='chat.html'>Chat widget API documentation</a>
  - <a href='channel-sample.html'>Channel Sample</a>
  - <a href='changelog.html'>Changelog</a>
  - <a href='mailto:api@frontapp.com'>Contact us</a>

includes:

search: true
---

# Introduction

**What is a Channel**

A channel is a communication stream that can be connected to Front. The most common channel type is email, but Twitter DMs, Facebook Messenger, and SMS are other great examples of communication channels that teams can use to send and receive messages in Front.

Many Front teams have their own systems they want to connect to Front as a channel. That system may be a call log product they built themselves, or maybe a live chat that simply isn’t integrated into Front yet. In either case, the team wants to integrate this channel into Front, and that’s where the Channels API comes in. 

With the Channels API, a team using Front or a partner of Front can build a new channel type that will display in the “Add a Channel” menu, along with the other channels that come out of the box with Front. Teams can then send and receive messages over that channel with all the collaboration, automation, and integration Front offers. 

**Why is a channel useful?**

The user experience in Front is all about team collaboration, automation, and streamlining workflows through context. Creating a channel in Front means this new communication stream will be empowered by Front with comments, assignments, rules, synchronized contacts, and plugins. 

Take this example below, a user connected their Drift account and is immediately able to send and receive Drift messages without leaving Front as well as assign that conversation to a teammate or look up this contact in Salesforce. 

![Channel Example](channel-example.gif)

## Overview
There are two main functions your channel integration needs to be able to handle:

1\. Creating a new channel of your channel type. This is where our server tells your server that someone just added another channel of your channel type to their inbox. That is, they've created a new instance of your channel type. We send you this notification including the channel id we've assigned it. You respond to tell us what webhook url we should use to send messages over for this channel.

![Channel Auth Diagram](channel-auth-diagram.png)

2\. Sending and receiving messages. This is the communication that happens with each inbound and outbound message between the two systems. See our [API Reference](https://dev.frontapp.com/#receive-message) for Front's endpoint definitions.

![Channel Messaging Diagram](channel-messaging-diagram.png)

What does this mean for you? As the diagrams above illustrate, Front will send your system 2 types of payload (with an optional 3rd). You will need to build an endpoint for Front to hit which will handle these requests.

| Requests     | Description                        | Payload                            |
|--------------|------------------------------------|------------------------------------|
| `New Channel Authorization`<br> `POST https://webhook.company.com/[unique_webhook]`     | This endpoint will be hit when a user creates a new channel of your channel type.    | Authentication payload |
| `Message Receive` <br> `POST https://webhook.company.com/[unique_webhook]`     | This endpoint will be hit when a message is sent on your channel from Front. | [Message Payload](https://dev.frontapp.com/#messages) |
| `Channel Delete` <br> `DELETE https://webhook.company.com/[unique_webhook]`<br>[optional to implement]   | This endpoint will be hit when a user deletes a channel of your channel type. All functionality is complete in Front without you implementing this, but it is optional in case you want to keep your channel's data in sync.         | None. Just a delete request. 

##Security
Front will sign the messages sent to your webhook server to guarantee that the request originated from Front. It is imperative you validate the message signature before accepting it into your system.

The requests made to your webhook server will include 2 headers: `X-Front-Signature` and `X-Front-Request-Timestamp`. First, check that the timestamp says the request was made recently, to prevent replay attacks. We recommend 5 minutes as the maximum time before rejecting a message. 

1. Retrieve the `X-Front-Request-Timestamp` header on the HTTP request, and the body of the request.
2. Concatenate the timestamp and the JSON stringified body of the request to form a string. Use a colon as the delimiter between the two elements.
3. Using HMAC SHA256, hash the above string, using your Channel Type Secret Key as the key.

This should match the `X-Front-Signature` header. **If it does not, you should not trust this message**. 

Here is some [sample code in Typescript](https://gist.github.com/kschiu/e12a3e6b7842ee676ca3f134a93b5953) for how to validate a message and generate a JSON Web Token.

Finally, your system needs to respond to Front within 7 seconds. After 7 seconds, Front will timeout and return an error to the user, regardless of any response received after the 7 second timeout.

## Getting Started
In building a channel, you must first define the new channel type. When you’re ready, submit [this form](https://airtable.com/shrNsQye44FDJGbDE) and our team at Front will set that new channel type up for you.

To first get your feet wet, we have a sample channel built for you. You can find a deeper walkthrough [here](/channel-sample.html), or work through the following high level steps. This will create a sample channel for your team at Front to see what having a new channel type is like. 

1\. Fill out [the form](https://airtable.com/shrNsQye44FDJGbDE) for your sample channel. Because it's for a sample channel, your answers don't need to be too in-depth.

2\. We will reply with your Channel Secret and Channel ID for the sample channel. We will have a Postman mock server running to handle your requests.

3\. Click the link below to get the Postman collection containing the queries you can make by hand to mock the system you’ll be building.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1b51c718c7eb4c175eed)

4\. Go to your settings and add a new inbox. Select Sample Channel to create a new channel of the type Sample Channel. If you don’t see Sample Channel, the registration email process hasn’t been completed yet.

5\. Play with the sample channel either from Front directly or from the Postman collection!

6\. This channel type is visible to your whole team, so let us know when you are done playing with it. We can remove it for you.

##FAQ
**How does Front communicate which user sent the message to my system?**

 - The only information provided is the user’s contact in Front. Our recommendation is to either 1) define a mapping from Front contact to user in your system or 2) match the user’s Front contact to that in your system. If no match is present, a default should be assumed. 

**I’ve built a great channel many customers of Front would want. How do I make it usable by all Front customers? How do I get it into the app directory?**

 - Exciting! Contact us through this form and we’ll work with you to offer this as a channel for all Front customers. 






