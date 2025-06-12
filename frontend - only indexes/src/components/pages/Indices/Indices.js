import styled from "styled-components";

const PageContainer = styled.div`
  padding: 40px clamp(16px, 6%, 80px);
  font-family: 'PT Sans Narrow', sans-serif;

  @media (max-width: 768px) {
    padding-top: 60px;
  }

  @media (max-width: 480px) and (orientation: landscape) {
    padding-top: 80px;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, max-content));
  gap: 20px;
  padding: 40px clamp(16px, 10%, 80px);
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  background: #f8f9fa;
  border: 1px solid #dce1e5;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  color: #043854;
  margin-bottom: 12px;
`;

const Link = styled.a`
  display: block;
  color: #065a81;
  font-size: 1.05rem;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

function Indices() {
  return (
    <PageContainer>
      <GridSection>
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
      </GridSection>
    </PageContainer>
  );
}

export default Indices;
