<div align="center">

  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">

  <h1>Back-End: Estudos & Prática</h1>

  <p>
    Repositório dedicado ao estudo, prática e evolução contínua em desenvolvimento Back-End.
  </p>

</div>

---

## 📚 Sobre o Repositório

Este repositório reúne códigos, exercícios e projetos desenvolvidos ao longo dos estudos de **desenvolvimento Back-End com JavaScript e Node.js**.

A trilha aborda desde os fundamentos do runtime Node.js e seus principais conceitos internos até a construção de APIs utilizando **NestJS**, explorando conceitos fundamentais de desenvolvimento de aplicações no lado do servidor.

O conteúdo é organizado de acordo com a evolução das aulas e funciona como um registro prático do aprendizado ao longo da formação.

---

## 🛠️ Tech Stack

As principais tecnologias e conceitos trabalhados até o momento são:

| Tecnologia            | Utilização                                                                             |
| :-------------------- | :------------------------------------------------------------------------------------- |
| **JavaScript (ES6+)** | Linguagem principal utilizada no desenvolvimento Back-End.                             |
| **Node.js**           | Runtime utilizado para executar JavaScript no lado do servidor.                        |
| **NestJS**            | Framework utilizado para construção e organização de aplicações Back-End e APIs.       |
| **Express.js**        | Framework web utilizado para conceitos relacionados à construção de servidores e APIs. |
| **NPM**               | Gerenciador de pacotes utilizado no ecossistema Node.js.                               |
| **HTTP**              | Protocolo utilizado na comunicação entre cliente e servidor.                           |

---

# 📅 Cronograma de Aulas

Acompanhe abaixo os conteúdos estudados e a evolução da trilha.

---

## 🟢 Aula 01 — Revisão do Node.js e NPM

**Status:** Concluído

### Tópicos abordados

* Contextualização
* Motor V8 — o coração do Node.js
* Event Loop — o segredo da escalabilidade
* Call Stack, Callback Queue e Microtasks
* Instalação e verificação do Node.js
* Inicialização de um projeto Node.js
* NPM e gerenciamento de dependências

---

## 🟢 Aula 02 — Módulos e CommonJS vs. ESM

**Status:** Concluído

### Tópicos abordados

* Por que modularizar?
* CommonJS vs. ECMAScript Modules (ESM)
* Módulos nativos
* Interação com o sistema
* O padrão `import` / `export`
* Organização e reutilização de código
* Projeto: organizador de logs

---

## 🟢 Aula 03 — Streams e Buffers

**Status:** Concluído

### Tópicos abordados

* Contextualização
* Buffers
* Streams
* Manipulação de chunks
* Tipos de Streams
* Fluxo de dados
* Vantagens técnicas
* Processamento eficiente de dados

---

## 🟢 Aula 04 — Tratamento Global de Exceções

**Status:** Concluído

### Tópicos abordados

* Contextualização
* Fundamentos de `try/catch`
* Tratamento de exceções
* Listeners de eventos
* Depuração
* Root Cause Analysis
* Implementação da camada global
* Padronização de respostas
* Prevenção de crashes

---

## 🟢 Aula 05 — Variáveis de Ambiente e Configuração

**Status:** Concluído

### Tópicos abordados

* Perigos da exposição de informações sensíveis
* Ecossistema de configuração
* Arquivos `.env`
* Biblioteca `dotenv`
* Variáveis de ambiente
* `process.env`
* Arquivo `.gitignore`
* Segurança e boas práticas de armazenamento

---

## 🟢 Aula 06 — Networking e Primeiro Servidor HTTP

**Status:** Concluído

### Tópicos abordados

* Caminho de uma requisição
* Conceitos fundamentais de redes
* Fundamentos de Networking para desenvolvedores
* Protocolo HTTP
* Métodos HTTP
* Headers
* Body
* Anatomia de uma resposta HTTP
* Comunicação entre cliente e servidor

---

## 🟢 Aula 07 — Estrutura de Projeto e Fundamentos do NestJS

**Status:** Concluído

### Tópicos abordados

* Por que NestJS?
* Ambiente de desenvolvimento
* Estrutura de uma aplicação NestJS
* Pasta `src/`
* Arquivos de configuração
* Organização de módulos
* Convenções de roteamento de API
* Estrutura inicial de um projeto NestJS

---

## 🟢 Aula 08 — Route Handlers: GET e POST

**Status:** Concluído

### Tópicos abordados

* Comunicação no Back-End
* Semântica do HTTP
* Implementação do método `GET`
* Tipos de retorno
* Query Params
* Implementação do método `POST`
* Data Transfer Object (DTO)
* Recebimento de dados no Body
* Status Codes no NestJS

---

## 🟢 Aula 09 — Route Handlers: PUT, PATCH e DELETE

**Status:** Concluído

### Tópicos abordados

* Ciclo de vida dos dados
* Semântica de atualização e remoção
* Atualização de dados com `PUT`
* Atualização parcial com `PATCH`
* Diferenças práticas entre `PUT` e `PATCH`
* Remoção de dados com `DELETE`
* Soft Delete vs. Hard Delete
* Retorno de Status Codes HTTP
* Integração com a camada de Service
* Tratamento de erros

---

## 🟢 Aula 10 — Dynamic Routes

**Status:** Concluído

### Tópicos abordados

* Necessidade de rotas dinâmicas
* Placeholders na URL
* Conceito de recurso único
* Parâmetros de rota no NestJS
* Múltiplos parâmetros dinâmicos
* Validação inicial de parâmetros
* Escopo do projeto
* Casos de uso
* Segurança no escopo de acesso

---

# 💻 Como Rodar os Exemplos Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/emnlfrnds/back-end-codes.git
```

### 2. Acesse o diretório

```bash
cd back-end-codes
```

### 3. Instale as dependências

Caso o projeto possua dependências definidas:

```bash
npm install
```

### 4. Execute o projeto

O comando utilizado pode variar de acordo com o exercício ou projeto.

Em aplicações NestJS, por exemplo:

```bash
npm run start:dev
```

---

# 📂 Organização

Os conteúdos são organizados de acordo com a evolução das aulas.

```text
back-end-codes/
│
├── aula-01/
├── aula-02/
├── aula-03/
├── aula-04/
├── aula-05/
├── aula-06/
├── aula-07/
├── aula-08/
├── aula-09/
├── aula-10/
│
└── README.md
```

> A estrutura de diretórios pode variar de acordo com a organização utilizada em cada aula.

---

# 🎯 Progresso

| Aula | Conteúdo                             |    Status    |
| :--: | :----------------------------------- | :----------: |
|  01  | Node.js e NPM                        | 🟢 Concluído |
|  02  | Módulos e CommonJS vs. ESM           | 🟢 Concluído |
|  03  | Streams e Buffers                    | 🟢 Concluído |
|  04  | Tratamento Global de Exceções        | 🟢 Concluído |
|  05  | Variáveis de Ambiente                | 🟢 Concluído |
|  06  | Networking e HTTP                    | 🟢 Concluído |
|  07  | Fundamentos do NestJS                | 🟢 Concluído |
|  08  | Route Handlers — GET e POST          | 🟢 Concluído |
|  09  | Route Handlers — PUT, PATCH e DELETE | 🟢 Concluído |
|  10  | Dynamic Routes                       | 🟢 Concluído |

**Progresso atual: 10 aulas concluídas.**

---

# 📖 Principais Tecnologias

### JavaScript

Linguagem utilizada para construção da lógica das aplicações Back-End.

[Documentação oficial](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Node.js

Runtime baseado no motor V8 utilizado para executar JavaScript fora do navegador.

[Documentação oficial](https://nodejs.org/docs/latest/api/)

### NestJS

Framework para construção de aplicações Back-End eficientes, escaláveis e organizadas utilizando Node.js.

[Documentação oficial](https://docs.nestjs.com/)

### Express.js

Framework web minimalista utilizado para construção de servidores e APIs em Node.js.

[Documentação oficial](https://expressjs.com/)

---

## 🚧 Próximos passos

O conteúdo deste repositório continuará sendo atualizado conforme o avanço dos estudos.

Novas aulas, conceitos, exercícios e projetos serão adicionados progressivamente.

---

<div align="center">

**Back-End: Estudos & Prática**

Desenvolvido durante minha jornada de aprendizado em desenvolvimento Back-End.

</div>
