import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const repoName = '/react-fape-posts'; // meu repo no github pages

function App() {
  return (
    <Router basename={repoName}>
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
