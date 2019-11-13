---
title: Front Chat API Reference

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

search: true
---

# Introduction

To start using Front Chat, please read our [chat documentation](https://community.frontapp.com/t/18kwzy/using-front-chat).

Once the chat is installed on your website, the `FrontChat` JavaScript object will become available. This object responds to a few methods that allow you to manipulate the chat window.

## FrontChat('init', options)

```javascript
  FrontChat('init', {
    useDefaultLauncher: false // optional
  });
```

By default, the chat launcher will become visible immediately after the page loads. This is not always desirable if you want to use an alternative button or delay when the chat becomes available. If you don't call the `init` method, `useDefaultLauncher` will be true by default.

Note: You can only call `init` once.

### Init and identity

```javascript
  FrontChat('init', {
    useDefaultLauncher: false,
    email: 'leela@planet-express.com',
    userHash: '<generated using the verification secret>'
  });
```

You can optionally pass the identity of the user in the `init` call (see `FrontChat('identity', …)` below). This is equivalent to an `init` call followed by an `identity` call.

## FrontChat('shutdown')

```javascript
  FrontChat('shutdown');
```

You can use `shutdown` to remove the chat from your page after starting it. The chat will disappear from the page until `init` is called again (or the page is reloaded).

## FrontChat('show')

```javascript
  FrontChat('show');
```

This will open the main FrontChat messenger panel.

## FrontChat('hide')

```javascript
  FrontChat('hide');
```

This will close the main FrontChat messenger panel. If `useDefaultLauncher` was set to false, the launcher will not appear.

## FrontChat('onUnreadChange', handler)

```javascript
  const unbind = FrontChat('onUnreadChange', handler);
```

This method allows you to register a function (the `handler`) that will be called when the current number of unread messages changes.
The `handler` is expected to be a function that will receive as first parameter an object like `{unread_count: 1}`. The handler will always be called immediately to pass an initial value.

It will return an `unbind` function that you can call to unregister the handler.

## FrontChat('identity', options)

```javascript
  FrontChat('identity', {
    email: 'leela@planet-express.com',
    userHash: '<generated using the verification secret>'
  });
```

If the visitor of your website or app is signed in, you can forward their identity to the Front Chat. It will appear as the conversation recipient in Front. You will need to pass a secure `userHash`.

### Identity verification

The mandatory user hash guarantees that users are who they claim to be. Otherwise, a user could manually run JavaScript commands to impersonate another one and view their conversations.

You can configure Front Chat to accept both anonymous and identified users. If a user has submitted their email address, "[Unverified]" will appear in the conversation subject. You can also completely disable anonymous users to avoid any confusion.

The value of the `email` field should be a valid email address. This value is used in Front to associate a new or existing contact with a conversation they start via Chat:

![Plugin authentication](chat-conversation.png)

### Computing the user hash

```javascript
// computing a user hash based on HMAC-SHA256
// node.js example
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', verificationSecret);
const userHash = hmac.update(userEmail).digest('hex');
```

Front Chat uses a server-side generated [HMAC (hash based message authentication code)](https://en.wikipedia.org/wiki/HMAC) with SHA-256. The identity verification will fail unless a user hash is provided.

To compute a user hash, you will first need to retrieve your identity secret, which is available in your Front settings. Go to Settings > Inboxes > (Your chat inbox) > (Your chat channel) and expand the section "Verify logged-in user identity":

![Plugin authentication](chat-verified-settings.png)

Important: the verification secret must remain private and must not appear in your frontend source code. The user hash must be computed in your backend, without disclosing the secret.
