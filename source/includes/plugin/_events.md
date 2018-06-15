# Getting events from Front

```javascript
Front.on('conversation', function (data) {
    // triggered when a conversation is loaded
});

Front.on('no_conversation', function () {
    // triggered when no conversation is selected
});

Front.on('panel_visible', function (visible) {
    // triggered when your plugin becomes visible or invisible
    // you can also test Front.visible
});
```

Every time the current conversation changes (for example, when you click a new conversation in the list), an event is sent to our library.

The data object sent to the callbacks of the event contains 4 fields:

* `contact` The conversation's contact
* `conversation` The conversation object
* `message` The topmost ( most recent ) message object
* `otherMessages` an array of messages

> The **contact** object will look like this :

```json
{
  "id": "crd_55c8c149",
  "handle": "john.doe@frontapp.com",
  "initials": "J",
  "display_name": "John Doe",
  "description": "",
  "avatar": null,
  "color": "hsl(47,60%,70%)",
  "source": "email",
  "role": "reply-to",
  "num_notes": 0
}
```

> The **conversation** object will look like below, for clarity sake some objects have been removed:

```json
{
  "id": "cnv_55c8c149",
  "link": "https://app.frontapp.com/open/cnv_55c8c149",
  "message_type": "email",
  "status": "unassigned",
  "replied": false,
  "reacted": false,
  "num_messages": 1,
  "contact": {}, // Similar to the contact JSON above
  "assignee": "Teammate-alias",
  "inboxes": ["support"],
  "followers": ["jane"],
  "tags": [],
  "seen_by": ["jane"],
  "subject": "test again",
  "summary": "Just testing some stuff",
  "has_draft": false
}
```

> The **message** object will look like below, message found in otherMessages will not have body field as they are only loaded when expanded.

```json
{
  "id": "msg_55c8c149",
  "ext_id": "086b97289e93b01b@frontapp.com",
  "type": "email",
  "status": "imported",
  "date": 1422909585000,
  "inbound": false,
  "blurb": "This is a test",
  "recipient_opened_date": null,
  "subject": "More testing",
  "body": "This is a test", // body will only be loaded in the first message
  "from": {
    // Similar to the contact JSON above
  },
  "recipients": [
    {
      // Similar to the contact JSON above
    }
  ],
  "attachments": [{
      "id": "fil_55c8c149",
      "uid": "1234567890",
      "filename": "chart.jpg",
      "content_type": "image/jpeg",
      "size": "391970"
  }]
}
```
