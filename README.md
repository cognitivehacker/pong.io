# pong.io
A pong made written in Javascript.

## How Dev

### Setup

1. `docker network create pong-io`, create a docker network
2. `docker-compose build && docker-compose up`
Into another terminal
3. `docker exec -it pong-io yarn install`
