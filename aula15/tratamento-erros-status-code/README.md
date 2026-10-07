# ⚠️ Tratamento de Erros — NestJS

API desenvolvida com **NestJS** para praticar tratamento de erros, validação de parâmetros e registro de ocorrências utilizando `Logger`.

O projeto trabalha com uma lista simples de produtos e demonstra como lidar com dois cenários de erro ao consultar um produto por ID:

- ID informado em formato inválido → `400 Bad Request`
- Produto não encontrado → `404 Not Found`

## 🛠️ Tecnologias e Conceitos

- **[NestJS](https://nestjs.com/)** — framework utilizado no desenvolvimento da API.
- **TypeScript** — linguagem utilizada no projeto.
- **Exceptions** — tratamento de situações inválidas através das exceções do NestJS.
- **`BadRequestException`** — utilizado quando o ID informado não é numérico.
- **`NotFoundException`** — utilizado quando nenhum produto corresponde ao ID informado.
- **`Logger`** — utilizado para registrar tentativas inválidas e buscas sem resultado.
- **Dependency Injection** — `ProdutosService` é injetado no controller.

## 📁 Estrutura Principal

```text
src/
├── app.controller.ts
├── produtos.controller.ts
└── produtos.service.ts
```

### Responsabilidade dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `app.controller.ts` | Define a rota de status da aplicação. |
| `produtos.controller.ts` | Define as rotas de produtos e realiza as validações e tratamentos de erro. |
| `produtos.service.ts` | Mantém a lista de produtos e disponibiliza os dados para o controller. |

## 📦 Produtos

O `ProdutosService` mantém uma lista em memória com cinco produtos:

| ID | Produto | Preço |
|---:|---|---:|
| 1 | Mouse | R$ 9,90 |
| 2 | Teclado | R$ 19,90 |
| 3 | Controle Gamer | R$ 69,90 |
| 4 | Headset | R$ 89,90 |
| 5 | Monitor | R$ 119,90 |

A lista é retornada pelo método `listarProduts()`. fileciteturn4file1L3-L24

## 🌐 Rotas

### `GET /produtos`

Retorna a lista de produtos disponível no serviço. fileciteturn4file0L11-L17

### Exemplo

```bash
curl http://localhost:3000/produtos
```

---

### `GET /produtos/:id`

Busca um produto pelo seu ID.

O parâmetro recebido pela URL é convertido para número antes da consulta. fileciteturn4file0L20-L29

### Produto encontrado

```bash
curl http://localhost:3000/produtos/1
```

Exemplo de retorno:

```json
{
  "id": 1,
  "nome": "Mouse",
  "preco": 9.9
}
```

## ❌ Tratamento de `400 Bad Request`

Quando o ID informado não é numérico, o controller registra um aviso no `Logger` e lança `BadRequestException`. fileciteturn4file0L20-L27

### Exemplo

```bash
curl http://localhost:3000/produtos/abc
```

A API retorna um erro de requisição inválida porque o ID precisa ser um número inteiro.

### Log gerado

```text
Tentativa de buscar com ID não numérico: abc
```

## 🔎 Tratamento de `404 Not Found`

Quando o ID é numérico, mas não corresponde a nenhum produto existente, o controller registra um aviso e lança `NotFoundException`. fileciteturn4file0L29-L34

### Exemplo

```bash
curl http://localhost:3000/produtos/999
```

Mensagem utilizada:

```text
Produto com ID 999 não localizado.
```

### Log gerado

```text
Produto não encontrado na busca! ID: 999
```

## 📝 Logger

O controller cria uma instância de `Logger` específica para `ProdutosController`:

```typescript
private readonly logger = new Logger(ProdutosController.name);
```

Ela é utilizada para registrar situações que exigem atenção durante a busca de produtos, como IDs não numéricos e produtos inexistentes. fileciteturn4file0L11-L13

## 🏥 Rota de Status

O projeto também possui uma rota de status definida no `AppController`:

```text
GET /status
```

Essa rota chama o método `getStatus()` do `AppService`. fileciteturn4file2L4-L10

> O comportamento e a resposta de `getStatus()` não podem ser detalhados porque o arquivo `app.service.ts` não foi enviado junto aos anexos.

## 🔄 Fluxo do Tratamento de Erros

```text
GET /produtos/:id
        │
        ▼
Converte ID para número
        │
        ├── ID não numérico
        │       └── 400 Bad Request
        │
        ▼
Procura produto pelo ID
        │
        ├── Produto não encontrado
        │       └── 404 Not Found
        │
        ▼
Produto encontrado
        │
        └── Retorna produto
```

## 🧠 Conceitos Praticados

- `@Controller()`
- `@Get()`
- `@Param()`
- `BadRequestException`
- `NotFoundException`
- `Logger`
- Dependency Injection
- Validação de parâmetros
- Tratamento de erros HTTP
- Busca de dados em memória
- Separação entre Controller e Service

## ⚠️ Observação

Este projeto utiliza uma lista de produtos mantida diretamente no `ProdutosService`, sem banco de dados ou persistência externa. fileciteturn4file1L3-L24

O foco dos arquivos fornecidos está no **tratamento de erros durante a consulta de produtos**.

## 📚 Referências

- [NestJS](https://nestjs.com/)
- [NestJS — Exception Filters](https://docs.nestjs.com/exception-filters)
- [NestJS — Logger](https://docs.nestjs.com/techniques/logger)
