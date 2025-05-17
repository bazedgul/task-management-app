# 📝 Task Management App

A professional, fully-featured Task Management Web App built with **React (Vite)**, **TailwindCSS**, **Redux Toolkit**, and **Express.js** with **MongoDB Atlas**. It allows users to create, edit, filter, and track tasks intuitively across status boards.

---

## 🔗 Loom Video Walkthrough

📹 [Click to watch the demo](https://www.loom.com/share/aa1e098094c34bdba9a5ae0aeda2ce34?sid=a2ae31ac-5b61-4e1d-872e-f002bc5cd5b3)  
> In the video, you'll see the full functionality of the app, including task creation, validation, filtering, overdue badge, light/dark mode, and responsiveness.

---

## 🚀 Features

### ✅ Core Features
- **Task Creation** with title, description, optional deadline, and status (To Do, In Progress, Done)
- **Task Editing** with inline validation
- **Task Deletion** with confirmation modal
- **Task Filtering** by status
- **Search Tasks** by title or description
- **Auto Grouping** into columns based on status
- **Sorting** by most recently updated

### 🧠 Logic-Building Requirements
- **Duplicate Title Detection** within the same status
- **Validation** on title length, description length
- **Overdue Badge** if deadline has passed
- **Empty Column Placeholder Messages**

### ✨ Bonus Features
- **Dark/Light Mode Toggle**
- **Responsive Design** for desktop and mobile
- **Badges** and hover animations
- **Framer Motion** animation for task cards

---

## 📁 Folder Structure

### 🔙 Backend (`/Backend`)

Backend/
├── controllers/
│ └── task.controller.js
├── models/
│ └── task.model.js
├── routes/
│ └── task.routes.js
├── middlewares/
│ ├── error.middleware.js
│ └── notFound.middleware.js
├── utils/
│ ├── apiResponse.js
│ └── apiError.js
├── config/
│ └── db.js
├── .env
├── server.js
└── package.json


> RESTful API with structured folder layout (Model, Controller, Route, Middleware, Util). Uses centralized `ApiResponse` and `ApiError` handling.

---

### 💻 Frontend (`/Frontend`)

Frontend/
├── src/
│ ├── components/
│ │ ├── TaskCard.jsx
│ │ ├── TaskForm.jsx
│ │ ├── TaskColumn.jsx
│ │ ├── SearchFilter.jsx
│ │ └── ThemeToggle.jsx
│ ├── redux/
│ │ ├── store.js
│ │ └── taskSlice.js
│ ├── pages/
│ │ └── Home.jsx
│ ├── api/
│ │ └── taskApi.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── tailwind.config.js
├── .env
└── package.json


> Clean architecture with `components/`, `redux/`, `pages/`, and `api/` folders. Uses **Redux Toolkit** for state management and **TailwindCSS** for responsive design.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/bazedgul/task-management-app.git
cd task-management-app


🔙 Backend Setup

-> cd Backend
-> npm install

## Create .env file in Backend/:
PORT=5000
MONGODB_URI=your-mongodb-atlas-uri

## Run Backend
-> npm run dev


💻 Frontend Setup
-> cd Frontend/
-> npm install

## Create .env file in Frontend/:
VITE_API_BASE_URL=http://localhost:5000/api/

## Run Frontend
npm run dev


🧪 APIs (Backend)
Method	Endpoint	Description
POST	/api/v1/tasks	Create a task
GET	/api/v1/tasks	Get all tasks (filter/search)
PUT	/api/v1/tasks/:id	Update a task
DELETE	/api/v1/tasks/:id	Delete a task

📦 Tech Stack
Frontend: React (Vite), TailwindCSS, Redux Toolkit, Framer Motion

Backend: Express.js, MongoDB Atlas, Mongoose

Utilities: dotenv, cors, nodemon, axios

Extras: Light/Dark mode, Responsive UI, Confirmation modals


📝 Final Notes
All functionality tested via Postman and frontend integration

Code is structured to be readable and scalable

UI is optimized for both desktop and mobile devices

Submit this repository link with the Loom video added

