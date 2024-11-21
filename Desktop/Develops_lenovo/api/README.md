# API de Gestão de Jogos, Jogadores, Times Adversários e Login

Esta API foi projetada para gerenciar jogos, jogadores, times adversários, times principais e logins. Ela fornece endpoints para listar, adicionar, atualizar e excluir informações relacionadas. A documentação está disponível em formato Swagger para fácil compreensão e uso.

---

## **Recursos**

- **Jogos**: Gerencie os jogos cadastrados, com suporte a operações CRUD e busca detalhada.
- **Jogadores**: Gerencie jogadores vinculados a um login.
- **Times Adversários**: Gerencie informações dos times adversários e permita buscas por nome.
- **Times Principais**: Gerencie informações dos times principais.
- **Logins**: Gerencie autenticação e informações de login.

---

## **Tecnologias Utilizadas**

- **Node.js**
- **Express**
- **Swagger** para documentação
- **Arquitetura RESTful**

---

## **Instalação**

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-repositorio.git

2. Navegue até o diretório do projeto:
   ```bash
   cd api

3. Instale as dependências:
   ```bash
   npm install

4. Inicie o servidor:
   ```bash
   node index.js

5. Acesse a documentação no navegador:
   ```bash
   http://localhost:3000/api-docs


## **Endpoints**
Jogadores
GET /jogador/porLogin/

Lista jogadores pelo ID de login.

GET /jogador/

Busca um jogador pelo ID.

POST /jogador
Adiciona um novo jogador.

PATCH /jogador/

Atualiza informações de um jogador.

DELETE /jogador/

Exclui um jogador pelo ID.

Jogos
GET /jogo/listaJogo
Lista todos os jogos.

GET /jogo/buscaPorIdJogo/

Busca um jogo pelo ID.

GET /jogo/buscaPorIdtpEta/

Busca detalhes completos de um jogo.

POST /jogo/adicionaJogo
Adiciona um novo jogo.

PATCH /jogo/alteraJogo/

Atualiza informações de um jogo.

DELETE /jogo/deletaJogo/

Exclui um jogo pelo ID.

Times Adversários
GET /timeAdversario/porLogin/

Lista times adversários pelo ID de login.

GET /timeAdversario/

Busca um time adversário pelo ID.

GET /timeAdversario/buscaPorNome/

Busca times adversários pelo nome.

POST /timeAdversario
Adiciona um novo time adversário.

PATCH /timeAdversario/

Atualiza informações de um time adversário.

DELETE /timeAdversario/

Exclui um time adversário pelo ID.

Times Principais
GET /timePrincipal/porLogin/

Lista times principais pelo ID de login.

GET /timePrincipal/

Busca um time principal pelo ID.

POST /timePrincipal
Adiciona um novo time principal.

PATCH /timePrincipal/

Atualiza informações de um time principal.

DELETE /timePrincipal/

Exclui um time principal pelo ID.

Logins
GET /login
Lista todos os logins cadastrados.

GET /login/

Busca um login pelo ID.

POST /login
Adiciona um novo login.

PATCH /login/

Atualiza informações de um login.

DELETE /login/

Exclui um login pelo ID.