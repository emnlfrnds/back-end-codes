# 🛡️ API de Rotas Protegidas e Middleware — NestJS

API backend desenvolvida com **NestJS** para praticar o uso de **Middleware**, controle de acesso por **headers HTTP** e proteção de rotas com diferentes níveis de permissão.

O projeto possui uma rota pública e duas rotas protegidas: `/admin` e `/secret`. O `LoggerMiddleware` é aplicado globalmente às rotas da aplicação e também realiza a validação do header `x-user-role` para essas áreas protegidas.

## 🛠️ Tecnologias e Conceitos

- **[Node.js](https://nodejs.org/)** — ambiente de execução.
- **[NestJS](https://nestjs.com/)** — framework utilizado para construção da API.
- **TypeScript** — linguagem utilizada no desenvolvimento.
- **Middleware** — interceptação e processamento das requisições antes da execução das rotas.
- **HTTP Headers** — utilização do header `x-user-role` para identificar o papel enviado na requisição.
- **Controle de acesso** — validação de permissões para `/admin` e `/secret`.
- **HTTP Status Codes** — utilização do status `404` para requisições sem a permissão esperada.
- **Dependency Injection** — injeção do `AppService` no `AppController`.

## 📁 Estrutura Principal

```text
src/
├── app.controller.ts
├── app.service.ts
├── app.module.ts
└── logger/
    └── logger.middleware.ts
```

### Responsabilidade dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `app.controller.ts` | Define as rotas pública, administrativa e secreta. |
| `app.service.ts` | Serviço da aplicação utilizado pelo `AppController`. |
| `app.module.ts` | Configura o módulo principal e registra o middleware para todas as rotas. |
| `logger.middleware.ts` | Registra informações das requisições e valida o acesso às rotas protegidas. |

## 🧩 Middleware

### `LoggerMiddleware`

O middleware implementa `NestMiddleware` e recebe `Request`, `Response` e `NextFunction` do Express. Em cada requisição, ele registra no console o método HTTP, a rota acessada e a data/hora. fileciteturn2file0L1-L7

Exemplo de log:

```text
[LOG] Método: GET | Rota: /admin | Data e Hora: ...
```

Além do logging, o middleware verifica o header `x-user-role` quando a URL contém `/admin` ou `/secret`. fileciteturn2file0L9-L15 fileciteturn2file0L20-L26

## 🌐 Rotas da API

### `GET /`

Rota pública da aplicação.

Retorna uma mensagem indicando que a rota pública foi acessada, juntamente com a data/hora da requisição. fileciteturn2file1L8-L14

### Exemplo

```bash
curl http://localhost:3000/
```

### Resposta

```json
{
  "mensagem": "Rota Pública acessada com sucesso!",
  "data": "2026-10-02T19:00:00.000Z"
}
```

> O campo `data` é gerado dinamicamente a cada requisição.

---

## 🔐 Rota Administrativa

### `GET /admin`

A rota `/admin` exige que o header `x-user-role` tenha o valor `supervisor`.

Essa validação existe tanto no `LoggerMiddleware` quanto no próprio `AppController`. fileciteturn2file0L9-L18 fileciteturn2file1L16-L26

### Acesso autorizado

```bash
curl -H "x-user-role: supervisor" http://localhost:3000/admin
```

### Resposta

```json
{
  "mensagem": "Bem-vindo ao Painel Administrativo!",
  "data": "2026-10-02T19:00:00.000Z"
}
```

### Acesso sem permissão

```bash
curl http://localhost:3000/admin
```

Quando o papel enviado não é `supervisor`, o middleware retorna `404 Not Found` antes de permitir o prosseguimento da requisição. fileciteturn2file0L9-L18

---

## 🕵️ Rota Secreta

### `GET /secret`

A rota `/secret` exige que o header `x-user-role` tenha o valor `homem-secreto`. fileciteturn2file1L29-L37

### Acesso autorizado

```bash
curl -H "x-user-role: homem-secreto" http://localhost:3000/secret
```

### Resposta

```json
{
  "mensagem": "Bem-vindo, Homem Secreto!",
  "data": "2026-10-02T19:00:00.000Z"
}
```

### Acesso sem permissão

```bash
curl http://localhost:3000/secret
```

Quando o papel enviado não corresponde a `homem-secreto`, o middleware retorna `404 Not Found`. fileciteturn2file0L20-L29

---

## ⚙️ Configuração do Middleware

O `LoggerMiddleware` é aplicado através do `AppModule` utilizando:

```typescript
consumer.apply(LoggerMiddleware).forRoutes('*');
```

Isso faz com que o middleware seja aplicado às rotas configuradas pela aplicação. fileciteturn2file2L14-L16

O `AppModule` também registra o `AppController` como controller e o `AppService` como provider. fileciteturn2file2L9-L13

## 🔄 Fluxo de uma Requisição

```text
Requisição HTTP
      │
      ▼
LoggerMiddleware
      │
      ├── Registra método, rota e data/hora
      │
      ├── Verifica /admin
      │      └── x-user-role = supervisor
      │
      ├── Verifica /secret
      │      └── x-user-role = homem-secreto
      │
      └── next()
             │
             ▼
       AppController
             │
             ▼
        Resposta HTTP
```

Se uma requisição destinada a `/admin` ou `/secret` não possuir o papel esperado, o middleware encerra a requisição com `404`. Caso contrário, chama `next()` e permite que o fluxo continue. fileciteturn2file0L9-L18 fileciteturn2file0L20-L31

## 🚀 Como Executar

O `package.json` e o arquivo de inicialização da aplicação não foram enviados junto aos anexos, portanto os comandos exatos de execução não podem ser confirmados a partir dos arquivos fornecidos.

Em uma configuração padrão de projeto NestJS, normalmente são utilizados comandos como:

```bash
npm install
npm run start:dev
```

> Os comandos acima são uma referência de execução e não foram confirmados pelos arquivos anexados.

## 🧪 Testando as Rotas

### Rota pública

```bash
curl http://localhost:3000/
```

### Área administrativa

```bash
curl -H "x-user-role: supervisor" http://localhost:3000/admin
```

### Área secreta

```bash
curl -H "x-user-role: homem-secreto" http://localhost:3000/secret
```

### Testando acesso sem permissão

```bash
curl http://localhost:3000/admin
curl http://localhost:3000/secret
```

## 🧠 Conceitos Praticados

- `@Controller()`
- `@Get()`
- `@Req()`
- `NotFoundException`
- `NestMiddleware`
- `MiddlewareConsumer`
- `NestModule`
- `Request`, `Response` e `NextFunction`
- HTTP Headers
- Controle de acesso por função
- Middleware aplicado às rotas
- Logging de requisições
- Dependency Injection
- Status HTTP `404`
- Separação entre Controller, Service, Module e Middleware

## ⚠️ Observação

O controle de acesso apresentado neste projeto utiliza valores fixos enviados pelo header `x-user-role`. Isso representa a implementação atual dos arquivos fornecidos e serve como exercício de middleware e controle de acesso.

Para sistemas reais, autenticação e autorização normalmente exigem mecanismos adicionais de segurança, como identidade verificável, gerenciamento de credenciais e regras de autorização mais robustas.

## 📚 Referências

- [NestJS](https://nestjs.com/)
- [NestJS — Middleware](https://docs.nestjs.com/middleware)
- [NestJS — Controllers](https://docs.nestjs.com/controllers)
- [NestJS — Modules](https://docs.nestjs.com/modules)
