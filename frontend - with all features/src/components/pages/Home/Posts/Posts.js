import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { supabase } from '../../../../supabaseClient';
import FadeInPostCard from './Animations/FadeInPostCard/FadeInPostCard';
import SearchPosts from './SearchPosts/SearchPosts';
import { mockPosts } from './mockPosts';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, max-content));
  gap: 20px;
  padding: 40px clamp(16px, 10%, 80px);
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  &.single-post {
    justify-content: center;
  }
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

function Posts() {
  const POSTS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select(`
            *,
            author:author (
              id,
              nome,
              thumbnail
            )
          `)
          .order('data', { ascending: false });

        if (error) throw error;
        setPosts(data);
      } catch (error) {
        console.error('Erro ao buscar posts do Supabase:', error);
        setPosts(mockPosts);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <>
      <SearchPosts searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <GridContainer className={currentPosts.length === 1 ? 'single-post' : ''}>
        {currentPosts.map(post => (
          <FadeInPostCard key={post.id} post={post} />
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
