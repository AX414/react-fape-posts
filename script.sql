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
('João da Silva', 'Administrador responsável pelo conteúdo geral.', NULL, 'joao@fape.com', 'senha123'),
('Maria Oliveira', 'Editora de postagens acadêmicas.', NULL, 'maria@fape.com', 'senha456'),
('Carlos Lima', 'Responsável por eventos e atualizações.', NULL, 'carlos@fape.com', 'senha789');

INSERT INTO posts (author, resumo, titulo, conteudo, thumbnail)
VALUES 
(1, 'Resumo do post sobre educação.', 'Educação em Teodoro Sampaio', 'Conteúdo completo sobre educação e seus avanços.', NULL),

(2, 'Evento acadêmico da semana.', 'Semana da Ciência', 'Detalhes sobre os eventos programados para a Semana da Ciência.', NULL),

(3, 'Novidades na área da saúde.', 'Saúde Pública Municipal', 'Informações sobre campanhas de vacinação e atendimento.', NULL);


SELECT * FROM administradores;
SELECT * FROM posts;

