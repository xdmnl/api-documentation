---
title: Front API migration guide

toc_footers:
  - <a href='/'>API reference</a>
  - <a href='mailto:api@frontapp.com'>Contact</a>

---

# Introduction

On March 7th, 2016, we released a new version of our API and deprecated the previous one.

The API v2 has been redesigned from the ground up to provide a cleaner and more consistent way to present data accross all its different endpoints.  
It also integrates all the new features in Front that were not supported by the previous version.

This document aims at helping developers to migrate from the first version to the new one. If you need help or have questions about it, please send us an email to [api@frontapp.com](mailto:api@frontapp.com).

# API endpoints

## What's new?

The new version of the API dropped HTTP Basic Authentication to use JSON Web token.  
We also updated the data structures to have a self-discoverable API. Every resources now contains its link as well as the link of related resources.

Even though the new version of the API bring a lot of breaking changes compared to the previous one, we designed it so that you can still do the same things.

## How to upgrade?

You can read the documentation on the [API reference](http://dev.frontapp.com).

# Custom inboxes

## What's new?

The new version of custom inboxes uses the API endpoint and data structures to send and receive messages.

## How to upgrade?

<aside class="notice">
<strong>Aircall</strong><br>
If your custom inbox is used by <a href="https://aircall.io/features/front-integration" target="_blank">Aircall's integration</a>, you don't need to do anything, we will handle that for you.
</aside>

> ![Upgrade custom inbox](migration-guide/custom_inbox.png)
> Upgrade a custom inbox from the settings

**Step 1:** Update the script sending the custom messages to use the [new data format](/#receive-a-custom-message).

**Step 2:** If you have one, update the script receiving the reply notification from Front to handle the [new data format](/#sending-messages).

**Step 3:** In the application, go to Settings > Inboxes > select the inbox > select the channel you want to upgrade and click on the switch to "Upgrade to the latest version"

# Webhooks

## What's new?

The new version of the webhooks uses the new data structure for [events](/#events) while anonymizing the data sent.

To ensure that your data can only be read by you, we now send only the type, ID and link of the resources of an event. You can then simply send an authenticated request to the provided link to fetch the details about an event.

We also now sign the webhooks so you can check the data integrity. 

## How to upgrade?

> ![Upgrade webhooks](migration-guide/webhooks.png)
> Upgrade webhooks from the settings

**Step 1:** Update the script receiving the events

**Step 2:** In the application, go to Settings > API & Integrations > Webhooks and click on the button "Upgrade now"
