import { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

<button onClick={() => window.history.back()}>
  ← Back
</button>

export default function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${API_BASE}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Upload successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage("Upload failed.");
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Upload Image</h1>

      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload}>Upload Picture</button>

      <p>{message}</p>
    </div>
  );
}

<div style={{ textAlign: "center", marginTop: 80 }}></div>

