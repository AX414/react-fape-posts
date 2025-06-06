/* Aqui é onde as rotas do sistema ficam configuradas */

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PostContent from "../pages/PostContent/PostContent";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostContent />} />
    </Routes>
  );
}

export default Main;