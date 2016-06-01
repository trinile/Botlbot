# Botlbot
**Botlbot is a web application that allows Twitter users to build their own bots that will generate tweets for them based on templates they've created (from news articles from NYTimes and trending twitter topics, to random wordlists and emojis). From a list of tweets generated, a user can post, edit, schedule, or trash the tweet.**

Deployed link [here](http://botlbot.xyz)
## Team

  - __Product Owner__: [Nathaniel Edwards](https://github.com/nthaniel)
  - __Scrum Master__: [Daniel Tunon](https://github.com/danieltunon)
  - __Development Team Members__: [Trini Le](https://github.com/trinile)

## Table of Contents

1. [Example / Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installation](#installation)
1. [Architecture](#architecture)
  - [High Level Architecture](#high-level-architecture)
  - [Database Schema](#database-schema)
1. [API Endpoints](#api)
1. [Contributing](#contributing)
1. [Roadmap](#roadmap)
1. [Licensing](#licensing)

## Usage

![Botlbot](http://g.recordit.co/PBvWjpBnid.gif)

## Requirements

- Node 4.4.2
- Express 4.13.4
- Redis 3.0.7
- Postgresql 9.5.2
- ReactJs 15.0.2
- React-Redux 4.4.5
- Webpack 1.13.0
- Passport 0.3.2
- Babel-Core 6.7.7
- Mocha 2.4.5

## Development

### File Structure
  ***See [FileStructure.md](linktoFileStructure)***

### Installation
  ***From within the root directory:***

#### Install Dependencies
```sh
npm install
```
#### Run Webpack Build
```sh
npm run build
```
#### Run servers (TODO: create NPM run-dev command to run all servers in background)
- Run file server
```sh 
node server/server.js
```
- Run Template Services 
```sh
node templateServices/server.js
```
  - Run Postgres SQL server
```sh
psql
```
  - Run Redis Server to use redis-conf file
```sh
redis-server server/redis/redis-conf
```
#### Create DATABASE in Postgres
- In postgres create databases botlbot_db and botlbot_db_test;
```sql
  CREATE DATABASE boltbot_db; 
  CREATE DATABASE botlbot_db_test;
```
- From within root directory, run migrations to create tables.
```sh
knex migrate: latest 
``` 
OR 
```sh
node_modules/.bin/knex migrate:latest
```

## Architecture
### High Level Architecture
 ![Architecture](http://i67.tinypic.com/2eav5m8.jpg)
### Database Schema
 ![Schema](http://i64.tinypic.com/2agt0yb.jpg)

## API
**For API Documentation, please see the [API-ENDPOINTS.md](API-ENDPOINTS.md) file**

### Roadmap

View the project roadmap [here](https://github.com/Sabine-Sardine/botlbot/issues)

## Contributing

### Contributors
  - [Nathaniel Edwards](https://github.com/nthaniel)
  - [Daniel Tunon](https://github.com/danieltunon)
  - [Trini Le](https://github.com/trinile)

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Licensing

MIT
