# Client Management App

This project is a simple client management application built using React and Material-UI. It allows users to manage a list of clients, including adding, updating, and deleting client profiles. The app consists of a front-end client and a back-end server.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Technologies Used](#technologies-used)

## Features

- View Clients: Display a list of all clients.
- Add Client: Add a new client to the list.
- Update Client: Edit the details of an existing client.
- Delete Client: Remove a client from the list.
- Responsive UI: Built with Material-UI for a clean and responsive user interface.

## Installation

Clone the repository:

```bash
git clone https://github.com/delgado-sam/React-Client-Management-App.git
cd React-Client-Management-App
```

### Install dependencies for the client

```bash
cd client
npm install
```

### Install dependencies for the server

```bash
cd ../server
npm install
```

## Running the Application

You can use the root package.json to run both client and server concurrently.

### 1. In the root directory, start the client and server

```bash
npm run dev
```

### 2. Runs the app in the development mode

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Testing

### Run tests for the client

```bash
cd client
npm test
```

## Technologies Used

Frontend:
React
React Router
Material-UI
Axios

Backend:
Node.js
Express
UUID (for generating unique IDs)

## Example Data for Server

The server uses an in-memory array to store clients and it supports the following API endpoints:

GET /api/clients: Fetch all clients
POST /api/clients: Add a new client
PUT /api/clients/:id: Update an existing client
DELETE /api/clients/:id: Delete a client
