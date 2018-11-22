# OAuth

OAuth 2.0 is a protocol that lets external applications request authorization to API access in a secure way.

Each OAuth application is assigned a unique Client ID and Client Secret which will be used in the authorization flow. The Client Secret should **never** be shared.  
If you want to create an OAuth application, please contact us on <a href="mailto:api@frontapp.com">api@frontapp.com</a> to get your credentials.

Front's OAuth implementation only supports the [authorization code grant type](https://tools.ietf.org/html/rfc6749#section-4.1) which define a flow to get a temporary authorization token which can then be exchanged to get an API and refresh token.

An access token will expire an hour after it has been issued. Upon expiration, a new access token can be requested by using the refresh token.

**Effective June 1, 2019 we will enforce `access_token` expiration**

## 1. Request authorization

```http
GET /oauth/authorize?response_type=code&client_id={clientId}&redirect_uri={redirectURI} HTTP/1.1
Host: app.frontapp.com
```

> You should replace "`{clientID}`" and "`{redirectURI}`" by the values of your OAuth application.

To request Front API access, you need to redirect the user to `https://app.frontapp.com/oauth/authorize`.

### Parameters

| Name         | Type              | Description                                                                    |
|--------------|-------------------|--------------------------------------------------------------------------------|
| response_type| string            | Must be set to `code`.                                                         |
| client_id    | string            | Client ID of your OAuth application.                                           |
| redirect_uri | string            | The URL in your application where users will be redirected after authorization.|
| state        | string (optional) | Used to protect against cross-site request forgery attacks.                    |

## 2. Get an authorization code

```http
GET /example_path?code={authorizationCode}&state={state} HTTP/1.1
Host: yoursite.example.com
```

> The HTTP request will depend on the param redirect_uri specified in the authorization request.

If the user accepts the authorization request, Front will redirect him back to the redirect URL specified in the first step.  
The request will contain a `code` parameter as well as the `state` you provided in the first step.

If the states don't match, you should consider the request as unsecure and the process should be aborted.

### Parameters

| Name  | Type              | Description                                               |
|-------|-------------------|-----------------------------------------------------------|
| code  | string            | Temporary authorization code to exchange for an API token.|
| state | string (optional) | State provided in the authorization request.              |

## 3. Exchange authorization code

```http
POST /oauth/token HTTP/1.1
Host: app.frontapp.com
Authorization: Basic <your_basic_credentials>
```

> Response **200**

```json
{
    "access_token": "",
    "refresh_token": "",
    "token_type": "Bearer"
}
```

Once your application receive the temporary authorization code, you need to exchanged it for an API token by sending a POST HTTP request to `https://app.frontapp.com/oauth/token`.

Your request **MUST** be authentified with [Basic authentication](https://tools.ietf.org/html/rfc2617#section-2) using your OAuth application Client ID and Client Secret.

Front OAuth server response will include the API token in the `access_token` param.

Please store the `refresh_token` securely, as it is required to obtain a new `access_token`. A refresh token will expire six months after it has been issued. A `refresh_token` is automatically refreshed when it is about to expire, when requesting a new `access_token` in the next step.

**Effective June 1, 2019 we will enforce `access_token` expiration**

### Parameters

| Name         | Type              | Description                                                                        |
|--------------|-------------------|------------------------------------------------------------------------------------|
| code         | string            | The temporary authorization code received in step 2.                               |
| redirect_uri | string            | The URL in your application where users will be redirected after authorization.    |
| grant_type   | string            | The grant type used to get the authorization code. Needs to be `authorization_code`|

## 4. Exchange Refresh Token for new tokens

```http
POST /oauth/token HTTP/1.1
Host: app.frontapp.com
Authorization: Basic <your_basic_credentials>
```

> Response **200**

```json
{
    "access_token": "",
    "refresh_token": "",
    "token_type": "Bearer"
}
```

When the `access_token` from Step 3 has expired, it will need be be refreshed to continue usage. Similar to Step 3, your request **MUST** be authentified with [Basic authentication](https://tools.ietf.org/html/rfc2617#section-2) using your OAuth application Client ID and Client Secret.

To obtain a new `access_token`, send a POST request to `/oauth/token` with the `refresh_token` and `grant_type` set to `refresh_token`.

Front OAuth server response will include new API token in the `access_token` param and the same `refresh_token` in the `refresh_token` param.

When a `refresh_token` is about to expire, it will automatically be refreshed. Please securely store this refresh token for subquent calls after Step 3, as this `refresh_token` will be **automatically** refreshed when necessary. Otherwise, the `refresh_token` will expire and the OAuth flow will start from Step 1 again.

### Parameters

| Name          | Type              | Description                                                                        |
|---------------|-------------------|------------------------------------------------------------------------------------|
| refresh_token | string            | The refresh token recieved in step 3.                                              |
| grant_type    | string            | The grant type used to get the authorization code. Needs to be `refresh_token`     |