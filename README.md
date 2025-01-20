# User Management System API

## Description

The User Management System API is a RESTful web service for managing user data. It provides functionality for creating, reading, updating, and deleting users in a database. Look at the postman collection to check APIs

## Features

- **User Creation**: Add a new user with their details.
- **User Retrieval**: Fetch details of a single user.
- **User Update**: Update user information.
- **Admin**: Can see all the users.
- **User deletion**: can achieve by setting isActive attribute as false.

## Prerequisites

To run this project, ensure you have the following installed:

- Node.js
- Postman (for API testing, optional)

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/Arun7871/User-management-system.git
cd User-management-system
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables
```For the easy testing I have already used my mangoDB atlas DB. you can use that.```

### Start the Server

```bash
npm start
```

The server will start on [http://localhost:5000](http://localhost:5000) (or the port specified in your `.env` file).

## API Endpoints

**Base URL**: `http://localhost:5000`

### 1. Create User

**POST** `api/auth/register`

**Request Body (JSON):**

```json
{
  "name": "Arun kumar",
  "email": "arunanandhan243@gmail.com",
  "password": "something",
  "phone": "3243904234"
}
```

**Response:**

```json
{
    "message": "User created successfully",
    "user": {
        "name": "Arun kumar",
        "email": "arunanandhan243@gmail.com",
        "password": "$2a$10$Hg2Noab0KBjjceFfVvtjFOnaw0ObzWMk5OwVcHNgIV.LcNDee7gSG",
        "phone": "3243904234",
        "role": "user",
        "isActive": true,
        "_id": "678e30a1c1722c796494c13f",
        "createdAt": "2025-01-20T11:16:49.201Z",
        "updatedAt": "2025-01-20T11:16:49.201Z",
        "__v": 0
    }
}
```
### 2. Login user

**GET** `/api/auth/login`

**Response:**

```json
{
  "email": "arunanandhan43@gmail.com",
  "password": "iLoveProgramming"
}
```
### 3. Get All Users by admin

**GET** `/api/admin/users`

**Response:**

```json
[
    {
        "isActive": true,
        "_id": "678cf6147b29274a758767bc",
        "name": "Super Admin",
        "email": "admin@example.com",
        "password": "$2a$10$7gLZTsDHrBXciG.csG9rI.ZcR64l.T/uzdWWhwwFN455LsMRnO8z6",
        "phone": "1234567890",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-01-19T12:54:44.507Z",
        "updatedAt": "2025-01-19T12:54:44.507Z",
        "__v": 0
    },
    {
        "isActive": true,
        "_id": "678cf9f3c587783268b8cf1e",
        "name": "John Doe",
        "email": "john@example.com",
        "password": "$2a$10$yBCD8kpZdPGMb3E/9Zk5Lu.SlTNWYhC.H2cYIvdmuWDwV2a1aTWDS",
        "phone": "1234567890",
        "role": "user",
        "createdAt": "2025-01-19T13:11:15.118Z",
        "updatedAt": "2025-01-19T13:11:15.118Z",
        "__v": 0
    },
    {
        "isActive": true,
        "_id": "678cfaebc587783268b8cf24",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "$2a$10$cYDHS8XecKKVsCf91LtwTuEeTTCMcZlY.jwmauSpJ2S12KScXbyKu",
        "phone": "1234567890",
        "role": "user",
        "createdAt": "2025-01-19T13:15:23.473Z",
        "updatedAt": "2025-01-19T13:15:23.473Z",
        "__v": 0
    },
    {
        "_id": "678d03dc0a1b7f28e1576bca",
        "name": "Arun updated",
        "email": "arunanandhan43@gmail.com",
        "password": "$2a$10$oHm.n5uuh9CLU7cPWIL2heyTXjwhkTPan4hWMnHHayFZISMsUFH.q",
        "phone": "9876543210",
        "role": "user",
        "isActive": false,
        "createdAt": "2025-01-19T13:53:32.495Z",
        "updatedAt": "2025-01-19T14:25:16.555Z",
        "__v": 0
    },
    {
        "_id": "678d11561c277b3827ee7ec3",
        "name": "Super Admin",
        "email": "superadmin13@example.com",
        "password": "$2a$10$iP7mw3UKKYDU.Thz6bNC2.KX8yHDPHLL4Y5gQ6s9z8B3LeyKR3lT6",
        "phone": "1232132310",
        "role": "user",
        "isActive": true,
        "createdAt": "2025-01-19T14:51:02.852Z",
        "updatedAt": "2025-01-19T14:51:02.852Z",
        "__v": 0
    },
    {
        "_id": "678d12d01c277b3827ee7ec7",
        "name": "Super Admin",
        "email": "superadmin19@example.com",
        "password": "$2a$10$TMOPNelUkw7N0dPvxHFTIub3FluUzpG2d7YgGKkPb0v5RENrp.enO",
        "phone": "1232132310",
        "role": "admin",
        "isActive": true,
        "createdAt": "2025-01-19T14:57:20.253Z",
        "updatedAt": "2025-01-19T14:57:20.253Z",
        "__v": 0
    },
    {
        "_id": "678d14411c277b3827ee7ed1",
        "name": "Super Admin",
        "email": "superadmin19@gmail.com",
        "password": "$2a$10$qk/Rl9myQmcnc4OQ7M7b1.K6Ht6.ohFZ.//Hju5m0FbMXPkjm7Ij6",
        "phone": "1232132310",
        "role": "admin",
        "isActive": true,
        "createdAt": "2025-01-19T15:03:29.442Z",
        "updatedAt": "2025-01-19T15:03:29.442Z",
        "__v": 0
    }
]
```

### 3. Get Single User

**GET** `/api/users/678d03dc0a1b7f28e1576bca`

**Response:**

```json
{
    "_id": "678d03dc0a1b7f28e1576bca",
    "name": "Arun updated",
    "email": "arunanandhan43@gmail.com",
    "password": "$2a$10$oHm.n5uuh9CLU7cPWIL2heyTXjwhkTPan4hWMnHHayFZISMsUFH.q",
    "phone": "9876543210",
    "role": "user",
    "isActive": false,
    "createdAt": "2025-01-19T13:53:32.495Z",
    "updatedAt": "2025-01-19T14:25:16.555Z",
    "__v": 0
}
```

### 4. Update User

**PUT** `http://localhost:5000/api/users/678d03dc0a1b7f28e1576bca`

**Request Body (JSON):**

```json
{
        "name": "Arun kumar updated"
}
```

**Response:**

```json
{
    "message": "User created successfully",
    "user": {
        "name": "Arun kumar updated",
        "email": "arunanandhan243@gmail.com",
        "password": "$2a$10$Hg2Noab0KBjjceFfVvtjFOnaw0ObzWMk5OwVcHNgIV.LcNDee7gSG",
        "phone": "3243904234",
        "role": "user",
        "isActive": true,
        "_id": "678e30a1c1722c796494c13f",
        "createdAt": "2025-01-20T11:16:49.201Z",
        "updatedAt": "2025-01-20T11:16:49.201Z",
        "__v": 0
    }
}
```

### 5. Delete User

**DELETE** `/api/users/678d03dc0a1b7f28e1576bca/deactivate`

**Response:**

```json
{
    "message": "Account deactivated successfully"
}
```

## Postman Collection

The Postman collection for testing the API can be downloaded from the repository: **Postman Collection**

## Folder Structure

```
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
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MangoDB

## Contribution

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## Contact

For any questions or feedback, please contact:

**Author**: Arun
**GitHub**: [Arun7871](https://github.com/Arun7871)
