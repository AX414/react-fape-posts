import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import ScrollToTopButton from './ScroolToTop/ScroolToTop';

const AppContainer = styled.div`
  min-height: 100dvh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Main />
        <Footer />
        <ScrollToTopButton />
      </AppContainer>
    </Router>
  );
}

export default App;
