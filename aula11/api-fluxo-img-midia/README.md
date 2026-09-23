# 📦 API de Upload de Mídia (NestJS)

API backend desenvolvida com [NestJS](https://nestjs.com/) para gerenciamento e upload de arquivos de mídia.

O projeto utiliza **Multer** para receber arquivos via `multipart/form-data` e disponibilizá-los por meio de uma rota de acesso estático.

## 🛠️ Tecnologias e Ferramentas

* **[Node.js](https://nodejs.org/)** — ambiente de execução.
* **[NestJS](https://nestjs.com/)** — framework para construção de aplicações backend.
* **[TypeScript](https://www.typescriptlang.org/)** — linguagem utilizada no desenvolvimento.
* **[Multer](https://github.com/expressjs/multer)** — middleware para manipulação de uploads `multipart/form-data`.

## 📁 Estrutura Principal

```text
src/
├── main.ts
├── app.module.ts
├── app.controller.ts
├── app.service.ts
└── midia/
    ├── midia.module.ts
    └── midia.controller.ts
```

### Responsabilidade dos arquivos

| Arquivo                         | Responsabilidade                                                    |
| ------------------------------- | ------------------------------------------------------------------- |
| `src/main.ts`                   | Ponto de entrada da aplicação.                                      |
| `src/app.module.ts`             | Módulo principal da aplicação.                                      |
| `src/app.controller.ts`         | Controller da estrutura principal da API.                           |
| `src/app.service.ts`            | Service da estrutura principal da aplicação.                        |
| `src/midia/midia.module.ts`     | Módulo responsável pelo domínio de mídia.                           |
| `src/midia/midia.controller.ts` | Controller responsável pelas rotas relacionadas ao upload de mídia. |

## 🚀 Como Executar

### 1. Pré-requisitos

Tenha instalado:

* **Node.js**
* **NPM** ou **Yarn**

> A versão exata do Node.js não está especificada no conteúdo fornecido.

### 2. Instalar dependências

```bash
npm install
```

Ou:

```bash
yarn install
```

### 3. Executar em desenvolvimento

```bash
npm run start:dev
```

### 4. Build e produção

```bash
npm run build
npm run start:prod
```

> Os comandos acima pressupõem que esses scripts estejam definidos no `package.json`.

## 📡 Endpoint

### `POST /midia/upload`

Realiza o upload de um único arquivo de mídia.

#### Requisição

**Content-Type:**

```text
multipart/form-data
```

**Campo do arquivo:**

| Campo  | Tipo | Descrição                            |
| ------ | ---- | ------------------------------------ |
| `file` | File | Arquivo que será enviado para a API. |

#### Exemplo com cURL

```bash
curl -X POST http://localhost:3000/midia/upload \
  -F "file=@./imagem-perfil.png"
```

#### Exemplo de resposta

```json
{
  "filename": "imagem-perfil.png",
  "size": 45032,
  "url": "http://localhost:3000/api/uploads/imagem-perfil.png"
}
```

#### Exemplo de erro

```json
{
  "statusCode": 400,
  "message": "[ERROR] Nenhum arquivo enviado.",
  "error": "Bad Request"
}
```

> Os exemplos de resposta devem ser ajustados caso o controller real utilize outro formato de retorno ou outra mensagem de erro.

## 🧪 Testes

Para executar os testes unitários:

```bash
npm run test
```

Os testes dependem da configuração existente no `package.json` e dos arquivos `*.spec.ts` do projeto.

## 📌 Observações

* O upload utiliza `multipart/form-data`.
* O campo esperado para o arquivo é `file`.
* O processamento do upload é realizado no domínio de mídia.
* A implementação detalhada de armazenamento, validação de extensão, limite de tamanho e autenticação não está especificada no conteúdo utilizado para este README.

## 📚 Referências

* [NestJS](https://nestjs.com/)
* [Documentação do NestJS — File Upload](https://docs.nestjs.com/techniques/file-upload)
* [Multer](https://github.com/expressjs/multer)
* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/)
