### API Documentation
**Only authenticated Twitter users are allowed access to any endpoints.**
#### Private End Points
|Description|Endpoint|
|---|---|
|[Login OAuth](#get-auth)|GET /auth|
|[Logout User](#get-logout)|GET /logout|
|[Get Generated Tweets](#get-tweets/generated)|GET /tweets/generated|
|[Get Scheduled Tweets](#get-scheduled)|GET /tweets/scheduled|
|[Get Posted Tweets](#get-posted)|GET /tweets/posted|
|[Modify Tweet](#put-tweets)|PUT /tweets/:id|
|[Post Tweet](#post-tweets)|POST /tweets/:id|
|[Schedule Tweet](#post-schedule-tweets)|POST /tweets/schedule/:id|
|[Trash Tweet](#delete-tweet)|DELETE /tweets/:id|
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

### Example Request

## `GET /tweets/generated`
Request sent when user loads up dashboard and retrieves generated tweets to display.

## Example Request
```bash
{
  'user_twitter_id: 
  'headers': {
    'cookie': {
      'token': ''
    }
  }
}
```
## Example Response
```json
{
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
}
```
