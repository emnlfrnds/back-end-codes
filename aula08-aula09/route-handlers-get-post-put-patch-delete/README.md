# 🎟️ API de Gestão de Convidados

API REST desenvolvida com **NestJS** e **TypeScript** para gerenciamento de convidados.

O projeto aplica conceitos fundamentais de desenvolvimento back-end, como **arquitetura modular, Injeção de Dependências, Controllers, Services, DTOs e testes unitários**, utilizando a estrutura recomendada pelo NestJS.

---

## 🛠️ Stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge\&logo=nestjs\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge\&logo=jest\&logoColor=white)

---

## 📋 Sobre o projeto

O **Guest Management API** é uma aplicação back-end construída com NestJS para disponibilizar operações relacionadas ao gerenciamento de convidados.

A aplicação foi estruturada utilizando a arquitetura modular do framework, mantendo uma separação clara entre:

* **Controllers** — entrada e tratamento das requisições HTTP;
* **Services** — regras e lógica da aplicação;
* **DTOs** — definição e organização dos dados recebidos;
* **Modules** — organização dos recursos da aplicação;
* **Tests** — validação automatizada dos componentes.

O projeto tem como foco a aplicação prática dos fundamentos do desenvolvimento de APIs utilizando o ecossistema Node.js.

---

## 🎯 Objetivos

Durante o desenvolvimento, foram trabalhados conceitos como:

* Estrutura de uma aplicação NestJS;
* Criação e organização de módulos;
* Controllers e rotas HTTP;
* Injeção de Dependências;
* Services;
* Data Transfer Objects (DTOs);
* Organização de responsabilidades;
* Testes unitários;
* Estruturação de uma API REST.

---

## 📁 Estrutura

```text
src/
├── app.controller.ts
├── app.controller.spec.ts
├── app.module.ts
├── app.service.ts
├── main.ts
│
└── convidados/
    ├── convidados.controller.ts
    ├── convidado.service.ts
    └── create-convidado.ts
```

### Estrutura principal

| Arquivo                    | Descrição                                                          |
| -------------------------- | ------------------------------------------------------------------ |
| `main.ts`                  | Ponto de entrada da aplicação. Inicializa o servidor NestJS.       |
| `app.module.ts`            | Módulo raiz da aplicação.                                          |
| `app.controller.ts`        | Controller principal da aplicação.                                 |
| `app.service.ts`           | Service principal da aplicação.                                    |
| `app.controller.spec.ts`   | Testes unitários do controller principal.                          |
| `convidados.controller.ts` | Controller responsável pelas rotas de convidados.                  |
| `convidado.service.ts`     | Service responsável pela lógica relacionada aos convidados.        |
| `create-convidado.ts`      | DTO utilizado para estruturar os dados de criação de um convidado. |

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, tenha instalado:

* **Node.js**
* **npm**

Verifique as versões instaladas:

```bash
node -v
npm -v
```

---

## 🚀 Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd <NOME_DO_PROJETO>
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando a aplicação

### Desenvolvimento

```bash
npm run start:dev
```

### Execução normal

```bash
npm run start
```

### Produção

```bash
npm run build
npm run start:prod
```

A aplicação será executada na porta configurada pelo projeto.

Caso nenhuma configuração específica seja utilizada, o NestJS utiliza a porta `3000` como padrão.

---

## 🧪 Testes

O projeto utiliza **Jest** para testes automatizados.

### Executar os testes

```bash
npm run test
```

### Executar testes em modo watch

```bash
npm run test:watch
```

### Executar testes com cobertura

```bash
npm run test:cov
```

---

## 🌐 Endpoints

### Convidados

#### `GET /convidados`

Retorna os convidados disponíveis na aplicação.

**Resposta:**

```json
[
  {
    "nome": "João",
    "idade": 30
  }
]
```

---

#### `POST /convidados`

Cria um novo convidado.

**Request:**

```http
POST /convidados
Content-Type: application/json
```

**Body:**

```json
{
  "nome": "João",
  "idade": 30
}
```

**Response:**

```json
{
  "nome": "João",
  "idade": 30
}
```

> Os campos disponíveis e suas regras devem seguir a implementação atual do DTO `create-convidado.ts`.

---

## 🧱 Organização da aplicação

A aplicação utiliza a separação de responsabilidades proposta pelo NestJS.

```text
Request
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Regra de negócio
   │
   ▼
Response
```

### Controller

É responsável por receber as requisições HTTP e disponibilizar os endpoints da aplicação.

O `ConvidadosController` concentra as operações relacionadas ao recurso de convidados.

### Service

O Service concentra a lógica relacionada ao recurso, evitando que regras da aplicação sejam diretamente implementadas no Controller.

### DTO

Os DTOs representam a estrutura dos dados utilizados nas requisições.

No cadastro de convidados, o `create-convidado.ts` define os dados necessários para essa operação.

### Module

O sistema utiliza módulos para organizar funcionalidades relacionadas dentro da aplicação NestJS.

---

## 🔄 Fluxo de uma requisição

Uma requisição para criação de um convidado segue, conceitualmente, o seguinte fluxo:

```text
Cliente
   │
   │ POST /convidados
   ▼
ConvidadosController
   │
   │ Dados da requisição
   ▼
CreateConvidado DTO
   │
   ▼
ConvidadoService
   │
   │ Processamento
   ▼
Resposta HTTP
   │
   ▼
Cliente
```

Essa organização mantém cada parte da aplicação responsável por uma função específica.

---

## 🧪 Testes unitários

Os testes utilizam **Jest** e seguem a estrutura de testes do NestJS.

Os arquivos de teste utilizam a extensão:

```text
.spec.ts
```

Exemplo:

```text
app.controller.spec.ts
```

Os testes têm como objetivo verificar o comportamento dos componentes da aplicação de forma isolada.

---

## 📦 Scripts disponíveis

Os principais comandos definidos no projeto são:

| Comando              | Função                                       |
| -------------------- | -------------------------------------------- |
| `npm run start`      | Inicia a aplicação.                          |
| `npm run start:dev`  | Inicia a aplicação em modo desenvolvimento.  |
| `npm run start:prod` | Executa a aplicação compilada para produção. |
| `npm run build`      | Compila o projeto.                           |
| `npm run test`       | Executa os testes.                           |
| `npm run test:watch` | Executa os testes em modo watch.             |
| `npm run test:cov`   | Executa os testes com cobertura.             |

---

## 📚 Tecnologias e documentação

* [NestJS](https://nestjs.com/) — Framework utilizado para desenvolvimento da API.
* [TypeScript](https://www.typescriptlang.org/) — Linguagem utilizada no projeto.
* [Node.js](https://nodejs.org/) — Runtime utilizado para execução da aplicação.
* [Jest](https://jestjs.io/) — Framework utilizado nos testes.

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido para estudo e prática de desenvolvimento de APIs REST utilizando **NestJS, TypeScript e Node.js**.

---

## 📄 Licença

Este projeto é destinado a fins educacionais e de desenvolvimento.

---
