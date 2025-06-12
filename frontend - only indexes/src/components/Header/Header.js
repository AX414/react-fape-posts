import HeaderLogo from './HeaderLogo/HeaderLogo';
import styled from "styled-components";

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

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

function Header() {
  return (
    <HeaderContainer title="Clique na logo para acessar o site oficial!">
      <LogoSection>
        <HeaderLogo />
      </LogoSection>
    </HeaderContainer>
  );
}

export default Header;
