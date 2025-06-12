import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiHome } from "react-icons/fi";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #F2F2F2;
  display: flex;
  justify-content: center; /* centraliza conteúdo */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
  padding: 10px 0;
  font-family: 'PT Sans Narrow', sans-serif;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #043854;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 15px;
  font-weight: 600;
  border-radius: 4px;
  transition: color 0.3s ease;

  &:hover {
    color:rgb(211, 10, 10);
  }
`;

const HomeLink = styled(Link)`
  color: #043854;
  font-size: 22px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 15px;
  font-weight: 600;
  border-radius: 4px;
  transition: color 0.3s ease;

  &:hover {
    color: #065a81;
  }
`;

function HeaderAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // futuramente: limpar token/session
    navigate("/admin/login");
  };

  return (
    <HeaderContainer>
      <ButtonsWrapper>
        <HomeLink to="/admin/dashboard">
          <FiHome />
          Dashboard
        </HomeLink>

        <Button onClick={handleLogout}>
          <FiLogOut />
          Sair
        </Button>
      </ButtonsWrapper>
    </HeaderContainer>
  );
}

export default HeaderAdmin;
