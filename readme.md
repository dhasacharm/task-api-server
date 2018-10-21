## Simple Login Service Using NodeJs And MongoDB
## Overview :
Simple signup-login and crud app.. Which is using JWT login mechanism for authentication

## Technologies Used :
*	NodeJs – Middle-ware/Backend
*	MongoDB – Document Database
*	Angular – For UI design (SPA)

## Dependencies :
*	Express – Http/Rest API framework for NodeJs
*	CORS – To Enable Cross Origin Resource Sharing
*	BcryptJs – Bcrypt Js Module for hashing password
*	JWT – To generate JSON Web Tokens
*	BodyParser – To Parse request body for post and put requests
*	Mongoose – ODM (Object Document Mapper) for MongoDB

##Front-End-Document:
frontend instruction given there angular,you can see github:https://github.com/dhasacharm/task-angular

## API Docs :
Check this link… (http://localhost:3000)


### How To Start...
Before starting node server.. Start your mongodb then install dependencies with npm install and
run npm strat to run the node server.

#####PORT:
 By default port is 3000

### API Signatures:

## Signup API

### POST /signup

### Sample Input:

```json
{
  "email":"dhasasube123@gmail.com",
  "password": "123456",
  "confirmPassword": "123456",
  "name": "dhasarathan"
}
```

### Sample Output:

```json
{
    "_id": "5bcb4b1438812c23dc20a7b5",
    "email": "dhasasube123@gmail.com",
    "password": "$2a$10$OTZtHlVQmJ9lkvyC3x1hw.b9RP6VyP5U27UBGxbKjIxzoyNnjJ6u2",
    "confirmPassword": "123456",
    "name": "dhasarathan",
    "__v": "0"
}
```

## Login API

### POST /login

### Sample Input:

```json
{
  "email": "dhasasube123@gmail.com",
  "password": "123456"
}
```

### Sample Output:

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViY2I0YjE0Mzg4MTJjMjNkYzIwYTdiNSIsImlhdCI6MTU0MDA0OTkwMiwiZXhwIjoxNTQwMDUwMjAyfQ.x5jAMl2GTqCei97kVeI06QNkc60KZJgTJtFuunZQc5E"
}
```

## User Deatils API

### GET /usermenu/id 

### Sample Input:

```json
{
    "_id": "5bcb4b1438812c23dc20a7b5"
}
```

### Sample Output:

```json
{
     "_id": "5bcb4b1438812c23dc20a7b5",
        "email": "dhasasube123@gmail.com",
        "password": "$2a$10$OTZtHlVQmJ9lkvyC3x1hw.b9RP6VyP5U27UBGxbKjIxzoyNnjJ6u2",
        "confirmPassword": "123456",
        "name": "dhasarathan",
        "__v": 0
}
```

## GET /usermenu

### Sample Input:

```json
{
"null"
}
```

### Sample Output:

```json
{ 
        "_id": "5bcb4b1438812c23dc20a7b6",
        "email": "dhasarathan@gmail.com",
        "password": "$2a$10$OTZtHlVQmfvi2vyC3x1hw.b9fhghgi6VyP5U27UBGxbKjIxzojJ6u2",
        "confirmPassword": "123123",
        "name": "dhasacharmm",
        "__v": 0
}
```

## PUT /usermenu/id 

### Sample Input:

```json
{
 "_id": "5bcb4b1438812c23dc20a7b5",
}
```

### Sample Output:

```json
{
        "_id": "5bcb4b1438812c23dc20a7b5",
        "email": "dhasasube123@gmail.com",
        "password": "$2a$10$OTZtHlVQmJ9lkvyC3x1hw.b9RP6VyP5U27UBGxbKjIxzoyNnjJ6u2",
        "conformpassword": "123456",
        "name": "dhasarathan",
        "__v": 0
    }
 ```

## DELETE /usermenu/id

### Sample Input:

```json
{
"_id": "5bcb4b1438812c23dc20a7b5",
}
```

### Sample Output:

```json
{
        "_id": "5bcb4b1438812c23dc20a7b5",
        "email": "dhasasube123@gmail.com",
        "password": "$2a$10$OTZtHlVQmJ9lkvyC3x1hw.b9RP6VyP5U27UBGxbKjIxzoyNnjJ6u2",
        "conformpassword": "123456",
        "name": "dhasarathan",
        "__v": 0
    }
```

### (Disclaimer: This is not production grade application.. Just POC)