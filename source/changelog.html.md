---
title: Front API Changelog

toc_footers:
  - <a href='https://frontapp.com/signup?affiliate=developers'>Create a developer account</a>
  - <a href='/'>API reference</a>
  - <a href='channels-api.html'>Channels API</a>
  - <a href='channel-sample.html'>Channel Sample</a>
  - <a href='chat.html'>Chat widget API documentation</a>
  - <a href='plugin.html'>Plugin API documentation</a>
  - <a href='https://github.com/frontapp/frontapp.github.io/'>Plugin Sample</a>
  - <a href='changelog.html'>Changelog</a>
  - <a href='mailto:api@frontapp.com'>Contact us</a>

---

# Front API changelog

The changelog is the history of updates released. Front is committed in not breaking backwards compatibility between releases.

## 2020-01-23 - Documentation Updates

### Restored documentation for
* Creating a custom channel through `POST /channels` with the body `{type: 'custom'}`.
* Updating a custom channel through `PATCH /channels/{channel_id}`.
* Receive a custom message through `POST /channels/{channel_id}/incoming_messages`.

## 2020-01-10 - Send Message Updates

### Deprecated
* Deprecate `tag` from `POST /channels/{channel_id}/messages` and `POST /conversations/{conversation_id}/messages`. Please use `tag_ids` instead.

## 2019-11-12 - Channel API

### Added
* Description of our Channel API.
* Receive messages in Front through `POST /channels/{channel_id}/inbound_messages` & `POST /channels/{channel_id}/outbound_messages`

### Deprecated
* Creating a custom channel through `POST /channels` with the body `{type: 'custom'}`.
* Updating a custom channel through `PATCH /channels/{channel_id}`.
* Receive a custom message through `POST /channels/{channel_id}/incoming_messages`.

## 2019-11-01 - Drafts API

### Added
* `GET /conversations/{conversation_id}/drafts` - List drafts within a conversation
* `POST /channels/{channel_id}/drafts` - Create a draft as a new conversation
* `POST /conversations/{conversation_id}/drafts/{draft_id}` - Create a draft as a reply to a conversation
* `PATCH /drafts/{draft_id}` - Update a draft
* `DELETE /drafts/{draft_id}` - Delete a draft

## 2019-10-29 - Create SMTP channel.

### Changed
* Added the ability to create an unvalidated SMTP channel via `POST /inboxes/{inbox_id}/channels`

## 2019-09-17 - Resource IDs in custom plugin API.

### Changed
* Added the conversation fields `assignee_id`, `follower_ids`, `inbox_ids`, `tag_ids` containing the IDs of related resources.

### Deprecated
* Deprecate conversation fields `inboxes`, `followers`, `assignee` and `tags` containing the alias of related resources. Use equivalent `_id` fields instead.

## 2019-09-09 - Export endpoints

### Fixed
* Generating export for a specific tag.

## 2019-08-28 - Twitter API terms & condition compliance

### Changed
* [BREAKING] Redact Twitter content from the payload of messages of type `tweet` or `tweet_dm`. This includes (`blurb`, `text`, `body` and each recipients' `handle`).

## 2019-07-03 - Shifts Endpoints

### Added
* Add endpoints to list, create and update shifts for a specific team

## 2019-06-17 - Teammate Provisioning Endpoints

### Changed
* Added new scope, provisioning, which allows users to add/remove teammates from inboxes and teams through the API.

### Added
* `POST /inboxes/:inbox_id/teammates` route to add teammates to an inbox.
* `DELETE /inboxes/:inbox_id/teammates` route to remove teammates from an inbox.
* `POST /teams/:team_id/teammates` route to add teammates to a team.
* `DELETE /teams/:team_id/teammates` route to remove teammates from an inbox.

## 2019-06-03 - Rate Limiter Updates

### Changed
* Additional rate limiting on resource intensive routes to better protect Front's infrastructure. Please see 'Rate Limiting' for more details.

## 2019-05-20 - Conversation endpoints updates

### Added
* `PUT /conversations/:conversation_id/assignee` route to update the assignee of the provided conversation.

## 2019-05-10 - Tag & Conversation endpoints updates

### Added
* `GET /responses` route to list all canned answers
* `GET /responses/:response_id` route to fetch a specific canned answer
* `GET /tags/:tag_id/children` route to list all children of the provided tag.
* `POST /tags/:tag_id/children` route to create a child for the provided tag.

### Changed
* `PATCH /tags/:tag_id` route to update the parent tag.
* Added fields `updated_at`, `created_at` to the Tag response body
* Added field `children` to the Tag `_links`

### Deprecated
* Deprecate `tag` from `PATCH /conversations/:conversation_id`. Please use `tag_ids` instead.

## 2019-04-05 - Channel & tag endpoints updates

### Added
* `PATCH /tags/:tag_id` route to update the name and highlight color of Tags.
* Tag representation now includes `highlight` to show if that Tag is highlighted.

### Changed
* `POST /channels/:channel_id` and `PATCH /channels/:channel_id` supports the optional `name` field to control the name of a channel from the API.

### Fixed
* Documentation wording / typos.

## 2019-01-16 - Teammate endpoint updates

### Added
* Teammate representation now includes `is_blocked` to know if an account has been blocked.

### Fixed
* Mentionning a teammate using the endpoint to send a comment now properly give them access to the conversation.

## 2018-11-29 - Endpoint deprecation

### Deprecated
* Deprecate `GET /teammates/:teammate_id/inboxes` endpoint to list the inboxes a teammate has access to.

## 2018-10-25 - Validation of tags limited to specific inboxes

### Added
* Endpoints to send a message (`POST /channels/:channel_id/messages` and `POST /conversations/:conversation_id/messages`) are now validating that the tags can be applied depending on the inbox(es) of the message.

## 2018-07-23 - Sending messages

### Added
* Endpoints to send a message (`POST /channels/:channel_id/messages` and `POST /conversations/:conversation_id/messages`) are now replying with the draft that will be sent.

### Deprecated
* Deprecate `message_uid` from the response of sent message.

## 2018-06-15 - Message status

### Added
* Add the boolean `is_draft` in the message representation to make the distinction between messages still in draft mode and messages that have been sent or received.
* Add the string `error_type` in the message representation to expose the type of error that caused a draft to fail to send.

## 2018-04-18 - Asynchronous message creation reference

### Added
* Add `message_uid` in the response of asynchronous message creation endpoints (replace `conversation_reference`).

### Deprecated
* Deprecate `conversation_reference` from the response of asynchronous message creation endpoints (replaced by `message_uid`).

## 2018-03-30 - Individual resources

### Added
* Add endpoints to list and create contact in a specific team or for a specific teammate
* Add endpoints to list and create contact group in a specific team or for a specific teammate
* Add endpoints to list channels in a specific team or for a specific teammate
* Add endpoints to list and create inbox in a specific team or for a specific teammate
* Add endpoints to list and create tag in a specific team or for a specific teammate
* Add endpoints to list rules in a specific team or for a specific teammate
* Add endpoint to create an export for a specific team
* Add endpoint to generate analytics for a specific team

### Deprecated
* Deprecate `teammate_id` field when generating an export
* Deprecate endpoint to get the inbox of a channel
* Deprecate `team_id` field for creation endpoints
* Deprecate `address`, `send_as` and `type` inbox fields

### Changed
* Updated Changelog format to follow [https://keepachangelog.com](https://keepachangelog.com)
* Add the ability to access individual resources
* Add `is_private` boolean field to differentiate between individual and shared resources
* Add `owner` related link to identify the owner (either a team or a teammate) of a resource

## 2018-02-18 - Teams

### Added
* Add endpoint to list the teams
* Add endpoint to fetch a team
* Add endpoint to have details about the token
* Update endpoints to create resources in a specific team using `team_id` field

### Fixed
* Fix enforcing access restriction to fetching private resources

## 2018-02-16 - Contact handle deletion

### Added
* Add `force` field to force the deletion of a contact handle

### Fixed
* Fix deletion of contact handles

## 2018-02-08 - Contact list

### Added
* Filter contacts list by date of last update
* Sort contacts list by date of creation or last update
* Add `updated_at` field to contact representation object

## 2018-01-06 - Contact IDs

### Changed
* Exposed contact IDs have changed.
Old IDs are still available but not exposed anymore. If you store IDs on your side and want to update your data, you can fetch the contact using the old ID and use its new ID.

## 2016-08-19 - Attachments

### Added
* Attachments now include metadata (`is_inline` & `cid`)
* Support of sending messages with attachments with a `multipart/form-data` request

## 2016-03-07 - API v2

### Added
* Release of the API v2

### Deprecated
* Deprecation of the API v1

# Plugin SDK

## 10/05/2016 - Drafts

### Added
* Support the copy of attachments when composing a draft (new, reply or forward)
* Add a method to fetch the draft of the current conversation
* Add a method to update a draft recipients and/or attachments
* Add the `attachments` array to the message representation object
* Add the `has_draft` boolean to the conversation representation object
