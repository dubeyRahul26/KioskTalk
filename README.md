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

<pre> ``` KioskTalks/ ├── backend/ │ ├── server.js │ ├── config/ │ │ └── db.js │ ├── models/ │ ├── routes/ │ └── client-build/ (created after frontend build) ├── client/ │ ├── index.html │ ├── vite.config.js │ ├── src/ │ │ ├── main.jsx │ │ └── components/ │ └── tailwind.config.js ├── .gitignore ├── README.md └── package.json (if root-level config is added) ``` </pre>



