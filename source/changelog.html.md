---
title: Front API Changelog

toc_footers:
  - <a href='/'>API reference</a>
  - <a href='plugin.html'>Plugin API documentation</a>
  - <a href='mailto:api@frontapp.com'>Contact us</a>

---

# Front API change log

The change log is the history of updates released. Front is committed in not breaking backwards compatibility between releases.

## 2018-06-15 - Sending messages

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
