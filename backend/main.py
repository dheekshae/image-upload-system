from dotenv import load_dotenv
load_dotenv()

import os
os.makedirs("uploads", exist_ok=True)

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from app.database import engine
from app import models
from app.routes.files import router as files_router

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

# Serve uploaded files
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Routes
app.include_router(files_router)


@app.get("/")
def home():
    return {"message": "Backend is running 🚀"}


from fastapi.middleware.cors import CORSMiddleware

ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "https://image-upload-system.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)