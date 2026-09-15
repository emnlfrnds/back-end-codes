<div align="center">

# 🟢 Servidor Web com Node.js

> Pequena aplicação desenvolvida durante uma aula para aprender a criar um servidor HTTP utilizando os recursos nativos do Node.js, trabalhar com rotas, respostas em JSON, logs e cabeçalhos básicos de segurança.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

---

## 📝 Sobre a Aplicação

Nesta aula, foi desenvolvida uma pequena aplicação de servidor web chamada `servidor-web`, utilizando o módulo nativo `http` do Node.js.

A aplicação cria um servidor HTTP que recebe requisições, registra no terminal o método e a URL acessada e responde de acordo com a rota solicitada.

O objetivo da atividade é praticar conceitos básicos de criação de servidores, tratamento de requisições e respostas HTTP, além do uso de alguns cabeçalhos relacionados à segurança.

### 🎯 O que foi aprendido:

- **Servidor HTTP:** Como utilizar o módulo nativo `http` do Node.js para criar um servidor.
- **Requisições:** Como acessar informações da requisição, como `req.method` e `req.url`.
- **Logs:** Registro no terminal do método HTTP e da URL recebida.
- **Rotas:** Criação da rota `/status` para verificar se o servidor está funcionando.
- **Respostas JSON:** Envio de dados utilizando `JSON.stringify()` e o cabeçalho `Content-Type: application/json`.
- **Cabeçalhos de segurança:** Uso de `X-Content-Type-Options: nosniff` e `X-frame-Options: DENY` nas respostas.
- **Código de status HTTP:** Utilização do status `200` para a rota válida e `400` para as demais rotas.

---

## 💻 O Código: Servidor HTTP

O arquivo principal `server.js` utiliza o módulo nativo `http`, portanto não é necessário instalar uma biblioteca externa para criar o servidor.

Os principais conceitos utilizados foram:

| Funcionalidade | O que faz no código? |
| :--- | :--- |
| `import http from 'http'` | Importa o módulo nativo `http` do Node.js. |
| `http.createServer()` | Cria o servidor e define como as requisições serão tratadas. |
| `req.method` | Identifica o método HTTP recebido. |
| `req.url` | Identifica a URL ou rota acessada. |
| `res.writeHead()` | Define o código de status e os cabeçalhos da resposta. |
| `JSON.stringify()` | Converte o objeto JavaScript em uma string no formato JSON. |
| `/status` | Rota utilizada para verificar se o servidor está online. |
| `servidor.listen(3000)` | Inicia o servidor na porta `3000`. |

---

## 🔐 Cabeçalhos de Segurança

A aplicação define dois cabeçalhos nas respostas:

```javascript
const cabecalhoPadrao = {
    'X-Content-Type-Options': 'nosniff',
    'X-frame-Options': 'DENY',
};
```

Eles são adicionados às respostas por meio do operador spread (`...cabecalhoPadrao`).

- `X-Content-Type-Options: nosniff` ajuda a impedir que o navegador tente interpretar o conteúdo com um tipo diferente do declarado.
- `X-frame-Options: DENY` impede que a página seja carregada dentro de um `frame` ou `iframe`.

---

## 🚀 Como Executar

1. Certifique-se de ter o **Node.js** instalado.
2. Abra o terminal na pasta da aplicação.
3. Execute o servidor:

```bash
node server.js
```

4. Se tudo estiver correto, o terminal exibirá:

```text
[OK] Servidor rodando na porta: localhost:3000
```

5. Acesse a rota de status no navegador ou em uma ferramenta de requisições HTTP:

```text
http://localhost:3000/status
```

A resposta esperada é:

```json
{
  "servidor": "Online"
}
```

---

## 🌐 Rotas

| Rota | Status | Resposta |
| :--- | :---: | :--- |
| `/status` | `200` | `{"servidor":"Online"}` |
| Qualquer outra rota | `400` | `{"erro":"Página não encontrada"}` |

Sempre que uma requisição é recebida, o servidor também registra no terminal o método HTTP e a URL acessada.

---

## 📦 Configuração do Node.js

O arquivo `package.json` identifica a aplicação como `servidor-web`, define a versão `1.0.0` e utiliza o modo de módulos ES (`"type": "module"`).

Como o servidor utiliza apenas o módulo nativo `http`, a aplicação não possui dependências externas necessárias para sua execução.

---

## 📚 Objetivo da Aula

Esta pequena aplicação foi desenvolvida **com finalidade didática**, como parte de uma aula sobre servidores web com Node.js.

O objetivo principal foi compreender, na prática, como criar um servidor HTTP, receber requisições, identificar rotas, enviar respostas em JSON, utilizar códigos de status e aplicar cabeçalhos básicos de segurança.
