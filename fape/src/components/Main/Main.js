import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PostContent from "../pages/PostContent/PostContent";
import AdminLogin from "../pages/Admin/Login/AdminLogin";
import Indices from "../pages/Indices/Indices";

function Main() {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/indices" element={<Indices />} />
      <Route path="/post/:id" element={<PostContent />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
  );
}

export default Main;
