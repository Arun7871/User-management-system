User Management System API

Description

The User Management System API is a RESTful web service for managing user data. It provides functionality for creating, reading, updating, and deleting users in a database. This API can be used for applications that require user management features such as authentication, authorization, or profile management.

Features

User Creation: Add a new user with their details.

User Retrieval: Fetch details of a single user or a list of all users.

User Update: Update user information.

User Deletion: Remove a user from the system.

Prerequisites

To run this project, ensure you have the following installed:

Node.js

PostgreSQL

Postman (for API testing, optional)

Setup Instructions

Clone the Repository

git clone https://github.com/Arun7871/User-management-system.git
cd User-management-system

Install Dependencies

npm install

Setup Environment Variables
Create a .env file in the root directory and add the following variables:

PORT=5000
DB_HOST=localhost
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=user_management

Run Database Migrations
Initialize your PostgreSQL database and apply any required migrations (if applicable).

Start the Server

npm start

The server will start on http://localhost:5000 (or the port specified in your .env file).

API Endpoints

Base URL:

http://localhost:5000

Endpoints:

1. Create User

POST /users

Request Body (JSON):

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}

Response:

{
  "message": "User created successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  }
}

2. Get All Users

GET /users

Response:

[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "age": 25
  }
]

3. Get Single User

GET /users/:id

Response:

{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}

4. Update User

PUT /users/:id

Request Body (JSON):

{
  "name": "John Updated",
  "email": "john.updated@example.com",
  "age": 35
}

Response:

{
  "message": "User updated successfully",
  "user": {
    "id": 1,
    "name": "John Updated",
    "email": "john.updated@example.com",
    "age": 35
  }
}

5. Delete User

DELETE /users/:id

Response:

{
  "message": "User deleted successfully"
}

Postman Collection

The Postman collection for testing the API can be downloaded from the repository: Postman Collection

Folder Structure

user-management-api/
├── node_modules/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── postman-collection.json

Technologies Used

Backend: Node.js, Express.js

Database: PostgreSQL

Contribution

Contributions are welcome! Feel free to fork the repository and submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For any questions or feedback, please contact:

Author: Arun7871

GitHub: Arun7871

