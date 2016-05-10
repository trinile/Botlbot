
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
    .then(function() {
      return knex('users').insert({
        user_twitter_id: '12345',
        token: 'this is a token',
        tokenSecret: 'this is a tokensecret',
        username: 'testuser',
        email: 'test@something.horse',
        created_at: new Date(),
        updated_at: new Date(),
      });
    })
    .catch(function(err) {
      console.log(err);
    });
};
