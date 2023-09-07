# DIO_Page

Este Projeto é uma reprodução da página da DIO em React.JS e vem sendo desenvolvido nas aulas de React do Bootcamp Orange Tech + do Banco Inter na plataforma da Digital Inovation One - DIO. 

## Índice:

  - [1. DESCRIÇÃO DO PROJETO]()
     
   - [2. ESTRUTURA DO PROJETO]()
     
   - [3. TECNOLOGIAS UTILIZADAS]()
     
   - [4. PASSO A PASSO UTILIZADO]()
     
   - [5. IMPLEMENTAÇÕES FUTURAS]()
     
   - [6. LINKS IMPORTANTES]()
     
   - [7. COMO RODAR O PROJETO]()
     
   - [8. CONFIRA O RESULTADO]()
 

### Quem é Flaviana?

![image](https://github.com/FlavianaFXT/ProjetoFinal-reprograma/assets/113718720/1e13d5e7-b1b4-4701-a689-ec293ec77ea1)

Flaviana Ferraz é uma sertaneja de Pernambuco morando no sertão da Paraiba, formada em Gestão Ambiental e Mestre em Recursos Hídricos. Após mais de 10 anos de formada, aos 34 anos, decidiu fazer transição de carreira. Hoje, empreendedora e trilhando os caminhos do Desenvolvimento FrontEnd.

#### Contatos

- [E-mail](flaviferraz@yahoo.com.br)
- [LinkedIn](https://www.linkedin.com/in/flaviana-ferraz-frontend)
- [GitHub](https://github.com/flavianafxt)

# 1. DESCRIÇÃO DO PROJETO

## Contexto

O objetivo do projeto era reproduzir a página da DIO enquanto aprende-se conceitos e prática do React.JS.

O site contem 3 páginas:
Home
Login
Feed

As funcionalidades implementadas foram: link "Home" no cabeçalho e botão "Começar agora" levando para a tela de Login; Campos de preenchimento no login e verificação; Autenticação com base em dados acessados em API própria.

Pendente: ⛔ Renderização da página Feed - necessário resolução de bugs. ⛔

![image](https://github.com/FlavianaFXT/dio_page/assets/113718720/725ff616-08da-4928-9802-8839ca170fc6)

![image](https://github.com/FlavianaFXT/dio_page/assets/113718720/a13c822b-41d9-4d1d-9914-ddba0737d069)

![image](https://github.com/FlavianaFXT/dio_page/assets/113718720/4c6fbcfb-2ff6-44fa-ba92-506982cff38c)


# 2. ESTRUTURA DO PROJETO


![image](https://github.com/FlavianaFXT/dio_page/assets/113718720/e79570dd-0216-4994-8422-5c13f12c6204)

![image](https://github.com/FlavianaFXT/dio_page/assets/113718720/4ddd3ad7-fb35-42e0-844c-cc7b8c45c108)

![image](https://github.com/FlavianaFXT/dio_page/assets/113718720/647a45f9-f857-4c3c-b1fe-4246a3c045aa)


# 3. TECNOLOGIAS UTILIZADAS

| Ferramenta | Descrição |
| --- | --- |
| `ReactJS` | framework web|
| `Yarn` | gerador de projeto de front-end|
| `npm` | gerenciador de pacotes|
| `Styled-components` | biblioteca que nos permite criar componentes de estilo ao escrever códigos CSS dentro de um arquivo JavaScript|
| `React router dom` | Dependência para criar rotas no reactjs|
| `React-hook-form` | Dependência para trabalhar com formulários no Reactjs|
| `Yup` | Construtor de esquema JS para análise e validação de valor, possibilitando uma maneira abstrata que não interfere no restante da lógica|
| `json server` | dependência para criar uma API fake|
| `Axios` | Para requisição de API|
| `axios.create` | recurso utilizado para criar uma nova instância com uma configuração personalizada. Com ele podemos gerar um cliente para qualquer API e reutilizar a configuração para qualquer chamada usando o mesmo cliente.|
| `Git` | Gerenciador de versionamento de Código|
| `Github` | Hospedagem do código fonte integrado com gerenciador de versionamento|


# 4. PASSO A PASSO UTILIZADO


1️⃣ Preparação do ambiente de trabalho

---> Instalando o Yarn:

`npm install -g yarn`

---> Criando o projeto React:

`npx create-react-app nome-projeto`

Deleta os arquivos que não serão utilizados


2️⃣ Adicionada navegação ao projeto através do react-router-dom

---> Instalando o react-router-dom

`yarn add react-router-dom`


3️⃣Instalação e configuração do styled-components

`yarn add styled-components`


4️⃣ Construção de componentes:

   Foram criados os componentes maiores e mais gerais, cada um na sua pasta com seu nome, e já com sua respectiva estilização.
   Foram criados os seguintes componentes: Header, Button, Card, Input, entre outros.


5️⃣ Construção das páginas Home, Login, Feed a partir da junção de componentes e itens próprios, e suas respectivas estilizações.


6️⃣ Implementação das funcionalidades

---> Navegação (Swich, Route, Link, useNavigate())

---> Autenticação 

---> Formulário de login(com react-hook-forms)

`npm install react-hook-form`

---> Esquema de validação do formulário com o Yup (useForm(), Controller)

`npm install @hookform/resolvers yup`

---> Criação de API fake com o json-server

`npm install -g json-server`

No arquivo criado para a APi foram inseridos os dados dos usuários do sistema para realizar a requisição e proceder com a validação.

`yarn api` para rodar a nossa API

---> Requisição com o Axios para possibilitar pegar os dados de cadastro de usuário e validar

`yarn add axios` ou `npm install axios`


# 5. IMPLEMENTAÇÕES FUTURAS

 ⛔ Renderização da página Feed - necessário resolução de bugs. ⛔
 
 - [ ] Deploy do site

# 6. LINKS IMPORTANTES

 [Node.js](nodejs.org/en/)
 
 [npm - Node Package Manager](www.npmjs.com)
 
 [Yarn](yarnpkg.com)
 
 [React Dev Tools extension](github.com/facebook/freact/tree/main/packages/react-devtools-extensions)
 
 [Documentação React](pt-br.reactjs.org)
 
 [Styled-components](https://styled-components.com)
 
 [Hooks Básicos - Documentação](https://pt-br.reactjs.org/docs/hooks-intro.html)
 

# 7. COMO RODAR O PROJETO

Para rodar esse projeto em sua máquina, siga os passos a seguir:

1️⃣ Realize o fork desse repositorio

2️⃣ Clone na sua máquina

3️⃣ Entre no diretório do repositorio clonado e as dependências do projeto, com o comando:

                                           npm install ou npm i
4️⃣ Por fim rode o projeto:

                           npm run start
                           
O navegador será aberto automaticamente usando a porta localhost:3000


# 8. CONFIRA O RESULTADO

-----DEPLOY-----
