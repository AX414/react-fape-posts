import styled from "styled-components";
import { useState } from "react";
import Header from "../../../Header/Header";

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;

  @media (orientation: landscape) and (max-height: 500px) {
    align-items: flex-start;
    padding-top: 120px;
  }
`;

const Card = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 450px;
  margin: 0% 10%;

`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'PT Sans Narrow', sans-serif;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin: 0 0 1rem 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0.8rem;
  background: #0c3c78;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background: #0b3263;
  }
`;


function AdminLogin() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", login);
    console.log("Senha:", senha);
    // Aqui você pode chamar a API ou verificar login localmente
  };

  return (
    <>
    <Header/>
    <LoginContainer>
      <Card>
        <Title>Login de Administradores</Title>
        <form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            placeholder="Email" 
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <Input 
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Button type="submit">Entrar</Button>
        </form>
      </Card>
    </LoginContainer>
    </>
  );
}

export default AdminLogin;
