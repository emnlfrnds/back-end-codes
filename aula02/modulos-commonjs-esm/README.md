<div align="center">

  # 🟢 Aula 2: Sistema de Logs com Módulos ESM (ECMAScript)

  > Criação de um sistema de registro de logs automatizado utilizando o file system do Node e a sintaxe moderna de módulos.

  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

---

## 📝 Sobre a Aula

Nesta aula, evoluímos a estrutura do nosso back-end alterando o padrão do projeto no `package.json` para utilizar `"type": "module"`. Isso nos permitiu usar a sintaxe moderna de importação e exportação do JavaScript (ESM - ECMAScript Modules). 

Criamos o arquivo principal `index.js` para interagir com o sistema de arquivos da máquina, gravando eventos importantes, e separamos a lógica de formatação de datas no arquivo utilitário `utils.js`.

### 🎯 O que foi aprendido:
- **Módulos ESM (ECMAScript Modules):** Como habilitar o `"type": "module"` no `package.json` para utilizar `import` e `export` no lugar do tradicional `require`.
- **Tratamento de Caminhos no ESM:** Como recriar as variáveis globais `__filename` e `__dirname` utilizando `fileURLToPath` da biblioteca `url` e `path.dirname`, já que elas não vêm nativamente nos módulos ES.
- **File System Assíncrono (`fs/promises`):** Uso de promises com `async/await` para manipular diretórios e arquivos sem bloquear o funcionamento do servidor.
- **Modularização de Código:** Criação da função `formatLog` em `utils.js` para padronizar as mensagens com data ISO e hora atual, deixando o código principal mais limpo.

---

## 💻 O Código: Manipulação de Arquivos e Caminhos

O script `index.js` utiliza os módulos nativos `fs/promises`, `path` e `url`. Os principais métodos explorados foram:

| Método / Propriedade | O que faz? |
| :--- | :--- |
| `fileURLToPath()` | Converte a URL do módulo atual (`import.meta.url`) para um caminho de arquivo, essencial para construir o `__filename`. |
| `path.join()` | Une diferentes partes de um caminho de diretório de forma segura (ex: juntando `__dirname` com `'logs'` e `'system.log'`). |
| `fs.mkdir()` | Cria o diretório `logs`. O uso de `{ recursive: true }` garante que não haverá erro se a pasta já existir. |
| `fs.appendFile()` | Insere conteúdo ao final do arquivo (`system.log`). Se o arquivo não existir, ele é criado automaticamente. |

---

## 🚀 Como Executar

1. Certifique-se de que o seu arquivo `package.json` possui a linha `"type": "module"`.
2. Abra o terminal na pasta onde os arquivos `index.js` e `utils.js` estão localizados.
3. Rode o seguinte comando:
   
   ```bash
   node index.js
