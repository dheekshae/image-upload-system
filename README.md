# 📸 Image Upload System

A simple full-stack image upload and preview application built using FastAPI and React.
This project allows users to upload images, store metadata in PostgreSQL, and view uploaded files through a clean web interface.

---

## 🚀 Live Demo

Frontend: https://image-upload-system.vercel.app
Backend Docs: https://image-upload-system-6bz5.onrender.com/docs

---

## ✨ Features

* Upload JPG/PNG images
* Unique file storage using UUID filenames
* Image preview support
* Upload history listing
* PostgreSQL metadata storage
* REST API with Swagger docs
* Fully deployed (frontend + backend)

---

## 🛠 Tech Stack

### Backend

* FastAPI
* PostgreSQL
* SQLAlchemy
* Uvicorn
* Static file serving

### Frontend

* React (Vite)
* Axios
* React Router

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: PostgreSQL

---

## 📦 Project Structure

```
image-upload-system/
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   ├── routes/
│   └── uploads/
│
├── frontend/
│   ├── src/
│   ├── pages/
│   └── config.js
```

---

## 🔌 API Endpoints

### Upload Image

POST `/upload`
Uploads an image and returns metadata.

### List Files

GET `/files`
Returns all uploaded images.

### Get File by ID

GET `/files/{id}`
Returns metadata for a specific image.

---

## 🧠 What I Learned

* Building REST APIs with FastAPI
* Handling file uploads safely
* Serving static files in production
* Working with PostgreSQL and SQLAlchemy
* Connecting a React frontend to a Python backend
* Handling CORS and deployment issues
* Deploying a full-stack app using Vercel and Render

---

## 🧪 Running Locally

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📌 Notes

This project was built as a full-stack internship assignment focusing on real-world deployment and API design.


## 💭 Thoughts

This project helped me understand how real-world deployments work beyond just writing code.  
I ran into challenges with CORS, frontend-backend communication, and deployment environments, which helped me get hands-on experience with debugging full-stack issues.

If I extend this further, I’d like to add:
- Image deletion
- Authentication
- Cloud storage (S3)

  
## 👩‍💻 Author

Dheeksha
