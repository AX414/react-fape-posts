import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px; // padding uniforme

  @media (max-width: 768px) {
  padding: 0 10px;
  flex-direction: column;
  align-items: flex-start;
}
`;

const Imagem = styled.img`
  width: 10%;
  height: auto;
  margin-left: 8%;
  padding: 10px 0 10px 0;

  @media (max-width: 768px) {
    width: 30%;
    margin-bottom: 1rem;
  }
`;

const Contatos = styled.p`
  font-size: 20px;
  text-align: right;
  margin: 0;
  font-family: 'PT Sans Narrow', sans-serif;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 18px;
    width: 100%;
  }
`;

/*
<Contatos>
    Fale conosco: <b>(18) 3199-2908 / (18) 99620-9326</b>
</Contatos>
*/

function HeaderLogo() {
  return (
    <Logo>
      <Imagem src="/images/logo.png" alt="logo" />
    </Logo>
  );
}

export default HeaderLogo;
