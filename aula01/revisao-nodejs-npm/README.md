<div align="center">

  # 🟢 Aula 1: Diagnóstico de Servidor com Node.js

  > Primeiro script criado no Node.js utilizando módulos nativos para coletar informações do sistema operacional.

  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

---

## 📝 Sobre a Aula

Nesta primeira aula, demos o pontapé inicial no back-end utilizando **Node.js**. 
Iniciamos o nosso projeto criando o arquivo de configuração `package.json` e escrevemos nosso primeiro script (`diagnostic.js`) para interagir diretamente com o hardware/sistema operacional da máquina.

### 🎯 O que foi aprendido:
- **Inicialização de Projetos:** Como utilizar o comando `npm init -y` para gerar o `package.json`, que gerencia as informações e dependências do projeto.
- **Módulos Nativos do Node.js:** Como importar e utilizar o módulo built-in `os` (Operating System) sem precisar instalar bibliotecas externas.
- **Manipulação de Dados:** Conversão de valores de memória de *Bytes* para *Gigabytes* (GB) usando operações matemáticas e o método `.toFixed(2)` para limitar as casas decimais.
- **Template Literals:** Uso de crases (`` ` ``) para concatenar textos e variáveis de forma limpa no JavaScript.

---

## 💻 O Código: `diagnostic.js`

O script desenvolvido utiliza o módulo `os` para extrair dados da máquina onde o Node.js está rodando. Os principais métodos utilizados foram:

| Método / Propriedade | O que faz? |
| :--- | :--- |
| `os.platform()` | Retorna o sistema operacional da máquina (ex: *win32*, *linux*, *darwin*). |
| `os.totalmem()` | Retorna a quantidade total de memória RAM (em bytes). |
| `os.freemem()` | Retorna a quantidade de memória RAM livre no momento (em bytes). |
| `os.cpus()` | Retorna um *array* de objetos contendo informações sobre cada núcleo do processador. |

---

## 🚀 Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Abra o terminal na pasta onde os arquivos `diagnostic.js` e `package.json` estão localizados.
3. Rode o seguinte comando:
   
   ```bash
   node diagnostic.js
