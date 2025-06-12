import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PostContent from "../pages/PostContent/PostContent";
import AdminLogin from "../pages/Admin/Login/AdminLogin";
import Indices from "../pages/Indices/Indices";
import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard";
import NewPost from "../pages/Admin/Posts/NewPost/NewPost"; 
import EditPost from "../pages/Admin/Posts/EditPost/EditPost";
import Banners from "../pages/Admin/Banners/Banners";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/indices" element={<Indices />} />
      <Route path="/post/:id" element={<PostContent />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      
      {/* Rotas adicionais */}
      <Route path="/admin/novo-post" element={<NewPost />} />
      <Route path="/admin/editar-post/:id" element={<EditPost />} />
      <Route path="/admin/banners" element={<Banners />} />
    </Routes>
  );
}

export default Main;
