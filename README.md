# nodejs-hw

Course project — GoIT Full Stack Web Development program.

A small Express.js REST API server built as a learning exercise in setting up a Node.js backend: environment configuration, middleware, routing, and error handling.

## Stack

- Express 5
- dotenv
- cors
- pino-http (+ pino-pretty)
- helmet

## Setup

```bash
npm install
# create a .env file with PORT=3000
npm run dev
```

## Routes

| Method | Path             | Description                                                 |
| ------ | ---------------- | ------------------------------------------------------------ |
| GET    | `/notes`         | Returns `{ "message": "Retrieved all notes" }`               |
| GET    | `/notes/:noteId` | Returns `{ "message": "Retrieved note with ID: <noteId>" }`  |
| GET    | `/test-error`    | Throws an error to demonstrate the 500 error handler         |
| *      | anything else    | Returns `404 { "message": "Route not found" }`               |
