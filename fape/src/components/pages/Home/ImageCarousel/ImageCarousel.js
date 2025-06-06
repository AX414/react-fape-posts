import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  padding: 120px clamp(16px, 10%, 80px) 0;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  .carousel .slide {
    position: relative;
    overflow: hidden;
  }

  .carousel .slide img {
    height: 300px;
    object-fit: cover;
    width: 100%;
    display: block;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  .carousel .slide::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 100px 16px 0;

    .carousel .slide img {
      height: 200px;
    }
  }
`;

const SlideContent = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-family: 'PT Sans Narrow', sans-serif;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 12px;
  }
`;

function ImageCarousel() {
  return (
    <CarouselContainer>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src="/images/carousel/carousel1.jpg" alt="Imagem 1" />
          <SlideContent>Bem-vindo ao nosso site</SlideContent>
        </div>
        <div>
          <img src="/images/carousel/carousel2.jpg" alt="Imagem 2" />
          <SlideContent>Conheça nossos serviços</SlideContent>
        </div>
        <div>
          <img src="/images/carousel/carousel3.jpg" alt="Imagem 3" />
          <SlideContent>Fale conosco para saber mais</SlideContent>
        </div>
      </Carousel>
    </CarouselContainer>
  );
}

export default ImageCarousel;
