# Resume API

A REST API for an AI Resume Builder built with Node.js and Express.js.

---

## Tech Stack

- Node.js
- Express.js
- JavaScript
- JSON

---

## Project Structure

```text
resume-api/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .gitignore
├── app.js
├── data.json
├── package-lock.json
├── package.json
└── README.md
```

### Controllers

Contains the logic for handling API requests and generating responses.

### Middleware

Contains functions that run between the request and response. Middleware can be used for tasks such as authentication, validation, and error handling.

### Models

Contains the structure and data logic for application entities such as users, resumes, and applications.

### Routes

Defines the API endpoints and connects them to their respective controllers.

### `app.js`

The main entry point of the application. It configures the Express server and starts the API.

### `data.json`

Stores application data in JSON format.

### `.gitignore`

Specifies files and folders that should not be tracked by Git.

---

## How to Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
node app.js
```

The server will run at:

```text
http://localhost:3000
```

---

## API Routes

### General

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/hello` | Test route to verify the API is running |

---

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |
| POST | `/api/auth/forgot-password` | Request password reset |
| POST | `/api/auth/reset-password` | Reset password |

---

## Users

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users/me` | Get user profile |
| PUT | `/api/users/me` | Update user profile |
| DELETE | `/api/users/me` | Delete user account |

---

## Resume

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/resumes` | Get all resumes |
| POST | `/api/resumes` | Create resume |
| GET | `/api/resumes/:id` | Get resume by ID |
| PUT | `/api/resumes/:id` | Update resume |
| DELETE | `/api/resumes/:id` | Delete resume |

---

## Applications

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/applications` | Get all applications |
| POST | `/api/applications` | Create application |
| GET | `/api/applications/:id` | Get application by ID |
| PUT | `/api/applications/:id` | Update application |
| DELETE | `/api/applications/:id` | Delete application |

---

## Response Format

### Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully"
}
```

### Error Response

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

---

## Author

**Bhanu Joshi**
