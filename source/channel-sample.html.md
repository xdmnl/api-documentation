---
title: Front Channel Sample

toc_footers:
  - <a href='https://frontapp.com/signup?affiliate=developers'>Create a developer account</a>
  - <a href='plugin.html'>Plugin API documentation</a>
  - <a href='chat.html'>Chat widget API documentation</a>
  - <a href='changelog.html'>Changelog</a>
  - <a href='mailto:api@frontapp.com'>Contact us</a>

includes:

search: true
---

# Introduction

To help get you started with the Channels API, this walkthrough should act as a valuable sample to kick off your development. If you have any additional questions, please reach out to us at api@frontapp.com!

# Set Up

1\. Fill out [the form](https://airtable.com/shrNsQye44FDJGbDE) for your sample channel. Because it's for a sample channel, your answers don't need to be too in-depth. Here are our suggestions for the sample channel. 

Field | Your Answer
------|------------
Company Name | Your company's name.
Contact Name | Your name.
Contact Email | Your email.
Name of channel | Sample Channel.
Webhook URL | Our mock server we've set up for you: <br>https://60148d1b-b353-4438-9b63-7cd8b0f9f21c.mock.pstmn.io
Description of Channel | This is a sample channel.
Compose | Check this.
Reply | Check this.
Channel Contact Type | Choose whichever.
Attachments | Check this.
Attachment Types | Choose whichever. 
Icon for your channel | Leave empty. It's an optional field.
Auth Method | API Token. For the sample, you can fake a token with any string. The token won't be verified in the sample channel. 
OAuth fields | Leave blank


2\. Front will create a new Channel Type for you. A Channel Type is an entity that represents the configuration you sent to Front in the previous step. When users create a new Channel, they are creating an **instance** of your Channel Type.

3\. Once you have received your Channel Type’s API key and Channel Type ID, keep them safe! You’ll need them to make requests to Front’s API.

4\. In the Postman collection, input your Channel Type API Key (`secretKey`) and Channel Type ID (`channelTypeId`) as environment variables. 

 - The `channelId` will be added later, when we create a channel (an instance of your Channel Type).

![Environment Variables](env-vars.png)

5\. In Front, add your new channel. (Settings > Inboxes > Add a team inbox)

 - For the API Key, feel free to put anything as this is just a sample channel.
 - In production, you will be responsible for:
  - Validating the request is from Front
  - Validating the API Token belongs to your system.

6\. When the new channel is added, Front sends a request to the callback URL of your Channel Type, with the authentication payload shown in the Postman collection.

 - In the channel settings page, get the channel instance’s ID (`cha_XYZ`). Add this channel ID to your Postman environment (`channelId`)

 ![Channel Settings](channel-settings.png)

 - In production, you should maintain a mapping of which of your users are using which channel ID (do this by matching your system’s API token to a Front’s Channel ID)
Look at the response of the mock server. Your callback server should return the same payload.



# Sending Messages

1\. Use the `inbound_messages` endpoint to send a message to Front. Observe that the endpoint generated depends on the channel ID.
![Sending Messages 1](sending-messages-1.png)

- In the Postman collection, observe the payload. See the Pre-request script to understand how we generate the API Key.
- Note the  `external_conversation_id`. Front threads messages on the `external_conversation_id`. Front will threadmessages with the same external conversation ID.
- Observe the response from Front. Front returns a `message_uid`.

2\. Respond to the message in Front
 - The request body sent to your callback server will match the example request body in the Postman collection.

![Sending Messages 2](sending-messages-2.png)

- Front requires your callback server to respond with a `type`, `external_id` `external_conversation_id`. These IDs should reflect the message created in your system.

![Sending Messages 3](sending-messages-3.png)

3\. Import a message using `outbound_message` endpoint

![Sending Messages 4](sending-messages-4.png)

- Observe in Front that it is “sent” by the channel. Since we’re using the same `external_conversation_id`, this message threads with the message in Step 1.

![Sending Messages 5](sending-messages-5.png)

- Represents a message that was sent in your application that should be synced to Front.


# General Notes
- Notice the `webhook_url` is optional, but Front stringly recommends generating a unique webhook URL for each channel. 
- Front threads messages by the `external_conversation_id`
- The payloads returns by your callbacks server should have the same keys as the Postman collection.





