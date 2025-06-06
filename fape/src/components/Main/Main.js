import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PostContent from "../pages/Home/Posts/PostContent/PostContent";
import AdminLogin from "../pages/Admin/AdminLogin";

const MainContainer = styled.main`
  
`;

function Main() {
  return (
    <MainContainer>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostContent />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </MainContainer>
  );
}

export default Main;
