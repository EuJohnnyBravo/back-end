# NWL Connect FullStack - Back-End

## Overview

This project is the back-end service for the NWL Connect FullStack application. It is built using Node.js, Fastify, and PostgreSQL, with Redis for caching and data manipulation.

## Features

- User subscription management
- Referral tracking and ranking
- Invite link access and tracking
- API documentation with Swagger

## Requirements

- Node.js
- PostgreSQL
- Redis

## Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/yourusername/NWL-Connect-FullStack.git
  cd NWL-Connect-FullStack/back-end
  ```

2. Install dependencies:
  ```sh
  npm install
  ```

3. Set up environment variables:
  Create a `.env` file in the root directory and add the following:
  ```env
  PORT=3333
  WEB_URL=http://localhost:3000
  POSTGRES_URL=postgresql://docker:docker@localhost:5432/connect
  REDIS_URL=redis://localhost:6379
  ```

4. Start the services using Docker Compose:
  ```sh
  docker-compose up
  ```

## Running the Application

To start the application in development mode:
```sh
npm run dev
```

To build and run the application:
```sh
npm run build
npm start
```

## API Endpoints

## Documentation with Swagger
- `http://localhost:3333/docs`

### Subscribe to Event
- **POST** `/subscriptions`
  - Request Body:
   ```json
   {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "referrer": "referrer-id"
   }
   ```
  - Response:
   ```json
   {
    "subscriberId": "subscriber-id"
   }
   ```

### Access Invite Link
- **GET** `/invites/:subscriberId`
  - Response: Redirects to the invite link with the referrer ID.

### Get Subscriber Invite Clicks
- **GET** `/subscribers/:subscriberId/rankinkg/clicks`
  - Response:
   ```json
   {
    "count": 10
   }
   ```

### Get Subscriber Invites Count
- **GET** `/subscribers/:subscriberId/rankinkg/count`
  - Response:
   ```json
   {
    "count": 5
   }
   ```

### Get Subscriber Ranking Position
- **GET** `/subscribers/:subscriberId/rankinkg/position`
  - Response:
   ```json
   {
    "position": 1
   }
   ```

### Get Top 3 Ranking
- **GET** `/ranking`
  - Response:
   ```json
   {
    "ranking": [
      {
       "id": "subscriber-id-1",
       "name": "John Doe",
       "score": 10
      },
      {
       "id": "subscriber-id-2",
       "name": "Jane Doe",
       "score": 8
      },
      {
       "id": "subscriber-id-3",
       "name": "Jim Doe",
       "score": 5
      }
    ]
   }
   ```

## License

This project is licensed under the MIT License.