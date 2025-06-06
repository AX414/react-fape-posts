import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 40px clamp(16px, 10%, 80px);
`;

const Card = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-family: 'PT Sans Narrow', sans-serif;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  h3 {
    margin: 16px;
    font-size: 18px;
    color: #043854;
  }

  p {
    margin: 0 16px 16px;
    font-size: 14px;
    color: #555;
  }
`;

function Publicacoes() {
  const dados = [
    {
      titulo: "Título da Notícia 1",
      imagem: "/images/posts/post1.jpg",
      resumo: "Breve resumo da notícia ou evento publicado.",
    },
    {
      titulo: "Título da Notícia 2",
      imagem: "/images/posts/post2.jpg",
      resumo: "Breve resumo da notícia ou evento publicado.",
    },
    {
      titulo: "Título da Notícia 3",
      imagem: "/images/posts/post3.jpg",
      resumo: "Breve resumo da notícia ou evento publicado.",
    },
  ];

  return (
    <GridContainer>
      {dados.map((item, index) => (
        <Card key={index}>
          <img src={item.imagem} alt={item.titulo} />
          <h3>{item.titulo}</h3>
          <p>{item.resumo}</p>
        </Card>
      ))}
    </GridContainer>
  );
}

export default Publicacoes;
