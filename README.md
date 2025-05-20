# FitnessTracker-MERNstack

# Fitness Tracker MERN Stack App

A full-stack fitness tracker application built with the MERN stack (MongoDB, Express, React, Node.js). Users can create accounts, log fitness activities, and view their exercise history.

---

## Features

- User registration and management
- Log fitness activities (description, duration, date)
- View, add, and delete exercise records
- Responsive UI with Material-UI
- RESTful API backend with Express and MongoDB

---

## Folder Structure

```
FitnessTracker-MERNstack/
│
├── backend/           # Express + MongoDB backend
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   ├── server.js      # Entry point for backend
│   └── .env           # MongoDB connection string (not committed)
│
├── client/            # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── .env           # API base URL for frontend
│
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm
- MongoDB Atlas account (or local MongoDB)

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/FitnessTracker-MERNstack.git
cd FitnessTracker-MERNstack
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend` folder:
  ```
  MONGO_URI=your_mongodb_connection_string
  ```
- Start the backend server:
  ```bash
  npm start
  ```
  The backend runs on [http://localhost:5000](http://localhost:5000).

---

### 3. Frontend Setup

```bash
cd ../client
npm install
```

- Create a `.env` file in the `client` folder:
  ```
  REACT_APP_API_BASE=http://localhost:5000
  ```
- Start the React app:
  ```bash
  npm start
  ```
  The frontend runs on [http://localhost:3000](http://localhost:3000).

---

## Deployment

- Deploy the backend (e.g., Render, Heroku, or your own server).
- Deploy the frontend (e.g., Vercel, Netlify).
- Update the `REACT_APP_API_BASE` in the frontend `.env` to point to your deployed backend.

---

## Security

- **Never commit your `.env` files or secrets to version control.**
- If you accidentally expose credentials, rotate them immediately and remove them from your git history.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Material-UI](https://material-ui.com/)
- [Create React App](https://create-react-app.dev/)