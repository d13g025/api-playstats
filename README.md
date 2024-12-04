### **README do PlayStats**

#### **Introdução**

O **PlayStats** é uma aplicação desenvolvida para auxiliar jogadores e equipes no gerenciamento de suas estatísticas esportivas. Com uma interface intuitiva, o sistema permite cadastrar times, jogadores e partidas, além de gerar análises detalhadas de desempenho individual e coletivo.

A aplicação utiliza o **Node.js** no backend, integrado ao banco de dados **MySQL** para armazenar informações, enquanto o frontend é desenvolvido em **React Native**, garantindo compatibilidade com dispositivos móveis.

---

#### **Funcionalidades Principais**
- Cadastro e gerenciamento de times e jogadores.
- Registro de partidas, com placares detalhados.
- Análises estatísticas avançadas, incluindo regressão linear para avaliar a relação entre desempenho ofensivo e defensivo.
- API RESTful para integração com outras plataformas.

---

#### **Estrutura do Projeto**
- **Backend**:
  - Construído com **Express.js**.
  - Banco de dados: **MySQL**, com integração por meio da biblioteca **mysql2**.
  - Organização modular para facilitar manutenção e escalabilidade.

- **Frontend**:
  - Desenvolvido com **React Native**, otimizado para dispositivos móveis.
  - Componentes reutilizáveis para cadastros e exibições dinâmicas de estatísticas.

---

### **Modelo Login**
O modelo `Login` é responsável por interagir com o banco de dados para executar as operações CRUD (Criar, Ler, Atualizar, Deletar), além de operações específicas como autenticação e busca de times. Ele utiliza o **MySQL** através da conexão gerida pela variável `conexao`.

---

### **Rotas do Controlador (Controller Login)**

Cada método no modelo `Login` provavelmente está associado a uma rota na API. Estas rotas permitem que o frontend (ou qualquer cliente) interaja com o backend para realizar operações.

---

#### **Exemplo de Rotas Baseadas no Modelo**

1. **Criar um novo login**
   - **Rota:** `POST /login`
   - **Método no modelo:** `adiciona`
   - **Descrição:** Adiciona um novo login ao banco de dados.
   - **Parâmetros esperados:**
     ```json
     {
       "nome_timePrincipal": "String",
       "endereco_timePrincipal": "String",
       "email": "String",
       "senha": "String"
     }
     ```
   - **Resposta:**
     - Sucesso: Status `200`, com o objeto criado.
     - Erro: Status `400`, com mensagem de erro.

2. **Buscar um login por ID**
   - **Rota:** `GET /login/:id`
   - **Método no modelo:** `buscaPorId`
   - **Descrição:** Retorna o login correspondente ao ID fornecido.
   - **Parâmetros esperados:** ID fornecido na URL.
   - **Resposta:**
     - Sucesso: Status `200`, com os dados do login.
     - Erro: Status `400` ou `404`, com mensagem de erro.

3. **Listar todos os logins**
   - **Rota:** `GET /login`
   - **Método no modelo:** `lista`
   - **Descrição:** Retorna todos os logins cadastrados no banco.
   - **Resposta:**
     - Sucesso: Status `200`, com uma lista de logins.
     - Erro: Status `400`, com mensagem de erro.

4. **Atualizar informações de um login**
   - **Rota:** `PUT /login/:id`
   - **Método no modelo:** `altera`
   - **Descrição:** Atualiza os dados de um login específico.
   - **Parâmetros esperados:** ID fornecido na URL, e os valores no corpo da requisição.
     ```json
     {
       "nome_timePrincipal": "String",
       "endereco_timePrincipal": "String",
       "email": "String",
       "senha": "String"
     }
     ```
   - **Resposta:**
     - Sucesso: Status `200`, com os dados atualizados.
     - Erro: Status `400`, com mensagem de erro.

5. **Autenticar um login**
   - **Rota:** `POST /login/auth`
   - **Método no modelo:** `autentica`
   - **Descrição:** Verifica se o email e a senha fornecidos correspondem a um login válido.
   - **Parâmetros esperados:**
     ```json
     {
       "email": "String",
       "senha": "String"
     }
     ```
   - **Resposta:**
     - Sucesso: Status `200`, com mensagem de sucesso e `id_login`.
     - Erro: Status `400` ou `500`, com mensagem de erro.

6. **Buscar times por nome**
   - **Rota:** `GET /login/times?nome=...`
   - **Método no modelo:** `buscaTimes`
   - **Descrição:** Retorna uma lista de times cujo nome contém o valor informado.
   - **Parâmetros esperados:** Query string `nome`.
   - **Resposta:**
     - Sucesso: Status `200`, com uma lista de times.
     - Erro: Status `400` ou `404`, com mensagem de erro.

7. **Deletar um login**
   - **Rota:** `DELETE /login/:id`
   - **Método no modelo:** `deleta`
   - **Descrição:** Remove um login do banco de dados.
   - **Parâmetros esperados:** ID fornecido na URL.
   - **Resposta:**
     - Sucesso: Status `200`, com mensagem de confirmação.
     - Erro: Status `400`, com mensagem de erro.

---

### **Descrição do Modelo Jogador**

A classe `Jogador` fornece métodos para realizar operações CRUD e listar jogadores associados a um time ou login. Cada método está associado a uma operação no banco de dados, executada com a ajuda de **SQL** e o módulo `conexao`.

#### **Atributos**
O construtor inicializa os atributos:
- **`id_jogador`**: Identificador único do jogador.
- **`nome_jogador`**: Nome completo do jogador.
- **`apelido_jogador`**: Apelido usado pelo jogador.
- **`posicao_jogador`**: Posição que o jogador ocupa (ex.: goleiro, atacante).
- **`gols_jogador`**: Número de gols marcados pelo jogador.
- **`assistencias_jogador`**: Número de assistências do jogador.

---

### **Rotas Associadas ao Modelo Jogador**

1. **Adicionar um jogador**
   - **Rota:** `POST /jogador`
   - **Método no modelo:** `adiciona`
   - **Descrição:** Adiciona um novo jogador ao banco de dados.
   - **Parâmetros esperados:** Informações do jogador no corpo da requisição.
     ```json
     {
       "nome_jogador": "String",
       "apelido_jogador": "String",
       "posicao_jogador": "String",
       "gols_jogador": "Number",
       "assistencias_jogador": "Number",
       "fk_login_id_login": "Number"
     }
     ```
   - **Resposta:**
     - Sucesso: Status `200`, com os dados do jogador adicionado.
     - Erro: Status `400`, com mensagem de erro.

---

2. **Buscar um jogador por ID**
   - **Rota:** `GET /jogador/:id`
   - **Método no modelo:** `buscaPorId`
   - **Descrição:** Retorna os dados de um jogador com base no ID fornecido.
   - **Parâmetros esperados:** ID do jogador na URL.
   - **Resposta:**
     - Sucesso: Status `200`, com os dados do jogador.
     - Erro: Status `400`, com mensagem de erro.

---

3. **Listar jogadores por login**
   - **Rota:** `GET /jogador?loginId=...`
   - **Método no modelo:** `lista`
   - **Descrição:** Lista todos os jogadores associados a um login específico.
   - **Parâmetros esperados:** `fk_login_id_login` como query string.
   - **Resposta:**
     - Sucesso: Status `200`, com a lista de jogadores.
     - Erro: Status `400`, com mensagem de erro.

---

4. **Atualizar dados de um jogador**
   - **Rota:** `PUT /jogador/:id`
   - **Método no modelo:** `altera`
   - **Descrição:** Atualiza os dados de um jogador no banco de dados.
   - **Parâmetros esperados:**
     - ID do jogador na URL.
     - Informações atualizadas no corpo da requisição.
     ```json
     {
       "nome_jogador": "String",
       "apelido_jogador": "String",
       "posicao_jogador": "String",
       "gols_jogador": "Number",
       "assistencias_jogador": "Number"
     }
     ```
   - **Resposta:**
     - Sucesso: Status `200`, com mensagem de sucesso e os dados atualizados.
     - Erro: Status `400`, com mensagem de erro.

---

5. **Deletar um jogador**
   - **Rota:** `DELETE /jogador/:id`
   - **Método no modelo:** `deleta`
   - **Descrição:** Remove um jogador do banco de dados.
   - **Parâmetros esperados:** ID do jogador na URL.
   - **Resposta:**
     - Sucesso: Status `200`, com mensagem de confirmação.
     - Erro: Status `400`, com mensagem de erro.

---

### **Método toString**

O método `toString` é uma função utilitária que retorna uma string formatada com as informações do jogador. Isso pode ser útil para depuração ou logs.

Exemplo de uso:
```javascript
const jogador = new Jogador(1, 'Ronaldo', 'Fenômeno', 'Atacante', 15, 10);
console.log(jogador.toString());
// Saída: "jogador: { id: 1, time: Ronaldo, email: Fenômeno, posicao: Atacante, gols: 15, assistencias: 10 }"
```

---

O modelo **`Jogo`** é responsável por interagir com a tabela `jogo` no banco de dados e realizar operações relacionadas a partidas. Ele permite criar, atualizar, excluir e consultar informações sobre jogos, além de fornecer funcionalidades analíticas como somatório de placares, contagem de vitórias e derrotas, e até análise de regressão linear para dados estatísticos.

---

### **Descrição do Modelo Jogo**

Este modelo oferece diversos métodos para gerenciar jogos e extrair estatísticas. Ele usa SQL para realizar operações no banco de dados com suporte ao Node.js.

---

### **Rotas Associadas ao Modelo Jogo**

Aqui está uma lista de rotas que podem ser implementadas com base nos métodos do modelo:

---

#### 1. **Adicionar um Jogo**
- **Rota:** `POST /jogo`
- **Método no Modelo:** `adiciona`
- **Descrição:** Adiciona um novo jogo ao banco de dados.
- **Parâmetros esperados:**
  ```json
  {
    "fk_login_id_login": "Number",
    "fk_timeAdversario_id_timeAdversario": "Number",
    "data_jogo": "Date",
    "hora_jogo": "Time",
    "placar_timePrincipal": "Number",
    "placar_timeAdversario": "Number",
    "vencedor_jogo": "String"
  }
  ```
- **Resposta:**
  - Sucesso: Status `200` com os detalhes do jogo adicionado.
  - Erro: Status `400` com mensagem de erro.

---

#### 2. **Buscar Jogo por ID**
- **Rota:** `GET /jogo/:id`
- **Método no Modelo:** `buscaPorIdtpEta`
- **Descrição:** Retorna informações detalhadas de um jogo com base no ID.
- **Parâmetros esperados:** ID do jogo na URL.
- **Resposta:**
  - Sucesso: Status `200` com os dados do jogo.
  - Erro: Status `400` ou `404` com mensagem de erro.

---

#### 3. **Listar Jogos de um Login**
- **Rota:** `GET /jogo?loginId=...`
- **Método no Modelo:** `lista`
- **Descrição:** Lista todos os jogos associados a um login específico.
- **Parâmetros esperados:** ID do login como query string.
- **Resposta:**
  - Sucesso: Status `200` com a lista de jogos.
  - Erro: Status `400` com mensagem de erro.

---

#### 4. **Atualizar Jogo**
- **Rota:** `PUT /jogo/:id`
- **Método no Modelo:** `altera`
- **Descrição:** Atualiza as informações de um jogo.
- **Parâmetros esperados:**
  - ID do jogo na URL.
  - Dados do jogo no corpo da requisição:
    ```json
    {
      "placar_timePrincipal": "Number",
      "placar_timeAdversario": "Number",
      "vencedor_jogo": "String"
    }
    ```
- **Resposta:**
  - Sucesso: Status `200` com os dados atualizados.
  - Erro: Status `400` com mensagem de erro.

---

#### 5. **Deletar Jogo**
- **Rota:** `DELETE /jogo/:id`
- **Método no Modelo:** `deleta`
- **Descrição:** Remove um jogo do banco de dados com base no ID.
- **Parâmetros esperados:** ID do jogo na URL.
- **Resposta:**
  - Sucesso: Status `200` com mensagem de confirmação.
  - Erro: Status `400` com mensagem de erro.

---

#### 6. **Somatório de Placar**
- **Rota:** `GET /jogo/somaPlacar?loginId=...`
- **Método no Modelo:** `somaPlacar`
- **Descrição:** Calcula o total de gols marcados e sofridos por um time.
- **Parâmetros esperados:** ID do login como query string.
- **Resposta:**
  - Sucesso: Status `200` com somatórios dos placares:
    ```json
    {
      "total_gols_timePrincipal": "Number",
      "total_gols_timeAdversario": "Number"
    }
    ```
  - Erro: Status `400` ou `404` com mensagem de erro.

---

#### 7. **Contar Vitórias, Empates e Derrotas**
- **Rota:** `GET /jogo/contaVitorias?loginId=...`
- **Método no Modelo:** `contaVitorias`
- **Descrição:** Conta o número de vitórias, empates e derrotas de um time com base nos jogos.
- **Parâmetros esperados:** ID do login como query string.
- **Resposta:**
  - Sucesso: Status `200` com os totais de vitórias, empates e derrotas:
    ```json
    {
      "nome_timePrincipal": "String",
      "vitorias": "Number",
      "empates": "Number",
      "derrotas": "Number"
    }
    ```
  - Erro: Status `400` ou `404` com mensagem de erro.

---

#### 8. **Análise de Regressão Linear**
- **Rota:** `GET /jogo/analiseRegressao?loginId=...`
- **Método no Modelo:** `analiseRegressaoLinear`
- **Descrição:** Realiza uma análise de regressão linear para relacionar gols marcados e sofridos.
- **Parâmetros esperados:** ID do login como query string.
- **Resposta:**
  - Sucesso: Status `200` com a equação da regressão e previsão:
    ```json
    {
      "equacao": "y = mx + b",
      "coeficienteAngular": "Number",
      "coeficienteLinear": "Number",
      "previsaoExemplo": "Number"
    }
    ```
  - Erro: Status `400` ou `404` com mensagem de erro.

---

O modelo **`TimeAdversario`** é responsável por gerenciar as operações relacionadas aos times adversários na aplicação. Ele interage com o banco de dados para realizar operações como criar, consultar, atualizar, listar e excluir times adversários associados a um login.

---

### **Descrição do Modelo TimeAdversario**

A classe `TimeAdversario` utiliza SQL para realizar consultas no banco de dados e fornece métodos que podem ser expostos por rotas no backend. Esses métodos são responsáveis por lidar com dados na tabela `timeAdversario`.

---

### **Rotas Associadas ao Modelo TimeAdversario**

Com base nos métodos do modelo, aqui estão as rotas que podem ser implementadas:

---

#### 1. **Adicionar um Time Adversário**
- **Rota:** `POST /timeAdversario`
- **Método no Modelo:** `adiciona`
- **Descrição:** Adiciona um novo time adversário ao banco de dados.
- **Parâmetros esperados:**
  ```json
  {
    "nome_timeAdversario": "String",
    "endereco_timeAdversario": "String",
    "fk_login_id_login": "Number"
  }
  ```
- **Resposta:**
  - Sucesso: Status `200`, com os dados do time adversário adicionado.
  - Erro: Status `400`, com mensagem de erro.

---

#### 2. **Buscar Time Adversário por ID**
- **Rota:** `GET /timeAdversario/:id`
- **Método no Modelo:** `buscaPorId`
- **Descrição:** Retorna informações detalhadas de um time adversário com base no ID.
- **Parâmetros esperados:** ID do time adversário na URL.
- **Resposta:**
  - Sucesso: Status `200`, com os dados do time adversário.
  - Erro: Status `400` com mensagem de erro.

---

#### 3. **Listar Times Adversários de um Login**
- **Rota:** `GET /timeAdversario?loginId=...`
- **Método no Modelo:** `lista`
- **Descrição:** Lista todos os times adversários associados a um login específico.
- **Parâmetros esperados:** ID do login como query string.
- **Resposta:**
  - Sucesso: Status `200`, com a lista de times adversários.
  - Erro: Status `400` com mensagem de erro.

---

#### 4. **Atualizar Time Adversário**
- **Rota:** `PUT /timeAdversario/:id`
- **Método no Modelo:** `altera`
- **Descrição:** Atualiza as informações de um time adversário.
- **Parâmetros esperados:**
  - ID do time adversário na URL.
  - Dados atualizados no corpo da requisição:
    ```json
    {
      "nome_timeAdversario": "String",
      "endereco_timeAdversario": "String"
    }
    ```
- **Resposta:**
  - Sucesso: Status `200`, com os dados atualizados.
  - Erro: Status `400` com mensagem de erro.

---

#### 5. **Buscar Time Adversário por Nome**
- **Rota:** `GET /timeAdversario/buscar?nome=...&loginId=...`
- **Método no Modelo:** `buscarTimeAdversario`
- **Descrição:** Procura times adversários pelo nome, filtrados por login.
- **Parâmetros esperados:** 
  - `nome` como query string.
  - `fk_login_id_login` como query string.
- **Resposta:**
  - Sucesso: Status `200`, com a lista de times adversários encontrados.
  - Erro: Status `400` com mensagem de erro.

---

#### 6. **Deletar Time Adversário**
- **Rota:** `DELETE /timeAdversario/:id`
- **Método no Modelo:** `deleta`
- **Descrição:** Remove um time adversário do banco de dados com base no ID.
- **Parâmetros esperados:** ID do time adversário na URL.
- **Resposta:**
  - Sucesso: Status `200`, com mensagem de confirmação.
  - Erro: Status `400` com mensagem de erro.

---

### **Método toString**

O método `toString` é uma função utilitária que retorna uma string formatada com as informações do time adversário. É útil para depuração e logs.

Exemplo de uso:
```javascript
const timeAdversario = new TimeAdversario();
console.log(timeAdversario.toString());
// Saída: "Time Adversário: [id: undefined, nome: undefined]"
```

---