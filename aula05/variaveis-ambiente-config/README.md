<div align="center">

# 🟢 Configuração de Variáveis de Ambiente com Dotenv

> Pequena aplicação desenvolvida durante uma aula para aprender a gerenciar, validar e proteger variáveis de ambiente de forma segura utilizando a biblioteca dotenv.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)

</div>

---

## 📝 Sobre a Aplicação

Nesta aula, foi desenvolvida a pequena aplicação `variaveis-ambiente-config` para aprender a proteger informações sensíveis de uma aplicação, como chaves de API e URLs de banco de dados.

Utilizando a biblioteca **dotenv**, foi criado o arquivo `app.js` com validações que garantem que o servidor só seja inicializado quando as credenciais necessárias estiverem presentes e corretas.

A aplicação também utiliza boas práticas de segurança, como o arquivo `.env.example` para documentação das variáveis necessárias e o `.gitignore` para evitar o envio de dados sensíveis ao repositório.

### 🎯 O que foi aprendido:

* **Gerenciamento com Dotenv:** Como importar e executar `dotenv.config()` para carregar variáveis de um arquivo `.env` diretamente para o objeto `process.env` do Node.js.
* **Validação de Credenciais:** Implementação de verificações para impedir que o servidor seja iniciado sem a chave `API_KEY_PAYMENT`, utilizando `process.exit(1)` para encerrar a aplicação com erro.
* **Valores de Fallback (Padrão):** Uso do operador lógico `||` para definir valores alternativos, como `process.env.PORT || 8080`, garantindo que o servidor tenha uma porta para executar.
* **Segurança do Repositório:** Configuração do `.gitignore` para impedir o envio da pasta `node_modules/` e do arquivo `.env`, onde ficam os dados reais, para o GitHub.

---

## 💻 O Código: Variáveis de Ambiente

O arquivo principal `app.js` utiliza a dependência `dotenv` (versão `^17.4.2`).

Os principais conceitos explorados durante a aula foram:

| Funcionalidade                 | O que faz no código?                                                                                                          |
| :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| `dotenv.config()`              | Lê o arquivo `.env` na raiz da aplicação e adiciona suas chaves e valores ao ambiente de execução.                            |
| `process.env.NOME_DA_VARIAVEL` | Acessa o valor específico de uma variável, como `DATABASE_URL` ou `PORT`.                                                     |
| `if (!apiKey) { ... }`         | Verifica se a chave da API existe e, caso esteja ausente ou vazia, encerra a aplicação com erro.                              |
| `.env.example`                 | Arquivo de modelo que mostra quais variáveis a aplicação precisa, como `PORT=` e `DATABASE_URL=`, sem expor os valores reais. |

---

## 🚀 Como Executar

1. Certifique-se de que o arquivo de configuração `package_4.json` possui as dependências necessárias.
2. Abra o terminal na pasta da aplicação e instale os pacotes:

```bash
npm install
```

3. Crie um arquivo `.env` baseado no `.env.example` e preencha as variáveis necessárias.

4. Execute a aplicação:

```bash
node app.js
```

---

## 🔐 Segurança

O arquivo `.env` **não deve ser enviado para o GitHub**, pois pode conter informações sensíveis, como chaves de API, senhas e URLs privadas.

Por isso, o `.gitignore` deve conter:

```gitignore
node_modules/
.env
```

O arquivo `.env.example` pode ser enviado ao repositório, pois serve apenas como modelo para indicar quais variáveis precisam ser configuradas.

---

## 📚 Objetivo da Aula

Esta pequena aplicação foi desenvolvida **com finalidade didática**, como parte de uma aula sobre variáveis de ambiente no Node.js.

O objetivo principal foi compreender como utilizar o `dotenv`, acessar variáveis através do `process.env`, validar credenciais e aplicar práticas básicas de segurança ao trabalhar com informações sensíveis.
