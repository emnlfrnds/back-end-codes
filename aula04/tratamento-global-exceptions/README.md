# 🟢 Tratamento Global de Exceções com Express

> Criação de um servidor web focado no tratamento centralizado de erros, lidando com rotas inexistentes, falhas síncronas/assíncronas e eventos de processo.

---

## 📝 Sobre o Projeto

Nesta etapa, criamos o projeto `tratamento-global-exceptions` para aprender como lidar com falhas em uma API de forma profissional. Utilizando o framework **Express**, construímos o arquivo `server.js` com rotas que simulam sucessos e diferentes tipos de erros, garantindo que o servidor nunca pare de responder inesperadamente.

O projeto também mantém o uso de módulos modernos do ECMAScript, com a propriedade `"type": "module"` definida no `package.json`.

### 🎯 O que foi aprendido:
- **Middleware Global de Erros:** Como criar um middleware no Express com quatro parâmetros (`err, req, res, next`) para capturar e padronizar todas as respostas de erro da aplicação (ex: status 500).
- **Rotas Inexistentes (404):** Implementação de um middleware que intercepta requisições para rotas não cadastradas e gera um erro com status 404.
- **Erros Síncronos e Assíncronos:** Uso de blocos `try/catch` nas rotas `/erro-sincrono` e `/erro-assincrono` para capturar exceções padrão e *Promises* rejeitadas, encaminhando-as para o tratamento global através da função `next(erro)`.
- **Proteção do Processo Node.js:** Utilização dos eventos globais `uncaughtException` e `unhandledRejection` no objeto `process` para logar erros não capturados pela aplicação e encerrar o servidor de forma segura com `process.exit(1)`.

---

## 💻 O Código: Express e Tratamento de Erros

O script principal `server.js` utiliza a biblioteca `express` (versão `^5.2.1`) para rodar o servidor na porta `3000`. Os principais conceitos explorados foram:

| Funcionalidade | O que faz no código? |
| :--- | :--- |
| `app.use(express.json())` | Configura o Express para entender requisições com corpo no formato JSON. |
| `next(erro)` | Chamada dentro dos blocos `catch` para repassar o erro especificamente para o middleware de tratamento de erros. |
| `app.use((err, req, res, next) => {...})` | O middleware de erro. Ele lê a propriedade `err.status` (ou define como 500), loga a *stack* do erro no console e retorna um JSON padrão com `success: false`. |
| `process.on(...)` | Escuta falhas extremas fora do contexto do Express (como uma Promise rejeitada que não teve `catch`), impedindo que o Node.js fique em um estado "zumbi" ou instável. |

---

## 🚀 Como Executar

1. Certifique-se de que o seu arquivo de configuração (`package.json`) possui as dependências necessárias.
2. Abra o terminal na pasta dos arquivos e instale os pacotes:

   ```bash
   npm install
   ```
3. Inicie o servidor:
   
   ```bash
   node server.js
   ```
   *(Você verá a mensagem: `Servidor rodando na porta 3000`)*

### 📟 Testando as Rotas

Com o servidor rodando, você pode acessar as seguintes URLs pelo navegador ou via Insomnia/Postman para testar os comportamentos:

* **Rota de Sucesso:** `http://localhost:3000/sucesso`
  * Retorna: `{"success": true, "message": "[OK] Operação Realizada com Sucesso."}`
* **Rota com Erro Síncrono:** `http://localhost:3000/erro-sincrono`
  * Retorna: `{"success": false, "message": "Erro interno no servidor", "error": "[ERRO] Algo deu errado de propósito."}`
* **Rota com Erro Assíncrono:** `http://localhost:3000/erro-assincrono`
  * Retorna: `{"success": false, "message": "Erro interno no servidor", "error": "[ERRO] Ao consultar banco de dados externo."}`
* **Rota Inexistente (404):** `http://localhost:3000/qualquer-coisa`
  * Retorna: `{"success": false, "message": "Erro interno no servidor", "error": "A rota /qualquer-coisa não existe nesse servidor."}`

---
