import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Image Upload System</h1>

      <div style={{ marginTop: 40 }}>
        <button
          onClick={() => navigate("/upload")}
          style={{ padding: "12px 20px", marginRight: 20 }}
        >
          Upload an Image
        </button>

        <button
          onClick={() => navigate("/uploads")}
          style={{ padding: "12px 20px" }}
        >
          View All Uploads
        </button>
      </div>
    </div>
  );
}