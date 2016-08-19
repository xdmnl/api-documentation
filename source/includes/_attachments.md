# Attachments

> | Name              | Type              | Description                                                                           |
> |-------------------|-------------------|---------------------------------------------------------------------------------------|
> | filename          | string            | Name of the attached file                                                             |
> | url               | string            | URL to download the attached file                                                     |
> | content_type      | string            | Content type of the attached file                                                     |
> | size              | number            | Size (in byte) of the attached file                                                   |
> | metadata          | object            |                                                                                       |
> | metadata.is_inline| boolean           | Whether or not the attachment is part of the message body                             |
> | metadata.cid      | string (optional) | Unique identifier used to link an attachment to where it is used in the message body  |

When a message has attached files, the `attachments` array will contain the information needed to retrieve those files.

If the attachment is inline (ie: an image in the body of an email), the property `metadata.cid` will help you retrieve the HTML tag corresponding to the attachmens in the body of the message.

## Download attachment

In the attachment object, the property `url` can be used to download the attached file.

Just like any other API endpoint, the download request should be [authenticated](#authentication).  
The response however will not be a JSON object but the content of the file with the correct headers so that you can save it. 

<aside class="info">Downloading attachments will count against your API rate limiting.</aside>

## Send attachments

```http
POST /channels/{channel_id}/messages HTTP/1.1
Host: api2.frontapp.com
Accept: application/json
Authorization: Bearer <token>
Content-Type: multipart/form-data; boundary=----RandomBoundaryString

------RandomBoundaryString
Content-Disposition: form-data; name="author_id"

alt:email:leela@planet-exress.com
------RandomBoundaryString
Content-Disposition: form-data; name="to[0]"

calculon@momsbot.com
------RandomBoundaryString
Content-Disposition: form-data; name="subject"

Good news everyone!
------RandomBoundaryString
Content-Disposition: form-data; name="body"

Why is Zoidberg the only one still alone?
------RandomBoundaryString
Content-Disposition: form-data; name="attachments[0]"; filename="logo.jpg"
Content-Type: image/jpeg

<binary data>
------RandomBoundaryString
Content-Disposition: form-data; name="options[archive]"

true
------RandomBoundaryString--
```

When you want to send attachments through the API, your request needs to be sent using the `Content-Type` header set to `multipart/form-data`.

The JSON data you would normally send in the request body needs to be split in multiple form field (one for each property).  
Each attachments need to be sent in a form field named `attachments[<index>]` (replace `<index>` by the index of the attachment) containing the corresponding filename, content type and binary data. 

The endpoints supporting attachments are:

* [Sending a new message](#send-new-message)
* [Replying to a conversation](#send-reply)
* [Receiving a custom message](#receive-custom-message)
* [Importing a message](#import-message)

<aside class="info">Restriction on attachments (file type and size) depends on the channel handling the message. If your request doesn't comply to those limitations, the response will contain an error describing the issue.</aside>
