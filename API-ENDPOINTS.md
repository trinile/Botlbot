### API Documentation
**Only authenticated Twitter users are allowed access to any endpoints.**
#### Private End Points
|Description|Endpoint|
|---|---|
|[Login OAuth](#get-auth)|GET /auth|
|[Logout User](#get-logout)|GET /logout|
|[Get Generated Tweets](#get-tweetsgenerated)|GET /tweets/generated|
|[Get Scheduled Tweets](#get-tweetsscheduled)|GET /tweets/scheduled|
|[Get Posted Tweets](#get-tweetsposted)|GET /tweets/posted|
|[Modify Tweet](#put-tweetsid)|PUT /tweets/:id|
|[Post Tweet](#post-tweetsid)|POST /tweets/:id|
|[Schedule Tweet](#post-scheduletweetsid)|POST /tweets/schedule/:id|
|[Trash Tweet](#delete-tweetid)|DELETE /tweets/:id|
|[Get Templates](#get-templates)|GET /templates|
|[Get Template](#get-templates)|GET /templates/:id|
|[Post Template](#post-template)|POST /templates/:id|
|[Edit Template](#put-template)|PUT /templates/:id|
|[Delete Template](#delete-template)|DELETE /templates/:id|

## `GET /auth/`

Redirects back to server after acquiring access token, tokenSecret, and userID after User approves OAuth permission through Twitter.

### Example Request

## `GET /logout/`
Logs out user from session and clears out cookies.

## `GET /tweets/generated`
Request sent when user loads up dashboard and retrieves generated tweets to display.

```
## Example Response
```json
 [ 
   { 
    "bot_tweet_id":70,
    "user_twitter_id":"10950502",
    "tweet_status":"available",
    "retweet_count":null,
    "favorite_count":null,
    "user_screen_name":null,
    "user_followers_count":null,
    "tweet_text":null,
    "tweet_id_str":null,
    "bot_tweet_body":"💩 shoe",
    "news_headline":null,
    "created_at":"2016-05-19T20:59:02.873Z",
    "updated_at":"2016-05-19T20:59:02.873Z",
    "schedule_id":null
    },
    ...
  ]
```
## `GET /tweets/scheduled`
Request sent when user loads up scheduled tweets page to display tweets to be posted later.

## Example Response
```json
 [ 
   { 
    "bot_tweet_id":51,
    "user_twitter_id":"10950502",
    "tweet_status":"scheduled",
    "retweet_count":null,
    "favorite_count":null,
    "user_screen_name":null,
    "user_followers_count":null,
    "tweet_text":null,
    "tweet_id_str":null,
    "bot_tweet_body":"💩 shoe",
    "news_headline":"Twitter, Trump’s Trusty Weapon, Could Backfire",
    "created_at":"2016-05-18T23:00:21.853Z",
    "updated_at":"2016-05-19T20:59:02.873Z",
    "schedule_id":17,
    "scheduled_time": "2016-05-20T01:49:37.148Z"
    },
    ...
  ]
```
## `GET /tweets/posted`
Request sent when user loads up scheduled tweets page to display history of posted bot tweets.

## Example Response
```json
 [ 
   { 
    "original_tweet_id":"733018074480312320",
    "original_tweet_props":"",
    "retweet_count":0,
    "retweet_id":"733105106564976640",
    "tweet_id":8,
    "tweet_text":"https://t.co/9h9RhyEHIi",
    "user_twitter_id":"10950502",
    "created_at":"2016-05-19T01:20:52.000Z",
    "updated_at":"2016-05-19T01:20:52.580Z"
    },
    ...
  ]
```

## `PUT /tweets/:id`
Request sent when User edits a generated tweet.
Id param refers to tweet ID.

## Example Body Request
```json
  {
    "tweet": "Please edit bot_tweet_body"
  }
```
## Example Response
returns bot_tweet_id of the edited tweet
```array
  [185]
```

## `POST /tweets/:id`
Request sent when User approves and posts generated tweet to Twitter. 
Id params refers to tweet ID.

## Example Response 
return retweet_id
```array
  [12]
```
## `POST /tweets/schedule/:id`
Request sent when User schedules a tweet to be posted later. Modifies the tweet's tweet_status to 'scheduled' and creates an 
entry in the scheduledtweets table with scheduled_time.

## Example Body Request
```json
{
  schedule: 'Tue May 17 2016 17:33:26 GMT-0700 (PDT)'
}
```

## Example Response
Returns array of tweet_status.
```json
  ["scheduled"]
```
## `DELETE /tweets/:id`
Request sent when User trashes generated tweet. Modifies tweet's tweet_status to 'trashed'.
Id params refers to bot_tweet_id.

## Example Response
Returns array of tweet_status.
```json
  ["trashed"]
```
## `GET /templates`
When User loads dashboard to retrieve template IDs from database.

## Example Response 
Returns an array of User's templates with IDs and names.
```json
[
  {
  "name":"News",
  "template_id": 3
  },
  { 
    "name": "My Emojis",
    "template_id": 1
  }
  ...
]
```

## `GET /templates/:id`
Request sent when user selects template to display.

## Example Response
```json
{   
  "template_id": 3,
  "template": [ "chunkType":"news", "id": 1, "params": { "keyword:"trump" } ],
  "name": "News",
  "active": true,
  "user_twitter_id": "10950502"
}
```
## `POST /templates/:id`
Request sent when User saves template.

## `PUT /templates/:id`
Request sent when User edits template.
Id Params refers to template ID

## `DELETE /templates/:id`
