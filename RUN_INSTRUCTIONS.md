# Event Management System - Run Instructions

This project consists of a Node.js/Express backend and a React frontend.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (must be installed and running locally)

## Setup and Run

### 1. Backend

1.  Open a terminal and navigate to the `backend` directory:
    ```bash
    cd EVM_Project/backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm start
    ```
    The server should start on port **5000**. Database connection success message will appear if MongoDB is running.

### 2. Frontend

1.  Open a new terminal and navigate to the `frontend` directory:
    ```bash
    cd EVM_Project/frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the application:
    ```bash
    npm start
    ```
    The application will open in your default browser at `http://localhost:3000`.

## Troubleshooting

- **MongoDB Connection Error**: Ensure MongoDB service is running locally. The backend expects it at `mongodb://localhost:27017/university_events`.
- **Port Conflicts**: Ensure ports 5000 (backend) and 3000 (frontend) are free.
