---
title: Front API Changelog

toc_footers:
  - <a href='/'>API reference</a>
  - <a href='plugin.html'>Plugin API documentation</a>
  - <a href='mailto:api@frontapp.com'>Contact us</a>

---

# API

## 02/18/2018 - Teams
* [API] Add /teams endpoints
* [API] Add /me endpoint
* [API] Update endpoints to create resources in a specific team
* [API] Fix enforcing access restriction to private resources

## 02/16/2018 - Contact handle deletion
* [API] Fix deletion of contact handles
* [API] Add `force` field to contact handle deletion endpoint

## 02/08/2018 - Contact list
* [API] Add support to filter by date of last update
* [API] Add support to sort by date of creation or last update
* [API] Add `updated_at` field to contact representation object

## 01/06/2018 - Contact IDs
* [API] Exposed contact IDs have changed.  
Old IDs are still available but not exposed anymore. If you store IDs on your side and want to update your data, you can fetch the contact using the old ID and use its new ID.

## 10/05/2016 - Plugin draft

* [Plugin SDK] Support the copy of attachments when composing a draft (new, reply or forward)
* [Plugin SDK] Add a method to fetch the draft of the current conversation
* [Plugin SDK] Add a method to update a draft recipients and/or attachments
* [Plugin SDK] Add the `attachments` array to the message representation object
* [Plugin SDK] Add the `has_draft` boolean to the conversation representation object

## 08/19/2016 - Attachments

* [API] Add metadata (`is_inline` & `cid`) to attachments
* [API] Support of sending messages with attachments with a `multipart/form-data` request

## 03/07/2016 - API v2

* [API] Release of the API v2
* [API] Deprecation of the API v1
