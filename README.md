# `mongo-jwt-server` — MongoDB based api serwer with JWT and protected routes

This project is an application skeleton for a MongoDB backend server with JWT. 

It contains `\signin`, `\signup` routes and function to protect (allowed for authenticated user) given routes.

Currently root route `\` is set up as also being protected (function requireAuth)...

It assumes that token is placed in in header.

You must have MongoDB installed and running locally on your computer - this project creates `auth` collection in MongoDB.

## Getting Started

To get you started you can simply clone the `mongo-jwt-server` repository and install the dependencies:

### Prerequisites

You need git to clone the `mongo-jwt-server` repository. You can get git from [here][git].

It also uses a number of Node.js tools to initialize `mongo-jwt-server`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `mongo-jwt-server`

Clone the `mongo-jwt-server` repository using git:

```
git clone https://github.com/JacekQ/mongo-jwt-server.git
cd mongo-jwt-server
```

### Install Dependencies

```
[PROJECT_ROOT]
npm install
```

Then copy `config.dummy.js` to `config.js` and insert proper `secret` phrase for JWT.

### Run the Application

In the terminal window, to start the backend server, run the following commands:

```
[PROJECT_ROOT]
cd node
npm run dev
```

Now browse to the app at [`localhost:3090`][local-app-url].

