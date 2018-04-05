---
title: Front Chat API Reference

toc_footers:
  - <a href='/'>API reference</a>
  - <a href='plugin.html'>Plugin API documentation</a>
  - <a href='changelog.html'>Changelog</a>
  - <a href='mailto:api@frontapp.com'>Contact us</a>

search: true
---

# Introduction

To start using Front Chat, please read our [chat documentation](https://community.frontapp.com/t/18kwzy/using-front-chat).

Once the chat is installed on your website, the `FrontChat` JavaScript object will become available. This object responds to a few methods that allow you to manipulate the chat window.

## FrontChat('init', options)

By default, the chat launcher will become visible immediately after the page loads. This is not always desirable if you want to use an alternative button or delay when the chat becomes available.

```javascript
  FrontChat('init', {
    useDefaultLauncher: false
  });
```

If you don't call the `init` method, `useDefaultLauncher` will be true by default.

Note: You can only call `init` once.

## FrontChat('shutdown')

You can use `shutdown` to remove the chat from your page after starting it. The chat will disappear from the page until `init` is called again (or the page is reloaded).

```javascript
  FrontChat('shutdown');
```

## FrontChat('open')

This will open the main FrontChat messenger panel.

```javascript
  FrontChat('open');
```

## FrontChat('close')

This will close the main FrontChat messenger panel. If `useDefaultLauncher` was set to false, the launcher will not appear.

```javascript
  FrontChat('close');
```

## FrontChat('onUnreadChange', handler)

This method allows you to register a function (the `handler`) that will be called when the current number of unread messages changes.
The `handler` is expected to be a function that will receive as first parameter an object like `{unread_count: 1}`. The handler will always be called immediately to pass an initial value.

It will return an `unbind` function that you can call to unregister the handler.

```javascript
  const unbind = FrontChat('onUnreadChange', handler);
```
