import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-family: 'PT Sans Narrow', sans-serif;
  color: inherit;
  text-decoration: none;
  transition: box-shadow 0.3s ease;
  width: 100%;
  max-width: 400px; /* limite de tamanho */

  &:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }

  img, div {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    flex-shrink: 0;
  }

  h3 {
    margin: 16px;
    font-size: 1rem;
    color: #043854;
    flex-shrink: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    text-overflow: ellipsis;
  }

  time {
    margin: 0 16px 8px;
    font-size: 0.75rem;
    color: #999;
    flex-shrink: 0;
  }

  p {
    margin: 0 16px 8px;
    font-size: 0.9rem;
    color: #555;
    flex-grow: 1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .author {
    margin: 0 16px 16px;
    font-size: 0.8rem;
    color: #777;
    font-style: italic;
    flex-shrink: 0;
  }
`;



function PostCard({ post }) {
  const [imgError, setImgError] = useState(false);

  // Gera as cores do gradiente só na montagem do componente
  const [hues] = useState(() => {
    const randomHue1 = Math.floor(Math.random() * 360);
    const randomHue2 = (randomHue1 + 60) % 360;
    return [randomHue1, randomHue2];
  });

  return (
    <Card to={`/post/${post.id}`}>
      {!imgError ? (
        <img
          src={process.env.PUBLIC_URL + '/' + post.thumbnail}
          alt={post.titulo}
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          style={{
            background: `linear-gradient(135deg, hsl(${hues[0]}, 70%, 60%), hsl(${hues[1]}, 70%, 60%))`,
          }}
        />
      )}
      <h3>{post.titulo}</h3>
      <time>{post.data}</time>
      <p>{post.resumo}</p>
      <p className="author">Autor: {post.autor.nome}</p>
    </Card>
  );
}

export default PostCard;
