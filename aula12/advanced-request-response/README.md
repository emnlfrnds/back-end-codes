# 🔐 API de Segurança — NestJS

API backend desenvolvida com [NestJS](https://nestjs.com/) para demonstrar uma rota protegida por **API Key**, utilizando um header HTTP personalizado para controlar o acesso a um conteúdo seguro.

Além da rota protegida, o projeto possui uma rota raiz utilizada pelo `AppController`.

## 🛠️ Tecnologias e Conceitos

- **[Node.js](https://nodejs.org/)** — ambiente de execução.
- **[NestJS](https://nestjs.com/)** — framework utilizado para construção da API.
- **TypeScript** — linguagem utilizada no desenvolvimento.
- **API Key** — mecanismo simples de autenticação por chave enviada em header.
- **HTTP Headers** — utilização do header `x-api-key` para autenticação.
- **HTTP Status Codes** — utilização dos status `200` e `403`.
- **Express Response** — uso do objeto `Response` para controlar headers e respostas HTTP.

## 📁 Estrutura Principal

```text
src/
├── app.controller.ts
├── app.service.ts
└── security.controller.ts
```

### Responsabilidade dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `app.controller.ts` | Define a rota raiz da aplicação. |
| `app.service.ts` | Fornece a mensagem retornada pela rota raiz. |
| `security.controller.ts` | Define a rota protegida `/security` e realiza a validação da API Key. |

## 🔐 Rota Protegida

### `GET /security`

A rota `/security` utiliza o header `x-api-key` para verificar se a requisição possui uma chave válida.

A validação é realizada diretamente no controller antes da liberação do conteúdo. fileciteturn1file0L5-L18

### Header necessário

```http
x-api-key: SUA_API_KEY
```

## ✅ Acesso autorizado

Quando a chave enviada corresponde à chave esperada pela implementação atual, a API:

- adiciona o header `x-auth-status: verificado`;
- retorna o status HTTP `200`;
- retorna uma mensagem de acesso concedido;
- inclui um `timestamp` gerado no momento da requisição. fileciteturn1file0L9-L15

### Exemplo com cURL

```bash
curl -H "x-api-key: SUA_API_KEY" http://localhost:3000/security
```

### Exemplo de resposta

```json
{
  "mensagem": "Acesso concedido ao conteúdo seguro!",
  "timestamp": "2026-10-02T19:00:00.000Z"
}
```

> O valor de `timestamp` é gerado dinamicamente a cada requisição.

## ❌ Acesso negado

Quando a API Key é inválida ou não é enviada, a API retorna:

- status HTTP `403`;
- erro `Forbidden`;
- mensagem informando que a chave é inválida ou está ausente. fileciteturn1file0L16-L22

### Exemplo

```bash
curl http://localhost:3000/security
```

### Resposta

```json
{
  "erro": "Forbidden",
  "mensagem": "Chave de API inválida ou ausente"
}
```

## 🏠 Rota Principal

### `GET /`

A aplicação também possui uma rota raiz definida pelo `AppController`. Ela utiliza `AppService` para retornar uma mensagem simples. fileciteturn1file1L4-L10

### Resposta

```text
Hello World!
```

A mensagem é fornecida pelo método `getHello()` do `AppService`. fileciteturn1file2L3-L7

## 🚀 Como Executar

### 1. Instalar as dependências

```bash
npm install
```

### 2. Executar em desenvolvimento

```bash
npm run start:dev
```

### 3. Executar a aplicação

Após iniciar o servidor, as rotas podem ser acessadas pela porta configurada no projeto.

Exemplo:

```text
http://localhost:3000
```

> Os scripts disponíveis no `package.json` não foram fornecidos junto aos arquivos analisados. Por isso, os comandos acima pressupõem uma configuração padrão de um projeto NestJS.

## 🧪 Testando a API

### Testar a rota principal

```bash
curl http://localhost:3000/
```

### Testar acesso sem API Key

```bash
curl http://localhost:3000/security
```

Resultado esperado:

```http
403 Forbidden
```

### Testar acesso com API Key

```bash
curl -H "x-api-key: SUA_API_KEY" http://localhost:3000/security
```

Resultado esperado:

```http
200 OK
```

## ⚠️ Observação de Segurança

A implementação atual realiza a comparação da API Key diretamente no código do controller. fileciteturn1file0L8-L10

Em uma aplicação real, uma chave de autenticação **não deve ficar exposta diretamente no código-fonte ou no repositório**.

Uma abordagem mais adequada seria armazená-la em uma variável de ambiente, por exemplo:

```env
API_KEY=sua-chave-secreta
```

e carregá-la na aplicação por meio da configuração do ambiente.

> Esta recomendação é uma melhoria de segurança e não faz parte da implementação atual dos arquivos analisados.

## 🧠 Conceitos Praticados

Este projeto demonstra conceitos importantes do NestJS e de APIs HTTP:

- `@Controller()`
- `@Get()`
- Injeção de dependência
- `@Headers()`
- `@Res()`
- Headers HTTP
- Status HTTP `200`
- Status HTTP `403`
- Validação de API Key
- Respostas JSON
- `Date` / timestamp
- Separação entre Controller e Service

## 📚 Referências

- [NestJS](https://nestjs.com/)
- [NestJS — Controllers](https://docs.nestjs.com/controllers)
- [NestJS — Providers](https://docs.nestjs.com/providers)
- [NestJS — HTTP Module](https://docs.nestjs.com/)
