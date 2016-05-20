# Botlbot
**Twitter users can build bots that will generate tweets based on templates (news sources, trending topics, or wordlists) and post to twitter.**

**INSERT BUILD STATUS**

## Team

  - __Product Owner__: [Nathaniel Edwards](https://github.com/nthaniel)
  - __Scrum Master__: [Daniel Tunon](https://github.com/danieltunon)
  - __Development Team Members__: [Trini Le](https://github.com/trinile)

## Table of Contents

1. [Example / Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Architecture](#architecture)
  - [High Level Architecture](#high-level-architecture)
  - [Database Schema](#database-schema)
1. [API Endpoints](#api)
1. [Team](#team)
1. [Contributing](#contributing)
1. [Questions and Issues](#questions-and-issues)
1. [Meta](#meta)

## Usage

> Some usage instructions

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
  ***See [FileStructure.md](linktoFileStructure)

### Installing Dependencies
  ***From within the root directory:***

1. Install Dependencies
```sh
npm install
```
2. Run Webpack Build
```sh
npm run build
```
3. Move `bundle.html` into `\build` directory. 
  1. This bundle.html references bundle.js from webpack.

4. Run servers (TODO: create NPM run-dev command to run all servers in background)

  1. Run file server
  ```sh 
  node server/server.js
  ```
  1. Run Template Services 
  ```sh
  node templateServices/server.js
  ```
  1. Run Postgres SQL server 
  
  1. Run Redis Server to use redis-conf file
  ```sh
  redis-server server/redis/redis-conf
  ```

5. Create DATABASE in Postgres
  1. In postgres create databases botlbot_db and botlbot_db_test;
```sql
  CREATE DATABASE boltbot_db; 
  CREATE DATABASE botlbot_db_test;
```
  1. From within root directory, run migrations to create tables.
```sh
  knex migrate: latest 
``` 
  OR 
```sh
  node_modules/.bin/knex migrate:latest
```

### Tasks 

## Architecture
### High Level Architecture
 ![Architecture](http://i65.tinypic.com/x5zfjo.jpg)
### Database Schema
 ![Schema](http://i64.tinypic.com/2agt0yb.jpg)

## API
**For API Documentation, please see the [API-ENDPOINTS.md](API-ENDPOINTS.md) file**

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
