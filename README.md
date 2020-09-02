# React application

## Main dependencies

-   TypeScript
-   React
-   React Router
-   Styled Components
-   Webpack
-   Babel

See details of the version requirements in `package.json`.

## Setup

    npm i

All the project dependencies (except for Node.js and `npm`) will be installed locally in `/node_modules`.

## Development

    npm start

Runs a development server at `localhost:8080` on your machine. The server is also accessible to other devices who are connected to the same network.

The address of the server on your local network depends on the IP of your machine but the port is the same as the `localhost` one. To get the address of the development server on your local network:

    npm run network-info

Entry point of the application is located at `./src/index.ts`. This file must use the TypeScript extension `.ts`. However, other files imported in `index.ts` can be either TypeScript files or JavaScript files with extension `.js`.

A prettier config file is located at the root of the project so that your IDE can use it to apply linting rules while you're working with the code.

## Build/Deployment

Bump the version of your application to create a new build.

    npm version patch

This command will run your tests, create a production build at the root of your project, commit and push it.

## Structure

    src
    ├── components
    ├── views
    ├── index.ts
    ├── index.html
