# Death Time Middleware in APIsREST with ExpressJS

This is an example of how the Death Time middleware works in Express.

## Before Installation

Before testing the application, it is recommended to check the source code to configure the counter. The soruce code is located at: `./src/middleware/DeathTime.middleware.ts`. 

```TS 
 const deathTime = new Date('YEAR-MONTH-DAYTHOURS:MINUTE:SECONS');
```
## Requirements

* Docker [Docker-Desktope](https://www.docker.com/products/docker-desktop/)
* Node js [Node](https://nodejs.org/en/download/package-manager) (Optional)

## Installation in Docker Container

```bash 
# Initial App
$ docker-compose up
``` 
# Installation in Local Machine

The first thing you are going to have to do is go to the environment variables and change the container path to the localhost path.

```.env
DATABASE_URL="postgres://user:password@localhost:5432/data_base"
``` 
``` bash
# Start datebase
$ docker-compose up db

# Install Module 
$ npm install

# Generate the Models
$ npx prisma generate

# Migration to the database
$ npx prisma migrate deploy

# Run Server
$ npm run dev

``` 

## Port

[localhost:3001](http://localhost:3001)

## Documentation

The server code is documented in Swagger. You can acces it at [localhost:3001/docs](http://localhost:3001/docs/)


## Author

Made by Dario Marzzucco (DMarzzucco)
