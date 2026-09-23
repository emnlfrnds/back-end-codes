<div align="center">

  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">

  <h1>📚 API de Livros — NestJS</h1>

  <p>
    Projeto de estudo desenvolvido com NestJS para prática de rotas dinâmicas,
    parâmetros de URL, Services, Controllers e tratamento de exceções.
  </p>

</div>

---

## 📌 Sobre o projeto

Esta aplicação é uma API simples de gerenciamento de livros desenvolvida com **NestJS**.

O projeto foi estruturado para praticar conceitos fundamentais de construção de APIs, com destaque para:

- Controllers;
- Services;
- Injeção de Dependências;
- Rotas HTTP;
- Rotas dinâmicas;
- Parâmetros de rota;
- Validação de parâmetros com `ParseIntPipe`;
- Tratamento de recursos inexistentes com `NotFoundException`.

A aplicação mantém os livros em memória, sem utilização de banco de dados.

---

## 🛠️ Tecnologias

| Tecnologia | Utilização |
| :--- | :--- |
| **TypeScript** | Linguagem utilizada no desenvolvimento da aplicação. |
| **Node.js** | Runtime utilizado para execução do projeto. |
| **NestJS** | Framework utilizado para construção da API. |

---

## 📁 Estrutura

A estrutura principal utilizada no projeto é:

```text
src/
├── app.controller.ts
├── app.controller.spec.ts
├── app.module.ts
├── app.service.ts
├── main.ts
│
└── livros/
    ├── livros.controller.ts
    └── livros.service.ts
```

### Principais responsabilidades

| Arquivo | Responsabilidade |
| :--- | :--- |
| `main.ts` | Inicializa a aplicação e disponibiliza o servidor HTTP. |
| `app.module.ts` | Registra os Controllers e Services utilizados pela aplicação. |
| `app.controller.ts` | Disponibiliza a rota de status da aplicação. |
| `app.service.ts` | Retorna a mensagem de status do servidor. |
| `app.controller.spec.ts` | Teste unitário do `AppController`. |
| `livros.controller.ts` | Define as rotas relacionadas aos livros. |
| `livros.service.ts` | Mantém o acervo em memória e implementa as operações de consulta. |

---

## 🌐 Endpoints

### Status da aplicação

#### `GET /status`

Retorna o status atual da aplicação.

**Resposta:**

```text
[OK] Servidor Ativo!
```

---

### Listar livros

#### `GET /livros`

Retorna todos os livros disponíveis no acervo.

**Resposta:**

```json
[
  {
    "id": 1,
    "titulo": "Tom e Jerri",
    "autor": "animacao que passava de tarde"
  },
  {
    "id": 2,
    "titulo": "1984",
    "autor": "joge pepa pigi"
  }
]
```

> A resposta completa contém os livros atualmente definidos no `LivrosService`.

---

### Buscar livro por ID

#### `GET /livros/:id`

Busca um livro específico utilizando seu ID.

**Exemplo:**

```http
GET /livros/1
```

**Resposta:**

```json
{
  "id": 1,
  "titulo": "Tom e Jerri",
  "autor": "animacao que passava de tarde"
}
```

O parâmetro `id` é convertido e validado como número utilizando `ParseIntPipe`.

---

## ⚠️ Tratamento de erros

Quando o ID informado não corresponde a nenhum livro existente, a aplicação lança uma exceção `NotFoundException`.

Exemplo:

```http
GET /livros/999
```

A mensagem definida pela aplicação é:

```text
[ERROR] Livro com ID 999 não localizado em nosso acervo.
```

Além disso, valores que não possam ser convertidos para inteiro são tratados pelo `ParseIntPipe` utilizado no parâmetro da rota.

---

## 🧠 Conceitos praticados

### Controller

O `LivrosController` é responsável pelas requisições relacionadas ao recurso `/livros`.

Ele possui duas rotas:

```text
GET /livros
GET /livros/:id
```

A segunda utiliza um parâmetro dinâmico para identificar um recurso específico.

### Service

O `LivrosService` concentra os dados e as operações de consulta do acervo.

Atualmente, os livros são armazenados diretamente em um array em memória.

### Rota dinâmica

A rota:

```text
/livros/:id
```

utiliza `:id` como parâmetro dinâmico.

O valor recebido pela URL é capturado através de:

```typescript
@Param('id', ParseIntPipe) id: number
```

### Injeção de Dependências

O Controller recebe uma instância de `LivrosService` por meio do mecanismo de Injeção de Dependências do NestJS.

---

## ▶️ Executando o projeto

Instale as dependências do projeto:

```bash
npm install
```

Execute em modo de desenvolvimento:

```bash
npm run start:dev
```

Por padrão, a aplicação utiliza a porta `3000`, podendo utilizar outra porta caso a variável de ambiente `PORT` esteja configurada.

Depois de iniciar o servidor, os principais endpoints podem ser acessados em:

```text
http://localhost:3000/status
http://localhost:3000/livros
http://localhost:3000/livros/1
```

---

## 🧪 Testes

O projeto possui um teste unitário para o `AppController`.

Para executar os testes, utilize o script configurado no `package.json`:

```bash
npm run test
```

> Os comandos disponíveis dependem dos scripts definidos no `package.json` do projeto.

---

## 🔄 Fluxo da aplicação

```text
Cliente
   │
   │ HTTP Request
   ▼
Controller
   │
   │ chama
   ▼
Service
   │
   │ consulta os dados
   ▼
Controller
   │
   │ HTTP Response
   ▼
Cliente
```

No caso de uma busca por ID:

```text
GET /livros/2
       │
       ▼
LivrosController
       │
       ▼
ParseIntPipe
       │
       ▼
LivrosService.findById()
       │
       ├── Livro encontrado → retorna o livro
       │
       └── Livro não encontrado → NotFoundException
```

---

## 📚 Documentação

- [NestJS](https://docs.nestjs.com/)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

<div align="center">

**Projeto desenvolvido para fins de estudo e prática de desenvolvimento Back-End com NestJS.**

</div>
