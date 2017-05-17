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
