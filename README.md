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

## Folder Structure

<pre> KioskTalks/ ├── client/ # Frontend (Vite + React) │ ├── public/ │ ├── src/ │ │ ├── components/ # Reusable components │ │ ├── pages/ # Screens like Welcome, Survey, ThankYou │ │ ├── App.jsx │ │ └── main.jsx │ ├── index.html │ ├── package.json │ ├── tailwind.config.js │ └── vite.config.js │ ├── backend/ # Backend (Node + Express + MongoDB) │ ├── config/ │ │ └── db.js # MongoDB connection │ ├── models/ # Mongoose models (Session, Response) │ ├── routes/ # Express routes (API) │ ├── controllers/ # API logic │ ├── client-build/ # Built React app served statically │ ├── .env # Environment variables │ ├── server.js # Entry point │ └── package.json │ ├── .gitignore ├── README.md └── LICENSE (if any) </pre>


