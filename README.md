# nodejs-wearable-server
Nodejs wearable server code

Used to create a server in which secure data concerning noise is recorded and then trasmitted into a database

# Build the Host Website

npm run build

https://github.com/chubstech/host-website

Move build files into https://github.com/chubstech/nodejs-wearable-server/tree/master/src/server/build

# SQL Schema

https://github.com/chubstech/nodejs-wearable-server/blob/master/src/db/nodejs_sql_api/setup.sql

# Heroku Setup

Add jawsdb extension, environment variables should automatically be set

Sign into heroku and connect to the master branch and deploy master

# Dev Setup

Have mysql running and run `npm run setup`, this will add the schema to the database.
