import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPlus, FaEdit, FaTrash, FaImage } from 'react-icons/fa';
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin';
import ScroolToTop from '../../../ScroolToTop/ScroolToTop';

const DashboardContainer = styled.div`
  padding: 40px clamp(16px, 10%, 80px);
  font-family: 'PT Sans Narrow', sans-serif;
  margin: 5% 10%;
`;

const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const ActionCard = styled(Link)`
  background-color: #043854;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: background 0.3s;

  &:hover {
    background-color: #065a81;
  }

  svg {
    font-size: 1.5rem;
  }
`;

const PostList = styled.div`
  display: grid;
  gap: 16px;
`;

const PostItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
`;

const PostActions = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 16px;
`;

const EditLink = styled(Link)`
  color: #065a81;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    text-decoration: underline;
  }
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #c0392b;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    text-decoration: underline;
  }
`;

function AdminDashboard({ posts = [] }) {
  return (
    <>
    <HeaderAdmin/>
    <DashboardContainer>
      
      <h1>Admin Dashboard</h1>

      <ActionGrid>
        <ActionCard to="/admin/novo-post">
          <FaPlus />
          Inserir Novo Post
        </ActionCard>
        <ActionCard to="/admin/banners">
          <FaImage />
          Modificar Banners
        </ActionCard>
      </ActionGrid>

      <h2>Seus Posts</h2>
      <PostList>
        {posts.length === 0 ? (
          <p>Você ainda não criou nenhum post.</p>
        ) : (
          posts.map((post) => (
            <PostItem key={post.id}>
              <h3>{post.titulo}</h3>
              <PostActions>
                <EditLink to={`/admin/editar-post/${post.id}`}>
                  <FaEdit />
                  Editar
                </EditLink>
                <DeleteButton onClick={() => {/* deletarPost(post.id) */}}>
                  <FaTrash />
                  Excluir
                </DeleteButton>
              </PostActions>
            </PostItem>
          ))
        )}
      </PostList>
      <ScroolToTop/>
    </DashboardContainer>
    </>
  );
}

export default AdminDashboard;
