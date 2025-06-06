import styled from 'styled-components';
import { useState } from 'react';
import { mockPosts } from './mockPosts';
import PostCard from './PostCard/PostCard';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 40px clamp(16px, 10%, 80px);
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;
  gap: 8px;
`;

const PageButton = styled.button`
  background: ${(props) => (props.active ? '#043854' : 'white')};
  color: ${(props) => (props.active ? 'white' : '#043854')};
  border: 1px solid #043854;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-family: 'PT Sans Narrow', sans-serif;

  &:hover:not(:disabled) {
    background: #065a81;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

// Função para converter data textual para objeto Date para ordenação
function parseDate(dateStr) {
  // Exemplo: "12 de Junho de 2025"
  const [day, , monthName, , year] = dateStr.split(' ');
  const months = {
    Janeiro: 0,
    Fevereiro: 1,
    Março: 2,
    Abril: 3,
    Maio: 4,
    Junho: 5,
    Julho: 6,
    Agosto: 7,
    Setembro: 8,
    Outubro: 9,
    Novembro: 10,
    Dezembro: 11,
  };
  return new Date(year, months[monthName], day);
}

function Posts() {
  const POSTS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Ordena os posts da data mais recente para a mais antiga
  const sortedPosts = [...mockPosts].sort((a, b) => parseDate(b.data) - parseDate(a.data));

  // Pega os posts da página atual
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = sortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  return (
    <>
      <GridContainer>
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </GridContainer>
      {totalPages > 1 && (
        <PaginationContainer>
          <PageButton
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </PageButton>

          {[...Array(totalPages)].map((_, i) => (
            <PageButton
              key={i + 1}
              active={currentPage === i + 1}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}

          <PageButton
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próxima
          </PageButton>
        </PaginationContainer>
      )}
    </>
  );
}

export default Posts;
