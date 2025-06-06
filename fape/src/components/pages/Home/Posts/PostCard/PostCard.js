import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

function PostCard({ post }) {
  const [imgError, setImgError] = useState(false);

  const randomHue1 = Math.floor(Math.random() * 360);
  const randomHue2 = (randomHue1 + 60) % 360;

  const Card = styled(Link)`
  display: block;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-family: 'PT Sans Narrow', sans-serif;
  color: inherit;
  text-decoration: none;

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
    margin: 0 16px 8px;
    font-size: 14px;
    color: #555;
  }

  time {
    margin: 0 16px 16px;
    display: block;
    font-size: 12px;
    color: #999;
  }

  &:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
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
            width: '100%',
            height: '180px',
            background: `linear-gradient(135deg, hsl(${randomHue1}, 70%, 60%), hsl(${randomHue2}, 70%, 60%))`,
          }}
        />
      )}
      <h3>{post.titulo}</h3>
      <time>{post.data}</time>
      <p>{post.resumo}</p>
      <p style={{ margin: '0 16px 16px', fontSize: '13px', color: '#777', fontStyle: 'italic' }}>
        Autor: {post.autor.nome}
      </p>
    </Card>
  );
}

export default PostCard;