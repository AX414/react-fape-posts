# Aplicando react no frontend
Este site iniciou como um exemplo que criei para trabalhar minhas habilidades de front-end e é baseado em uma faculdade de minha região, porém após o diretor da faculdade ver, ele solicitou que eu realizasse uma página de índices para que os alunos pudessem utilizar depois.

Atualmente existe duas versões do frontend, a ```only with indexes``` foi realizada para meu trabalho onde o diretor da faculdade me solicitou um website contendo todos os links que os alunos irão utilizar relacionados aos portais de provas e outros links de interesse para eles. A versão ```with all features``` possui o frontend feito com componentes que permitem a criação de postagens que carregam de um json chamado ```mockPosts``` contendo uma estrutura semelhante à essa:

```
  {
    id: 'Identificador da notícia',
    titulo: "Título da notícia",
    resumo: "Resumo da notícia que aparecerá em um card",
    thumbnail: "Link de uma pasta ou url",
    data: "Data da notícia",
    conteudo: "Conteúdo da notícia",
    autor: {
      nome: "Nome do autor",
      thumbnail: "Link de uma pasta ou url"
    }
  },
```

Da forma como está, sem um banco de dados é até possível realizar publicações enquanto eu alimentar este documento ```json```, porém certamente não é a forma correta, o correto seria realizar um banco de dados e um projeto ```backend``` com ```nodejs``` (o que eu já tenho feito, porém inacabado por eu não ter tanta experiência com node *AINDA*). 

De qualquer forma, este certamente está sendo um trabalho divertido para mim que nunca usou react antes.

Link do gh-pages: ```https://ax414.github.io/react-fape-posts/```