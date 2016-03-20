# Export format

Front can generate exports of your data. These exports can either be obtained from the Analytics, or with the [Create Export](#create-export) endpoint in the API.

Exports are formatted as a [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files.
The export will contain 1 line per message received in the given time period. **If a message appears in multiple inboxes, it will appear once for each inbox**.

Below is table of the field names & descriptions that will be included in the export.

| Name              | Desctiption                                                                                                                                       |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Message ID        | Internal Front ID of the message                                                                                                                  |
| Conversation ID   | Internal Front ID of the entire conversation                                                                                                      |
| Direction         | Either **Inbound** or **Outbound**                                                                                                                |
| Status            | Status of the conversation: **unassigned**, **assigned**, **archived**, or **trashed**.                                                           |
| Inbox             | Name of the inbox where the message was initially sent. If the message appeared in multiple inboxes, it will appear multiple times.               |
| Message Date      | "YYYY-MM-DD HH:mm:ss" format, in the requested timezone.                                                                                          |
| Response time     | Duration (in seconds) between an inbound message and the next outbound message in the same conversation.                                          |
| Handle time       | Total duration (in seconds) that a contact was kept waiting for a reply from the team during an assignment. Metric is calculated per assignment.  |
| Assignee          | Username of the assignee, if any                                                                                                                  |
| Contact name      | Contact's first & last name                                                                                                                       |
| Contact handle    | Contact's email address, twitter handle, or phone number - depending on the source of the message.                                                |
| Extract           | Sample of the message                                                                                                                             |
| Tags              | Tags attached to the conversation.                                                                                                                |

## Timezone

All dates in the the export are presented in the same timezone. If the export was requested from the app (by clicking on "Request Export"), it will be in the timezone of the user. If the export is requested with the API, the timezone can be manually defined (or defaults to UTC).

## Response time

Response time is always calculated from the point of view of a customer: how did it take for your company to reply?

Most of the time, the response time is the different between an inbound message from a customer and the next reply from your team.

If your team replies several times to the same message, the response time is the time since the previous reply.

**Only message that are responses have a response time.**

## Assignments and Handle time

Most of the time, only one discussion happens within a conversation. That is: a customer will open a conversation to ask a specific thing and if they want to ask another one, they will open a new discussion.

However, this is not always the case:

* A customer might decide to reply to an existing conversation even if they are asking for something new.
* Several teammates might write in one conversation.

Because of this, Front will compute a **handle time** to the last message if:

* the conversation is reassigned to a different teammate.
* the conversation is inactive for **4 days**.

