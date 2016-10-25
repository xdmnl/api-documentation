# Webhooks

A webhook allows you to be automatically notified when something happens in Front without having to constantly poll the API.

## Setup

For more information about how to enable and setup a webhook, please refer to our [help center](https://community.frontapp.com/t/x1693s/how-to-enable-and-use-the-webhooks-integration).  

## Checking data integrity

```javascript
const crypto = require('crypto');
const apiSecret = 'YOUR_API_SECRET';

function validateFrontSignature(data, signature) {
    var hash = crypto.createHmac('sha1', apiSecret)
                     .update(JSON.stringify(data))
                     .digest('base64');

   return hash === signature;
}
```

For security reason and since the webhook URL is open to the public, you should not trust any incoming requests that it receives.
Each requests we send to your webhook URLs will contain an `X-Front-Signature` header generated using the request body and your API Secret.

To validate that the data came from Front, you need to calculate the base64 encoded HMAC hash of the request body using sha1 algorithm and your API secret as the key. If the value matches the signature in the header, you can be sure the request was sent from Front.

**You can get your API secret by going to Settings > API & Integrations > API.**
