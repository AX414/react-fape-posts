import styled from "styled-components";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import Posts from "./Posts/Posts";

const HomeContainer = styled.main`
    flex: 1;
`

const TituloContainer = styled.h2`
    color: black;
    padding: 2px 0 2px 0;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-family: 'PT Sans Narrow', sans-serif;
`

function Home(){
    return(
        <HomeContainer>
            <ImageCarousel/>
            <TituloContainer>
                PUBLICAÇÕES
            </TituloContainer>
            <Posts/>
        </HomeContainer>
    );
}

export default Home;