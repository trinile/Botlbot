exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('generatedtweets').del(),
    // Inserts seed entries
    knex('generatedtweets').insert({
      bot_tweet_id: 190,
      "user_id":10950502,
      "user_id":10950502,
      "favorite_count":355,
      "user_screen_name":"BestMovieLine",
      "user_followers_count":"411805"
      "tweet_text":"It's Always Sunny in Philadelphia https://t.co/BzG71i5JHU",
      "tweet_id_str":"728982443055828993",
      "created_at":null,
      "updated_at":null
    }),
    knex('generatedtweets').insert({
      "bot_tweet_id":191,
      "user_id":10950502,
      "retweet_count":221,
      "favorite_count":296,
      "user_screen_name":"BestMovieLine",
      "user_followers_count":"411805",
      "tweet_text":"Dazed and Confused https://t.co/tcpuI8uy0Q",
      "tweet_id_str":"729038909963915265",
      "created_at":null,
      "updated_at":null
    }),
    knex('generatedtweets').insert({
      "bot_tweet_id":192,
      "user_id":10950502,
      "retweet_count":523,
      "favorite_count":1,
      "user_screen_name":"NME",
      "user_followers_count":"834230",
      "tweet_text":"RT @acdc: The band checking the stage ahead of tonight's show in Lisbon. Let there be rock! #RockOrBust https://t.co/lAZP9maf70","tweet_id_str":"728973324374659072",
      "created_at":null,
      "updated_at":null
    }),
    knex('generatedtweets').insert({
      "bot_tweet_id":193,
      "user_id":10950502,
      "retweet_count":223,
      "favorite_count":367,
      "user_screen_name":"BestMovieLine",
      "user_followers_count":"411805",
      "tweet_text":"10 Things I Hate About You https://t.co/zzp6PynhzY",
      "tweet_id_str":"729033450854977537",
      "created_at":null,
      "updated_at":null
    })
  );
};

