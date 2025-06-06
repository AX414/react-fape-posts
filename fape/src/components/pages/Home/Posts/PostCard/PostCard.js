import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function PostCard({ post }) {
  const [imgError, setImgError] = useState(false);

  // Gera as cores do gradiente só na montagem do componente
  const [hues] = useState(() => {
    const randomHue1 = Math.floor(Math.random() * 360);
    const randomHue2 = (randomHue1 + 60) % 360;
    return [randomHue1, randomHue2];
  });

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
    height: 380px;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }

    img, div {
      width: 100%;
      height: 180px;
      object-fit: cover;
      flex-shrink: 0;
    }

    h3 {
      margin: 16px;
      font-size: 18px;
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
      font-size: 12px;
      color: #999;
      flex-shrink: 0;
    }

    p {
      margin: 0 16px 8px;
      font-size: 14px;
      color: #555;
      flex-grow: 1;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .author {
      margin: 0 16px 16px;
      font-size: 13px;
      color: #777;
      font-style: italic;
      flex-shrink: 0;
    }
  `;

  return (
    <Card to={`/post/${post.id}`}>
      {!imgError ? (
        <img
          src={post.thumbnail}
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
