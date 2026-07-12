# nodejs-hw

Course project — GoIT Full Stack Web Development program.

A small Express.js REST API server built as a learning exercise in setting up a Node.js backend: environment configuration, middleware, routing, database integration, and error handling.

## Stack

- Express 5
- Mongoose (MongoDB)
- dotenv
- cors
- pino-http (+ pino-pretty)
- helmet

## Setup

```bash
npm install
# create a .env file:
# PORT=3000
# MONGO_URL=mongodb+srv://<user>:<password>@<cluster>/<db-name>?appName=<app>
npm run dev
```

## Routes

| Method | Path             | Description                                                 |
| ------ | ---------------- | ------------------------------------------------------------ |
| GET    | `/notes`         | Returns all notes                                             |
| GET    | `/notes/:noteId` | Returns a single note by ID, or `404` if not found            |
| POST   | `/notes`         | Creates a note (`title`, `content`, `tag`)                    |
| PATCH  | `/notes/:noteId` | Updates a note by ID, or `404` if not found                   |
| DELETE | `/notes/:noteId` | Deletes a note by ID, or `404` if not found                   |
| *      | anything else    | Returns `404 { "message": "Route not found" }`                |

### Note schema

| Field       | Type   | Notes                                                                                                    |
| ----------- | ------ | --------------------------------------------------------------------------------------------------------- |
| `title`     | String | required                                                                                                    |
| `content`   | String | optional                                                                                                    |
| `tag`       | String | one of `Work`, `Personal`, `Meeting`, `Shopping`, `Ideas`, `Travel`, `Finance`, `Health`, `Important`, `Todo` (default `Todo`) |
| `createdAt` | Date   | auto                                                                                                         |
| `updatedAt` | Date   | auto                                                                                                         |
