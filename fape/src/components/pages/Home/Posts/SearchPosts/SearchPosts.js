import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;  /* centraliza horizontal */
  margin-bottom: 32px;
  padding: 0 16px;          /* espaçamento lateral para responsividade */
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px 14px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-family: 'PT Sans Narrow', sans-serif;

  &:focus {
    outline: none;
    border-color: #043854;
    box-shadow: 0 0 5px #065a81;
  }
`;

export default function SearchPosts({ searchTerm, setSearchTerm }) {
  return (
    <Container>
      <SearchInput
        type="search"
        placeholder="Buscar por título..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Buscar posts por título"
      />
    </Container>
  );
}
