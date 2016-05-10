const config = require('../../knexfile.js');
const env = process.env.NODE_ENV || 'development';
const knex = require('knex')(config[env]);

module.exports = knex;

process.stderr.on('data', data => console.log(data));
