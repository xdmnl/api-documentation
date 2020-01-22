
# Token Identity



## Get token identity
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/me'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/me"
  },
  "id": "cmp_55c8c149",
  "name": "Planet express"
}
```
Fetches the details of the API token

### HTTP Request

`GET https://api2.frontapp.com/me`
# Teams



## List teams
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/teams'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/teams"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/teams/tim_55c8c149"
      },
      "id": "tim_55c8c149",
      "name": "Delivery"
    }
  ]
}
```
List the teams in your company.

### HTTP Request

`GET https://api2.frontapp.com/teams`
## Get team
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/teams/${TEAM_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/teams/tim_55c8c149"
  },
  "id": "tim_55c8c149",
  "name": "Delivery",
  "inboxes": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/inboxes/inb_55c8c149",
        "related": {
          "teammates": "https://api2.frontapp.com/inboxes/inb_55c8c149/teammates",
          "conversations": "https://api2.frontapp.com/inboxes/inb_55c8c149/conversations",
          "channels": "https://api2.frontapp.com/inboxes/inb_55c8c149/channels",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "inb_55c8c149",
      "name": "Team",
      "is_private": false
    }
  ],
  "members": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
        "related": {
          "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
          "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
        }
      },
      "id": "tea_55c8c149",
      "email": "leela@planet-express.com",
      "username": "leela",
      "first_name": "Leela",
      "last_name": "Turanga",
      "is_admin": true,
      "is_available": true,
      "is_blocked": false
    }
  ]
}
```
Fetches the details of a team.

### HTTP Request

`GET https://api2.frontapp.com/teams/{team_id}`
## Add teammates
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"teammate_ids\": [
    \"tea_1\",
    \"tea_2\"
  ]
}" \
'https://api2.frontapp.com/teams/${TEAM_ID}/teammates'
```

```node

```

> Response **204**

Adds teammates to a team as a member.

This request requires the `provisioning` scope in the JSON Web Token.

### HTTP Request

`POST https://api2.frontapp.com/teams/{team_id}/teammates`
### Parameters


Name | Type | Description
-----|------|------------
team_id | string | Id of the team to add the teammate(s) to.

### Body


Name | Type | Description
-----|------|------------
teammate_ids | array | List of all the teammate ids to add to the team. 

## Remove teammates
```shell

curl --include \
     --request DELETE \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"teammate_ids\": [
    \"tea_1\",
    \"tea_2\"
  ]
}" \
'https://api2.frontapp.com/teams/${TEAM_ID}/teammates'
```

```node

```

> Response **204**

Removes teammates from a team.  Removing teammates will also remove them from inboxes owned by the team.  Admins cannot be cannot be removed from the team.

This request requires the `provisioning` scope in the JSON Web Token.

### HTTP Request

`DELETE https://api2.frontapp.com/teams/{team_id}/teammates`
### Parameters


Name | Type | Description
-----|------|------------
team_id | string | Id of the team to remove the teammate(s) from.

### Body


Name | Type | Description
-----|------|------------
teammate_ids | array | List of all the teammate ids to add to the team. 

# Teammates
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the teammate 
_links.related | object |  
_links.related.inboxes | string | URL of the teammate's inboxes 
_links.related.conversations | string | URL of the teammate's conversation 
id | string | Unique identifier of the teammate 
email | string | Email address of the teammate 
username | string | Username of the teammate (used for "@" mentions) 
first_name | string | First name of the teammate 
last_name | string | Last name of the teammate 
is_admin | boolean | Whether or not the teammate is an admin in your company 
is_available | boolean | Whether or not the teammate is available 
is_blocked | boolean | Whether or not the teammate account has been blocked 

A teammate is a Front user, a member of your company.

A teammate can be available or not (determined by the boolean `is_available`). When a conversation is assigned to an unavailable teammate, to avoid it to be hidden from the other teammates, it gets unassigned automatically.

<aside class="notice">
You can use the teammate email address as an alias for its ID.<br>
A teammate ID alias follows the pattern <code>alt:email:{email address}</code>.
</aside>

## List team
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/teammates'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/teammates"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
        "related": {
          "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
          "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
        }
      },
      "id": "tea_55c8c149",
      "email": "leela@planet-express.com",
      "username": "leela",
      "first_name": "Leela",
      "last_name": "Turanga",
      "is_admin": true,
      "is_available": true,
      "is_blocked": false
    }
  ]
}
```
Lists the teammates in your company.

### HTTP Request

`GET https://api2.frontapp.com/teammates`
## Get teammate
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/teammates/${TEAMMATE_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
    "related": {
      "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
      "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
    }
  },
  "id": "tea_55c8c149",
  "email": "leela@planet-express.com",
  "username": "leela",
  "first_name": "Leela",
  "last_name": "Turanga",
  "is_admin": true,
  "is_available": true,
  "is_blocked": false
}
```
Fetches the information of a teammate. See [resource aliases](#resource-aliases) to fetch by email.

### HTTP Request

`GET https://api2.frontapp.com/teammates/{teammate_id}`
### Parameters


Name | Type | Description
-----|------|------------
teammate_id | string | Id or email of the requested teammate

## Update teammate
```shell

curl --include \
     --request PATCH \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"username\": \"bender\",
  \"first_name\": \"Bender\",
  \"last_name\": \"Rodriguez\",
  \"is_available\": false
}" \
'https://api2.frontapp.com/teammates/${TEAMMATE_ID}'
```

```node

```

> Response **204**

Updates the information of a teammate.

### HTTP Request

`PATCH https://api2.frontapp.com/teammates/{teammate_id}`
### Parameters


Name | Type | Description
-----|------|------------
teammate_id | string | Id or email of the requested teammate

### Body


Name | Type | Description
-----|------|------------
username | string (optional) | New username. It must be unique and can only contains lowercase letters, numbers and underscores. 
first_name | string (optional) | New first name 
last_name | string (optional) | New last name 
is_available | boolean (optional) | New availability status 

## List teammate conversations
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/teammates/${TEAMMATE_ID}/conversations?q=${Q}&page_token=${PAGE_TOKEN}&limit=${LIMIT}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/conversations/cnv_55c8c149",
        "related": {
          "events": "https://api2.frontapp.com/conversations/cnv_55c8c149/events",
          "followers": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers",
          "messages": "https://api2.frontapp.com/conversations/cnv_55c8c149/messages",
          "comments": "https://api2.frontapp.com/conversations/cnv_55c8c149/comments",
          "inboxes": "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
        }
      },
      "id": "cnv_55c8c149",
      "subject": "You broke my heart, Hubert.",
      "status": "archived",
      "assignee": {
        "_links": {
          "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
          "related": {
            "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
            "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
          }
        },
        "id": "tea_55c8c149",
        "email": "leela@planet-express.com",
        "username": "leela",
        "first_name": "Leela",
        "last_name": "Turanga",
        "is_admin": true,
        "is_available": true,
        "is_blocked": false
      },
      "recipient": {
        "_links": {
          "related": {
            "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
          }
        },
        "handle": "calculon@momsbot.com",
        "role": "to"
      },
      "tags": [
        {
          "_links": {
            "self": "https://api2.frontapp.com/tags/tag_55c8c149",
            "related": {
              "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
              "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
              "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
            }
          },
          "id": "tag_55c8c149",
          "name": "Robots",
          "highlight": "blue",
          "is_private": false,
          "created_at": 0,
          "updated_at": 0
        }
      ],
      "last_message": {
        "_links": {
          "self": "https://api2.frontapp.com/messages/msg_55c8c149",
          "related": {
            "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
            "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
          }
        },
        "id": "msg_55c8c149",
        "type": "email",
        "is_inbound": true,
        "is_draft": false,
        "created_at": 1453770984.123,
        "blurb": "Anything less than immortality is a...",
        "author": {
          "_links": {
            "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
            "related": {
              "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
              "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
            }
          },
          "id": "tea_55c8c149",
          "email": "leela@planet-express.com",
          "username": "leela",
          "first_name": "Leela",
          "last_name": "Turanga",
          "is_admin": true,
          "is_available": true,
          "is_blocked": false
        },
        "recipients": [
          {
            "_links": {
              "related": {
                "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
              }
            },
            "handle": "calculon@momsbot.com",
            "role": "to"
          }
        ],
        "body": "Anything less than immortality is a complete waste of time.",
        "text": "Anything less than immortality is a complete waste of time.",
        "attachments": [
          {
            "filename": "attachment.jpg",
            "url": "https://api2.frontapp.com/download/fil_55c8c149",
            "content_type": "image/jpeg",
            "size": 10000,
            "metadata": {
              "is_inline": true,
              "cid": "123456789"
            }
          }
        ],
        "metadata": {}
      },
      "created_at": 1453770984.123,
      "is_private": false
    }
  ]
}
```
Lists the conversations assigned to a teammate in reverse chronological order (most recently updated first).

### HTTP Request

`GET https://api2.frontapp.com/teammates/{teammate_id}/conversations?q={q}&page_token={page_token}&limit={limit}`
### Parameters


Name | Type | Description
-----|------|------------
teammate_id | string | Id or email of the teammate
q | object (optional) | Search query. See Search Parameters
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)

# Inboxes
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the inbox 
_links.related | object |  
_links.related.teammates | string | URL of the list of teammates that can access the inbox 
_links.related.conversations | string | URL of the list of conversations included in this inbox 
_links.related.channels | string | URL of the list of channels sending messages to this inbox 
_links.related.owner | string | URL of the team of teammate of the inbox 
id | string | Unique identifier for the inbox 
name | string | Name of the inbox 
is_private | boolean | Whether or not the inbox is individual 

An inbox is a container of messages.

Messages are sent from and received by [channels](#channels) which then post the messages into the configured inbox. An inbox can have multiple channels.

## List inboxes
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/inboxes'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/inboxes"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/inboxes/inb_55c8c149",
        "related": {
          "teammates": "https://api2.frontapp.com/inboxes/inb_55c8c149/teammates",
          "conversations": "https://api2.frontapp.com/inboxes/inb_55c8c149/conversations",
          "channels": "https://api2.frontapp.com/inboxes/inb_55c8c149/channels",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "inb_55c8c149",
      "name": "Team",
      "is_private": false
    }
  ]
}
```
Lists all the inboxes.

<aside class="notice">
You can list the inboxes of a specific teammate or team by using the endpoints <code>/teammates/{teammate_id}/inboxes</code> or <code>/teams/{team_id}/inboxes</code>.
</aside>

### HTTP Request

`GET https://api2.frontapp.com/inboxes`
## Create an inbox
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"name\": \"Delivery support\",
  \"teammate_ids\": []
}" \
'https://api2.frontapp.com/inboxes'
```

```node

```

> Response **201**

```json
{
  "id": "inb_55c8c149",
  "name": "Delivery support"
}
```
Creates a team inbox with no channel associated to it (see [Create a channel](#create-a-channel)) in the default team.

<aside class="notice">
You can create an inbox for a specific teammate or team by using the endpoints <code>/teammates/{teammate_id}/inboxes</code> or <code>/teams/{team_id}/inboxes</code>.
</aside>

### HTTP Request

`POST https://api2.frontapp.com/inboxes`
### Body


Name | Type | Description
-----|------|------------
name | string | Name of the inbox 
teammate_ids | array (optional) | List of all the teammate ids who will have access to this inbox. If omitted, it will automatically select all the team administrators. 

## Get inbox
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/inboxes/${INBOX_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/inboxes/inb_55c8c149",
    "related": {
      "teammates": "https://api2.frontapp.com/inboxes/inb_55c8c149/teammates",
      "conversations": "https://api2.frontapp.com/inboxes/inb_55c8c149/conversations",
      "channels": "https://api2.frontapp.com/inboxes/inb_55c8c149/channels",
      "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
    }
  },
  "id": "inb_55c8c149",
  "name": "Team",
  "is_private": false
}
```
Fetches the information of an inbox.

### HTTP Request

`GET https://api2.frontapp.com/inboxes/{inbox_id}`
### Parameters


Name | Type | Description
-----|------|------------
inbox_id | string | Id of the requested inbox

## List inbox channels
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/inboxes/${INBOX_ID}/channels'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/inboxes/inb_55c8c149/channels"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/channels/cha_55c8c149",
        "related": {
          "inbox": "https://api2.frontapp.com/channels/cha_55c8c149/inbox",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "cha_55c8c149",
      "address": "team@planet-express.com",
      "type": "smtp",
      "send_as": "team@planet-express.com",
      "settings": {},
      "is_private": false
    }
  ]
}
```
Lists the channels linked to an inbox.

### HTTP Request

`GET https://api2.frontapp.com/inboxes/{inbox_id}/channels`
### Parameters


Name | Type | Description
-----|------|------------
inbox_id | string | Id of the requested inbox

## List inbox conversations
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/inboxes/${INBOX_ID}/conversations?q=${Q}&page_token=${PAGE_TOKEN}&limit=${LIMIT}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/inboxes/inb_55c8c149/conversations"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/conversations/cnv_55c8c149",
        "related": {
          "events": "https://api2.frontapp.com/conversations/cnv_55c8c149/events",
          "followers": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers",
          "messages": "https://api2.frontapp.com/conversations/cnv_55c8c149/messages",
          "comments": "https://api2.frontapp.com/conversations/cnv_55c8c149/comments",
          "inboxes": "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
        }
      },
      "id": "cnv_55c8c149",
      "subject": "You broke my heart, Hubert.",
      "status": "archived",
      "assignee": {
        "_links": {
          "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
          "related": {
            "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
            "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
          }
        },
        "id": "tea_55c8c149",
        "email": "leela@planet-express.com",
        "username": "leela",
        "first_name": "Leela",
        "last_name": "Turanga",
        "is_admin": true,
        "is_available": true,
        "is_blocked": false
      },
      "recipient": {
        "_links": {
          "related": {
            "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
          }
        },
        "handle": "calculon@momsbot.com",
        "role": "to"
      },
      "tags": [
        {
          "_links": {
            "self": "https://api2.frontapp.com/tags/tag_55c8c149",
            "related": {
              "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
              "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
              "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
            }
          },
          "id": "tag_55c8c149",
          "name": "Robots",
          "highlight": "blue",
          "is_private": false,
          "created_at": 0,
          "updated_at": 0
        }
      ],
      "last_message": {
        "_links": {
          "self": "https://api2.frontapp.com/messages/msg_55c8c149",
          "related": {
            "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
            "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
          }
        },
        "id": "msg_55c8c149",
        "type": "email",
        "is_inbound": true,
        "is_draft": false,
        "created_at": 1453770984.123,
        "blurb": "Anything less than immortality is a...",
        "author": {
          "_links": {
            "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
            "related": {
              "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
              "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
            }
          },
          "id": "tea_55c8c149",
          "email": "leela@planet-express.com",
          "username": "leela",
          "first_name": "Leela",
          "last_name": "Turanga",
          "is_admin": true,
          "is_available": true,
          "is_blocked": false
        },
        "recipients": [
          {
            "_links": {
              "related": {
                "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
              }
            },
            "handle": "calculon@momsbot.com",
            "role": "to"
          }
        ],
        "body": "Anything less than immortality is a complete waste of time.",
        "text": "Anything less than immortality is a complete waste of time.",
        "attachments": [
          {
            "filename": "attachment.jpg",
            "url": "https://api2.frontapp.com/download/fil_55c8c149",
            "content_type": "image/jpeg",
            "size": 10000,
            "metadata": {
              "is_inline": true,
              "cid": "123456789"
            }
          }
        ],
        "metadata": {}
      },
      "created_at": 1453770984.123,
      "is_private": false
    }
  ]
}
```
Lists the conversations which appear in an inbox.

### HTTP Request

`GET https://api2.frontapp.com/inboxes/{inbox_id}/conversations?q={q}&page_token={page_token}&limit={limit}`
### Parameters


Name | Type | Description
-----|------|------------
inbox_id | string | Id of the requested inbox
q | object (optional) | Search query. See Search Parameters
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)

## List inbox teammates
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/inboxes/${INBOX_ID}/teammates'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/inboxes/inb_55c8c149/teammates"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
        "related": {
          "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
          "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
        }
      },
      "id": "tea_55c8c149",
      "email": "leela@planet-express.com",
      "username": "leela",
      "first_name": "Leela",
      "last_name": "Turanga",
      "is_admin": true,
      "is_available": true,
      "is_blocked": false
    }
  ]
}
```
Lists the teammates who can access an inbox.

### HTTP Request

`GET https://api2.frontapp.com/inboxes/{inbox_id}/teammates`
### Parameters


Name | Type | Description
-----|------|------------
inbox_id | string | Id of the requested inbox

## Add teammates
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"teammate_ids\": [
    \"tea_1\",
    \"tea_2\"
  ]
}" \
'https://api2.frontapp.com/inboxes/${INBOX_ID}/teammates'
```

```node

```

> Response **204**

Adds teammates to an inbox.  The selected teammates must not already have access to the inbox and must be in the team that owns the inbox.  Teammates cannot be added to private inboxes.

This request requires the `provisioning` scope in the JSON Web Token.

### HTTP Request

`POST https://api2.frontapp.com/inboxes/{inbox_id}/teammates`
### Parameters


Name | Type | Description
-----|------|------------
inbox_id | string | Id of the inbox to add the teammate(s) to.

### Body


Name | Type | Description
-----|------|------------
teammate_ids | array | List of all the teammate ids to add to the team. 

## Remove teammates
```shell

curl --include \
     --request DELETE \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"teammate_ids\": [
    \"tea_1\",
    \"tea_2\"
  ]
}" \
'https://api2.frontapp.com/inboxes/${INBOX_ID}/teammates'
```

```node

```

> Response **204**

Removes teammates from a team inbox.  Selected teammates must currently have access to the inbox to be removed.  Teammates cannot be removed from private inboxes.

This request requires the `provisioning` scope in the JSON Web Token.

### HTTP Request

`DELETE https://api2.frontapp.com/inboxes/{inbox_id}/teammates`
### Parameters


Name | Type | Description
-----|------|------------
inbox_id | string | Id of the inbox to remove the teammate(s) from.

### Body


Name | Type | Description
-----|------|------------
teammate_ids | array | List of all the teammate ids to add to the team. 

# Channels
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the channel. 
_links.related | object |  
_links.related.inbox | string | URL of the inbox to which the channel is sending messages. 
_links.related.owner | string | URL of the team of teammate of the channel 
id | string | Unique identifier for the channel. 
address | string | Address receiving the messages. 
type | enum | Type of the channel. 
send_as | string (optional) | Address which appears as the sender for messages sent from Front. 
settings | object |  
is_private | boolean | Whether or not the channel is individual 

A channel is a resource which can send and receive messages.

For information on building your own channel type integration, see the [Channels API offering](/channels-api.html) for more info.

Here is the list of existing channel types:

| Type        | Description                                                                                |
|-------------|--------------------------------------------------------------------------------------------|
| `smtp`      | For emails managed via SMTP.                                                               |
| `imap`      | For emails managed via IMAP.                                                               |
| `twilio`    | Linked to a Twilio account.                                                                |
| `twitter`   | Linked to a Twitter account.                                                               |
| `facebook`  | Linked to a Facebook page.                                                                 |
| `smooch`    | Linked to a Smooch account.                                                                |
| `intercom`  | Linked to an Intercom account.                                                             |
| `truly`     | Linked to a truly account.                                                                 |
| `custom`    | For messages sent and received only through the API (cf [Custom inboxes](/channels-api.html)).|

## List channels
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/channels'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/channels"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/channels/cha_55c8c149",
        "related": {
          "inbox": "https://api2.frontapp.com/channels/cha_55c8c149/inbox",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "cha_55c8c149",
      "address": "team@planet-express.com",
      "type": "smtp",
      "send_as": "team@planet-express.com",
      "settings": {},
      "is_private": false
    }
  ]
}
```
Lists all the channels.

<aside class="notice">
You can list the channels of a specific teammate or team by using the endpoints <code>/teammates/{teammate_id}/channels</code> or <code>/teams/{team_id}/channels</code>.
</aside>

### HTTP Request

`GET https://api2.frontapp.com/channels`
## Get a channel
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/channels/${CHANNEL_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/channels/cha_55c8c149",
    "related": {
      "inbox": "https://api2.frontapp.com/channels/cha_55c8c149/inbox",
      "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
    }
  },
  "id": "cha_55c8c149",
  "address": "team@planet-express.com",
  "type": "smtp",
  "send_as": "team@planet-express.com",
  "settings": {},
  "is_private": false
}
```
Fetches the information of a channel. See [resource aliases](#resource-aliases) to fetch by address.

### HTTP Request

`GET https://api2.frontapp.com/channels/{channel_id}`
### Parameters


Name | Type | Description
-----|------|------------
channel_id | string | Id of the requested channel

## Create an SMTP channel
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"name\": \"My channel\",
  \"type\": \"smtp\"
}" \
'https://api2.frontapp.com/inboxes/${INBOX_ID}/channels'
```

```node

```

> Response **201**

```json
{
  "id": "cha_55c8c149",
  "name": "My channel",
  "type": "smtp",
  "address": "dw0a0-mowow@frontapp.com",
  "sendAs": "dw0a0-mowow@frontapp.com"
}
```
Creates an SMTP channel linked to the requested inbox.

<aside class="notice">
As of today, you can only create an SMTP channel with the API.
</aside>

For `smtp` type channels, we will create an **unvalidated** SMTP channel.

* In the response body returned, `address` is the **forwarding address**.

* To complete the SMTP validation process, [add the forwarding address to your email provider's settings](https://help.frontapp.com/t/632v5z/switch-from-gmailo365-to-smtp-forwarding).

### HTTP Request

`POST https://api2.frontapp.com/inboxes/{inbox_id}/channels`
### Parameters


Name | Type | Description
-----|------|------------
inbox_id | string | Id of the inbox into which the channel messages will go.

### Body


Name | Type | Description
-----|------|------------
name | string (optional) | Name of the channel. 
type | enum | Type of the channel. Must be `smtp`. 
send_as | string (optional) | Address of your SMTP mailbox. 

## Receive Message
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"sender\": {
    \"name\": \"Alex\",
    \"handle\": \"alex@company.com\"
  },
  \"subject\": \"Quick sync\",
  \"body\": \"Hey - just wanted to check what your status on the nuclear reactor? Are we still building the shut off switch on that?\",
  \"metadata\": {
    \"external_id\": \"external message 123\",
    \"external_conversation_id\": \"external_conversation_312\"
  }
}" \
'https://api2.frontapp.com/channels/${CHANNEL_ID}/inbound_messages'
```

```node

```

> Response **200**

```json
{
  "message_uid": "dba584bd5116554332aa23f234j234",
  "status": "accepted"
}
```
<aside class="warning">
This endpoint can only be used by Channels in partnership with Front. See the <a href="/channels-api.html">Channels API offering</a> for more info. 
</aside>

When your system receives a message, this message can be sent to the Front channel by posting it to this endpoint.

### HTTP Request

`POST https://api2.frontapp.com/channels/{channel_id}/inbound_messages`
### Parameters


Name | Type | Description
-----|------|------------
channel_id | string | The id of the channel this message is sent to

### Body


Name | Type | Description
-----|------|------------
sender | object | Sender of the message 
sender.name | string | Name of the person who sent this message. 
sender.handle | string | Contact handle of the message sender 
subject | string | Subject to be displayed for this message 
body | string | Body text of this message 
metadata | object | Data pertaining to how this message is stored in the external system 
metadata.external_id | string | id of the message in the external system. 
metadata.external_conversation_id | string | id of the conversation in the external system. This is used to thread messages together into the same conversation. 

## Import External Message
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"to\": {
    \"name\": \"Alex\",
    \"handle\": \"alex@company.com\"
  },
  \"body\": \"Hey - just wanted to check what your status on the nuclear reactor? Are we still building the shut off switch on that?\",
  \"metadata\": {
    \"external_id\": \"external message 123\",
    \"external_conversation_id\": \"external_conversation_312\"
  }
}" \
'https://api2.frontapp.com/channels/${CHANNEL_ID}/outbound_messages'
```

```node

```

> Response **200**

```json
{
  "type": "success",
  "external_id": "external message 2",
  "external_conversation_id": "external_conversation_1"
}
```
<aside class="warning">
This endpoint can only be used by Channels in partnership with Front. See the <a href="/channels-api.html">Channels API offering</a> for more info. 
</aside>

<aside class="notice">
If you are looking to import a message to any inbox, please see the <a href="/#import-message">Inbox import endpoint</a>
</aside>

This endpoint imports messages sent from an external service as a sent message in Front.

### HTTP Request

`POST https://api2.frontapp.com/channels/{channel_id}/outbound_messages`
### Parameters


Name | Type | Description
-----|------|------------
channel_id | string | The id of the channel this message is sent to

### Body


Name | Type | Description
-----|------|------------
to | object | Sender of the message 
to.name | string | Name of the person who sent this message. 
to.handle | string | Contact handle of the message sender 
body | string | Body text of this message 
metadata | object | Data pertaining to how this message is stored in the external system 
metadata.external_id | string | id of the message in the external system. 
metadata.external_conversation_id | string | id of the conversation in the external system. This is used to thread messages together into the same conversation. 

# Conversations
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the conversation 
_links.related | object |  
_links.related.events | string | URL of the activities related to the conversation 
_links.related.followers | string | URL of the teammates following the conversation 
_links.related.messages | string | URL of the list of messages in the conversation 
_links.related.comments | string | URL of the comments for the conversation 
_links.related.inboxes | string | URL of the inboxes in which the conversation appears 
id | string | Unique identifier of the conversation 
subject | string | Subject of the conversation 
status | enum (optional) | Status of the conversation 
assignee | Teammate (optional) | Partial representation of the teammate assigned to the conversation 
recipient | Recipient | Main recipient of the conversation 
tags | array | List of the tags for this conversation 
last_message | Message | List of partial representation of the messages inside the conversation 
created_at | number | Timestamp at which the conversation have been created. 
is_private | boolean | Whether or not the conversation is private 

A conversation is a unique thread of messages. It can appear in one or more inboxes (eg: if you receive an email on contact@ where support@ is Cced).

Even if a conversation messages can have multiple recipients, the conversation resource will always have only one. The main recipient of a conversation can change over the time depending on each message received. It will generally be the sender of the last incomming message.

### Opening a conversation in Front

To open a conversation in Front you need to open the URL `https://app.frontapp.com/open/{conversation_id}`.

## List conversations
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/conversations?q=${Q}&page_token=${PAGE_TOKEN}&limit=${LIMIT}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/conversations"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/conversations/cnv_55c8c149",
        "related": {
          "events": "https://api2.frontapp.com/conversations/cnv_55c8c149/events",
          "followers": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers",
          "messages": "https://api2.frontapp.com/conversations/cnv_55c8c149/messages",
          "comments": "https://api2.frontapp.com/conversations/cnv_55c8c149/comments",
          "inboxes": "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
        }
      },
      "id": "cnv_55c8c149",
      "subject": "You broke my heart, Hubert.",
      "status": "archived",
      "assignee": {
        "_links": {
          "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
          "related": {
            "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
            "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
          }
        },
        "id": "tea_55c8c149",
        "email": "leela@planet-express.com",
        "username": "leela",
        "first_name": "Leela",
        "last_name": "Turanga",
        "is_admin": true,
        "is_available": true,
        "is_blocked": false
      },
      "recipient": {
        "_links": {
          "related": {
            "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
          }
        },
        "handle": "calculon@momsbot.com",
        "role": "to"
      },
      "tags": [
        {
          "_links": {
            "self": "https://api2.frontapp.com/tags/tag_55c8c149",
            "related": {
              "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
              "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
              "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
            }
          },
          "id": "tag_55c8c149",
          "name": "Robots",
          "highlight": "blue",
          "is_private": false,
          "created_at": 0,
          "updated_at": 0
        }
      ],
      "last_message": {
        "_links": {
          "self": "https://api2.frontapp.com/messages/msg_55c8c149",
          "related": {
            "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
            "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
          }
        },
        "id": "msg_55c8c149",
        "type": "email",
        "is_inbound": true,
        "is_draft": false,
        "created_at": 1453770984.123,
        "blurb": "Anything less than immortality is a...",
        "author": {
          "_links": {
            "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
            "related": {
              "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
              "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
            }
          },
          "id": "tea_55c8c149",
          "email": "leela@planet-express.com",
          "username": "leela",
          "first_name": "Leela",
          "last_name": "Turanga",
          "is_admin": true,
          "is_available": true,
          "is_blocked": false
        },
        "recipients": [
          {
            "_links": {
              "related": {
                "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
              }
            },
            "handle": "calculon@momsbot.com",
            "role": "to"
          }
        ],
        "body": "Anything less than immortality is a complete waste of time.",
        "text": "Anything less than immortality is a complete waste of time.",
        "attachments": [
          {
            "filename": "attachment.jpg",
            "url": "https://api2.frontapp.com/download/fil_55c8c149",
            "content_type": "image/jpeg",
            "size": 10000,
            "metadata": {
              "is_inline": true,
              "cid": "123456789"
            }
          }
        ],
        "metadata": {}
      },
      "created_at": 1453770984.123,
      "is_private": false
    }
  ]
}
```
Lists all the conversations in your company in reverse chronological order (most recently updated first).

### HTTP Request

`GET https://api2.frontapp.com/conversations?q={q}&page_token={page_token}&limit={limit}`
### Parameters


Name | Type | Description
-----|------|------------
q | object (optional) | Search query. See Search Parameters
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)

## Get conversation
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/conversations/cnv_55c8c149",
    "related": {
      "events": "https://api2.frontapp.com/conversations/cnv_55c8c149/events",
      "followers": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers",
      "messages": "https://api2.frontapp.com/conversations/cnv_55c8c149/messages",
      "comments": "https://api2.frontapp.com/conversations/cnv_55c8c149/comments",
      "inboxes": "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
    }
  },
  "id": "cnv_55c8c149",
  "subject": "You broke my heart, Hubert.",
  "status": "archived",
  "assignee": {
    "_links": {
      "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
      "related": {
        "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
        "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
      }
    },
    "id": "tea_55c8c149",
    "email": "leela@planet-express.com",
    "username": "leela",
    "first_name": "Leela",
    "last_name": "Turanga",
    "is_admin": true,
    "is_available": true,
    "is_blocked": false
  },
  "recipient": {
    "_links": {
      "related": {
        "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
      }
    },
    "handle": "calculon@momsbot.com",
    "role": "to"
  },
  "tags": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/tags/tag_55c8c149",
        "related": {
          "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
          "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
        }
      },
      "id": "tag_55c8c149",
      "name": "Robots",
      "highlight": "blue",
      "is_private": false,
      "created_at": 0,
      "updated_at": 0
    }
  ],
  "last_message": {
    "_links": {
      "self": "https://api2.frontapp.com/messages/msg_55c8c149",
      "related": {
        "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
        "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
      }
    },
    "id": "msg_55c8c149",
    "type": "email",
    "is_inbound": true,
    "is_draft": false,
    "created_at": 1453770984.123,
    "blurb": "Anything less than immortality is a...",
    "author": {
      "_links": {
        "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
        "related": {
          "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
          "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
        }
      },
      "id": "tea_55c8c149",
      "email": "leela@planet-express.com",
      "username": "leela",
      "first_name": "Leela",
      "last_name": "Turanga",
      "is_admin": true,
      "is_available": true,
      "is_blocked": false
    },
    "recipients": [
      {
        "_links": {
          "related": {
            "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
          }
        },
        "handle": "calculon@momsbot.com",
        "role": "to"
      }
    ],
    "body": "Anything less than immortality is a complete waste of time.",
    "text": "Anything less than immortality is a complete waste of time.",
    "attachments": [
      {
        "filename": "attachment.jpg",
        "url": "https://api2.frontapp.com/download/fil_55c8c149",
        "content_type": "image/jpeg",
        "size": 10000,
        "metadata": {
          "is_inline": true,
          "cid": "123456789"
        }
      }
    ],
    "metadata": {}
  },
  "created_at": 1453770984.123,
  "is_private": false
}
```
Fetches the information of a conversation.

### HTTP Request

`GET https://api2.frontapp.com/conversations/{conversation_id}`
### Parameters


Name | Type | Description
-----|------|------------
conversation_id | string | Id of the requested conversation

## Update conversation
```shell

curl --include \
     --request PATCH \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"assignee_id\": \"alt:email:fry@planet-express.com\",
  \"status\": \"archived\",
  \"tag_ids\": [
    \"tag_55c8c148\",
    \"tag_55c8c149\"
  ]
}" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}'
```

```node

```

> Response **204**

Updates a conversation. You can:

* Assign or unassign a conversation by sending an `assignee_id`

* Update the tags of a conversation by sending an array of tag IDs, `tag_ids`. An empty array will remove all tags.

* Archive a conversation by sending `archived` in `status`

* Delete a conversation by sending `deleted` in `status`

* Mark a conversation as spam by sending `spam` in `status`

* Unarchive or restore a conversation  by sending `open` in `status`

### HTTP Request

`PATCH https://api2.frontapp.com/conversations/{conversation_id}`
### Parameters


Name | Type | Description
-----|------|------------
conversation_id | string | Id of the requested conversation

### Body


Name | Type | Description
-----|------|------------
assignee_id | string (optional) | ID of the teammate to assign the conversation to. Set it to null to unassign. 
inbox_id: `inb_128yew` | string (optional) | ID of the inbox to move the conversation to. 
status | enum (optional) | New status of the conversation 
tag_ids | array (optional) | List of all the tag IDs replacing the old conversation tags 

## Update conversation assignee
```shell

curl --include \
     --request PUT \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"assignee_id\": \"null\"
}" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}/assignee'
```

```node

```

> Response **204**

Updates a conversation's assignee.

* Assign or unassign a conversation by sending an `assignee_id`

### HTTP Request

`PUT https://api2.frontapp.com/conversations/{conversation_id}/assignee`
### Parameters


Name | Type | Description
-----|------|------------
conversation_id | string | Id of the requested conversation

### Body


Name | Type | Description
-----|------|------------
assignee_id | string | ID of the teammate to assign the conversation to. Set it to null to unassign. 

## List conversation inboxes
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}/inboxes'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/inboxes/inb_55c8c149",
        "related": {
          "teammates": "https://api2.frontapp.com/inboxes/inb_55c8c149/teammates",
          "conversations": "https://api2.frontapp.com/inboxes/inb_55c8c149/conversations",
          "channels": "https://api2.frontapp.com/inboxes/inb_55c8c149/channels",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "inb_55c8c149",
      "name": "Team",
      "is_private": false
    }
  ]
}
```
Lists the inboxes in which a conversation appears.

### HTTP Request

`GET https://api2.frontapp.com/conversations/{conversation_id}/inboxes`
### Parameters


Name | Type | Description
-----|------|------------
conversation_id | string | Id of the requested conversation

## List conversation followers
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}/followers'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
        "related": {
          "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
          "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
        }
      },
      "id": "tea_55c8c149",
      "email": "leela@planet-express.com",
      "username": "leela",
      "first_name": "Leela",
      "last_name": "Turanga",
      "is_admin": true,
      "is_available": true,
      "is_blocked": false
    }
  ]
}
```
Lists the teammates following a conversation.

### HTTP Request

`GET https://api2.frontapp.com/conversations/{conversation_id}/followers`
### Parameters


Name | Type | Description
-----|------|------------
conversation_id | string | Id of the requested conversation

## List conversation events
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}/events?page_token=${PAGE_TOKEN}&limit=${LIMIT}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/conversations/cnv_55c8c149/events"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/events/evt_55c8c149"
      },
      "id": "evt_55c8c149",
      "type": "assign",
      "emitted_at": 1453770984.123,
      "source": {
        "_meta": {
          "type": "rule"
        },
        "data": {
          "_links": {
            "self": "https://api2.frontapp.com/rules/rul_55c8c149",
            "related": {
              "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
            }
          },
          "id": "rul_55c8c149",
          "name": "Important deliveries",
          "actions": [
            "Assign to Leela Turanga"
          ],
          "is_private": false
        }
      },
      "target": {
        "_meta": {
          "type": "teammate"
        },
        "data": {
          "_links": {
            "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
            "related": {
              "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
              "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
            }
          },
          "id": "tea_55c8c149",
          "email": "leela@planet-express.com",
          "username": "leela",
          "first_name": "Leela",
          "last_name": "Turanga",
          "is_admin": true,
          "is_available": true,
          "is_blocked": false
        }
      },
      "conversation": {
        "_links": {
          "self": "https://api2.frontapp.com/conversations/cnv_55c8c149",
          "related": {
            "events": "https://api2.frontapp.com/conversations/cnv_55c8c149/events",
            "followers": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers",
            "messages": "https://api2.frontapp.com/conversations/cnv_55c8c149/messages",
            "comments": "https://api2.frontapp.com/conversations/cnv_55c8c149/comments",
            "inboxes": "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
          }
        },
        "id": "cnv_55c8c149",
        "subject": "You broke my heart, Hubert.",
        "status": "archived",
        "assignee": {
          "_links": {
            "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
            "related": {
              "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
              "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
            }
          },
          "id": "tea_55c8c149",
          "email": "leela@planet-express.com",
          "username": "leela",
          "first_name": "Leela",
          "last_name": "Turanga",
          "is_admin": true,
          "is_available": true,
          "is_blocked": false
        },
        "recipient": {
          "_links": {
            "related": {
              "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
            }
          },
          "handle": "calculon@momsbot.com",
          "role": "to"
        },
        "tags": [
          {
            "_links": {
              "self": "https://api2.frontapp.com/tags/tag_55c8c149",
              "related": {
                "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
                "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
                "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
              }
            },
            "id": "tag_55c8c149",
            "name": "Robots",
            "highlight": "blue",
            "is_private": false,
            "created_at": 0,
            "updated_at": 0
          }
        ],
        "last_message": {
          "_links": {
            "self": "https://api2.frontapp.com/messages/msg_55c8c149",
            "related": {
              "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
              "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
            }
          },
          "id": "msg_55c8c149",
          "type": "email",
          "is_inbound": true,
          "is_draft": false,
          "created_at": 1453770984.123,
          "blurb": "Anything less than immortality is a...",
          "author": {
            "_links": {
              "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
              "related": {
                "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
                "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
              }
            },
            "id": "tea_55c8c149",
            "email": "leela@planet-express.com",
            "username": "leela",
            "first_name": "Leela",
            "last_name": "Turanga",
            "is_admin": true,
            "is_available": true,
            "is_blocked": false
          },
          "recipients": [
            {
              "_links": {
                "related": {
                  "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
                }
              },
              "handle": "calculon@momsbot.com",
              "role": "to"
            }
          ],
          "body": "Anything less than immortality is a complete waste of time.",
          "text": "Anything less than immortality is a complete waste of time.",
          "attachments": [
            {
              "filename": "attachment.jpg",
              "url": "https://api2.frontapp.com/download/fil_55c8c149",
              "content_type": "image/jpeg",
              "size": 10000,
              "metadata": {
                "is_inline": true,
                "cid": "123456789"
              }
            }
          ],
          "metadata": {}
        },
        "created_at": 1453770984.123,
        "is_private": false
      }
    }
  ]
}
```
List of all the events that occured for a conversation in reverse chronological order (newest first).

### HTTP Request

`GET https://api2.frontapp.com/conversations/{conversation_id}/events?page_token={page_token}&limit={limit}`
### Parameters


Name | Type | Description
-----|------|------------
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)
conversation_id | string | Id of the requested conversation

## List conversation messages
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}/messages?page_token=${PAGE_TOKEN}&limit=${LIMIT}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/conversations/cnv_55c8c149/messages"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/messages/msg_55c8c149",
        "related": {
          "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
          "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
        }
      },
      "id": "msg_55c8c149",
      "type": "email",
      "is_inbound": true,
      "is_draft": false,
      "created_at": 1453770984.123,
      "blurb": "Anything less than immortality is a...",
      "author": {
        "_links": {
          "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
          "related": {
            "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
            "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
          }
        },
        "id": "tea_55c8c149",
        "email": "leela@planet-express.com",
        "username": "leela",
        "first_name": "Leela",
        "last_name": "Turanga",
        "is_admin": true,
        "is_available": true,
        "is_blocked": false
      },
      "recipients": [
        {
          "_links": {
            "related": {
              "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
            }
          },
          "handle": "calculon@momsbot.com",
          "role": "to"
        }
      ],
      "body": "Anything less than immortality is a complete waste of time.",
      "text": "Anything less than immortality is a complete waste of time.",
      "attachments": [
        {
          "filename": "attachment.jpg",
          "url": "https://api2.frontapp.com/download/fil_55c8c149",
          "content_type": "image/jpeg",
          "size": 10000,
          "metadata": {
            "is_inline": true,
            "cid": "123456789"
          }
        }
      ],
      "metadata": {}
    }
  ]
}
```
Lists all the messages sent or received in a conversation in reverse chronological order (newest first).

### HTTP Request

`GET https://api2.frontapp.com/conversations/{conversation_id}/messages?page_token={page_token}&limit={limit}`
### Parameters


Name | Type | Description
-----|------|------------
conversation_id | string | Id of the requested conversation
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)

# Comments
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the comment 
_links.related | object |  
_links.related.conversation | string | URL of the conversation from which the comment belongs 
_links.related.mentions | string | URL of the teammates mentionned in a comment 
id | string | Unique identifier of the comment 
author | Teammate | Teammate who wrote the comment 
body | string | Content of the comment 
posted_at | number | Date at which the comment have been posted 

A comment is a private message written by a teammate visible only to the other teammates. It is never sent and cannot be shared outside of Front.

## Create comment
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"author_id\": \"alt:email:leela@planet-express.com\",
  \"body\": \"@bender, I thought you were supposed to be cooking for this party.\"
}" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}/comments'
```

```node

```

> Response **201**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/comments/inb_55c8c149",
    "related": {
      "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
      "mentions": "https://api2.frontapp.com/comments/com_55c8c149/mentions"
    }
  },
  "id": "com_55c8c149",
  "author": {
    "_links": {
      "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
      "related": {
        "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
        "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
      }
    },
    "id": "tea_55c8c149",
    "email": "leela@planet-express.com",
    "username": "leela",
    "first_name": "Leela",
    "last_name": "Turanga",
    "is_admin": true,
    "is_available": true,
    "is_blocked": false
  },
  "body": "@bender, I thought you were supposed to be cooking for this party.",
  "posted_at": 1453770984.123
}
```
Adds a comment to a conversation.

### HTTP Request

`POST https://api2.frontapp.com/conversations/{conversation_id}/comments`
### Parameters


Name | Type | Description
-----|------|------------
conversation_id | string | Id of the requested conversation

### Body


Name | Type | Description
-----|------|------------
author_id | string | ID of the teammate creating the comment 
body | string | Content of the comment 

## List conversation comments
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}/comments'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/conversations/cnv_55c8c149/comments"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/comments/inb_55c8c149",
        "related": {
          "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
          "mentions": "https://api2.frontapp.com/comments/com_55c8c149/mentions"
        }
      },
      "id": "com_55c8c149",
      "author": {
        "_links": {
          "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
          "related": {
            "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
            "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
          }
        },
        "id": "tea_55c8c149",
        "email": "leela@planet-express.com",
        "username": "leela",
        "first_name": "Leela",
        "last_name": "Turanga",
        "is_admin": true,
        "is_available": true,
        "is_blocked": false
      },
      "body": "@bender, I thought you were supposed to be cooking for this party.",
      "posted_at": 1453770984.123
    }
  ]
}
```
Lists of all the comments written in a conversation in reverse chronological order (newest first).

### HTTP Request

`GET https://api2.frontapp.com/conversations/{conversation_id}/comments`
### Parameters


Name | Type | Description
-----|------|------------
conversation_id | string | Id of the requested conversation

## Get comment
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/comments/${COMMENT_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/comments/inb_55c8c149",
    "related": {
      "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
      "mentions": "https://api2.frontapp.com/comments/com_55c8c149/mentions"
    }
  },
  "id": "com_55c8c149",
  "author": {
    "_links": {
      "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
      "related": {
        "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
        "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
      }
    },
    "id": "tea_55c8c149",
    "email": "leela@planet-express.com",
    "username": "leela",
    "first_name": "Leela",
    "last_name": "Turanga",
    "is_admin": true,
    "is_available": true,
    "is_blocked": false
  },
  "body": "@bender, I thought you were supposed to be cooking for this party.",
  "posted_at": 1453770984.123
}
```
Fetches the information of a comment.

### HTTP Request

`GET https://api2.frontapp.com/comments/{comment_id}`
### Parameters


Name | Type | Description
-----|------|------------
comment_id | string | Id of the comment

## List comment mentions
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/comments/${COMMENT_ID}/mentions'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/comments/com_55c8c149/mentions"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
        "related": {
          "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
          "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
        }
      },
      "id": "tea_55c8c149",
      "email": "leela@planet-express.com",
      "username": "leela",
      "first_name": "Leela",
      "last_name": "Turanga",
      "is_admin": true,
      "is_available": true,
      "is_blocked": false
    }
  ]
}
```
Lists the teammates mentionned in a comment.

### HTTP Request

`GET https://api2.frontapp.com/comments/{comment_id}/mentions`
### Parameters


Name | Type | Description
-----|------|------------
comment_id | string | Id of the comment

# Custom fields

A custom field defines the name and type for an extra field of a contact. Only listing all fields and updating the name and/or the description of a custom field is allowed. If you need a custom field to change its type, you need to create a new one with the correct type, as we validate the value of a custom field based on its type.

Each custom field has a specified data type. Ensure the data you submit when updating a custom field's value is formatted correctly:

| Type     | Example        | Description               |
|----------|----------------|---------------------------|
| String   | `"London, UK"` | String values             |
| Boolean  | `true`         | Boolean true/false values |
| Number   | `90`           | Integers                  |
| Datetime | `1525417200`   | Epoch timestamp           |

## List custom fields
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/custom_fields'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/custom_fields"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/conversations/fld_55c8c149"
      },
      "id": "fld_55c8c149",
      "name": "job_title",
      "description": "Job title",
      "type": "string"
    }
  ]
}
```
List all the custom fields in your company.

### HTTP Request

`GET https://api2.frontapp.com/custom_fields`
## Update a custom field
```shell

curl --include \
     --request PATCH \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"name\": \"job_title\",
  \"description\": \"Job title\"
}" \
'https://api2.frontapp.com/custom_fields/${CUSTOM_FIELD_ID}'
```

```node

```

> Response **204**

Updates the name and/or description of a custom field.

### HTTP Request

`PATCH https://api2.frontapp.com/custom_fields/{custom_field_id}`
### Body


Name | Type | Description
-----|------|------------
name | string (optional) | The name of the custom field. This name will be used in the custom field attribute key of the contact. 
description | string (optional) | The description of the custom field. 

# Drafts
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the message 
_links.related | object |  
_links.related.conversation | string | URL of the parent conversation 
_links.related.message_replied_to | string (optional) | URL of the message which have been replied to 
id | string | Unique identifier of the message 
type | enum | Type of the message 
is_inbound | boolean | Whether or not the message has been received or sent 
is_draft | boolean | Whether or not the message is a draft 
error_type | string (optional) | Type of the error when the draft failed to be sent 
version | string (optional) | The current version of the message in Front 
created_at | number | Date at which the message as been sent or received 
blurb | string | Preview of the message body 
author | Teammate (optional) | In case of a message sent from Front by a teammate, it will include the teammate who sent it 
recipients | array | List of the message recipients 
body | string | Body of the message 
text | string (optional) | Text version of the body for email messages 
attachments | array | List of files attached to the message 
metadata | object (optional) | Optional metadata about the message 
metadata.intercom_url | string (optional) | For `intercom` messages only. URL of the Intercom conversation the message is comming from. 
metadata.duration | number (optional) | For `truly-call` messages only. Length of the call in seconds. 
metadata.have_been_answered | boolean (optional) | For `truly-call` messages only. Whether or not the call have been answered. 
metadata.twitter_url | string (optional) | For `tweet` messages only. URL of the tweet. 
metadata.is_retweet | boolean (optional) | For `tweet` messages only. Whether or not the tweet is a retweet. 
metadata.have_been_retweeted | boolean (optional) | For `tweet` messages only. Whether or not the tweet have been retweeted. 
metadata.have_been_favorited | boolean (optional) | For `tweet` messages only. Whether or not the tweet have been favorited. 
metadata.thread_ref | string (optional) | For `custom` messages only. Custom reference which is used to thread messages. 
metadata.headers | object (optional) | For `custom` messages only. Custom object holding internal information. 

A draft is a message which has not been sent to the recipient.

Drafts can be created as a new conversation, or as a reply to an existing conversation.

### Notes on Versioning

For **editing** and **deleting** drafts, a `version` value must be included in the request body in order to safely update the draft within Front.

The **version** value is a token which indicates that the content of the request is in context with a state of the draft at a point in time.

If the `version` value of the draft sent in the request and the `version` of the draft in Front do not match, then an HTTP error response code of **409/Conflict** will be returned.
This is a response with indication that a new version of the draft is available.

To obtain the latest version of a draft in a conversation, using the `message_id`, perform a `GET /messages/{message_id}` request to retrieve information relating to the message. 
The `version` will be included if it is a draft.

## List drafts within a conversation
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}/drafts'
```

```node

```

> Response **200**

```json
[
  {
    "_links": {
      "self": "https://api2.frontapp.com/messages/msg_55c8c149",
      "related": {
        "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
        "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
      }
    },
    "id": "msg_55c8c149",
    "type": "email",
    "is_inbound": true,
    "is_draft": false,
    "created_at": 1453770984.123,
    "blurb": "Anything less than immortality is a...",
    "author": {
      "_links": {
        "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
        "related": {
          "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
          "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
        }
      },
      "id": "tea_55c8c149",
      "email": "leela@planet-express.com",
      "username": "leela",
      "first_name": "Leela",
      "last_name": "Turanga",
      "is_admin": true,
      "is_available": true,
      "is_blocked": false
    },
    "recipients": [
      {
        "_links": {
          "related": {
            "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
          }
        },
        "handle": "calculon@momsbot.com",
        "role": "to"
      }
    ],
    "body": "Anything less than immortality is a complete waste of time.",
    "text": "Anything less than immortality is a complete waste of time.",
    "attachments": [
      {
        "filename": "attachment.jpg",
        "url": "https://api2.frontapp.com/download/fil_55c8c149",
        "content_type": "image/jpeg",
        "size": 10000,
        "metadata": {
          "is_inline": true,
          "cid": "123456789"
        }
      }
    ],
    "metadata": {}
  }
]
```
Retrieve a list of drafts in the conversation.

### HTTP Request

`GET https://api2.frontapp.com/conversations/{conversation_id}/drafts`
### Parameters


Name | Type | Description
-----|------|------------
conversation_id | string | Id of the conversation for which to fetch drafts from

## Creating a new draft as a new conversation
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"author_id\": \"alt:email:leela@planet-express.com\",
  \"to\": [
    \"calculon@momsbot.com\"
  ],
  \"cc\": [],
  \"bcc\": [],
  \"body\": \"Why is Zoidberg the only one still alone?\",
  \"attachments\": []
}" \
'https://api2.frontapp.com/channels/${CHANNEL_ID}/drafts'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/messages/msg_55c8c149",
    "related": {
      "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
      "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
    }
  },
  "id": "msg_55c8c149",
  "type": "email",
  "is_inbound": true,
  "is_draft": false,
  "created_at": 1453770984.123,
  "blurb": "Anything less than immortality is a...",
  "author": {
    "_links": {
      "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
      "related": {
        "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
        "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
      }
    },
    "id": "tea_55c8c149",
    "email": "leela@planet-express.com",
    "username": "leela",
    "first_name": "Leela",
    "last_name": "Turanga",
    "is_admin": true,
    "is_available": true,
    "is_blocked": false
  },
  "recipients": [
    {
      "_links": {
        "related": {
          "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
        }
      },
      "handle": "calculon@momsbot.com",
      "role": "to"
    }
  ],
  "body": "Anything less than immortality is a complete waste of time.",
  "text": "Anything less than immortality is a complete waste of time.",
  "attachments": [
    {
      "filename": "attachment.jpg",
      "url": "https://api2.frontapp.com/download/fil_55c8c149",
      "content_type": "image/jpeg",
      "size": 10000,
      "metadata": {
        "is_inline": true,
        "cid": "123456789"
      }
    }
  ],
  "metadata": {}
}
```
Creates a draft message which is the first message of a new conversation.

If you want to create a new draft with attached files, please check [how to send multipart request](#send-multipart-request).

### HTTP Request

`POST https://api2.frontapp.com/channels/{channel_id}/drafts`
### Parameters


Name | Type | Description
-----|------|------------
channel_id | string | ID, or address of the channel from which to create the draft

### Body


Name | Type | Description
-----|------|------------
author_id | string | ID of the teammate on behalf of whom the draft will be created 
to | array (optional) | List of recipient handles who will receive the message once the draft is sent 
cc | array (optional) | List of recipient handles who will receive a copy of the message once the draft is sent 
bcc | array (optional) | List of the recipient handles who will receive a blind copy of the message once the draft is sent 
subject | string (optional) | Subject of the draft. 
body | string | Body of the draft. 
attachments | array (optional) | Binary data of the attached files. Available only for [multipart request](#send-multipart-request). 

## Create a new draft as a reply
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"channel_id\": \"cha_55c8c149\",
  \"author_id\": \"alt:email:leela@planet-express.com\",
  \"to\": [
    \"calculon@momsbot.com\"
  ],
  \"cc\": [],
  \"bcc\": [],
  \"body\": \"Why is Zoidberg the only one still alone?\",
  \"attachments\": []
}" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}/drafts'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/messages/msg_55c8c149",
    "related": {
      "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
      "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
    }
  },
  "id": "msg_55c8c149",
  "type": "email",
  "is_inbound": true,
  "is_draft": false,
  "created_at": 1453770984.123,
  "blurb": "Anything less than immortality is a...",
  "author": {
    "_links": {
      "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
      "related": {
        "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
        "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
      }
    },
    "id": "tea_55c8c149",
    "email": "leela@planet-express.com",
    "username": "leela",
    "first_name": "Leela",
    "last_name": "Turanga",
    "is_admin": true,
    "is_available": true,
    "is_blocked": false
  },
  "recipients": [
    {
      "_links": {
        "related": {
          "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
        }
      },
      "handle": "calculon@momsbot.com",
      "role": "to"
    }
  ],
  "body": "Anything less than immortality is a complete waste of time.",
  "text": "Anything less than immortality is a complete waste of time.",
  "attachments": [
    {
      "filename": "attachment.jpg",
      "url": "https://api2.frontapp.com/download/fil_55c8c149",
      "content_type": "image/jpeg",
      "size": 10000,
      "metadata": {
        "is_inline": true,
        "cid": "123456789"
      }
    }
  ],
  "metadata": {}
}
```
Creates a new draft as a reply to the **last message in the conversation**.

If you want to create a new draft reply with attached files, please check [how to send multipart request](#send-multipart-request).

### HTTP Request

`POST https://api2.frontapp.com/conversations/{conversation_id}/drafts`
### Parameters


Name | Type | Description
-----|------|------------
conversation_id | string | ID of the conversation to create a reply as a draft

### Body


Name | Type | Description
-----|------|------------
channel_id | string | ID, or address of the channel from which the draft will be sent 
author_id | string | ID of the teammate on behalf of whom the draft will be created 
to | array (optional) | List of recipient handles who will receive the message once the draft is sent 
cc | array (optional) | List of recipient handles who will receive a copy of the message once the draft is sent 
bcc | array (optional) | List of the recipient handles who will receive a blind copy of the message once the draft is sent 
subject | string (optional) | Subject of the draft. 
body | string | Body of the draft. 
attachments | array (optional) | Binary data of the attached files. Available only for [multipart request](#send-multipart-request). 

## Edit an existing draft
```shell

curl --include \
     --request PATCH \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"version\": \"df68aca1e0521c4e47afd7014ed2a701-1-1572387985194-26fe\",
  \"channel_id\": \"cha_55c8c149\",
  \"author_id\": \"alt:email:leela@planet-express.com\",
  \"to\": [
    \"calculon@momsbot.com\"
  ],
  \"cc\": [],
  \"bcc\": [],
  \"body\": \"Why is Zoidberg the only one still alone?\",
  \"attachments\": []
}" \
'https://api2.frontapp.com/drafts/${DRAFT_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/messages/msg_55c8c149",
    "related": {
      "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
      "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
    }
  },
  "id": "msg_55c8c149",
  "type": "email",
  "is_inbound": true,
  "is_draft": false,
  "created_at": 1453770984.123,
  "blurb": "Anything less than immortality is a...",
  "author": {
    "_links": {
      "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
      "related": {
        "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
        "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
      }
    },
    "id": "tea_55c8c149",
    "email": "leela@planet-express.com",
    "username": "leela",
    "first_name": "Leela",
    "last_name": "Turanga",
    "is_admin": true,
    "is_available": true,
    "is_blocked": false
  },
  "recipients": [
    {
      "_links": {
        "related": {
          "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
        }
      },
      "handle": "calculon@momsbot.com",
      "role": "to"
    }
  ],
  "body": "Anything less than immortality is a complete waste of time.",
  "text": "Anything less than immortality is a complete waste of time.",
  "attachments": [
    {
      "filename": "attachment.jpg",
      "url": "https://api2.frontapp.com/download/fil_55c8c149",
      "content_type": "image/jpeg",
      "size": 10000,
      "metadata": {
        "is_inline": true,
        "cid": "123456789"
      }
    }
  ],
  "metadata": {}
}
```
Edits an existing draft. The `version` property is required to be sent within the request.

The **version** value belonging to the message is maintained in Front to track the most recent content of the message.

See [Notes on Versioning](#notes-on-versioning) for more information on the `version` value.

### HTTP Request

`PATCH https://api2.frontapp.com/drafts/{draft_id}`
### Parameters


Name | Type | Description
-----|------|------------
draft_id | string | ID of the draft to edit

### Body


Name | Type | Description
-----|------|------------
version | string | Version of the draft 
channel_id | string | ID, or address of the channel from which the draft will be sent 
author_id | string | ID of the teammate on behalf of whom the draft will be created 
to | array (optional) | List of recipient handles who will receive the message once the draft is sent 
cc | array (optional) | List of recipient handles who will receive a copy of the message once the draft is sent 
bcc | array (optional) | List of the recipient handles who will receive a blind copy of the message once the draft is sent 
subject | string (optional) | Subject of the draft. 
body | string | Body of the draft. 
attachments | array (optional) | Binary data of the attached files. Available only for [multipart request](#send-multipart-request). 

## Delete a draft
```shell

curl --include \
     --request DELETE \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"version\": \"df68aca1e0521c4e47afd7014ed2a701-1-1572387985194-26fe\"
}" \
'https://api2.frontapp.com/drafts/${DRAFT_ID}'
```

```node

```

> Response **204**

Deletes a draft message.

A **version** is required to be sent with the request, and must match the version of the draft in Front.

See [Notes on Versioning](#notes-on-versioning) for more information on the `version` value.

### HTTP Request

`DELETE https://api2.frontapp.com/drafts/{draft_id}`
### Parameters


Name | Type | Description
-----|------|------------
draft_id | string | Id of the message draft to Delete

### Body


Name | Type | Description
-----|------|------------
version | string | Version of the draft 

# Messages
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the message 
_links.related | object |  
_links.related.conversation | string | URL of the parent conversation 
_links.related.message_replied_to | string (optional) | URL of the message which have been replied to 
id | string | Unique identifier of the message 
type | enum | Type of the message 
is_inbound | boolean | Whether or not the message has been received or sent 
is_draft | boolean | Whether or not the message is a draft 
error_type | string (optional) | Type of the error when the draft failed to be sent 
version | string (optional) | The current version of the message in Front 
created_at | number | Date at which the message as been sent or received 
blurb | string | Preview of the message body 
author | Teammate (optional) | In case of a message sent from Front by a teammate, it will include the teammate who sent it 
recipients | array | List of the message recipients 
body | string | Body of the message 
text | string (optional) | Text version of the body for email messages 
attachments | array | List of files attached to the message 
metadata | object (optional) | Optional metadata about the message 
metadata.intercom_url | string (optional) | For `intercom` messages only. URL of the Intercom conversation the message is comming from. 
metadata.duration | number (optional) | For `truly-call` messages only. Length of the call in seconds. 
metadata.have_been_answered | boolean (optional) | For `truly-call` messages only. Whether or not the call have been answered. 
metadata.twitter_url | string (optional) | For `tweet` messages only. URL of the tweet. 
metadata.is_retweet | boolean (optional) | For `tweet` messages only. Whether or not the tweet is a retweet. 
metadata.have_been_retweeted | boolean (optional) | For `tweet` messages only. Whether or not the tweet have been retweeted. 
metadata.have_been_favorited | boolean (optional) | For `tweet` messages only. Whether or not the tweet have been favorited. 
metadata.thread_ref | string (optional) | For `custom` messages only. Custom reference which is used to thread messages. 
metadata.headers | object (optional) | For `custom` messages only. Custom object holding internal information. 

A message is a resource which can be either received or sent via an inbox. Messages are grouped by conversations.

A message can be either inbound (received) or outbound (sent). You can know if a message has been received or sent thanks to the boolean `is_inbound`.

Each message has a type depending on the channel it has been sent with:

| Type name    | Description                          |
|--------------|--------------------------------------|
| `email`      | Email message                        |
| `tweet`      | Message from Twitter                 |
| `tweet_dm`   | Direct Message from Twitter          |
| `sms`        | SMS message                          |
| `smooch`     | Message from Smooch                  |
| `facebook`   | Message from Facebook                |
| `intercom`   | Message from Intercom                |
| `call`       | Phone call                           |
| `custom`     | [Custom message](/channels-api.html) |

<aside class="notice">
In order to comply with <a href="https://developer.twitter.com/en/developer-terms/policy#f-be-a-good-partner-to-twitter">Twitter's API Terms & Conditions</a>, Twitter content is not distributed through Front API.<br>
The fields <code>blurb</code>, <code>body</code>, <code>text</code> as well as recipients' <code>handle</code> are replaced by the string <code>[REDACTED]</code> for messages of type <code>tweet</code> or <code>tweet_dm</code> only.
<br><br>
For those messages, the payload includes the field <code>metadata.external_id</code> containing the ID of the original Tweet or Twitter Direct Message that can be used to fetch its content from the Twitter API directly.
</aside>

### Opening a message in Front

To open a message in Front you need to open the URL `https://app.frontapp.com/open/{message_id}`.

## Get message
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/messages/${MESSAGE_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/messages/msg_55c8c149",
    "related": {
      "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
      "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
    }
  },
  "id": "msg_55c8c149",
  "type": "email",
  "is_inbound": true,
  "is_draft": false,
  "created_at": 1453770984.123,
  "blurb": "Anything less than immortality is a...",
  "author": {
    "_links": {
      "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
      "related": {
        "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
        "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
      }
    },
    "id": "tea_55c8c149",
    "email": "leela@planet-express.com",
    "username": "leela",
    "first_name": "Leela",
    "last_name": "Turanga",
    "is_admin": true,
    "is_available": true,
    "is_blocked": false
  },
  "recipients": [
    {
      "_links": {
        "related": {
          "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
        }
      },
      "handle": "calculon@momsbot.com",
      "role": "to"
    }
  ],
  "body": "Anything less than immortality is a complete waste of time.",
  "text": "Anything less than immortality is a complete waste of time.",
  "attachments": [
    {
      "filename": "attachment.jpg",
      "url": "https://api2.frontapp.com/download/fil_55c8c149",
      "content_type": "image/jpeg",
      "size": 10000,
      "metadata": {
        "is_inline": true,
        "cid": "123456789"
      }
    }
  ],
  "metadata": {}
}
```
Fetches the information of a message.

<aside class="notice">
You can request the source of a message by setting the <code>Accept</code> header to <code>"text/plain"</code>.<br />
Fetching the source of a message is available for email messages only.
</aside>

### HTTP Request

`GET https://api2.frontapp.com/messages/{message_id}`
### Parameters


Name | Type | Description
-----|------|------------
message_id | string | Id of the requested message

## Send new message
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"author_id\": \"alt:email:leela@planet-exress.com\",
  \"sender_name\": \"Leela\",
  \"subject\": \"Good news everyone!\",
  \"body\": \"Why is Zoidberg the only one still alone?\",
  \"text\": \"Why is Zoidberg the only one still alone?\",
  \"attachments\": [],
  \"options\": {
    \"tag_ids\": [],
    \"archive\": true
  },
  \"to\": [
    \"calculon@momsbot.com\"
  ],
  \"cc\": [],
  \"bcc\": []
}" \
'https://api2.frontapp.com/channels/${CHANNEL_ID}/messages'
```

```node

```

> Response **202**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/messages/msg_55c8c149",
    "related": {
      "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
      "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
    }
  },
  "id": "msg_55c8c149",
  "type": "email",
  "created_at": 1453770984.123,
  "author": {
    "_links": {
      "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
      "related": {
        "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
        "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
      }
    },
    "id": "tea_55c8c149",
    "email": "leela@planet-express.com",
    "username": "leela",
    "first_name": "Leela",
    "last_name": "Turanga",
    "is_admin": true,
    "is_available": true,
    "is_blocked": false
  },
  "recipients": [
    {
      "_links": {
        "related": {
          "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
        }
      },
      "handle": "calculon@momsbot.com",
      "role": "to"
    }
  ],
  "metadata": {},
  "is_inbound": false,
  "is_draft": true,
  "blurb": "Why is Zoidberg the only one still...",
  "body": "Why is Zoidberg the only one still alone?",
  "text": "Why is Zoidberg the only one still alone?",
  "attachments": []
}
```
Sends a new message from a channel. It will create a new conversation.

If you want to send a new message with attached files, please check [how to send multipart request](#send-multipart-request).

### HTTP Request

`POST https://api2.frontapp.com/channels/{channel_id}/messages`
### Parameters


Name | Type | Description
-----|------|------------
channel_id | string | Id or address of the channel from which to send the message

### Body


Name | Type | Description
-----|------|------------
author_id | string (optional) | ID of the teammate on behalf of whom the answer is sent 
sender_name | string (optional) | Name used for the sender info of the message 
subject | string (optional) | Subject of the message for email message 
body | string | Body of the message 
text | string (optional) | Text version of the body for messages with non-text body 
attachments | array (optional) | Binary data of the attached files. Available only for [multipart request](#send-multipart-request). 
options | object (optional) | Sending options 
options.tag_ids | array (optional) | List of tag IDs to add to the conversation 
options.archive | boolean (optional) | Archive the conversation right when sending the message (Default: `true`)
to | array | List of the recipient handles who will receive this message 
cc | array (optional) | List of the recipient handles who will receive a copy of this message 
bcc | array (optional) | List of the recipient handles who will receive a blind copy of this message 

## Send reply
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"author_id\": \"alt:email:leela@planet-exress.com\",
  \"sender_name\": \"Leela\",
  \"subject\": \"Good news everyone!\",
  \"body\": \"Why is Zoidberg the only one still alone?\",
  \"text\": \"Why is Zoidberg the only one still alone?\",
  \"attachments\": [],
  \"options\": {
    \"tag_ids\": [],
    \"archive\": true
  },
  \"channel_id\": \"cha_55c8c149\",
  \"to\": [],
  \"cc\": [],
  \"bcc\": []
}" \
'https://api2.frontapp.com/conversations/${CONVERSATION_ID}/messages'
```

```node

```

> Response **202**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/messages/msg_55c8c149",
    "related": {
      "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
      "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
    }
  },
  "id": "msg_55c8c149",
  "type": "email",
  "created_at": 1453770984.123,
  "author": {
    "_links": {
      "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
      "related": {
        "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
        "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
      }
    },
    "id": "tea_55c8c149",
    "email": "leela@planet-express.com",
    "username": "leela",
    "first_name": "Leela",
    "last_name": "Turanga",
    "is_admin": true,
    "is_available": true,
    "is_blocked": false
  },
  "recipients": [
    {
      "_links": {
        "related": {
          "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
        }
      },
      "handle": "calculon@momsbot.com",
      "role": "to"
    }
  ],
  "metadata": {},
  "is_inbound": false,
  "is_draft": true,
  "blurb": "Why is Zoidberg the only one still...",
  "body": "Why is Zoidberg the only one still alone?",
  "text": "Why is Zoidberg the only one still alone?",
  "attachments": []
}
```
Replies to a conversation by sending a message and appending it to the conversation.

If you want to send a reply with attached files, please check [how to send multipart request](#send-multipart-request).

### HTTP Request

`POST https://api2.frontapp.com/conversations/{conversation_id}/messages`
### Parameters


Name | Type | Description
-----|------|------------
conversation_id | string | Id of the conversation

### Body


Name | Type | Description
-----|------|------------
author_id | string (optional) | ID of the teammate on behalf of whom the answer is sent 
sender_name | string (optional) | Name used for the sender info of the message 
subject | string (optional) | Subject of the message for email message 
body | string | Body of the message 
text | string (optional) | Text version of the body for messages with non-text body 
attachments | array (optional) | Binary data of the attached files. Available only for [multipart request](#send-multipart-request). 
options | object (optional) | Sending options 
options.tag_ids | array (optional) | List of tag IDs to add to the conversation 
options.archive | boolean (optional) | Archive the conversation right when sending the message (Default: `true`)
channel_id | string (optional) | Channel through which to send the message. Defaults to the original conversation channel. For imported messages or messages received on multiple channels, you **MUST** specify a channel ID. 
to | array (optional) | List of the recipient handles who will receive this message. By default it will use the recipients of the last received message. 
cc | array (optional) | List of the recipient handles who will receive a copy of this message. By default it will use the cc'ed recipients of the last received message. 
bcc | array (optional) | List of the recipient handles who will receive a blind copy of this message 

## Import message
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"sender\": {
    \"handle\": \"calculon@momsbot.com\"
  },
  \"to\": [],
  \"cc\": [],
  \"bcc\": [],
  \"body\": \"\",
  \"external_id\": \"\",
  \"created_at\": 1453770984.123,
  \"tags\": [],
  \"attachments\": [],
  \"metadata\": {
    \"is_inbound\": true,
    \"is_archived\": true,
    \"should_skip_rules\": true
  }
}" \
'https://api2.frontapp.com/inboxes/${INBOX_ID}/imported_messages'
```

```node

```

> Response **202**

```json
{
  "message_uid": "3b1q41d8"
}
```
Appends a new message into an inbox.

If you want to import a message with attached files, please check [how to send multipart request](#send-multipart-request).

<aside class="notice">
Importing a message in Front is done asynchronously. <br>
The endpoint will only validate the payload and will return a <code>message_uid</code> that can be used as an alias for the message ID (<code>alt:uid:{message_uid}</code>.
<br><br>
We guarantee that the UID will refer to a message but we don't guarantee that the message already exists. The API might respond with a 404 error code if trying to use the UID before the message is effectively created.
</aside>

<aside class="warning">
Imported messages will <strong>NOT</strong> be linked to any channel until a reply is sent. When replying to a conversation with no channels, you <strong>MUST</strong> choose from which channel to send the message.
</aside>

### HTTP Request

`POST https://api2.frontapp.com/inboxes/{inbox_id}/imported_messages`
### Parameters


Name | Type | Description
-----|------|------------
inbox_id | string | Id of the inbox into which the message should be append.

### Body


Name | Type | Description
-----|------|------------
sender | object |  
sender.handle | string | Handle used to reach the contact. Can be an email address, a twitter, handle, a phone number, custom handle ... 
sender.name | string (optional) | Name of the contact. 
sender.author_id | string (optional) | ID of the teammate who is the author of the message. Ignored if the message is inbound. 
to | array | List of recipient handles who received the message. 
cc | array (optional) | List of recipient handles who received a copy of the message. 
bcc | array (optional) | List of the recipeient handles who received a blind copy of the message. 
subject | string (optional) | Subject of the message. 
body | string | Body of the message. 
body_format | enum (optional) | Format of the message body. Ignored if the message type is not `email`. Can be one of: `'html'`, `'markdown'`. (Default: `'markdown'`)
external_id | string | External identifier of the message. Front won't import two messages with the same external ID. 
created_at | number | Date at which the message as been sent or received. 
type | enum (optional) | Type of the message to import. Can be one of: `'email'`, `'sms'`, `'intercom'`, `'custom'`. (Default: `'email'`)
assignee_id | string (optional) | ID of the teammate who will be assigned to the conversation. 
tags | array (optional) | List of tag names to add to the conversation (unknown tags will automatically be created). 
attachments | array (optional) | Binary data of the attached files. Available only for [multipart request](#send-multipart-request). 
metadata | object |  
metadata.thread_ref | string (optional) | Custom reference which will be used to thread messages. If you omit this field, we'll thread by sender instead. 
metadata.is_inbound | boolean | Whether or not the message is received (inbound) or sent (outbound) by you. 
metadata.is_archived | boolean (optional) | Whether or not the message should be directly archived once imported. (Default: `true`)
metadata.should_skip_rules | boolean (optional) | Whether or not the rules should apply to this message. (Default: `true`)

# Contacts
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the contact 
_links.related | object |  
_links.related.notes | string | URL to list the notes associated to the contact 
_links.related.conversations | string | URL to list the URL associated to the contact 
_links.related.owner | string | URL of the team or teammate of the contact 
id | string | Unique identifier of the contact 
name | string | Contact name 
description | string | Contact description 
avatar_url | string | URL of the contact's avatar 
is_spammer | boolean | Whether or not the contact is a spammer 
links | array | A set of URL associated to the contact 
handles | array | List of the handles and sources with which the contact is reachable. 
groups | array | List of the groups the contact belongs to. 
updated_at | number (optional) | Timestamp of the last update 
custom_fields | object |  
custom_fields.job title | string |  
custom_fields.custom field name | string |  
is_private | boolean | Whether or not the contact is individual 

A contact is a person/entity with whom you have communicated.

A contact has several handles to send messages to it. A handle has a source to identify which inbox can send message to this contact:

| Source     | Description                                                           | Example of handle       |
|------------|-----------------------------------------------------------------------|-------------------------|
| `email`    | An email address                                                      | `calculon@pmomsbot.com` |
| `phone`    | A phone number                                                        | `+123445678900 `        |
| `twitter`  | A twitter handle                                                      | `@calculon`             |
| `facebook` | A Facebook user ID                                                    |                         |
| `intercom` | An Intercom user ID                                                   |                         |
| `smooch`   | A Smooch user ID                                                      |                         |
| `custom`   | Custom handle provided in the [API endpoint](#receive-custom-message) |                         |

Each pair handle/source is unique. If you want to move an existing handle from one contact to an other, you need to delete it from the first one and add it to the other one.

<aside class="notice">
You can use a contact source/handle pair as an alias for its ID.<br>
A contact ID alias follows the pattern <code>alt:{source}:{handle}</code>.
</aside>

## List contacts
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/contacts?q=${Q}&page_token=${PAGE_TOKEN}&limit=${LIMIT}&sort_by=${SORT_BY}&sort_order=${SORT_ORDER}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/contacts"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/contacts/crd_55c8c149",
        "related": {
          "notes": "https://api2.frontapp.com/contacts/crd_55c8c149/notes",
          "conversations": "https://api2.frontapp.com/contacts/crd_55c8c149/conversations",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "crd_55c8c149",
      "name": "Calculon",
      "description": "#vip #robot #RIP",
      "avatar_url": "http://example.com/calculon.jpg",
      "is_spammer": true,
      "links": [
        "http://example.com"
      ],
      "handles": [
        {
          "handle": "@calculon",
          "source": "twitter"
        }
      ],
      "groups": [
        {
          "_links": {
            "self": "https://api2.frontapp.com/contacts/grp_55c8c149",
            "related": {
              "contacts": "https://api2.frontapp.com/contact_groups/grp_55c8c149/contacts",
              "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
            }
          },
          "id": "grp_55c8c149",
          "name": "Customers",
          "is_private": false
        }
      ],
      "updated_at": 0,
      "custom_fields": {
        "job title": "engineer",
        "custom field name": "your value"
      },
      "is_private": false
    }
  ]
}
```
List all the contacts.

<aside class="notice">
You can list the contacts of a specific teammate or team by using the endpoints <code>/teammates/{teammate_id}/contacts</code> or <code>/teams/{team_id}/contacts</code>.
</aside>

### HTTP Request

`GET https://api2.frontapp.com/contacts?q={q}&page_token={page_token}&limit={limit}&sort_by={sort_by}&sort_order={sort_order}`
### Parameters


Name | Type | Description
-----|------|------------
q | object (optional) | Search query. See Search Parameters
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)
sort_by | string (optional) | Field to use to sort the contacts.
sort_order | string (optional) | Order by which the results should be sorted. Accepted values are `desc` or `asc` (Defaults to `desc`)

## Get contact
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/contacts/${CONTACT_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/contacts/crd_55c8c149",
    "related": {
      "notes": "https://api2.frontapp.com/contacts/crd_55c8c149/notes",
      "conversations": "https://api2.frontapp.com/contacts/crd_55c8c149/conversations",
      "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
    }
  },
  "id": "crd_55c8c149",
  "name": "Calculon",
  "description": "#vip #robot #RIP",
  "avatar_url": "http://example.com/calculon.jpg",
  "is_spammer": true,
  "links": [
    "http://example.com"
  ],
  "handles": [
    {
      "handle": "@calculon",
      "source": "twitter"
    }
  ],
  "groups": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/contacts/grp_55c8c149",
        "related": {
          "contacts": "https://api2.frontapp.com/contact_groups/grp_55c8c149/contacts",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "grp_55c8c149",
      "name": "Customers",
      "is_private": false
    }
  ],
  "updated_at": 0,
  "custom_fields": {
    "job title": "engineer",
    "custom field name": "your value"
  },
  "is_private": false
}
```
Fetches the information of a contact. See [resource aliases](#resource-aliases) to fetch by handle.

### HTTP Request

`GET https://api2.frontapp.com/contacts/{contact_id}`
### Parameters


Name | Type | Description
-----|------|------------
contact_id | string | Id or alias of the requested contact

## Update contact
```shell

curl --include \
     --request PATCH \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"name\": \"Calculon\",
  \"description\": \"#vip #robot #RIP\",
  \"is_spammer\": true,
  \"links\": [
    \"http://example.com\"
  ],
  \"group_names\": [
    \"Customers\"
  ],
  \"custom_fields\": {
    \"job title\": \"engineer\",
    \"custom field name\": \"your value\"
  }
}" \
'https://api2.frontapp.com/contacts/${CONTACT_ID}'
```

```node

```

> Response **204**

Updates a contact information.

If you want to update a contact's avatar, please check [how to send multipart request](#send-multipart-request).

### HTTP Request

`PATCH https://api2.frontapp.com/contacts/{contact_id}`
### Parameters


Name | Type | Description
-----|------|------------
contact_id | string | Id or alias of the requested contact

### Body


Name | Type | Description
-----|------|------------
name | string (optional) | Contact name 
description | string (optional) | Contact description 
avatar | string (optional) | Binary data of the image to use as the contact avatar. Available only for [multipart request](#send-multipart-request). 
is_spammer | boolean (optional) | Whether or not the contact is marked as a spammer 
links | array (optional) | List of all the links of the contact 
group_names | array (optional) | List of all the group names the contact belongs to. It will automatically create missing groups. 
custom_fields | object (optional) | Custom field attributes for this contact. Leave empty if you do not wish to update the attributes. Not sending existing attributes will automatically remove them. 
custom_fields.job title | string | A custom field name defined in your company custom fields 
custom_fields.custom field name | string | A custom field name defined in your company custom fields 

## Create contact
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"name\": \"Calculon\",
  \"description\": \"#vip #robot #RIP\",
  \"is_spammer\": true,
  \"links\": [
    \"http://example.com\"
  ],
  \"group_names\": [
    \"Customers\"
  ],
  \"custom_fields\": {
    \"job title\": \"engineer\",
    \"custom field name\": \"your value\"
  },
  \"handles\": [
    {
      \"handle\": \"@calculon\",
      \"source\": \"twitter\"
    }
  ]
}" \
'https://api2.frontapp.com/contacts'
```

```node

```

> Response **201**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/contacts/crd_55c8c149",
    "related": {
      "notes": "https://api2.frontapp.com/contacts/crd_55c8c149/notes",
      "conversations": "https://api2.frontapp.com/contacts/crd_55c8c149/conversations",
      "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
    }
  },
  "id": "crd_55c8c149",
  "name": "Calculon",
  "description": "#vip #robot #RIP",
  "avatar_url": "http://example.com/calculon.jpg",
  "is_spammer": true,
  "links": [
    "http://example.com"
  ],
  "handles": [
    {
      "handle": "@calculon",
      "source": "twitter"
    }
  ],
  "groups": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/contacts/grp_55c8c149",
        "related": {
          "contacts": "https://api2.frontapp.com/contact_groups/grp_55c8c149/contacts",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "grp_55c8c149",
      "name": "Customers",
      "is_private": false
    }
  ],
  "updated_at": 0,
  "custom_fields": {
    "job title": "engineer",
    "custom field name": "your value"
  },
  "is_private": false
}
```
Creates a new contact for the default team.

<aside class="notice">
You can create a contact for a specific teammate or team by using the endpoints <code>/teammates/{teammate_id}/contacts</code> or <code>/teams/{team_id}/contacts</code>.
</aside>

If you want to create a contact with an avatar, please check [how to send multipart request](#send-multipart-request).
If your request includes custom field attributes, datetime fields **MUST** be sent as a timestamp, in seconds.

### HTTP Request

`POST https://api2.frontapp.com/contacts`
### Body


Name | Type | Description
-----|------|------------
name | string (optional) | Contact name 
description | string (optional) | Contact description 
avatar | string (optional) | Binary data of the image to use as the contact avatar. Available only for [multipart request](#send-multipart-request). 
is_spammer | boolean (optional) | Whether or not the contact is marked as a spammer 
links | array (optional) | List of all the links of the contact 
group_names | array (optional) | List of all the group names the contact belongs to. It will automatically create missing groups. 
custom_fields | object (optional) | Custom field attributes for this contact. Leave empty if you do not wish to update the attributes. Not sending existing attributes will automatically remove them. 
custom_fields.job title | string | A custom field name defined in your company custom fields 
custom_fields.custom field name | string | A custom field name defined in your company custom fields 
handles | array | List of the contact handles 

## Delete contact
```shell

curl --include \
     --request DELETE \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/contacts/${CONTACT_ID}'
```

```node

```

> Response **204**

Deletes a contact.

### HTTP Request

`DELETE https://api2.frontapp.com/contacts/{contact_id}`
### Parameters


Name | Type | Description
-----|------|------------
contact_id | string | Id or alias of the requested contact

## List contact conversations
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/contacts/${CONTACT_ID}/conversations?q=${Q}&page_token=${PAGE_TOKEN}&limit=${LIMIT}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/contacts/crd_55c8c149/conversations"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/conversations/cnv_55c8c149",
        "related": {
          "events": "https://api2.frontapp.com/conversations/cnv_55c8c149/events",
          "followers": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers",
          "messages": "https://api2.frontapp.com/conversations/cnv_55c8c149/messages",
          "comments": "https://api2.frontapp.com/conversations/cnv_55c8c149/comments",
          "inboxes": "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
        }
      },
      "id": "cnv_55c8c149",
      "subject": "You broke my heart, Hubert.",
      "status": "archived",
      "assignee": {
        "_links": {
          "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
          "related": {
            "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
            "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
          }
        },
        "id": "tea_55c8c149",
        "email": "leela@planet-express.com",
        "username": "leela",
        "first_name": "Leela",
        "last_name": "Turanga",
        "is_admin": true,
        "is_available": true,
        "is_blocked": false
      },
      "recipient": {
        "_links": {
          "related": {
            "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
          }
        },
        "handle": "calculon@momsbot.com",
        "role": "to"
      },
      "tags": [
        {
          "_links": {
            "self": "https://api2.frontapp.com/tags/tag_55c8c149",
            "related": {
              "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
              "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
              "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
            }
          },
          "id": "tag_55c8c149",
          "name": "Robots",
          "highlight": "blue",
          "is_private": false,
          "created_at": 0,
          "updated_at": 0
        }
      ],
      "last_message": {
        "_links": {
          "self": "https://api2.frontapp.com/messages/msg_55c8c149",
          "related": {
            "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
            "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
          }
        },
        "id": "msg_55c8c149",
        "type": "email",
        "is_inbound": true,
        "is_draft": false,
        "created_at": 1453770984.123,
        "blurb": "Anything less than immortality is a...",
        "author": {
          "_links": {
            "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
            "related": {
              "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
              "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
            }
          },
          "id": "tea_55c8c149",
          "email": "leela@planet-express.com",
          "username": "leela",
          "first_name": "Leela",
          "last_name": "Turanga",
          "is_admin": true,
          "is_available": true,
          "is_blocked": false
        },
        "recipients": [
          {
            "_links": {
              "related": {
                "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
              }
            },
            "handle": "calculon@momsbot.com",
            "role": "to"
          }
        ],
        "body": "Anything less than immortality is a complete waste of time.",
        "text": "Anything less than immortality is a complete waste of time.",
        "attachments": [
          {
            "filename": "attachment.jpg",
            "url": "https://api2.frontapp.com/download/fil_55c8c149",
            "content_type": "image/jpeg",
            "size": 10000,
            "metadata": {
              "is_inline": true,
              "cid": "123456789"
            }
          }
        ],
        "metadata": {}
      },
      "created_at": 1453770984.123,
      "is_private": false
    }
  ]
}
```
Lists all the conversations with a contact in reverse chronological order (most recently updated first).

### HTTP Request

`GET https://api2.frontapp.com/contacts/{contact_id}/conversations?q={q}&page_token={page_token}&limit={limit}`
### Parameters


Name | Type | Description
-----|------|------------
q | object (optional) | Search query. See Search Parameters
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)
contact_id | string | Id or alias of the requested contact

# Contact groups
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the group 
_links.related | object |  
_links.related.contacts | string | URL to list of contacts in the group 
_links.related.owner | string | URL of the team or teammate of the contact group 
id | string | Unique identifier of the group 
name | string | Name of the group 
is_private | boolean | Whether or not the contact is individual 



## List groups
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/contact_groups'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/contact_groups"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/contacts/grp_55c8c149",
        "related": {
          "contacts": "https://api2.frontapp.com/contact_groups/grp_55c8c149/contacts",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "grp_55c8c149",
      "name": "Customers",
      "is_private": false
    }
  ]
}
```
Lists all the contact groups.

<aside class="notice">
You can list the contact groups of a specific teammate or team by using the endpoints <code>/teammates/{teammate_id}/contact_groups</code> or <code>/teams/{team_id}/contact_groups</code>.
</aside>

### HTTP Request

`GET https://api2.frontapp.com/contact_groups`
## Create group
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"name\": \"Customers\"
}" \
'https://api2.frontapp.com/contact_groups'
```

```node

```

> Response **201**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/contacts/grp_55c8c149",
    "related": {
      "contacts": "https://api2.frontapp.com/contact_groups/grp_55c8c149/contacts",
      "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
    }
  },
  "id": "grp_55c8c149",
  "name": "Customers",
  "is_private": false
}
```
Creates a new contact group in the default team.

<aside class="notice">
You can create a contact group for a specific teammate or team by using the endpoints <code>/teammates/{teammate_id}/contact_groups</code> or <code>/teams/{team_id}/contact_groups</code>.
</aside>

### HTTP Request

`POST https://api2.frontapp.com/contact_groups`
### Body


Name | Type | Description
-----|------|------------
name | string | Name of the group 

## Delete group
```shell

curl --include \
     --request DELETE \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/contact_groups/${GROUP_ID}'
```

```node

```

> Response **204**

Deletes a contact group. Will **not** delete the contacts in this group.

### HTTP Request

`DELETE https://api2.frontapp.com/contact_groups/{group_id}`
### Parameters


Name | Type | Description
-----|------|------------
group_id | string | Id of the requested group

## List contacts in a group
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/contact_groups/${GROUP_ID}/contacts?page_token=${PAGE_TOKEN}&limit=${LIMIT}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/contact_groups/grp_55c8c149/contacts"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/contacts/crd_55c8c149",
        "related": {
          "notes": "https://api2.frontapp.com/contacts/crd_55c8c149/notes",
          "conversations": "https://api2.frontapp.com/contacts/crd_55c8c149/conversations",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "crd_55c8c149",
      "name": "Calculon",
      "description": "#vip #robot #RIP",
      "avatar_url": "http://example.com/calculon.jpg",
      "is_spammer": true,
      "links": [
        "http://example.com"
      ],
      "handles": [
        {
          "handle": "@calculon",
          "source": "twitter"
        }
      ],
      "groups": [
        {
          "_links": {
            "self": "https://api2.frontapp.com/contacts/grp_55c8c149",
            "related": {
              "contacts": "https://api2.frontapp.com/contact_groups/grp_55c8c149/contacts",
              "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
            }
          },
          "id": "grp_55c8c149",
          "name": "Customers",
          "is_private": false
        }
      ],
      "updated_at": 0,
      "custom_fields": {
        "job title": "engineer",
        "custom field name": "your value"
      },
      "is_private": false
    }
  ]
}
```
Lists all the contacts belonging to the requested group.

### HTTP Request

`GET https://api2.frontapp.com/contact_groups/{group_id}/contacts?page_token={page_token}&limit={limit}`
### Parameters


Name | Type | Description
-----|------|------------
group_id | string | Id of the requested group
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)

## Add contacts in a group
```shell

curl --include \
     --request POST \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/contact_groups/${GROUP_ID}/contacts'
```

```node

```

> Response **204**

Adds a list of contacts in the requested group

### HTTP Request

`POST https://api2.frontapp.com/contact_groups/{group_id}/contacts`
### Parameters


Name | Type | Description
-----|------|------------
group_id | string | Id of the requested group

### Body


Name | Type | Description
-----|------|------------
contact_ids | array | List of ids or aliases of the contacts to add in the requested group 

# Contact handles
> 
Name | Type | Description
-----|------|------------
handle | string | Handle used to reach the contact. Can be an email address, a twitter, handle, a phone number, custom handle ... 
source | enum | Can be 'twitter', 'email', 'phone' or 'custom'. 



## Add contact handle
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"handle\": \"@calculon\",
  \"source\": \"twitter\"
}" \
'https://api2.frontapp.com/contacts/${CONTACT_ID}/handles'
```

```node

```

> Response **204**

Adds a new handle/source to a contact.

### HTTP Request

`POST https://api2.frontapp.com/contacts/{contact_id}/handles`
### Parameters


Name | Type | Description
-----|------|------------
contact_id | string | Id or alias of the requested contact

### Body


Name | Type | Description
-----|------|------------
handle | string | Handle used to reach the contact. Can be an email address, a twitter, handle, a phone number, custom handle ... 
source | enum | Can be 'twitter', 'email', 'phone' or 'custom'. 

## Delete contact handle
```shell

curl --include \
     --request DELETE \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"handle\": \"@calculon\",
  \"source\": \"twitter\"
}" \
'https://api2.frontapp.com/contacts/${CONTACT_ID}/handles'
```

```node

```

> Response **204**

Removes a handle/source from a contact.

If the handle is the last handle of the contact, the API will return a 400 HTTP status code error.

<aside class="warning">
Setting <code>force</code> to true will delete the contact if the handle to delete is the last one of the contact.
</aside>

### HTTP Request

`DELETE https://api2.frontapp.com/contacts/{contact_id}/handles`
### Parameters


Name | Type | Description
-----|------|------------
contact_id | string | Id or alias of the requested contact

### Body


Name | Type | Description
-----|------|------------
handle | string | Handle used to reach the contact. Can be an email address, a twitter, handle, a phone number, custom handle ... 
source | enum | Can be 'twitter', 'email', 'phone' or 'custom'. 
force | boolean (optional) | Force the deletetion of the contact if the handle is the last one (Defaults to `false`) 

# Contact notes
> 
Name | Type | Description
-----|------|------------
author | Teammate | Teammate who wrote the note 
body | string | Content of the note 
created_at | number | Date at which the note have been created 



## List contact notes
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/contacts/${CONTACT_ID}/notes'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/contacts/crd_55c8c149/notes"
  },
  "_results": [
    {
      "author": {
        "_links": {
          "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
          "related": {
            "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
            "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
          }
        },
        "id": "tea_55c8c149",
        "email": "leela@planet-express.com",
        "username": "leela",
        "first_name": "Leela",
        "last_name": "Turanga",
        "is_admin": true,
        "is_available": true,
        "is_blocked": false
      },
      "body": "Calculon is a celebrated actor",
      "created_at": 1453770984.123
    }
  ]
}
```
Lists the notes added to a contact.

### HTTP Request

`GET https://api2.frontapp.com/contacts/{contact_id}/notes`
### Parameters


Name | Type | Description
-----|------|------------
contact_id | string | Id or alias of the requested contact

## Add a note
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"author_id\": \"alt:email:leela@planet-express.com\",
  \"body\": \"Calculon is a celebrated actor\"
}" \
'https://api2.frontapp.com/contacts/${CONTACT_ID}/notes'
```

```node

```

> Response **201**

```json
{
  "author": {
    "_links": {
      "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
      "related": {
        "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
        "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
      }
    },
    "id": "tea_55c8c149",
    "email": "leela@planet-express.com",
    "username": "leela",
    "first_name": "Leela",
    "last_name": "Turanga",
    "is_admin": true,
    "is_available": true,
    "is_blocked": false
  },
  "body": "Calculon is a celebrated actor",
  "created_at": 1453770984.123
}
```
Adds a new note to a contact.

### HTTP Request

`POST https://api2.frontapp.com/contacts/{contact_id}/notes`
### Parameters


Name | Type | Description
-----|------|------------
contact_id | string | Id or alias of the requested contact

### Body


Name | Type | Description
-----|------|------------
author_id | string | ID of the teammate creating the note 
body | string | Content of the note 

# Tags
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the tag 
_links.related | object |  
_links.related.conversations | string | URL of the list of conversations tagged with this tag 
_links.related.owner | string | URL of the team or teammate of the tag 
_links.related.parent_tag: `https://api2.frontapp.com/tags/tag_55c8c140` | string (optional) | URL of the parent tag 
_links.related.children | string (optional) | URL of the list of the tag's child tags 
id | string | Unique identifier of the tag 
name | string | Name of the tag 
highlight | enum | Highlight color of the tag. Can be one of: `grey`, `pink`, `red`, `orange`, `yellow`, `green`, `light-blue`, `blue` or `purple`. 
is_private | boolean | Whether or not the tag is individual 
created_at | number (optional) | Timestamp of tag create creation 
updated_at | number (optional) | Timestamp of the last tag update 

A tag is a label that can be used to classify conversations.

A tag has an optional `highlight` field which represents the color to highlight the tag with in Front.  
Supported values for highlight colors are:

| Color Preview                                      | Color value  |
|----------------------------------------------------|--------------|
| ![#](https://placehold.it/15/9b9c9e/000000?text=+) | `grey`       |
| ![#](https://placehold.it/15/ff338f/000000?text=+) | `pink`       |
| ![#](https://placehold.it/15/ff4433/000000?text=+) | `red`        |
| ![#](https://placehold.it/15/ff901a/000000?text=+) | `orange`     |
| ![#](https://placehold.it/15/facc25/000000?text=+) | `yellow`     |
| ![#](https://placehold.it/15/14cc52/000000?text=+) | `green`      |
| ![#](https://placehold.it/15/2bd5ff/000000?text=+) | `teal`       |
| ![#](https://placehold.it/15/367fee/000000?text=+) | `blue`       |
| ![#](https://placehold.it/15/a238ff/000000?text=+) | `purple`     |

Tags can have a parent - child relationship with other tags.

## List tags
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/tags'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/tags"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/tags/tag_55c8c149",
        "related": {
          "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
          "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
        }
      },
      "id": "tag_55c8c149",
      "name": "Robots",
      "highlight": "blue",
      "is_private": false,
      "created_at": 0,
      "updated_at": 0
    }
  ]
}
```
Lists all the tags.

<aside class="notice">
You can list the tags of a specific teammate or team by using the endpoints <code>/teammates/{teammate_id}/tags</code> or <code>/teams/{team_id}/tags</code>.
</aside>

### HTTP Request

`GET https://api2.frontapp.com/tags`
## Create tag
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"name\": \"Robots\",
  \"highlight\": \"blue\"
}" \
'https://api2.frontapp.com/tags'
```

```node

```

> Response **201**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/tags/tag_55c8c149",
    "related": {
      "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
      "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
      "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
    }
  },
  "id": "tag_55c8c149",
  "name": "Robots",
  "highlight": "blue",
  "is_private": false,
  "created_at": 0,
  "updated_at": 0
}
```
Creates a new tag in the default team.

<aside class="notice">
You can create a tag for a specific teammate or team by using the endpoints <code>/teammates/{teammate_id}/tags</code> or <code>/teams/{team_id}/tags</code>.
<br>
You can create a child tag for a specific tag by using the endpoint <code>/tags/{tag_id}/children</code>.
</aside>

### HTTP Request

`POST https://api2.frontapp.com/tags`
### Body


Name | Type | Description
-----|------|------------
name | string | Name of the tag to create. 
highlight | enum (optional) | Color to highlight the tag with. Can be one of: `grey`, `pink`, `red`, `orange`, `yellow`, `green`, `light-blue`, `blue` or `purple`. 

## Get tag
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/tags/${TAG_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/tags/tag_55c8c149",
    "related": {
      "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
      "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
      "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
    }
  },
  "id": "tag_55c8c149",
  "name": "Robots",
  "highlight": "blue",
  "is_private": false,
  "created_at": 0,
  "updated_at": 0
}
```
Fetches the information of a tag.

### HTTP Request

`GET https://api2.frontapp.com/tags/{tag_id}`
### Parameters


Name | Type | Description
-----|------|------------
tag_id | string | ID of the requested tag

## Update tag
```shell

curl --include \
     --request PATCH \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"name\": \"Robots\",
  \"highlight\": \"blue\",
  \"parent_tag_id\": \"tag_55c8c148\"
}" \
'https://api2.frontapp.com/tags/${TAG_ID}'
```

```node

```

> Response **204**

Updates a tag.

### HTTP Request

`PATCH https://api2.frontapp.com/tags/{tag_id}`
### Parameters


Name | Type | Description
-----|------|------------
tag_id | string | ID of the requested tag

### Body


Name | Type | Description
-----|------|------------
name | string (optional) | Name of the tag to create. 
highlight | string (optional) | Color to highlight the tag with. Set to `null` to remove highlighting. 
parent_tag_id | string (optional) | ID of the parent of this tag. Set to `null` to remove the parent tag. 

## Delete tag
```shell

curl --include \
     --request DELETE \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/tags/${TAG_ID}'
```

```node

```

> Response **204**

Deletes a tag.

### HTTP Request

`DELETE https://api2.frontapp.com/tags/{tag_id}`
### Parameters


Name | Type | Description
-----|------|------------
tag_id | string | ID of the requested tag

## List tag conversations
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/tags/${TAG_ID}/conversations?q=${Q}&page_token=${PAGE_TOKEN}&limit=${LIMIT}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/tags/tag_55c8c149/conversations"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/conversations/cnv_55c8c149",
        "related": {
          "events": "https://api2.frontapp.com/conversations/cnv_55c8c149/events",
          "followers": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers",
          "messages": "https://api2.frontapp.com/conversations/cnv_55c8c149/messages",
          "comments": "https://api2.frontapp.com/conversations/cnv_55c8c149/comments",
          "inboxes": "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
        }
      },
      "id": "cnv_55c8c149",
      "subject": "You broke my heart, Hubert.",
      "status": "archived",
      "assignee": {
        "_links": {
          "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
          "related": {
            "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
            "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
          }
        },
        "id": "tea_55c8c149",
        "email": "leela@planet-express.com",
        "username": "leela",
        "first_name": "Leela",
        "last_name": "Turanga",
        "is_admin": true,
        "is_available": true,
        "is_blocked": false
      },
      "recipient": {
        "_links": {
          "related": {
            "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
          }
        },
        "handle": "calculon@momsbot.com",
        "role": "to"
      },
      "tags": [
        {
          "_links": {
            "self": "https://api2.frontapp.com/tags/tag_55c8c149",
            "related": {
              "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
              "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
              "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
            }
          },
          "id": "tag_55c8c149",
          "name": "Robots",
          "highlight": "blue",
          "is_private": false,
          "created_at": 0,
          "updated_at": 0
        }
      ],
      "last_message": {
        "_links": {
          "self": "https://api2.frontapp.com/messages/msg_55c8c149",
          "related": {
            "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
            "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
          }
        },
        "id": "msg_55c8c149",
        "type": "email",
        "is_inbound": true,
        "is_draft": false,
        "created_at": 1453770984.123,
        "blurb": "Anything less than immortality is a...",
        "author": {
          "_links": {
            "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
            "related": {
              "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
              "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
            }
          },
          "id": "tea_55c8c149",
          "email": "leela@planet-express.com",
          "username": "leela",
          "first_name": "Leela",
          "last_name": "Turanga",
          "is_admin": true,
          "is_available": true,
          "is_blocked": false
        },
        "recipients": [
          {
            "_links": {
              "related": {
                "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
              }
            },
            "handle": "calculon@momsbot.com",
            "role": "to"
          }
        ],
        "body": "Anything less than immortality is a complete waste of time.",
        "text": "Anything less than immortality is a complete waste of time.",
        "attachments": [
          {
            "filename": "attachment.jpg",
            "url": "https://api2.frontapp.com/download/fil_55c8c149",
            "content_type": "image/jpeg",
            "size": 10000,
            "metadata": {
              "is_inline": true,
              "cid": "123456789"
            }
          }
        ],
        "metadata": {}
      },
      "created_at": 1453770984.123,
      "is_private": false
    }
  ]
}
```
Lists all the conversations tagged with a specific tag.

### HTTP Request

`GET https://api2.frontapp.com/tags/{tag_id}/conversations?q={q}&page_token={page_token}&limit={limit}`
### Parameters


Name | Type | Description
-----|------|------------
tag_id | string | ID of the requested tag
q | object (optional) | Search query. See Search Parameters
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)

## List tag children
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/tags/${TAG_ID}/children'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/tags/tag_55c8c149/children"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/tags/tag_55c8c149",
        "related": {
          "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
          "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
        }
      },
      "id": "tag_55c8c149",
      "name": "Robots",
      "highlight": "blue",
      "is_private": false,
      "created_at": 0,
      "updated_at": 0
    }
  ]
}
```
Lists the first level of children of the requested tag.

### HTTP Request

`GET https://api2.frontapp.com/tags/{tag_id}/children`
### Parameters


Name | Type | Description
-----|------|------------
tag_id | string | ID of the requested tag

## Create child tag
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"name\": \"Robots\",
  \"highlight\": \"blue\"
}" \
'https://api2.frontapp.com/tags/${TAG_ID}/children'
```

```node

```

> Response **201**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/tags/tag_55c8c149",
    "related": {
      "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
      "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
      "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
    }
  },
  "id": "tag_55c8c149",
  "name": "Robots",
  "highlight": "blue",
  "is_private": false,
  "created_at": 0,
  "updated_at": 0
}
```
Creates a new child tag for the given tag.

### HTTP Request

`POST https://api2.frontapp.com/tags/{tag_id}/children`
### Parameters


Name | Type | Description
-----|------|------------
tag_id | string | ID of the requested tag

### Body


Name | Type | Description
-----|------|------------
name | string | Name of the tag to create. 
highlight | enum (optional) | Color to highlight the tag with. Can be one of: `grey`, `pink`, `red`, `orange`, `yellow`, `green`, `light-blue`, `blue` or `purple`. 

# Topics
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the topic 
_links.related | object |  
_links.related.conversations | string | URL of the list of conversations associated to this topic 
id | string | Unique identifier of the topic 
name | string | Name of the topic 
url | string | URL of the topic 

A topic is a specific kind of tag that links to an external platform.

## List topic conversations
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/topics/${TOPIC_ID}/conversations?q=${Q}&page_token=${PAGE_TOKEN}&limit=${LIMIT}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/topics/top_55c8c149/conversations"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/conversations/cnv_55c8c149",
        "related": {
          "events": "https://api2.frontapp.com/conversations/cnv_55c8c149/events",
          "followers": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers",
          "messages": "https://api2.frontapp.com/conversations/cnv_55c8c149/messages",
          "comments": "https://api2.frontapp.com/conversations/cnv_55c8c149/comments",
          "inboxes": "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
        }
      },
      "id": "cnv_55c8c149",
      "subject": "You broke my heart, Hubert.",
      "status": "archived",
      "assignee": {
        "_links": {
          "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
          "related": {
            "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
            "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
          }
        },
        "id": "tea_55c8c149",
        "email": "leela@planet-express.com",
        "username": "leela",
        "first_name": "Leela",
        "last_name": "Turanga",
        "is_admin": true,
        "is_available": true,
        "is_blocked": false
      },
      "recipient": {
        "_links": {
          "related": {
            "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
          }
        },
        "handle": "calculon@momsbot.com",
        "role": "to"
      },
      "tags": [
        {
          "_links": {
            "self": "https://api2.frontapp.com/tags/tag_55c8c149",
            "related": {
              "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
              "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
              "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
            }
          },
          "id": "tag_55c8c149",
          "name": "Robots",
          "highlight": "blue",
          "is_private": false,
          "created_at": 0,
          "updated_at": 0
        }
      ],
      "last_message": {
        "_links": {
          "self": "https://api2.frontapp.com/messages/msg_55c8c149",
          "related": {
            "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
            "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
          }
        },
        "id": "msg_55c8c149",
        "type": "email",
        "is_inbound": true,
        "is_draft": false,
        "created_at": 1453770984.123,
        "blurb": "Anything less than immortality is a...",
        "author": {
          "_links": {
            "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
            "related": {
              "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
              "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
            }
          },
          "id": "tea_55c8c149",
          "email": "leela@planet-express.com",
          "username": "leela",
          "first_name": "Leela",
          "last_name": "Turanga",
          "is_admin": true,
          "is_available": true,
          "is_blocked": false
        },
        "recipients": [
          {
            "_links": {
              "related": {
                "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
              }
            },
            "handle": "calculon@momsbot.com",
            "role": "to"
          }
        ],
        "body": "Anything less than immortality is a complete waste of time.",
        "text": "Anything less than immortality is a complete waste of time.",
        "attachments": [
          {
            "filename": "attachment.jpg",
            "url": "https://api2.frontapp.com/download/fil_55c8c149",
            "content_type": "image/jpeg",
            "size": 10000,
            "metadata": {
              "is_inline": true,
              "cid": "123456789"
            }
          }
        ],
        "metadata": {}
      },
      "created_at": 1453770984.123,
      "is_private": false
    }
  ]
}
```
Lists all the conversations linked to a specific topic.

### HTTP Request

`GET https://api2.frontapp.com/topics/{topic_id}/conversations?q={q}&page_token={page_token}&limit={limit}`
### Parameters


Name | Type | Description
-----|------|------------
topic_id | string | ID of the requested topic
q | object (optional) | Search query. See Search Parameters
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)

# Rules
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the rule 
_links.related | object |  
_links.related.owner | string | URL of the team of teammate for which the rule is defined 
id | string | Unique identifier of the rule 
name | string | Name of the rule 
actions | array | List of the rule's actions description 
is_private | boolean | Whether or not the rule is individual 

A rule is a set of conditions which will trigger automatic actions when they are met.

Since the set of conditions and actions associated to a rule can be quite complicated, the API exposes a human readable version of those.

## List rules
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/rules'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/rules"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/rules/rul_55c8c149",
        "related": {
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "rul_55c8c149",
      "name": "Important deliveries",
      "actions": [
        "Assign to Leela Turanga"
      ],
      "is_private": false
    }
  ]
}
```
Lists all the rules.

<aside class="notice">
You can list the rules of a specific teammate or team by using the endpoints <code>/teammates/{teammate_id}/rules</code> or <code>/teams/{team_id}/rules</code>.
</aside>

### HTTP Request

`GET https://api2.frontapp.com/rules`
## Get rule
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/rules/${RULE_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/rules/rul_55c8c149",
    "related": {
      "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
    }
  },
  "id": "rul_55c8c149",
  "name": "Important deliveries",
  "actions": [
    "Assign to Leela Turanga"
  ],
  "is_private": false
}
```
Fetches the definition of a rule.

### HTTP Request

`GET https://api2.frontapp.com/rules/{rule_id}`
### Parameters


Name | Type | Description
-----|------|------------
rule_id | string | ID of the requested rule

# Events
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the event 
id | string | Unique identifier of the event 
type | enum | Type of event 
emitted_at | number | Date at which the event has been emitted 
source | object | The event's source 
source._meta | object | Metadata about the resource 
source._meta.type | enum |  
source.data | enum (optional) | The resource which triggered the event 
target | object (optional) | Partial representation (type & id) of the event's target 
target._meta | object | Metadata about the resource 
target._meta.type | enum |  
target.data | enum (optional) | The resource which received the event 
conversation | Conversation | The conversation on which the event happened 

An event is created everytime something interesting is happenning in Front. You'll find in the table bellow the description of all the types of event that exist:

| Type                  | Description                                    | Source types         | Target types                |
|-----------------------|------------------------------------------------|----------------------|-----------------------------|
| `assign`              | When a conversation is assigned to a teammate  | `teammate` or `rule` | `teammate`                  |
| `unassign`            | When a conversation is unassigned              | `teammate` or `rule` | -                           |
| `archive`             | When a conversation is archived                | `teammate` or `rule` | -                           |
| `reopen`              | When a conversation is unarchived              | `teammate` or `rule` | -                           |
| `trash`               | When a conversation is deleted                 | `teammate` or `rule` | -                           |
| `restore`             | When a conversation is removed from trash      | `teammate` or `rule` | -                           |
| `comment`             | When a teammate comments on a conversation     | `teammate`           | `comment`                   |
| `mention`             | When a teammate mention another teammate       | `teammate`           | `comment`                   |
| `inbound`             | When an incoming message is received           | `inboxes`            | `message`                   |
| `outbound`            | When an outbound message is sent               | `inboxes`            | `message`                   |
| `move`                | When a conversation is moved                   | `teammate` or `rule` | `inboxes`                   |
| `forward`             | When a message is forwarded                    | `teammate` or `rule` | `message`                   |
| `tag`                 | When a conversation is tagged                  | `teammate` or `rule` | `tag`                       |
| `untag`               | When a conversation is untagged                | `teammate` or `rule` | `tag`                       |
| `sending_error`       | When an inbox cannot send a message            | `recipient`          | `message`                   |
| `reminder`            | When a conversation is reopen by a reminder    | -                    | -                           |
| `out_reply`           | When a reply is sent                           | `inboxes`            | `message`                   |
| `conversations_merged`| When two or more conversations are merged      | `teammate`           | `deleted_conversation_ids`  |

### Event preview

> *Example:*
> Event preview of a rule assigning a conversation to a teammate:

```json
{
    "_links"      : { "self": "https://api2.frontapp.com/events/evt_55c8c149" },
    "id"          : "evt_55c8c149",
    "type"        : "assign",
    "emitted_at"  : 1453770984.123,
    "source"      : {
        "_meta" : { "type": "rule" },
        "_links": { "self": "https://api2.frontapp.com/rules/rul_55c8c149" },
        "id"    : "rul_55c8c149"
    },
    "target"      : {
        "_meta" : { "type": "teammate" },
        "_links": { "self": "https://api2.frontapp.com/teammates/tea_55c8c149" },
        "id"    : "tea_55c8c149"
    },
    "conversation": {
        "_links": {
            "self"   : "https://api2.frontapp.com/conversations/cnv_55c8c149",
            "related": {
                "events"   : "https://api2.frontapp.com/conversations/cnv_55c8c149/events",
                "followers": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers",
                "messages" : "https://api2.frontapp.com/conversations/cnv_55c8c149/messages",
                "comments" : "https://api2.frontapp.com/conversations/cnv_55c8c149/comments",
                "inboxes"  : "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
            }
        },
        "id"    : "cnv_55c8c149"
    }
}
```

When receiving an event from Front (either via a [webhook](#webhooks) or via a [custom inbox](#custom-inboxes) callback), you will receive the preview of the event.
As the callback URL you provided is public, you should not blindly trust any incoming requests. This is why we're sending only a preview of the event.

An event preview has the exact same structure as the full event except that its `source`, `target` and `conversation` only contain an ID, a link to the resource itself and a type.
You can then either request the detailed event or each resources separately by following their respective `_links`.

## List events
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/events?q=${Q}&page_token=${PAGE_TOKEN}&limit=${LIMIT}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/events"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/events/evt_55c8c149"
      },
      "id": "evt_55c8c149",
      "type": "assign",
      "emitted_at": 1453770984.123,
      "source": {
        "_meta": {
          "type": "rule"
        },
        "data": {
          "_links": {
            "self": "https://api2.frontapp.com/rules/rul_55c8c149",
            "related": {
              "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
            }
          },
          "id": "rul_55c8c149",
          "name": "Important deliveries",
          "actions": [
            "Assign to Leela Turanga"
          ],
          "is_private": false
        }
      },
      "target": {
        "_meta": {
          "type": "teammate"
        },
        "data": {
          "_links": {
            "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
            "related": {
              "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
              "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
            }
          },
          "id": "tea_55c8c149",
          "email": "leela@planet-express.com",
          "username": "leela",
          "first_name": "Leela",
          "last_name": "Turanga",
          "is_admin": true,
          "is_available": true,
          "is_blocked": false
        }
      },
      "conversation": {
        "_links": {
          "self": "https://api2.frontapp.com/conversations/cnv_55c8c149",
          "related": {
            "events": "https://api2.frontapp.com/conversations/cnv_55c8c149/events",
            "followers": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers",
            "messages": "https://api2.frontapp.com/conversations/cnv_55c8c149/messages",
            "comments": "https://api2.frontapp.com/conversations/cnv_55c8c149/comments",
            "inboxes": "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
          }
        },
        "id": "cnv_55c8c149",
        "subject": "You broke my heart, Hubert.",
        "status": "archived",
        "assignee": {
          "_links": {
            "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
            "related": {
              "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
              "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
            }
          },
          "id": "tea_55c8c149",
          "email": "leela@planet-express.com",
          "username": "leela",
          "first_name": "Leela",
          "last_name": "Turanga",
          "is_admin": true,
          "is_available": true,
          "is_blocked": false
        },
        "recipient": {
          "_links": {
            "related": {
              "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
            }
          },
          "handle": "calculon@momsbot.com",
          "role": "to"
        },
        "tags": [
          {
            "_links": {
              "self": "https://api2.frontapp.com/tags/tag_55c8c149",
              "related": {
                "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
                "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
                "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
              }
            },
            "id": "tag_55c8c149",
            "name": "Robots",
            "highlight": "blue",
            "is_private": false,
            "created_at": 0,
            "updated_at": 0
          }
        ],
        "last_message": {
          "_links": {
            "self": "https://api2.frontapp.com/messages/msg_55c8c149",
            "related": {
              "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
              "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
            }
          },
          "id": "msg_55c8c149",
          "type": "email",
          "is_inbound": true,
          "is_draft": false,
          "created_at": 1453770984.123,
          "blurb": "Anything less than immortality is a...",
          "author": {
            "_links": {
              "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
              "related": {
                "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
                "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
              }
            },
            "id": "tea_55c8c149",
            "email": "leela@planet-express.com",
            "username": "leela",
            "first_name": "Leela",
            "last_name": "Turanga",
            "is_admin": true,
            "is_available": true,
            "is_blocked": false
          },
          "recipients": [
            {
              "_links": {
                "related": {
                  "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
                }
              },
              "handle": "calculon@momsbot.com",
              "role": "to"
            }
          ],
          "body": "Anything less than immortality is a complete waste of time.",
          "text": "Anything less than immortality is a complete waste of time.",
          "attachments": [
            {
              "filename": "attachment.jpg",
              "url": "https://api2.frontapp.com/download/fil_55c8c149",
              "content_type": "image/jpeg",
              "size": 10000,
              "metadata": {
                "is_inline": true,
                "cid": "123456789"
              }
            }
          ],
          "metadata": {}
        },
        "created_at": 1453770984.123,
        "is_private": false
      }
    }
  ]
}
```
Lists all the detailed events which occured in the inboxes of your company ordered in reverse chronological order (newest first).

<aside class="notice">
  Depending on how active your inboxes are, the events can pile up rather quickly.
  We recommend the use of `before` search parameter to ensure that the events in each page won't change over the time (see <a href="#search-criteria-for-events">Search criteria for events</a>).
</aside>

### HTTP Request

`GET https://api2.frontapp.com/events?q={q}&page_token={page_token}&limit={limit}`
### Parameters


Name | Type | Description
-----|------|------------
q | object (optional) | Search query. See Search Parameters
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)

## Get event
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/events/${EVENT_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/events/evt_55c8c149"
  },
  "id": "evt_55c8c149",
  "type": "assign",
  "emitted_at": 1453770984.123,
  "source": {
    "_meta": {
      "type": "rule"
    },
    "data": {
      "_links": {
        "self": "https://api2.frontapp.com/rules/rul_55c8c149",
        "related": {
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "rul_55c8c149",
      "name": "Important deliveries",
      "actions": [
        "Assign to Leela Turanga"
      ],
      "is_private": false
    }
  },
  "target": {
    "_meta": {
      "type": "teammate"
    },
    "data": {
      "_links": {
        "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
        "related": {
          "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
          "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
        }
      },
      "id": "tea_55c8c149",
      "email": "leela@planet-express.com",
      "username": "leela",
      "first_name": "Leela",
      "last_name": "Turanga",
      "is_admin": true,
      "is_available": true,
      "is_blocked": false
    }
  },
  "conversation": {
    "_links": {
      "self": "https://api2.frontapp.com/conversations/cnv_55c8c149",
      "related": {
        "events": "https://api2.frontapp.com/conversations/cnv_55c8c149/events",
        "followers": "https://api2.frontapp.com/conversations/cnv_55c8c149/followers",
        "messages": "https://api2.frontapp.com/conversations/cnv_55c8c149/messages",
        "comments": "https://api2.frontapp.com/conversations/cnv_55c8c149/comments",
        "inboxes": "https://api2.frontapp.com/conversations/cnv_55c8c149/inboxes"
      }
    },
    "id": "cnv_55c8c149",
    "subject": "You broke my heart, Hubert.",
    "status": "archived",
    "assignee": {
      "_links": {
        "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
        "related": {
          "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
          "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
        }
      },
      "id": "tea_55c8c149",
      "email": "leela@planet-express.com",
      "username": "leela",
      "first_name": "Leela",
      "last_name": "Turanga",
      "is_admin": true,
      "is_available": true,
      "is_blocked": false
    },
    "recipient": {
      "_links": {
        "related": {
          "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
        }
      },
      "handle": "calculon@momsbot.com",
      "role": "to"
    },
    "tags": [
      {
        "_links": {
          "self": "https://api2.frontapp.com/tags/tag_55c8c149",
          "related": {
            "conversations": "https://api2.frontapp.com/tags/tag_55c8c149/conversations",
            "owner": "https://api2.frontapp.com/teams/tim_55c8c149",
            "children": "https://api2.frontapp.com/tags/tag_55c8c149/children"
          }
        },
        "id": "tag_55c8c149",
        "name": "Robots",
        "highlight": "blue",
        "is_private": false,
        "created_at": 0,
        "updated_at": 0
      }
    ],
    "last_message": {
      "_links": {
        "self": "https://api2.frontapp.com/messages/msg_55c8c149",
        "related": {
          "conversation": "https://api2.frontapp.com/conversations/cnv_55c8c149",
          "message_replied_to": "https://api2.frontapp.com/messages/msg_1ab23cd4"
        }
      },
      "id": "msg_55c8c149",
      "type": "email",
      "is_inbound": true,
      "is_draft": false,
      "created_at": 1453770984.123,
      "blurb": "Anything less than immortality is a...",
      "author": {
        "_links": {
          "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
          "related": {
            "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
            "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
          }
        },
        "id": "tea_55c8c149",
        "email": "leela@planet-express.com",
        "username": "leela",
        "first_name": "Leela",
        "last_name": "Turanga",
        "is_admin": true,
        "is_available": true,
        "is_blocked": false
      },
      "recipients": [
        {
          "_links": {
            "related": {
              "contact": "https://api2.frontapp.com/contacts/crd_55c8c149"
            }
          },
          "handle": "calculon@momsbot.com",
          "role": "to"
        }
      ],
      "body": "Anything less than immortality is a complete waste of time.",
      "text": "Anything less than immortality is a complete waste of time.",
      "attachments": [
        {
          "filename": "attachment.jpg",
          "url": "https://api2.frontapp.com/download/fil_55c8c149",
          "content_type": "image/jpeg",
          "size": 10000,
          "metadata": {
            "is_inline": true,
            "cid": "123456789"
          }
        }
      ],
      "metadata": {}
    },
    "created_at": 1453770984.123,
    "is_private": false
  }
}
```
Fetches the full details of an event.

### HTTP Request

`GET https://api2.frontapp.com/events/{event_id}`
### Parameters


Name | Type | Description
-----|------|------------
event_id | string | The ID of the requested event

# Analytics

To get statistics about activities happening in Front, you need to requests the corresponding metrics of the analytics.

Each metrics can be either:

* A scalar: this is a single value (a number, duration, percentage or string).

* A table: this is a set of different values for a set of resources.

* A time graph: this is a unique value decomposed in multiple values over the requested time range.

**Scalar metrics available:**

| Name                          | Type       | Description                                                      |
|-------------------------------|------------|------------------------------------------------------------------|
| `avg_conversations_per_day`   | Number     | Average number of conversations occuring per day                 |
| `avg_first_response_time`     | Duration   | Average time for your teammates to send the first reply          |
| `avg_replies_to_resolve`      | Number     | Average number of replies to resolve a conversation              |
| `avg_resolution_time`         | Duration   | Average time for a conversation to be resolved                   |
| `avg_response_time`           | Duration   | Average time for your teammate to reply to a message             |
| `busiest_day`                 | String     | Name of the day where you receive the most messages              |
| `busiest_time`                | String     | Hour of the day where you receive the most messages              |
| `num_active_conversations`    | Number     | Number of conversation which received at least one message       |
| `num_conversations_resolved`  | Number     | Number of conversation resolutions that occurred                 |
| `num_customers_helped`        | Number     | Number of unique customer with which your teammates interacted   |
| `num_messages_received`       | Number     | Total number of messages received                                |
| `num_new_conversations`       | Number     | Number of new conversations                                      |
| `num_replies_sent`            | Number     | Number of replies sent                                           |
| `pct_resolved_on_first_reply` | Percentage | Percentage of conversations resolved on the first reply          |

**Table metrics available:**

| Name                      | Resource type      | Values                                                                                                                                                                                                         |
|---------------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `customers_table`         | List of customers  | Number of messages, average first reply time, average response time and average resolution time                                                                                                                |
| `first_response_histo`    | List of duration   | Percentage of first responses sent for each duration                                                                                                                                                           |
| `resolution_histo`        | List of duration   | Percentage of resolved conversation for each duration                                                                                                                                                          |
| `response_histo`          | List of duration   | Percentage of responses sent for each duration                                                                                                                                                                 |
| `tags_table`              | List of tags       | Number of messages, average number of messages per conversation, number of archived conversations, number of open conversations, total number of conversations                                                 |
| `team_table`              | List of teammates  | Number of conversation, average number of messages per conversation, average time to react to a conversation, number of messages, number of sent messages, number of replies sent, number of messages composed |
| `top_conversations_table` | Top 3 teammates    | Number of conversations                                                                                                                                                                                        |
| `top_reaction_time_table` | Top 3 teammates    | Time to react to a conversation                                                                                                                                                                                |
| `top_replies_table`       | Top 3 teammates    | Number of replies sent                                                                                                                                                                                         |

**Time graph metrics available:**

| Name                      | Description                                                   |
|---------------------------|---------------------------------------------------------------|
| `customers_helped_graph`  | Number of unique customer which received at least one message |
| `first_response_graph`    | Average time for your teammate to send the first reply        |
| `messages_received_graph` | Number of messages received                                   |
| `new_conversations_graph` | Number of new conversations                                   |
| `replies_sent_graph`      | Number of replies sent                                        |
| `resolution_graph`        | Average time to resolve a conversation                        |
| `response_graph`          | Average time for your teammate to reply to a message          |

Each metrics contains the value for the requested time period (in the field named `v`) as well as the value for the previous period (in the field named `p`).

Depending on the date range you request the analytics, it can take some time to process it. This is why you might need to send multiple requests to get the results. To help you estimate the remaining time, the server response will contain a `progress` field containing a number ranging from 0 to 100 which isthe percentage of the analytics processed.

## Get analytics
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/analytics/?inbox_ids=${INBOX_IDS}&tag_ids=${TAG_IDS}&start=${START}&end=${END}&timezone=${TIMEZONE}&metrics=${METRICS}'
```

```node

```

> Response **200**

```json
{
  "status": "pending",
  "progress": 42,
  "metrics": [
    {
      "id": "avg_conversations_per_day",
      "metric_type": "scalar",
      "t": "num",
      "v": 42,
      "p": 24
    },
    {
      "id": "first_response_histo",
      "metric_type": "table",
      "columns": [
        {
          "id": "time",
          "label": "Time",
          "type": "num"
        },
        {
          "id": "pct_replies",
          "label": "Replies %",
          "type": "num"
        }
      ],
      "rows": [
        [
          {
            "t": "str",
            "v": "< 15mn",
            "p": "< 15mn"
          },
          {
            "t": "pct",
            "v": "12",
            "p": "50"
          }
        ]
      ]
    },
    {
      "id": "first_response_graph",
      "metric_type: `time_graph`": "",
      "vals": [
        {
          "t": "dur",
          "v": 42,
          "p": 24,
          "label": "January",
          "start": 1451785860,
          "end": 1454464260
        }
      ]
    }
  ]
}
```
Fetches the metrics correspondig to the parameters.

<aside class="notice">
You can fetch the anaytics of a specific team by using the endpoint <code>/teams/{team_id}/analytics</code>.
</aside>

### HTTP Request

`GET https://api2.frontapp.com/analytics/?inbox_ids={inbox_ids}&tag_ids={tag_ids}&start={start}&end={end}&timezone={timezone}&metrics={metrics}`
### Parameters


Name | Type | Description
-----|------|------------
inbox_ids | array (optional) | List of inbox IDs to include in the generated analytics
tag_ids | array (optional) | List of tag IDs to include in the generated analytics
start | number | Timestamp from which the analytics will start
end | number | Timestamp from which the analytics will end
timezone | string (optional) | Name of the timezone to format the dates. If omitted, the export will use UTC.
metrics | array | List of the metrics to include in the analytics

# Exports
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the export URL 
id | string | Unique identifier for the export. 
status | enum | Status of the export. Can be one of: `'running'`, `'pending'`, `'done'`, `'failed'`. (Default: `'running'`)
progress | number | Number ranging from 0 to 100 corresponding to the percentage of the export processed. 
url | string (optional) | URL of the generated export. Will be null until the status is "done". 
filename | string (optional) | Name of the file of the generated export. Will be null until the status is "done". 
size | number | Size (in bytes) of the export file. 
created_at | number | Date at which the export has been created. 
query | Export to create | Query data used to generate the export. 

Front can generate exports of your data for a specific timeframe and/or specific inboxes, teammates or tags.

Since an export takes some time to process, it has a `status` which can be either:

* `pending` when the export is still generating

* `done` once the export has been generated

* `failed` in case the generation failed

Once the export has been generated, you can download it with its `url`.

### Format

Exports are formatted as a [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files. The export will contain 1 line per message received in the given time period.

**If a message appears in multiple inboxes, it will appear once for each inbox**.

Below is a table of the field names & descriptions that will be included in the export.

| Name                | Desctiption                                                                                                                                       |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Message ID          | *(deprecated)* Internal Front ID of the message                                                                                                   |
| Conversation ID     | *(deprecated)* Internal Front ID of the entire conversation                                                                                       |
| Segment             | Segment of the conversation                                                                                                                       |
| Direction           | Either `Inbound` or `Outbound`                                                                                                                    |
| Status              | Status of the conversation: `unassigned`, `assigned`, `archived`, or `trashed`                                                                    |
| Inbox               | Name of the inbox where the message was initially sent. If the message appeared in multiple inboxes, it will appear multiple times.               |
| Message Date        | `YYYY-MM-DD HH:mm:ss` format, in the requested timezone                                                                                           |
| Reaction time       | Time (in seconds) taken to respond or reassign a conversation                                                                                     |
| Resolution time     | Total duration (in seconds) that a contact was kept waiting for a reply from the team during a conversation segment                               |
| Response time       | Duration (in seconds) between an inbound message and the next outbound message in the same conversation                                           |
| Assignee            | Username of the assignee, if any                                                                                                                  |
| Author              | Username of the teammate who replied to the email                                                                                                 |
| Contact name        | Contact's first & last name                                                                                                                       |
| Contact handle      | Contact's email address, twitter handle, or phone number - depending on the source of the message                                                 |
| To                  | Email address of the recipient                                                                                                                    |
| Cc                  | Email address of those CC'ed on the email                                                                                                         |
| Bcc                 | Email address of those BCC'ed on the email                                                                                                        |
| Extract             | Sample of the message                                                                                                                             |
| Tags                | Tags attached to the conversation                                                                                                                 |
| Message API ID      | ID of the message used in the API                                                                                                                 |
| Conversation API ID | ID of the conversation used in the API                                                                                                            |

**Timezone**

All dates in the export are presented in the same timezone. If the export was requested from the app (by clicking on "Request Export"), it will be in the timezone of the user. If the export is requested with the API, the timezone can be manually defined (or defaults to UTC).

**Response time**

Response time is always calculated from the point of view of a customer: how did it take for your company to reply?

Most of the time, the response time is the difference between an inbound message from a customer and the next reply from your team.

If your team replies several times to the same message, the response time is the time since the previous reply.

**Assignments and Handle time**

Most of the time, only one discussion happens within a conversation. That is: a customer will open a conversation to ask a specific thing and if they want to ask another one, they will open a new discussion.

However, this is not always the case:

* A customer might decide to reply to an existing conversation even if they are asking for something new.

* Several teammates might write in one conversation.

Because of this, Front will compute a **handle time** to the last message if:

* the conversation is reassigned to a different teammate.

* the conversation is inactive for **4 days**.

## List exports
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/exports?page_token=${PAGE_TOKEN}&limit=${LIMIT}'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/exports"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/exports/exp_55c8c149"
      },
      "id": "exp_55c8c149",
      "status": "running",
      "progress": 42,
      "url": "http://exports.frontapp.com/planet-express/export.csv",
      "filename": "export.csv",
      "size": 1000,
      "created_at": 1453770984.123,
      "query": {
        "inbox_id": "alt:address:team@planet-express.com",
        "start": 1428889003,
        "end": 1428889008,
        "timezone": "America/New_York",
        "should_export_events": false
      }
    }
  ]
}
```
Lists all the exports generated in your company.

### HTTP Request

`GET https://api2.frontapp.com/exports?page_token={page_token}&limit={limit}`
### Parameters


Name | Type | Description
-----|------|------------
page_token | string (optional) | Token to use to request the next page
limit | number (optional) | Max number of results per page (default 50, maximum 100)

## Get export
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/exports/${EXPORT_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/exports/exp_55c8c149"
  },
  "id": "exp_55c8c149",
  "status": "running",
  "progress": 42,
  "url": "http://exports.frontapp.com/planet-express/export.csv",
  "filename": "export.csv",
  "size": 1000,
  "created_at": 1453770984.123,
  "query": {
    "inbox_id": "alt:address:team@planet-express.com",
    "start": 1428889003,
    "end": 1428889008,
    "timezone": "America/New_York",
    "should_export_events": false
  }
}
```
Fetches the information of an export.

### HTTP Request

`GET https://api2.frontapp.com/exports/{export_id}`
### Parameters


Name | Type | Description
-----|------|------------
export_id | string | ID of the requested export

## Create export
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"inbox_id\": \"alt:address:team@planet-express.com\",
  \"start\": 1428889003,
  \"end\": 1428889008,
  \"timezone\": \"America/New_York\",
  \"should_export_events\": false
}" \
'https://api2.frontapp.com/exports'
```

```node

```

> Response **201**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/exports/exp_55c8c149"
  },
  "id": "exp_55c8c149",
  "status": "running",
  "progress": 42,
  "url": "http://exports.frontapp.com/planet-express/export.csv",
  "filename": "export.csv",
  "size": 1000,
  "created_at": 1453770984.123,
  "query": {
    "inbox_id": "alt:address:team@planet-express.com",
    "start": 1428889003,
    "end": 1428889008,
    "timezone": "America/New_York",
    "should_export_events": false
  }
}
```
Create a new export in the default team.

<aside class="notice">
You can create a new export in a specific team by using the endpoint <code>/teams/{team_id}/exports</code>.
</aside>

### HTTP Request

`POST https://api2.frontapp.com/exports`
### Body


Name | Type | Description
-----|------|------------
inbox_id | string (optional) | ID of the inbox to export the analytics for. If omitted, the export will contain all the inboxes. 
tag_id: `tag_55c8c149` | string (optional) | ID the tag to export the analytics for. If omitted, the export will contain all the tags. 
start | number | Start time of the data to include in the export. 
end | number | End time of the data to include in the export. 
timezone | string (optional) | Name of the timezone to format the dates. If omitted, the export will use UTC. 
should_export_events | boolean (optional) | Whether to export all the events or  only messages. Default to `false`. 

# Responses
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the response 
id | string | Unique identifier of the response 
name | string | Name of the repsonse 
subject | string | Subject of the repsonse 
body | string | Body of the response 
attachments | array (optional) | List of files attached to the response 
created_at | number (optional) | Timestamp of response creation 
updated_at | number (optional) | Timestamp of the last update 

Responses are predetermined answer to common questions. They allow you to respond faster to inbound messages, and lessen the repetitive nature of replying to frequently asked questions.

Front allows individual and team canned responses. Individual canned responses are visible to only you, and team canned responses can be visible to your teammates on a per inbox level.

## List Responses
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/responses'
```

```node

```

> Response **200**

```json
{
  "_pagination": {},
  "_links": {
    "self": "https://api2.frontapp.com/responses"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/responses/rsp_42"
      },
      "id": "rsp_42",
      "name": "My canned response",
      "subject": "Dogs in here",
      "body": "I heard there were dogs in here.",
      "attachments": [
        {
          "filename": "attachment.jpg",
          "url": "https://api2.frontapp.com/download/fil_55c8c149",
          "content_type": "image/jpeg",
          "size": 10000,
          "metadata": {
            "is_inline": true,
            "cid": "123456789"
          }
        }
      ],
      "created_at": 0,
      "updated_at": 0
    }
  ]
}
```
Lists the responses in your company.

### HTTP Request

`GET https://api2.frontapp.com/responses`
## Get response
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/responses/${RESPONSE_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/responses/rsp_42"
  },
  "id": "rsp_42",
  "name": "My canned response",
  "subject": "Dogs in here",
  "body": "I heard there were dogs in here.",
  "attachments": [
    {
      "filename": "attachment.jpg",
      "url": "https://api2.frontapp.com/download/fil_55c8c149",
      "content_type": "image/jpeg",
      "size": 10000,
      "metadata": {
        "is_inline": true,
        "cid": "123456789"
      }
    }
  ],
  "created_at": 0,
  "updated_at": 0
}
```
Fetches the information of an individual response.

### HTTP Request

`GET https://api2.frontapp.com/responses/{response_id}`
### Parameters


Name | Type | Description
-----|------|------------
response_id | string | Id the requested response

# Shifts
> 
Name | Type | Description
-----|------|------------
_links | object | See [Response body Structure - Links](#links) 
_links.self | string | URL of the shift 
_links.related | object |  
_links.related.teammates | string | URL of the list of teammates that are assigned to the shift 
_links.related.owner | string | URL of the team this shift belongs to 
id | string | Unique identifier for the shift 
name | string | Name of the shift 
color | enum | Color of the shift. Can be one of `black`, `grey`, `pink`, `purple`, `blue`, `teal`, `green`, `yellow`, `orange`, `red` 
timezone | Timezone | A timezone name as defined in the IANA tz database. 
times | ShiftIntervals | The shift intervals per day of the week [Shift - intervals](#shifts-intervals) 
created_at | number (optional) | Timestamp of shift creation 
updated_at | number (optional) | Timestamp of the last shift update 

A shift represents an interval of time repeated over 1 or more days in a week.

Shifts are assigned 1 or more teammates, whose availability status is automatically handled by Front every time a shift starts or ends.

Supported values for colors are:

| Color Preview                                      | Color value  |
|----------------------------------------------------|--------------|
| ![#](https://placehold.it/15/3e3e40/000000?text=+) | `black`      |
| ![#](https://placehold.it/15/9b9c9e/000000?text=+) | `grey`       |
| ![#](https://placehold.it/15/ea67bd/000000?text=+) | `pink`       |
| ![#](https://placehold.it/15/9235e4/000000?text=+) | `purple`     |
| ![#](https://placehold.it/15/367fee/000000?text=+) | `blue`       |
| ![#](https://placehold.it/15/15acc0/000000?text=+) | `teal`       |
| ![#](https://placehold.it/15/10aa40/000000?text=+) | `green`      |
| ![#](https://placehold.it/15/e3b51e/000000?text=+) | `yellow`     |
| ![#](https://placehold.it/15/f2830b/000000?text=+) | `orange`     |
| ![#](https://placehold.it/15/e9483a/000000?text=+) | `red`        |

### Shifts timezones

The intervals of time defined for shifts must always define in which timezone they take effect.  
A list of possible time zone values is maintained at the [IANA Time Zone Database](https://www.iana.org/time-zones).

### Shifts Intervals

Every shift can define zero or one contiguous time interval per day of week.  
An interval has to be defined for at least one day of the week.

| Name      | Type              | Description                                   |
|-----------|-------------------|-----------------------------------------------|
| `mon`     | ShiftInterval     | Time interval for monday                      |
| `tue`     | ShiftInterval     | Time interval for tuesday                     |
| `wed`     | ShiftInterval     | Time interval for wednesday                   |
| `thu`     | ShiftInterval     | Time interval for thursday                    |
| `fri`     | ShiftInterval     | Time interval for friday                      |
| `sat`     | ShiftInterval     | Time interval for saturday                    |
| `sun`     | ShiftInterval     | Time interval for sunday                      |

Where a ShiftInterval is defined as :

| Name      | Type              | Description                                   |
|-----------|-------------------|-----------------------------------------------|
| `start`   | string            | A 24h time, e.g '13:45'                       |
| `end`     | string            | A 24h time, e.g '13:45'                       |

## List shifts
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/shifts'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/shifts"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/shifts/shf_15d4q255",
        "related": {
          "teammates": "https://api2.frontapp.com/shifts/shf_15d4q255/teammates",
          "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
        }
      },
      "id": "shf_15d4q255",
      "name": "Night shift",
      "color": "red",
      "timezone": "Etc/UTC",
      "times": {
        "mon": {
          "start": "09:00",
          "end": "17:00"
        },
        "tue": {
          "start": "09:00",
          "end": "17:00"
        },
        "wed": {
          "start": "09:00",
          "end": "17:00"
        },
        "thu": {
          "start": "09:00",
          "end": "17:00"
        }
      },
      "created_at": 0,
      "updated_at": 0
    }
  ]
}
```
Lists all the shifts.

<aside class="notice">
You can list the shifts of a specific teammate or team by using the endpoints <code>/teammates/{teammate_id}/shifts</code> or <code>/teams/{team_id}/shifts</code>.
</aside>

### HTTP Request

`GET https://api2.frontapp.com/shifts`
## Create a shift
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"name\": \"Night shift\",
  \"color\": \"red\",
  \"timezone\": \"Etc/UTC\",
  \"times\": {
    \"mon\": {
      \"start\": \"09:00\",
      \"end\": \"17:00\"
    },
    \"tue\": {
      \"start\": \"09:00\",
      \"end\": \"17:00\"
    },
    \"wed\": {
      \"start\": \"09:00\",
      \"end\": \"17:00\"
    },
    \"thu\": {
      \"start\": \"09:00\",
      \"end\": \"17:00\"
    }
  },
  \"teammate_ids\": []
}" \
'https://api2.frontapp.com/teams/${TEAM_ID}/shifts'
```

```node

```

> Response **201**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/shifts/shf_15d4q255",
    "related": {
      "teammates": "https://api2.frontapp.com/shifts/shf_15d4q255/teammates",
      "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
    }
  },
  "id": "shf_15d4q255",
  "name": "Night shift",
  "color": "red",
  "timezone": "Etc/UTC",
  "times": {
    "mon": {
      "start": "09:00",
      "end": "17:00"
    },
    "tue": {
      "start": "09:00",
      "end": "17:00"
    },
    "wed": {
      "start": "09:00",
      "end": "17:00"
    },
    "thu": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  "created_at": 0,
  "updated_at": 0
}
```
Creates a shift for a team.

This request requires the `provisioning` scope in the JSON Web Token.

### HTTP Request

`POST https://api2.frontapp.com/teams/{team_id}/shifts`
### Parameters


Name | Type | Description
-----|------|------------
team_id | string | Id of the team to create the shift for

### Body


Name | Type | Description
-----|------|------------
name | string | Name of the shift 
color | enum | Color of the shift. Can be one of `black`, `grey`, `pink`, `purple`, `blue`, `teal`, `green`, `yellow`, `orange`, `red` 
timezone | Timezone | A timezone name as defined in the IANA tz database. 
times | ShiftIntervals | The shift intervals per day of the week [Shift - intervals](#shifts-intervals) 
teammate_ids | array | List of all the teammate ids who will be part of this shift. 

## Get shift
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/shifts/${SHIFT_ID}'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/shifts/shf_15d4q255",
    "related": {
      "teammates": "https://api2.frontapp.com/shifts/shf_15d4q255/teammates",
      "owner": "https://api2.frontapp.com/teams/tim_55c8c149"
    }
  },
  "id": "shf_15d4q255",
  "name": "Night shift",
  "color": "red",
  "timezone": "Etc/UTC",
  "times": {
    "mon": {
      "start": "09:00",
      "end": "17:00"
    },
    "tue": {
      "start": "09:00",
      "end": "17:00"
    },
    "wed": {
      "start": "09:00",
      "end": "17:00"
    },
    "thu": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  "created_at": 0,
  "updated_at": 0
}
```
Fetches the information of a shift.

### HTTP Request

`GET https://api2.frontapp.com/shifts/{shift_id}`
## List shift teammates
```shell

curl --include \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
'https://api2.frontapp.com/shifts/${SHIFT_ID}/teammates'
```

```node

```

> Response **200**

```json
{
  "_links": {
    "self": "https://api2.frontapp.com/shifts/shf_15d4q255/teammates"
  },
  "_results": [
    {
      "_links": {
        "self": "https://api2.frontapp.com/teammates/tea_55c8c149",
        "related": {
          "inboxes": "https://api2.frontapp.com/teammates/tea_55c8c149/inboxes",
          "conversations": "https://api2.frontapp.com/teammates/tea_55c8c149/conversations"
        }
      },
      "id": "tea_55c8c149",
      "email": "leela@planet-express.com",
      "username": "leela",
      "first_name": "Leela",
      "last_name": "Turanga",
      "is_admin": true,
      "is_available": true,
      "is_blocked": false
    }
  ]
}
```
Lists the teammates who are assigned to a shift.

### HTTP Request

`GET https://api2.frontapp.com/shifts/{shift_id}/teammates`
### Parameters


Name | Type | Description
-----|------|------------
shift_id | string | Id of the requested shift

## Add teammates
```shell

curl --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"teammate_ids\": [
    \"tea_1\",
    \"tea_2\"
  ]
}" \
'https://api2.frontapp.com/shifts/${SHIFT_ID}/teammates'
```

```node

```

> Response **204**

Adds teammates to a shift.  The selected teammates must be in the team that owns the shift.

This request requires the `provisioning` scope in the JSON Web Token.

### HTTP Request

`POST https://api2.frontapp.com/shifts/{shift_id}/teammates`
### Parameters


Name | Type | Description
-----|------|------------
shift_id | string | Id of the shift to add the teammate(s) to.

### Body


Name | Type | Description
-----|------|------------
teammate_ids | array | List of all the teammate ids to add to the team. 

## Remove teammates
```shell

curl --include \
     --request DELETE \
     --header "Content-Type: application/json" \
     --header "Authorization: Bearer {your_token}" \
     --header "Accept: application/json" \
     --data-binary "{
  \"teammate_ids\": [
    \"tea_1\",
    \"tea_2\"
  ]
}" \
'https://api2.frontapp.com/shifts/${SHIFT_ID}/teammates'
```

```node

```

> Response **204**

Removes teammates from a shift. Selected teammates must currently be assigned to the shift to  be removed.

This request requires the `provisioning` scope in the JSON Web Token.

### HTTP Request

`DELETE https://api2.frontapp.com/shifts/{shift_id}/teammates`
### Parameters


Name | Type | Description
-----|------|------------
shift_id | string | Id of the shift to remove the teammate(s) from.

### Body


Name | Type | Description
-----|------|------------
teammate_ids | array | List of all the teammate ids to add to the team. 
