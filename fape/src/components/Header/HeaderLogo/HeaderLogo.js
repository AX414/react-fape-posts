import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block; /* ou block */
  width: 100%;
`;

const Imagem = styled.img`
  width: 10%;
  height: auto;
  margin-left: 8%;
  padding: 10px 0;

  @media (max-width: 768px) {
    width: 30%;
    margin-bottom: 1rem;
  }
`;

function HeaderLogo() {
  return (
    <Logo>
      <StyledLink to="/">
        <Imagem src="/images/logo.png" alt="logo" />
      </StyledLink>
    </Logo>
  );
}

export default HeaderLogo;
