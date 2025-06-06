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
    <AppContainer>
      <Header/>
      <Main/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
