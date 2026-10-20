# ✅ Validação de Dados com Zod — NestJS

API desenvolvida com **NestJS** para praticar a validação de dados de entrada utilizando **Zod** e um **Pipe** personalizado. O projeto gerencia uma lista de colaboradores e valida o corpo das requisições antes que cheguem ao controller.

O projeto trabalha com dois cenários de validação ao criar um colaborador:

- Dados inválidos → `400 Bad Request`, com a lista de erros por campo
- Dados válidos → `201 Created`

## 🛠️ Tecnologias e Conceitos

- **[NestJS](https://nestjs.com/)** — framework utilizado no desenvolvimento da API.
- **TypeScript** — linguagem utilizada no projeto.
- **[Zod](https://zod.dev/)** — biblioteca utilizada para declarar schemas e validar dados.
- **Pipes** — camada do NestJS que intercepta os dados antes de chegarem ao handler.
- **`PipeTransform` e `ArgumentMetadata`** — interface e tipo utilizados para criar o pipe personalizado.
- **`@UsePipes()`** — aplica o pipe nas rotas do controller.
- **`z.infer`** — gera o tipo TypeScript `Colaborador` a partir do schema.
- **Dependency Injection** — `ColaboradorService` é injetado no controller.

## 📁 Estrutura Principal

```text
src/
├── app.controller.ts
├── app.service.ts
├── colaborador/
│   ├── colaborador.controller.ts
│   ├── colaborador.service.ts
│   └── schema/
│       └── colaborador.schema.ts
└── zod-validation/
    └── zod-validation.pipe.ts
```

### Responsabilidade dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `app.controller.ts` | Define a rota de status da aplicação. |
| `app.service.ts` | Retorna a mensagem utilizada pela rota de status. |
| `colaborador.controller.ts` | Define as rotas de colaboradores e aplica o pipe de validação na criação. |
| `colaborador.service.ts` | Mantém a lista de colaboradores e disponibiliza os dados para o controller. |
| `colaborador.schema.ts` | Declara o schema Zod com as regras de cada campo e o tipo `Colaborador`. |
| `zod-validation.pipe.ts` | Pipe genérico que valida os dados com um schema Zod e formata os erros. |

## 📋 Schema do Colaborador

O schema `colaboradorSchema` define as regras de validação de cada campo:

| Campo | Tipo | Regra | Mensagem de erro |
|---|---|---|---|
| `nome` | string | Mínimo de 3 caracteres | O nome deve ter no mínimo 3 letras! |
| `email` | string | Formato de e-mail válido | O email é inválido |
| `idade` | number | Mínimo de 14 e máximo de 65 | A idade precisa ser um número! (tipo inválido) / A idade mínima é 14 anos / A idade máxima é 65 anos |
| `departamento` | enum | Um dos valores: TI, RH ou Financeiro | Escolha um departamento válido: TI, RH ou Financeiro |

## 👥 Colaboradores

O `ColaboradorService` mantém uma lista em memória com um colaborador inicial:

| Nome | E-mail | Idade | Departamento |
|---|---|---:|---|
| Enzo | enzo@enzo.com | 19 | TI |

A lista é retornada pelo método `findAll()`.

## 🌐 Rotas

### `GET /colaborador`

Retorna a lista de colaboradores disponível no serviço.

```bash
curl http://localhost:3000/colaborador
```

Exemplo de retorno:

```json
[
  {
    "nome": "Enzo",
    "email": "enzo@enzo.com",
    "idade": 19,
    "departamento": "TI"
  }
]
```

---

### `POST /colaborador`

Valida o corpo da requisição com o schema `colaboradorSchema` antes de executar o método `create()`.

### Dados válidos

```bash
curl -X POST http://localhost:3000/colaborador \
  -H "Content-Type: application/json" \
  -d '{"nome":"Maria Silva","email":"maria@empresa.com","idade":30,"departamento":"RH"}'
```

Exemplo de retorno (`201 Created`):

```json
{
  "message": "Colaborador criado com sucesso",
  "colaborador": {
    "nome": "Maria Silva",
    "email": "maria@empresa.com",
    "idade": 30,
    "departamento": "RH"
  }
}
```

> Nesta etapa, o colaborador não é salvo no `ColaboradorService`. A rota apenas devolve os dados já validados.

## ❌ Tratamento de Dados Inválidos (`400 Bad Request`)

Quando o corpo da requisição não respeita o schema, o `ZodValidationPipe` lança `BadRequestException` com a lista de erros, indicando o campo e a mensagem de cada problema.

### Exemplo

```bash
curl -X POST http://localhost:3000/colaborador \
  -H "Content-Type: application/json" \
  -d '{"nome":"Al","email":"enzo@","idade":10,"departamento":"Marketing"}'
```

Retorno:

```json
{
  "error": [
    { "campo": "nome", "mensagem": "O nome deve ter no mínimo 3 letras!" },
    { "campo": "email", "mensagem": "O email é inválido" },
    { "campo": "idade", "mensagem": "A idade mínima é 14 anos" },
    { "campo": "departamento", "mensagem": "Escolha um departamento válido: TI, RH ou Financeiro" }
  ]
}
```

Se o campo `idade` for enviado como texto (por exemplo, `"abc"`), o erro retornado é `A idade precisa ser um número!`.

## 🧩 ZodValidationPipe

O pipe é uma classe que implementa `PipeTransform` e recebe o schema pelo construtor:

```typescript
transform(value: unknown, metadata: ArgumentMetadata) {
  if (metadata.type !== 'body') return value;

  const parseResult = this.schema.safeParse(value);
  if (!parseResult.success) {
    // formata os erros e lança BadRequestException
  }
  return parseResult.data;
}
```

O funcionamento acontece em três etapas:

1. Ignora os dados que não vêm do corpo da requisição (`metadata.type !== 'body'`).
2. Valida o valor com `safeParse`, que retorna o resultado sem lançar exceção.
3. Se houver erro, formata cada issue em `campo` e `mensagem`. Se não houver, retorna os dados já validados.

A aplicação no controller é feita com `@UsePipes()`:

```typescript
@Post()
@UsePipes(new ZodValidationPipe(colaboradorSchema))
async create(@Body() body: Colaborador) {
  // ...
}
```

## 🏥 Rota de Status

O projeto também possui uma rota de status definida no `AppController`:

```text
GET /status
```

Essa rota chama o método `getHello()` do `AppService`, que retorna a string `Hello World!`.

```bash
curl http://localhost:3000/status
```

Retorno:

```text
Hello World!
```

## 🔄 Fluxo da Validação

```text
POST /colaborador
        │
        ▼
ZodValidationPipe (@UsePipes)
        │
        ├── Dados inválidos
        │       └── 400 Bad Request com a lista de erros por campo
        │
        ▼
Dados válidos (safeParse)
        │
        ▼
ColaboradorController.create()
        │
        └── 201 Created
```

## 🧠 Conceitos Praticados

- `@Controller()`
- `@Get()` e `@Post()`
- `@Body()`
- `@UsePipes()`
- `PipeTransform` e `ArgumentMetadata`
- Pipe personalizado
- Zod: `z.object`, `z.string`, `z.number`, `z.enum` e `z.email`
- Mensagens de erro personalizadas
- `safeParse`
- `z.infer`
- `BadRequestException`
- Dependency Injection
- Separação entre Controller, Service, Schema e Pipe

## 🚀 Como Rodar

### 1. Clone o repositório

```bash
git clone https://github.com/emnlfrnds/back-end-codes.git
```

### 2. Acesse o diretório

```bash
cd back-end-codes
```

### 3. Entre na pasta da aula e do projeto

```bash
cd aula16
cd validacao-schemas-zod-nestjs
```

### 4. Instale as dependências

```bash
npm install
```

### 5. Execute o projeto

```bash
npm run start:dev
```

## ⚠️ Observação

Este projeto utiliza uma lista de colaboradores mantida diretamente no `ColaboradorService`, sem banco de dados ou persistência externa.

A tipagem `Colaborador` existe somente em tempo de compilação. A validação real dos dados acontece no `ZodValidationPipe` durante a execução. Por isso, o `@Body() body: Colaborador` não substitui a validação, apenas define o tipo do dado validado.

## 📚 Referências

- [NestJS — Pipes](https://docs.nestjs.com/pipes)
- [Zod](https://zod.dev/)
