import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PostContent from "../pages/Home/Posts/PostContent/PostContent";

const MainContainer = styled.main`
  flex-grow: 1;
  padding-top: 60px;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

function Main() {
  return (
    <MainContainer>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostContent />} />
      </Routes>
    </MainContainer>
  );
}

export default Main;
