import styled from "styled-components";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const PageContainer = styled.div`
  margin-top: 5%;
  padding: 40px clamp(16px, 8%, 80px);
  font-family: 'PT Sans Narrow', sans-serif;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #043854;
  margin-bottom: 12px;
`;

const Link = styled.a`
  display: block;
  color: #065a81;
  font-size: 1.1rem;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

function Indices() {
  return (
    <>
      <Header />
      <PageContainer>
        <Section>
          <SectionTitle>Secretaria Acadêmica</SectionTitle>
          <Link href="">Requerimento de documentos</Link>
          <Link href="">Atestado de matrícula</Link>
          <Link href="">Histórico Escolar</Link>
        </Section>

        <Section>
          <SectionTitle>Coordenação de Curso</SectionTitle>
          <Link href="">Horários das aulas</Link>
          <Link href="">Formulário de estágio</Link>
          <Link href="">Orientações de TCC</Link>
        </Section>

        <Section>
          <SectionTitle>Biblioteca</SectionTitle>
          <Link href="">Catálogo online</Link>
          <Link href="">Renovação de empréstimos</Link>
          <Link href="">Normas da ABNT</Link>
        </Section>

        <Section>
          <SectionTitle>Portal do Aluno</SectionTitle>
          <Link href="">Acesso ao boletim</Link>
          <Link href="">Plano de ensino</Link>
          <Link href="">Frequência e notas</Link>
        </Section>

        <Section>
          <SectionTitle>Setor Financeiro</SectionTitle>
          <Link href="">2ª via de boleto</Link>
          <Link href="">Comprovante de pagamento</Link>
          <Link href="">Negociação de mensalidade</Link>
        </Section>
      </PageContainer>
      <Footer />
    </>
  );
}

export default Indices;
