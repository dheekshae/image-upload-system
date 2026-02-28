import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

export default function Uploads() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await axios.get(`${API_BASE}/files`);
      setFiles(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Uploaded Images</h1>

      {files.length === 0 && <p>No uploads yet.</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {files.map((file) => (
          <div key={file.id}>
            <img
              src={`${API_BASE}${file.url}`}
              alt={file.original_filename}
              width="200"
              style={{ borderRadius: 8 }}
            />
            <p>{file.original_filename}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

<div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: 20,
  marginTop: 30
}}></div>