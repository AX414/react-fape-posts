import HeaderLogo from './HeaderLogo/HeaderLogo';
import styled from "styled-components";

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

function Header(){
    return(
        <HeaderContainer>
            <HeaderLogo/>
        </HeaderContainer>
    );
}

export default Header;