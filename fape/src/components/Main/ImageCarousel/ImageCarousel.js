import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  margin-top: 5%;
  width: 100vw;
  overflow: hidden;

  .carousel .slide img {
    height: 300px; /* Altura estilo banner */
    object-fit: cover; /* Cobre todo o espaço mantendo proporção */
    width: 100%;
  }

  @media (max-width: 768px) {
    .carousel .slide img {
      height: 200px;
    }
  }
`;

function ImageCarousel() {
  return (
    <CarouselContainer>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src="/images/carousel/carousel1.jpg" alt="Imagem 1" />
        </div>
        <div>
          <img src="/images/carousel/carousel2.jpg" alt="Imagem 2" />
        </div>
        <div>
          <img src="/images/carousel/carousel3.jpg" alt="Imagem 3" />
        </div>
      </Carousel>
    </CarouselContainer>
  );
}

export default ImageCarousel;
