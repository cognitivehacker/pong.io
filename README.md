# Pong.io
A client for a multiplayer pong game with websockets

## Install dependencies
`yarn install`

## Build manually
`./node_modules/.bin/webpack -p`

## Build the dist
`npm run build`

## Build the dist watching for changes
`npm run watch`

## Run server with live reload
`npm run server`

* the live reload serves they own file to the browser, so the app/dist is not updated, to update run `npm run build` or `npm run watch`

## Running With Docker

### Setup
1. `$ docker network create pong-io`
2. `$ docker-compose build && docker-compose run pong-io yarn install`

### Run
1. `$ docker-compose up`
