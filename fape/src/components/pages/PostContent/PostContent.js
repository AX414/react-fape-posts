import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { mockPosts } from '../Home/Posts/mockPosts';

// Função para gerar uma cor aleatória
function getRandomGradient() {
  const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#A29BFE', '#6C5CE7'];
  const [c1, c2] = [colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)]];
  return `linear-gradient(135deg, ${c1}, ${c2})`;
}

const Container = styled.main`
  padding: 120px clamp(16px, 10%, 80px) 40px;
  font-family: 'PT Sans Narrow', sans-serif;
  color: #222;
`;

const Thumbnail = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 40px;
  margin-bottom: 24px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const FallbackGradient = styled.div`
  width: 100%;
  max-height: 300px;
  border-radius: 8px;
  margin-top: 40px;
  margin-bottom: 24px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  background: ${getRandomGradient()};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #043854;
  margin-bottom: 8px;
`;

const DateText = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 20px;
  font-style: italic;
`;

const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: #ddd;
  margin-bottom: 32px;
`;

const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 48px;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

const AuthorThumbnail = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const AuthorName = styled.p`
  font-size: 1rem;
  color: #555;
  font-weight: 600;
`;

function PostContent() {
  const { id } = useParams();
  const [imgErro, setImgErro] = useState(false);

  const post = mockPosts.find(p => p.id === id);

  if (!post) {
    return <Container>Post não encontrado.</Container>;
  }

  return (
    <Container>
      {post.thumbnail && !imgErro ? (
        <Thumbnail
          src={post.thumbnail}
          alt={post.titulo}
          onError={() => setImgErro(true)}
        />
      ) : (
        <FallbackGradient />
      )}

      <Title>{post.titulo}</Title>
      <DateText>{post.data}</DateText>
      <Separator />
      <Content>{post.conteudo}</Content>

      <AuthorSection>
        <AuthorThumbnail src={post.autor.thumbnail} alt={post.autor.nome} />
        <AuthorName>{post.autor.nome}</AuthorName>
      </AuthorSection>
    </Container>
  );
}

export default PostContent;
