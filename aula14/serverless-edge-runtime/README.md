# ☁️ Função Edge — Vercel

Função serverless executada na **Vercel Edge Runtime**, criada para demonstrar uma conexão simples com a infraestrutura da Vercel e retornar informações sobre a execução da função.

A função identifica a região da execução através do header `x-vercel-id`, informa o horário do servidor e mede o tempo de execução da própria função. fileciteturn3file0L5-L15

## 🛠️ Tecnologias e Conceitos

- **[Vercel](https://vercel.com/)** — plataforma de hospedagem e execução da função.
- **Edge Runtime** — ambiente definido pela configuração da função.
- **TypeScript** — linguagem utilizada no arquivo.
- **Web Request / Response** — APIs utilizadas para receber a requisição e construir a resposta.
- **Headers HTTP** — leitura do header `x-vercel-id`.
- **Variáveis de ambiente** — utilização de `VERCER_REGION` como fallback.

## 📄 Arquivo

```text
hora-servidor.ts
```

O arquivo define a configuração da função como:

```typescript
export const config = {
    runtime: 'edge',
}
```

Isso indica que a função utiliza o **Edge Runtime** da Vercel. fileciteturn3file0L1-L3

## 🚀 Funcionamento

A função é exportada como um handler assíncrono que recebe uma requisição HTTP:

```typescript
export default async function handler(req: Request)
```

No início da execução, é registrado o horário de início para calcular posteriormente o tempo gasto pela função. fileciteturn3file0L5-L7

### Região da execução

A função tenta obter o valor do header:

```http
x-vercel-id
```

Quando esse header existe, o código utiliza a primeira parte do seu conteúdo como referência da região. Caso contrário, utiliza `VERCER_REGION` ou `local-dev` como fallback. fileciteturn3file0L7-L8

## 📡 Resposta da API

A função retorna uma resposta JSON com status `200` e `content-type: application/json`. fileciteturn3file0L10-L19

### Exemplo de resposta

```json
{
  "mensagem": "Função executada com sucesso",
  "horarioServidor": "07/10/2026, 15:00:00",
  "regiao": "REGIAO",
  "tempoExecucao": "1ms"
}
```

> `horarioServidor`, `regiao` e `tempoExecucao` são valores gerados durante a execução e podem variar.

## 📊 Informações Retornadas

| Campo | Descrição |
|---|---|
| `mensagem` | Confirma que a função foi executada com sucesso. |
| `horarioServidor` | Data e hora geradas no momento da execução, utilizando o formato `pt-BR`. |
| `regiao` | Região obtida a partir do `x-vercel-id` ou valor de fallback. |
| `tempoExecucao` | Tempo aproximado gasto durante a execução da função, em milissegundos. |

Esses campos são construídos diretamente na resposta da função. fileciteturn3file0L10-L18

## 🔗 Conexão com a Vercel

O objetivo deste projeto é demonstrar uma integração simples com a **Vercel**, utilizando uma função executada no **Edge Runtime**.

Não há outras funcionalidades ou integrações identificáveis no arquivo fornecido além dessa execução e do retorno das informações descritas acima.

## ⚠️ Observação

O arquivo enviado contém apenas a implementação da função `hora-servidor.ts`. Portanto, configurações adicionais de projeto, como `package.json`, `vercel.json`, comandos de deploy ou estrutura completa do repositório, não foram documentadas aqui por não estarem presentes no material fornecido.

## 📚 Referência

- [Vercel](https://vercel.com/)
