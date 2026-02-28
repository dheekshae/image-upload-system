import os
import uuid
from fastapi import APIRouter, UploadFile, File, HTTPException, status, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import File as FileModel

router = APIRouter()

UPLOAD_DIR = "uploads"
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png"}


@router.post("/upload", status_code=status.HTTP_201_CREATED)
async def upload_image(file: UploadFile = File(...), db: Session = Depends(get_db)):
    # 1) Validate extension
    ext = os.path.splitext(file.filename)[1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Only .jpg, .jpeg, and .png files are allowed."
        )

    # 2) Ensure uploads folder exists
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    # 3) Save file with unique name to avoid overwriting
    unique_name = f"{uuid.uuid4().hex}{ext}"
    saved_path = os.path.join(UPLOAD_DIR, unique_name)

    contents = await file.read()
    with open(saved_path, "wb") as f:
        f.write(contents)

    # 4) Save metadata to DB
    new_file = FileModel(filename=file.filename, filepath=saved_path)
    db.add(new_file)
    db.commit()
    db.refresh(new_file)

    return {
        "message": "File uploaded successfully",
        "id": new_file.id,
        "original_filename": new_file.filename,
        "stored_path": new_file.filepath,
        "url": f"/uploads/{unique_name}"
    }

@router.get("/files")
def list_files(db: Session = Depends(get_db)):
    files = db.query(FileModel).order_by(FileModel.created_at.desc()).all()

    return [
        {
            "id": f.id,
            "original_filename": f.filename,
            "stored_path": f.filepath,
            # Convert Windows backslashes to URL slashes
            "url": "/" + f.filepath.replace("\\", "/"),
            "created_at": f.created_at
        }
        for f in files
    ]

@router.get("/files/{file_id}")
def get_file(file_id: int, db: Session = Depends(get_db)):
    f = db.query(FileModel).filter(FileModel.id == file_id).first()
    if not f:
        raise HTTPException(status_code=404, detail="File not found")

    return {
        "id": f.id,
        "original_filename": f.filename,
        "stored_path": f.filepath,
        "url": "/" + f.filepath.replace("\\", "/"),
        "created_at": f.created_at
    }