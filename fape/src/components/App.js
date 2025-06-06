import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const AppContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Main/> {/* ← aqui vai as rotas do meu sistema*/}
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
