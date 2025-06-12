import styled from "styled-components";
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import ScrollToTopButton from '../../ScroolToTop/ScroolToTop';
import Indices from "../Indices/Indices";

const HomeContainer = styled.main`
    flex: 1;
    flex-grow: 1;
    padding-top: 60px;

    @media (max-width: 768px) {
        padding-top: 50px;
    }
`

function Home() {
    return (
        <HomeContainer>
            <Header />
            <Indices/>
            <Footer />
            <ScrollToTopButton />
        </HomeContainer>
    );
}

export default Home;