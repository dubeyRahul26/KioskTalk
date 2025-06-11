# Kiosk Survey App

A professional and minimal full-stack application for collecting customer feedback through an in-store kiosk. Built using **React (Vite)** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

##  Features

- Welcome screen and survey flow
- 5-question dynamic survey (ratings and text)
- Supports skipping and navigating between questions
- Answers saved per customer session
- Confirmation and completion flag
- Thank-you screen and auto-redirect to home
- Fully responsive and minimal design using TailwindCSS

---

## Tech Stack

- **Frontend**: React 19, Vite, TailwindCSS, React Router DOM
- **Backend**: Node.js, Express, Mongoose, MongoDB
- **Other**: dotenv, CORS, nodemon

---

## 📁 Folder Structure

- `/client` — React frontend (Vite)
- `/backend` — Express backend with MongoDB (Mongoose)


##  Getting Started

### 1. Clone the Repository

```bash

git clone https://github.com/yourusername/your-repo.git
cd your-repo

```

### 2. Setup Backend

```bash

  cd backend
  npm install

 ```

# Create a .env file in the backend/ directory 

<pre> ``` PORT=5000 MONGO_URI=your_mongodb_connection_string ``` </pre>
# Then run the backend server

```bash

    npm run dev

```
  
### 3.Setup the frontend

Open a new terminal:

```bash 
    cd client 
    npm install
    npm run dev
```

The frontend would run on  http://localhost:3000 .



