# File upload

Even though all the API is designed to work with JSON, some endpoints supports file upload:

* [Sending a new message](#send-new-message)
* [Replying to a conversation](#send-reply)
* [Receiving a custom message](#receive-custom-message)
* [Importing a message](#import-message)
* [Create a contact](#create-contact)
* [Update a contact](#update-contact)

## Send multipart request

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

When you want to send files through the API, your request needs to be sent using the `Content-Type` HTTP header set to `multipart/form-data`.

The JSON data you would normally send in the request body needs to be split in multiple form fields (one for each property) named after the property key. If the property is an array, the name should include the index of the data (ie: `{"to": [email1@example.com, email1@example.com]}` would be split in two fields named `to[0]`, `to[1]`).

<aside class="info">Restriction on files (type and size) depends on the endpoint. If your request doesn't comply to those limitations, the response will contain an error describing the issue.</aside>
