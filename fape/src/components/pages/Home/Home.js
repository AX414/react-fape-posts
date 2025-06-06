import styled from "styled-components";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import Posts from "./Posts/Posts";
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import ScrollToTopButton from '../../ScroolToTop/ScroolToTop';

const HomeContainer = styled.main`
    flex: 1;
    flex-grow: 1;
  padding-top: 60px;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`

const TituloContainer = styled.h2`
    color: black;
    padding: 2px 0 2px 0;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-family: 'PT Sans Narrow', sans-serif;
`

function Home() {
    return (
        <HomeContainer>
            <Header />
            <ImageCarousel />
            <TituloContainer>
                PUBLICAÇÕES
            </TituloContainer>
            <Posts />
            <Footer />
            <ScrollToTopButton />
        </HomeContainer>
    );
}

export default Home;