-- Criação da tabela administradores
CREATE TABLE administradores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    resumo TEXT,
    thumbnail VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Criação da tabela posts
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    author INTEGER NOT NULL REFERENCES administradores(id) ON DELETE CASCADE,
    data TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    resumo TEXT NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    thumbnail VARCHAR(255)
);

-- Criação da tabela banners_carousel
CREATE TABLE banners_carousel (
    id SERIAL PRIMARY KEY,
    ligado BOOLEAN DEFAULT FALSE,
    thumbnail VARCHAR(255),
    link VARCHAR(255)
);

INSERT INTO administradores (nome, resumo, thumbnail, email, senha)
VALUES 
('Prof. Carlos Almeida', NULL, 'images/authors/author1.jpg', 'carlosalmeida@fape.com', 'senha123'),
('Mário Fernandez', NULL, 'images/authors/author2.jpg', 'mariofernandez@fape.com', 'senha123'),
('Luana Martins', NULL, 'images/authors/author3.jpg', 'luanamartins@fape.com', 'senha123');

INSERT INTO posts (author, resumo, titulo, conteudo, thumbnail)
VALUES 
(4, 'A tradicional Semana Acadêmica de Engenharia ocorrerá entre os dias 12 e 16 de junho, com palestras, workshops e visitas técnicas.', 'Semana Acadêmica de Engenharia: Programação Confirmada', 'A Faculdade FAPE confirma a realização da Semana Acadêmica de Engenharia, que acontecerá presencialmente no campus central. O evento reunirá profissionais renomados para palestras e debates sobre as tendências e inovações na área de engenharia.
Entre as atrações estão workshops práticos, apresentações de trabalhos acadêmicos e visitas técnicas às empresas parceiras da faculdade.
Participe e amplie seus conhecimentos com os especialistas do setor!', 'images/posts/post1.jpg'),

(5, 'A biblioteca da Faculdade FAPE passará a funcionar até às 22h durante o período de provas, para apoiar os estudantes na preparação para os exames.', 'Biblioteca Central amplia horário de atendimento para o período de provas', 'Com o objetivo de proporcionar um ambiente favorável para os estudos, a Biblioteca Central da Faculdade FAPE ampliará seu horário de funcionamento durante o período de provas.

Entre os dias 1 e 15 de junho, a biblioteca funcionará das 8h às 22h, oferecendo espaços silenciosos, computadores e acesso a materiais digitais para facilitar o aprendizado dos estudantes.

A equipe reforça a importância de seguir os protocolos de segurança e respeitar as normas internas para garantir um ambiente tranquilo para todos.', 'images/posts/post2.jpg'),

(5, 'Estão abertas as inscrições para o curso de extensão em Marketing Digital, voltado para estudantes e profissionais interessados em ampliar suas habilidades na área.', 'Inscrições abertas para o curso de extensão em Marketing Digital', 'O curso de extensão em Marketing Digital da Faculdade FAPE está com inscrições abertas até o dia 10 de junho. Com duração de três meses, o curso abordará temas como SEO, campanhas pagas, redes sociais e análise de dados.

As aulas serão ministradas em formato híbrido, possibilitando a participação presencial ou online. Ao final, os participantes receberão certificado válido para comprovação de horas complementares.

Não perca a oportunidade de se atualizar e se destacar no mercado! Inscreva-se já.', 'images/posts/post3.jpg');

SELECT * FROM administradores;
SELECT * FROM posts;

