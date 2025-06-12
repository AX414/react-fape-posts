import { useState } from "react";
import styled from "styled-components";
import HeaderAdmin from "../../HeaderAdmin/HeaderAdmin";

const Container = styled.div`
  max-width: 700px;
  margin: 8vh auto;
  font-family: 'PT Sans Narrow', sans-serif;
  width: 100vw;
`;

const Title = styled.h1`
  text-align: center;
  margin: 10% auto 5% auto;


  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
    margin: 0 10%;
  }
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  resize: vertical;
  min-height: 120px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
    min-height: 100px;
  }
`;

const Button = styled.button`
  background-color: #043854;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  width: fit-content; /* padrão desktop */

  &:hover {
    background-color: #065a81;
  }

  @media (max-width: 768px) {
    width: 100%; /* botão ocupa toda largura em mobile */
    font-size: 15px;
    padding: 12px 0;
  }
`;

const Preview = styled.div`
  margin-top: 30px;
  border-top: 1px solid #ccc;
  padding-top: 20px;

  img {
    max-width: 100%;
    border-radius: 8px;
  }

  h2 {
    margin-bottom: 5px;
  }

  small {
    color: gray;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: 15px;

    h2 {
      font-size: 1.3rem;
    }
  }
`;

function NewPost() {
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [publicado, setPublicado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você futuramente conectará ao backend
    console.log({ titulo, resumo, conteudo, thumbnail });
    setPublicado(true);
  };

  return (
    <>
      <HeaderAdmin />
      <Container>
        <Title>Nova Postagem</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Título:</Label>
          <Input value={titulo} onChange={(e) => setTitulo(e.target.value)} required />

          <Label>Resumo:</Label>
          <Input value={resumo} onChange={(e) => setResumo(e.target.value)} required />

          <Label>Conteúdo:</Label>
          <Textarea value={conteudo} onChange={(e) => setConteudo(e.target.value)} required />

          <Label>Thumbnail (URL):</Label>
          <Input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />

          <Button type="submit">Publicar</Button>
        </Form>

        {publicado && (
          <Preview>
            <h2>Prévia da Postagem</h2>
            {thumbnail && <img src={thumbnail} alt="Thumbnail" />}
            <h3>{titulo}</h3>
            <small>{resumo}</small>
            <p>{conteudo}</p>
          </Preview>
        )}
      </Container>
    </>
  );
}

export default NewPost;
