import HeaderLogo from './HeaderLogo/HeaderLogo';
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
`;

const StyledLink = styled(Link)`
  color: #043854;
  text-decoration: none;
  font-weight: 600;
  margin-right: 5%;
  align-self: center;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  const location = useLocation();
  return (
    <HeaderContainer>
      <HeaderLogo />
      {/* Exibe o link apenas se não estiver em /indices */}
      {location.pathname !== '/indices' && (
        <StyledLink to="/indices">ÍNDICES</StyledLink>
      )}
    </HeaderContainer>
  );
}

export default Header;
