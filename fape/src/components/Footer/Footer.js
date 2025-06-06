import styled from "styled-components";
import FadeInSection from "../pages/Home/Posts/Animations/FadeInSection/FadeInSection";
import { useOnScreen } from "../pages/Home/Posts/Animations/useOnScreen";

const FooterContainer = styled.footer`
    background-color: #F2F2F2;
    height: auto;
    width: 100vw;
    bottom: 0;
`

const HorariosContainer = styled.div`
    color: white;
    background-color: #043854;
    padding: 2px 0 2px 0;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-family: 'PT Sans Narrow', sans-serif;
`

const ContatosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 10% 20px 10%;
  background-color: #FFF;
  color: black;
  font-family: 'PT Sans Narrow', sans-serif;
  flex-wrap: wrap;

  div {
    flex: 1;
    min-width: 150px;
  }
  
`

const Titulo = styled.h4`
    font-weight: 100;
    margin-bottom: 10px;

`

const Link = styled.a`
    color: #043854;
    display: block;
    text-decoration: none;
    margin-bottom: 5px;

    &:hover {
      text-decoration: underline;
    }
`

const EnderecoTelefoneContainer = styled.div`
  text-align: center;
  background-color: #FFF;
  color: black;
  font-size: 14px;
  padding: 10px 20px;
  font-family: 'PT Sans Narrow', sans-serif;
`


const CopyrightContainer = styled.div`
    color: black;
    background-color: #F2F2F2 ;
    padding: 2px 0 2px 0;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-family: 'PT Sans Narrow', sans-serif;
    font-weight: thin;

    p{
        font-size: 14px;
    }
`

function Footer() {

    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <FadeInSection ref={ref} className={isVisible ? 'visible' : ''}>
            <FooterContainer>
                <HorariosContainer>
                    <p>Horário de funcionamento das 08:00 às 18:00</p>
                </HorariosContainer>

                <ContatosContainer>
                    <div>
                        <Titulo>VESTIBULAR</Titulo>
                        <Link href="https://uniespvestibular.com.br/">Inscreva-se</Link>
                        <Link href="https://uniesp.edu.br/sites/presidenteepitacio/transferencia.php">Transferência</Link>
                        <Link href="https://uniesp.edu.br/sites/presidenteepitacio/segunda_graduacao.php">Segunda Graduação</Link>
                        <Link href="https://uniesp.edu.br/sites/presidenteepitacio/matricula.php">Matricula</Link>
                        <Link href="https://uniesp.edu.br/sites/presidenteepitacio/manuais_portarias.php">Editais, Regulamentos e Mensalidades</Link>
                    </div>
                    <div>
                        <Titulo>UNIESP</Titulo>
                        <Link href="https://uniesp.edu.br/sites/presidenteepitacio/trabalhe_conosco.php">Trabalhe Conosco</Link>
                    </div>
                    <div>
                        <Titulo>PROJETOS SOCIAIS</Titulo>
                        <Link href="https://uniesp.edu.br/sites/presidenteepitacio/ouvidoria.php">Ouvidoria</Link>
                    </div>
                    <div>
                        <Titulo>NOSSA PÁGINA</Titulo>
                        <Link href="https://www.facebook.com/fapeoficial/?ref=embed_page#">Facebook</Link>
                    </div>
                    <div>
                        <Titulo>COMO CHEGAR</Titulo>
                        <div style={{ maxWidth: '320px', margin: '0 auto' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1852.5758542609772!2d-52.10678781019249!3d-21.77438875349263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbe5d3df31536739!2sFaculdade+de+Presidente+Epitacio+UNIESP!5e0!3m2!1spt-BR!2sbr!4v1496949079308"
                                width="100%"
                                height="220"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </ContatosContainer>

                <EnderecoTelefoneContainer>
                    <p>Rua Pernambuco, 17-05 - Centro - Presidente Epitácio / SP Cep: 19470-000</p>
                    <p>Telefone: (18) 3199-2908 / 99620-9326</p>
                </EnderecoTelefoneContainer>

                <CopyrightContainer>
                    <p>FAPE - Faculdade de Presidente Epitácio | Todos os direitos reservados © 2025.</p>
                </CopyrightContainer>
            </FooterContainer>
        </FadeInSection>
    );
}

export default Footer;