import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Upload from "./pages/Upload.jsx";
import Uploads from "./pages/Uploads.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/uploads" element={<Uploads />} />
    </Routes>
  );
}