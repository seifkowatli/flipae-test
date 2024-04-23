
![Flip AE](https://www.flipae.com/_next/static/media/flip_ae_light_inline.a4aa04f5.svg) 


# Test Project Setup

## Overview

This guide provides instructions on setting up the environment and running the Flip.ae test project, which includes both a frontend and a backend component.

## 1. Setup Environment Variables

### Backend Environment Setup
Copy the example environment file and set up the necessary environment variables for the backend:
```bash
cp .env.example .env
# Populate the .env file with the appropriate values:
# Database
DB_CONNECTION=mongodb://mongo/flip-test
# JWT
JWT_SECRET=[YOUR_SECRET]
JWT_EXPIRY=1h
```

### Frontend Environment Setup
For the frontend, ensure the default host is set to your local server:
```bash
VITE_API_HOST=http://127.0.0.1:3000
```

## 2. Running the Project

### Option A: Using Docker
To run both the frontend and backend together using Docker, execute the following command:
```bash
docker-compose up
```

### Option B: Manually Running the Backend and Frontend
If you prefer to run the services separately, follow these steps:

#### Backend
Navigate to the backend directory, install dependencies, and start the development server:
```bash
cd backend
npm install
npm run start:dev
```

#### Frontend
Navigate to the frontend directory, install dependencies, and start the development server:
```bash
cd frontend
npm install
npm run dev
```
