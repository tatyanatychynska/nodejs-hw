# nodejs-hw

Course project — GoIT Full Stack Web Development program.

An Express.js REST API server built as a learning exercise in setting up a Node.js backend: environment configuration, middleware, routing, database integration, authentication with sessions/cookies, and error handling.

## Stack

- Express 5
- Mongoose (MongoDB)
- bcrypt (password hashing)
- celebrate / Joi (validation)
- cookie-parser
- http-errors
- dotenv
- cors
- helmet
- pino-http (+ pino-pretty)

## Setup

```bash
npm install
# create a .env file:
# PORT=3000
# MONGO_URL=mongodb+srv://<user>:<password>@<cluster>/<db-name>?appName=<app>
npm run dev
```

## Auth routes

All auth endpoints set/read three `httpOnly` cookies: `accessToken` (15 min), `refreshToken` and `sessionId` (1 day).

| Method | Path            | Description                                                          |
| ------ | --------------- | --------------------------------------------------------------------- |
| POST   | `/auth/register` | Registers a user (`email`, `password`), creates a session, returns the user |
| POST   | `/auth/login`     | Logs in a user, creates a session, returns the user                   |
| POST   | `/auth/refresh`   | Refreshes the session using `sessionId`/`refreshToken` cookies         |
| POST   | `/auth/logout`    | Deletes the session and clears cookies, returns `204`                 |

## Notes routes

All `/notes` routes require authentication (`accessToken` cookie) and are scoped to the logged-in user.

| Method | Path             | Description                                                    |
| ------ | ---------------- | ---------------------------------------------------------------- |
| GET    | `/notes`         | Returns the user's notes, with pagination, filtering by `tag`, and text `search` |
| GET    | `/notes/:noteId` | Returns a single note by ID, or `404` if not found or not owned |
| POST   | `/notes`         | Creates a note (`title`, `content`, `tag`)                      |
| PATCH  | `/notes/:noteId` | Updates a note by ID, or `404` if not found or not owned         |
| DELETE | `/notes/:noteId` | Deletes a note by ID, or `404` if not found or not owned         |
| *      | anything else    | Returns `404 { "message": "Route not found" }`                  |

### Query params for `GET /notes`

| Param     | Type   | Notes                                  |
| --------- | ------ | ----------------------------------------- |
| `page`    | Number | default `1`                               |
| `perPage` | Number | `5`–`20`, default `10`                    |
| `tag`     | String | one of the note tags                      |
| `search`  | String | matches against `title` and `content`     |

## Schemas

### User

| Field      | Type   | Notes                                  |
| ---------- | ------ | ----------------------------------------- |
| `username` | String | optional, defaults to `email`             |
| `email`    | String | required, unique                          |
| `password` | String | required, min 8 chars, hashed with bcrypt, hidden from JSON output |
| `createdAt`/`updatedAt` | Date | auto |

### Note

| Field       | Type   | Notes                                                                                                    |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------- |
| `title`     | String | required                                                                                                  |
| `content`   | String | optional                                                                                                  |
| `tag`       | String | one of `Work`, `Personal`, `Meeting`, `Shopping`, `Ideas`, `Travel`, `Finance`, `Health`, `Important`, `Todo` (default `Todo`) |
| `userId`    | ObjectId | required, references the owning user                                                                   |
| `createdAt`/`updatedAt` | Date | auto |

### Session

| Field                     | Type     | Notes                        |
| ------------------------- | -------- | ------------------------------ |
| `userId`                  | ObjectId | required                       |
| `accessToken`             | String   | required, valid for 15 min     |
| `refreshToken`            | String   | required, valid for 1 day      |
| `accessTokenValidUntil`   | Date     | required                       |
| `refreshTokenValidUntil`  | Date     | required                       |
| `createdAt`/`updatedAt`   | Date     | auto                            |
