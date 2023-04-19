# Personal Budgeting App - Frontend 

This is the frontend for a personal budgeting app, built with ReactJS. The app provides a user interface for managing transactions. The app is deployed on https://grand-gumption-4acad6.netlify.app/.

## Prerequisites
Before running the server, you must have the following installed on your machine:

* Node.js
* npm

## Installation

To install the dependencies, run:
```
npm install
```

## Dependencies
The following dependencies are required to run the project:

The following dependencies are required to run the project:

* axios
* react-router-dom
* uuid


To install the dependencies, run:

```
npm install react-router-dom axios uuid
```

## Running the Server

To start the server, run:

```
npm start
```

This will start the server on http://localhost:3000.

## API Endpoints
The following are the available endpoints of the API:

### Transaction Endpoints
* `GET /transactions/:userId` - Get all transactions
* `GET /transaction/:id` - Get one transaction
* `POST /transactions` - Add a new transaction
* `PUT /transactions/:id` - Update a transaction by ID
* `DELETE /transactions/:id` - Delete a transaction by ID

## Deployment
The frontend of the personal budgeting app is deployed on https://grand-gumption-4acad6.netlify.app/. The backend is deployed on https://budget-app-backend-q5w3.onrender.com/.

## Backend
The  GitHub repository for the backend express app can be found at: https://github.com/Shani4-1/budget-app-project-backend.
