# Death Time Middleware in APIsREST with ExpressJS

This is an example of how the Death Time middleware works in Express.

## Before Installation

Before testing the application, it is recommended to check the source code to configure the counter. The soruce code is located at: `./src/middleware/DeathTime.middleware.ts`. 

```TS 
 const deathTime = new Date('YEAR-MONTH-DAYTHOURS:MINUTE:SECONS');
```
## Requirements

* Docker
* Node js (Optional)

## Intallation

```bash 
# Start with Docker
$ docker-compose up

# If yout have Node.Js and want to start the process in your local machine, follows this path:

# Start datebase
$ docker-compose up db

# Start server 
$ npm install
$ npx prisma generate
$ npx prisma migrate deploy
$ npm run dev


``` 

## Port

[localhost:3001](http://localhost:3001)

## Documentation

The server code is documented in Swagger. You can acces it at [localhost:3001/docs](http://localhost:3001/docs/)


## Author

Made by Dario Marzzucco (DMarzzucco)
