# 🟢 Processamento de Arquivos Grandes com Streams e Buffers

> Manipulação eficiente de arquivos gigantes no Node.js utilizando Streams, leitura linha a linha e monitoramento de memória.

---

## 📝 Sobre o Projeto

Nesta etapa, focamos na performance do back-end ao lidar com arquivos grandes de log, mantendo o padrão `"type": "module"` no `package.json` para uso da sintaxe moderna do JavaScript. 

Criamos dois scripts principais: o `gerarLogGigante.js`, responsável por simular e gravar milhares de linhas de log, e o `processarLogs.js`, que lê esse arquivo gigantesco e o filtra sem sobrecarregar a memória do servidor.

### 🎯 O que foi aprendido:
- **Write Streams:** Como usar `fs.createWriteStream` para gravar 100.000 linhas em um arquivo (`servidor.log`) de forma assíncrona e performática.
- **Read Streams e Readline:** Como processar um arquivo grande linha a linha usando `fs.createReadStream` combinado com o módulo `readline`, evitando carregar o arquivo inteiro na RAM.
- **Filtro de Dados em Tempo Real:** Criação de fluxos de escrita simultâneos para separar logs com a tag `ERROR` no arquivo `apenas_erros.log` e logs com `INFO` no arquivo `apenas_infos.log`.
- **Monitoramento de Memória:** Implementação da função `exibirConsumoMemoria` utilizando `process.memoryUsage()` para comparar o uso de Heap e RSS no início e no fim do processamento.

---

## 💻 O Código: Streams e Monitoramento

Os scripts utilizam os módulos nativos `fs` e `readline`. Os principais métodos explorados foram:

| Método / Propriedade | O que faz? |
| :--- | :--- |
| `fs.createWriteStream()` | Cria um fluxo de gravação contínuo, utilizado para escrever os logs gerados em `servidor.log`, `apenas_erros.log` e `apenas_infos.log`. |
| `fs.createReadStream()` | Cria um fluxo de leitura para processar o arquivo `servidor.log` em pequenos pedaços (*chunks*), sem lotar a memória. |
| `readline.createInterface()` | Acoplado ao *ReadStream*, permite iterar sobre o arquivo lendo exatamente linha a linha utilizando um loop `for await`. |
| `process.memoryUsage()` | Retorna um objeto com informações sobre o uso de memória do Node.js, extraindo os valores de `rss` e `heapUsed` em megabytes (MB). |

---

## 🚀 Como Executar

1. Certifique-se de que o seu arquivo de configuração (como o `package.json`) possui a propriedade `"type": "module"`.
2. Abra o terminal na pasta dos arquivos.
3. Primeiro, gere o arquivo de log gigante rodando:
   ```bash
   node gerarLogGigante.js
   ```
   *(Você verá a mensagem: `[OK] Gerando arquivo de log simulado...`)*

4. Em seguida, execute o script de processamento e filtragem:
   ```bash
   node processarLogs.js
   ```

### 📟 Saída Esperada no Terminal

Ao rodar o `processarLogs.js`, você verá o consumo de memória sendo monitorado em tempo real e a contagem total de erros e informações separadas:

```text
[OK] Processando com Streams...

[START] RSS: ... MB | Heap Utilizado: ... MB

[END] RSS: ... MB | Heap Utilizado: ... MB

[OK] Processamento concluído

[OK] Quantidade de Erros: 14286

[OK] Processando com Streams...

[START] RSS: ... MB | Heap Utilizado: ... MB

[END] RSS: ... MB | Heap Utilizado: ... MB

[OK] Processamento concluído

[OK] Quantidade de Infos: 85714
```

---
