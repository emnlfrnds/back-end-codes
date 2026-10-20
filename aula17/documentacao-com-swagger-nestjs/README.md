# 📘 Documentação de API com Swagger — NestJS

API desenvolvida com **NestJS** para praticar a documentação de rotas utilizando **Swagger (OpenAPI)**. O projeto trabalha com o cadastro de produtos e descreve, através de decorators, a operação de criação, os dados esperados e as respostas possíveis.

O projeto documenta a criação de um produto, com dois cenários de resposta:

- Produto cadastrado → `201 Created`
- Payload com dados inválidos → `400 Bad Request`

## 🛠️ Tecnologias e Conceitos

- **[NestJS](https://nestjs.com/)** — framework utilizado no desenvolvimento da API.
- **TypeScript** — linguagem utilizada no projeto.
- **[@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)** — integra o Swagger (OpenAPI) ao NestJS e gera a documentação a partir dos decorators.
- **`@ApiTags()`** — agrupa as rotas de um controller na interface do Swagger.
- **`@ApiOperation()`** — define o resumo da operação.
- **`@ApiResponse()`** — lista as respostas possíveis de uma rota.
- **`@ApiProperty()`** — documenta os campos de um DTO, com exemplo e descrição.
- **DTO (Data Transfer Object)** — classe que define o formato dos dados recebidos na requisição.

## 📁 Estrutura Principal

```text
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
└── produtos/
    ├── dto/
    │   └── criar-produto/
    │       └── criar-produto.ts
    └── produto/
        └── produto.controller.ts
```

### Responsabilidade dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `app.controller.ts` | Define o controller da rota de status. Nesta etapa, ainda não possui rotas. |
| `app.service.ts` | Serviço da aplicação. Nesta etapa, ainda não possui métodos. |
| `app.module.ts` | Módulo raiz da aplicação, que registra os controllers e providers. |
| `main.ts` | Ponto de entrada da aplicação, onde o Swagger é configurado. |
| `produto.controller.ts` | Define a rota de criação de produtos e sua documentação no Swagger. |
| `criar-produto.ts` | DTO com os campos do produto, documentados com `@ApiProperty()`. |

## 📦 DTO `CriarProduto`

A classe `CriarProduto` define os campos que devem ser enviados para cadastrar um produto. Cada campo recebe um exemplo e uma descrição, que aparecem na documentação do Swagger:

| Campo | Tipo | Exemplo | Descrição |
|---|---|---|---|
| `nome` | string | Pasta de dente | Descrição da função do Produto |
| `preco` | number | 5.99 | Valor do produto |
| `categoria` | string | Produtos Higiênicos | Categoria geral do Produto |

## 🌐 Rotas

### `POST /produto`

Cadastra um novo produto no catálogo e devolve os dados recebidos, acrescidos de um `id` e da data de criação.

```bash
curl -X POST http://localhost:3000/produto \
  -H "Content-Type: application/json" \
  -d '{"nome":"Pasta de dente","preco":5.99,"categoria":"Produtos Higiênicos"}'
```

Exemplo de retorno (`201 Created`):

```json
{
  "id": 150,
  "nome": "Pasta de dente",
  "preco": 5.99,
  "categoria": "Produtos Higiênicos",
  "criadoEm": "20/10/2026"
}
```

> O `id` é fixo (`150`) nesta etapa e o produto não é salvo em nenhum lugar. O formato de `criadoEm` depende do locale do servidor.

## 📝 Documentação com Swagger

O `ProdutoController` utiliza os decorators do `@nestjs/swagger` para descrever a rota:

```typescript
@ApiTags('produto')
@Controller('produto')
export class ProdutoController {

    @Post()
    @ApiOperation({
        summary: 'Cadastra um novo produto no catálogo'
    })
    @ApiResponse({
        status: 201, description: 'Produto Cadastrado com sucesso'
    })
    @ApiResponse({
        status: 400, description: 'Payload enviado com dados inválidos'
    })
    async criar(@Body() criarProduto: CriarProduto) {
        // ...
    }
}
```

| Decorator | Onde é usado | Função |
|---|---|---|
| `@ApiTags('produto')` | Controller | Agrupa as rotas de produto na interface do Swagger. |
| `@ApiOperation({ summary })` | Método | Define o resumo exibido para a operação. |
| `@ApiResponse({ status, description })` | Método | Lista as respostas possíveis da rota (201 e 400). |
| `@ApiProperty({ example, description })` | Propriedade do DTO | Define o exemplo e a descrição de cada campo. |

### Acessando a documentação

Após iniciar a aplicação, a interface do Swagger fica disponível no navegador, no endereço definido no `main.ts` pelo `SwaggerModule.setup()`:

```text
http://localhost:3000/docs
```

## ⚙️ Configuração do Swagger

A configuração da documentação fica no `main.ts`, antes de a aplicação começar a escutar a porta:

```typescript
const config = new DocumentBuilder()
  .setTitle('API de Catálogo e Estoque')
  .setDescription('Documentação técnica interativa e viva para integração')
  .setVersion('1.0')
  .addTag('produto')
  .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);
```

| Método | Função |
|---|---|
| `setTitle()` | Define o título exibido no topo da documentação. |
| `setDescription()` | Define a descrição geral da API. |
| `setVersion()` | Define a versão da API. |
| `addTag()` | Adiciona uma tag geral para agrupar as rotas. |
| `addBearerAuth()` | Adiciona o botão **Authorize** para autenticação com token Bearer. Nesta etapa, a autenticação ainda não está implementada nas rotas. |
| `SwaggerModule.createDocument()` | Gera o documento OpenAPI a partir da aplicação e da configuração. |
| `SwaggerModule.setup('docs', ...)` | Publica a documentação na rota `/docs`. |

## 🔄 Fluxo da Requisição

```text
POST /produto
        │
        ▼
Body recebido e tipado como CriarProduto
        │
        ▼
ProdutoController.criar()
        │
        └── 201 Created com id, dados e criadoEm
```

## 🧠 Conceitos Praticados

- `@Controller()`
- `@Post()`
- `@Body()`
- DTO (Data Transfer Object)
- `@ApiTags()`
- `@ApiOperation()`
- `@ApiResponse()`
- `@ApiProperty()`
- Documentação de API com OpenAPI
- Separação entre Controller e DTO

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
cd aula17
cd documentacao-com-swagger-nestjs
```

### 4. Instale as dependências

```bash
npm install
```

### 5. Execute o projeto

```bash
npm run start:dev
```

Depois, abra `http://localhost:3000/docs` no navegador para ver a documentação.

## ⚠️ Observação

Nesta etapa, o foco é a documentação. O DTO descreve os dados, mas não há validação aplicada à rota, e o produto não é persistido. O `AppController` e o `AppService` ainda não possuem rotas nem métodos.

## 📚 Referências

- [NestJS — OpenAPI (Swagger)](https://docs.nestjs.com/openapi/introduction)
- [OpenAPI Specification](https://swagger.io/specification/)
