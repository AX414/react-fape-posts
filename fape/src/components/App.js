import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Main from './Main/Main';

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
        <Main />
      </AppContainer>
    </Router>
  );
}

export default App;
