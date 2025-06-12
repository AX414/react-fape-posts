import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 48px;
  height: 48px;
  background-color: #043854;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, background-color 0.3s ease;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #065f91;
    transform: scale(1.15);
  }

  @media (max-width: 600px) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
`;


function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <Button onClick={scrollToTop} aria-label="Voltar ao topo">
      <FaArrowUp />
    </Button>
  );
}

export default ScrollToTop;