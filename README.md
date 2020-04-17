# React application

## Main dependencies

-   React Router
-   Styled Components
-   Babel config
-   Prettier config

## Setup

    npm i

## Development

    npm start

Runs a development server at `localhost:8080`. The server is also accessible to other devices who are connected to the same network.

The address of the server depends on the IP of your machine but the port is the same as the `localhost` one. To get the address of the development server on your local network:

    npm run network-info

## Build/Deployment

Bump the version of your application.

    npm version patch

This command will run your tests, create a production build at the root of your project, commit and push it.

## Structure

    src
    ├── components
    ├── views
    ├── index.js
    ├── index.html
