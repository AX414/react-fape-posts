import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px clamp(16px, 6%, 80px);
  font-family: 'PT Sans Narrow', sans-serif;

  @media (max-width: 768px) {
    padding-top: 10px;
  }

  @media (max-width: 480px) and (orientation: landscape) {
    padding-top: 20px;
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
          <Link href="">Calendário Acadêmico</Link>
          <Link href="">Informações sobre Enade</Link>
          <Link href="">Regulamento Acadêmico</Link>
          <Link href="">Fale com a Secretaria</Link>
        </Section>

        <Section>
          <SectionTitle>Coordenação de Curso</SectionTitle>
          <Link href="">Horários das aulas</Link>
          <Link href="">Formulário de estágio</Link>
          <Link href="">Orientações de TCC (modelos, prazos, banca, normas)</Link>
          <Link href="">Projetos Pedagócigos de Curso (PPC)</Link>
          <Link href="">Corpo Docente</Link>
          <Link href="">Fale com a Coordenação</Link>
        </Section>

        <Section>
          <SectionTitle>Biblioteca</SectionTitle>
          <Link href="">Tutorial de Pesquisa e uso da biblioteca</Link>
          <Link href="">Catálogo online</Link>
          <Link href="">Renovação de empréstimos</Link>
          <Link href="">Bases de Dados e Periódicos</Link>
          <Link href="">Biblioteca Digital E-books</Link>
          <Link href="">Horário de funcionamento e contato</Link>
        </Section>

        <Section>
          <SectionTitle>Suporte ao Aluno</SectionTitle>
          <Link href="">Plano de ensino</Link>
          <Link href="">Frequência e notas</Link>
          <Link href="">Ouvidoria</Link>
          <Link href="">Apoio Psicopedagógico</Link>
          <Link href="">Núcleo de Apoio ao Estudante (NAE)</Link>
          <Link href="">Central de Estágios</Link>
          <Link href="">Atléticas e Diretórios Acadêmicos</Link>
          <Link href="">Ambiente Virtual de Aprendizagem</Link>
          <Link href="">Acesso a materiais complementares de aulas</Link>
          <Link href="">Atualização de dados cadastrais</Link>
        </Section>

        <Section>
          <SectionTitle>Setor Financeiro</SectionTitle>
          <Link href="">Portal do Aluno</Link>
          <Link href="">2ª via de boleto</Link>
          <Link href="">Negociação de mensalidade</Link>
          <Link href="">Informações sobre bolsas e descontos</Link>
          <Link href="">Fale com o Financeiro (contato e horários)</Link>
        </Section>

        <Section>
          <SectionTitle>Extensão e Pesquisa</SectionTitle>
          <Link href="">Projetos de Extensão (participação, editais)</Link>
          <Link href="">Iniciação Científica (editais, como participar)</Link>
          <Link href="">Eventos Acadêmicos (palestras, seminários, workshops)</Link>
          <Link href="">Certificados dos Eventos</Link>
          <Link href="">Grupos de Estudo e Pesquisa (GEP)</Link>
        </Section>

        <Section>
          <SectionTitle>Notícias e Eventos</SectionTitle>
          <Link href="">Últimas notícias da FAPE</Link>
          <Link href="">Agenda de Eventos (acadêmicos, culturais, esportivos)</Link>
          <Link href="">Inscrições de Eventos</Link>
          <Link href="">Mural de Avisos</Link>
        </Section>


        <Section>
          <SectionTitle>Núcleo de Práticas Jurídicas</SectionTitle>
          <Link href="">Horários de atendimento da Coordenação</Link>
          <Link href="">Regulamentos</Link>
          <Link href="">Modelo de Peças Processuais</Link>
          <Link href="">Documentos de Estágio</Link>
          <Link href="">Concursos Jurídicos</Link>
          <Link href="">Serviço de atendimento Jurídico - SAJ</Link>
        </Section>


        <Section>
          <SectionTitle>Estágios e Licenciatura</SectionTitle>
          <Link href="">Laboratórios</Link>
          <Link href="">Estágios Específicos</Link>
          <Link href="">Estágios Esportivos e Treinamentos</Link>
          <Link href="">Estágios em Escolas e Instituições Educacionais</Link>
          <Link href="">Material de Apoio para Prática Docente</Link>
          <Link href="">Legislação Educacional (LDB, BNCC)</Link>
        </Section>

        <Section>
          <SectionTitle>Estácios em Administração e Contábeis</SectionTitle>
          <Link href="">FAPE Júnior</Link>
          <Link href="">Documentos de Estágio</Link>
          <Link href="">Notícias de Mercado (tendências, análises)</Link>
          <Link href="">Conselhos Regionais (CRA, CRC)</Link>
        </Section>

      </GridSection>
    </PageContainer>
  );
}

//Usar npm run predeploy/deploy depois para mandar pro github pages
export default Indices;
