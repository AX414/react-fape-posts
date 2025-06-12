import HeaderLogo from './HeaderLogo/HeaderLogo';
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #F2F2F2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
  height: 60px;

  @media (max-width: 768px) {
    padding: 10px 5%;
    height: auto;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const MenuSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5vw;
  right: 0;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 600;
  color: #043854;
  cursor: pointer;
  padding: 10px 16px; /* padding horizontal adequado */
  margin-right: 10px; /* afasta da borda direita */

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    margin-right: 6px;
  }
`;

const DropdownMenu = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 150px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
  border-radius: 4px;
  overflow: hidden;
  z-index: 1001;

  @media (max-width: 768px) {
    right: 0;
    width: 20vw;
  }

  a {
    display: block;
    padding: 10px 16px;
    color: #043854;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

function Header() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <HeaderContainer>
      <LogoSection>
        <HeaderLogo />
      </LogoSection>

      <MenuSection>
        <DropdownContainer onMouseLeave={closeDropdown}>
          <DropdownButton onClick={toggleDropdown}>MENU</DropdownButton>
          <DropdownMenu open={dropdownOpen}>
            <Link to="/indices" onClick={closeDropdown}>Índices</Link>
            <Link to="/admin/login" onClick={closeDropdown}>Administradores</Link>
          </DropdownMenu>
        </DropdownContainer>
      </MenuSection>
    </HeaderContainer>
  );
}

export default Header;
