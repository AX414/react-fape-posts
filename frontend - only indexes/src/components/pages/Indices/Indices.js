import styled from "styled-components";
import { useState, useMemo } from "react";

// Estilos
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

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  padding: 0 16px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px 14px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-family: 'PT Sans Narrow', sans-serif;

  &:focus {
    outline: none;
    border-color: #043854;
    box-shadow: 0 0 5px #065a81;
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

// Dados estáticos
const sections = [
  {
    "section": "Secretaria Acadêmica",
    "links": [
      { "title": "Requerimento de documentos", "href": "" },
      { "title": "Calendário Acadêmico", "href": "" },
      { "title": "Informações sobre Enade", "href": "" },
      { "title": "Regulamento Acadêmico", "href": "" },
      { "title": "Fale com a Secretaria", "href": "" }
    ]
  },
  {
    "section": "Coordenação de Curso",
    "links": [
      { "title": "Horários das aulas", "href": "" },
      { "title": "Formulário de estágio", "href": "" },
      { "title": "Orientações de TCC (modelos, prazos, banca, normas)", "href": "" },
      { "title": "Projetos Pedagócigos de Curso (PPC)", "href": "" },
      { "title": "Corpo Docente", "href": "" },
      { "title": "Fale com a Coordenação", "href": "" }
    ]
  },
  {
    "section": "Biblioteca",
    "links": [
      { "title": "Tutorial de Pesquisa e uso da biblioteca", "href": "" },
      { "title": "Catálogo online", "href": "" },
      { "title": "Renovação de empréstimos", "href": "" },
      { "title": "Bases de Dados e Periódicos", "href": "" },
      { "title": "Biblioteca Digital E-books", "href": "" },
      { "title": "Horário de funcionamento e contato", "href": "" }
    ]
  },
  {
    "section": "Suporte ao Aluno",
    "links": [
      { "title": "Plano de ensino", "href": "" },
      { "title": "Frequência e notas", "href": "" },
      { "title": "Ouvidoria", "href": "" },
      { "title": "Apoio Psicopedagógico", "href": "" },
      { "title": "Núcleo de Apoio ao Estudante (NAE)", "href": "" },
      { "title": "Central de Estágios", "href": "" },
      { "title": "Atléticas e Diretórios Acadêmicos", "href": "" },
      { "title": "Ambiente Virtual de Aprendizagem", "href": "" },
      { "title": "Acesso a materiais complementares de aulas", "href": "" },
      { "title": "Atualização de dados cadastrais", "href": "" }
    ]
  },
  {
    "section": "Setor Financeiro",
    "links": [
      { "title": "Portal do Aluno", "href": "" },
      { "title": "2ª via de boleto", "href": "" },
      { "title": "Negociação de mensalidade", "href": "" },
      { "title": "Informações sobre bolsas e descontos", "href": "" },
      { "title": "Fale com o Financeiro (contato e horários)", "href": "" }
    ]
  },
  {
    "section": "Extensão e Pesquisa",
    "links": [
      { "title": "Projetos de Extensão (participação, editais)", "href": "" },
      { "title": "Iniciação Científica (editais, como participar)", "href": "" },
      { "title": "Eventos Acadêmicos (palestras, seminários, workshops)", "href": "" },
      { "title": "Certificados dos Eventos", "href": "" },
      { "title": "Grupos de Estudo e Pesquisa (GEP)", "href": "" }
    ]
  },
  {
    "section": "Notícias e Eventos",
    "links": [
      { "title": "Últimas notícias da FAPE", "href": "" },
      { "title": "Agenda de Eventos (acadêmicos, culturais, esportivos)", "href": "" },
      { "title": "Inscrições de Eventos", "href": "" },
      { "title": "Mural de Avisos", "href": "" }
    ]
  },
  {
    "section": "Núcleo de Práticas Jurídicas",
    "links": [
      { "title": "Horários de atendimento da Coordenação", "href": "" },
      { "title": "Regulamentos", "href": "" },
      { "title": "Modelo de Peças Processuais", "href": "" },
      { "title": "Documentos de Estágio", "href": "" },
      { "title": "Concursos Jurídicos", "href": "" },
      { "title": "Serviço de atendimento Jurídico - SAJ", "href": "" }
    ]
  },
  {
    "section": "Estágios e Licenciatura",
    "links": [
      { "title": "Laboratórios", "href": "" },
      { "title": "Estágios Específicos", "href": "" },
      { "title": "Estágios Esportivos e Treinamentos", "href": "" },
      { "title": "Estágios em Escolas e Instituições Educacionais", "href": "" },
      { "title": "Material de Apoio para Prática Docente", "href": "" },
      { "title": "Legislação Educacional (LDB, BNCC)", "href": "" }
    ]
  },
  {
    "section": "Estácios em Administração e Contábeis",
    "links": [
      { "title": "FAPE Júnior", "href": "" },
      { "title": "Documentos de Estágio", "href": "" },
      { "title": "Notícias de Mercado (tendências, análises)", "href": "" },
      { "title": "Conselhos Regionais (CRA, CRC)", "href": "" }
    ]
  }
];


function Indices() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return sections
      .map((section) => {
        const filteredLinks = section.links.filter(link =>
          link.title.toLowerCase().includes(lowerSearch)
        );

        if (
          section.section.toLowerCase().includes(lowerSearch) ||
          filteredLinks.length > 0
        ) {
          return {
            section: section.section,
            links: filteredLinks.length > 0 ? filteredLinks : section.links,
          };
        }

        return null;
      })
      .filter(Boolean);
  }, [searchTerm]);

  return (
    <PageContainer>
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="O que você procura?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar índice"
        />
      </SearchContainer>

      <GridSection>
        {filteredSections.map((section, index) => (
          <Section key={index}>
            <SectionTitle>{section.section}</SectionTitle>
            {section.links.map((link, i) => (
              <Link href={link.url} key={i}>
                {link.title}
              </Link>
            ))}
          </Section>
        ))}
      </GridSection>
    </PageContainer>
  );
}

export default Indices;