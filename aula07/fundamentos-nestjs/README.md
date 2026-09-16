<div align="center">

# 🔴 Servidor Web com NestJS (Aula 07)

> Aplicação desenvolvida para aprender os fundamentos do framework NestJS, explorando arquitetura modular, Injeção de Dependências, Controllers, Services, testes unitários e instrumentação de observabilidade.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

---

## 📝 Sobre a Aplicação

Nesta aula, foi desenvolvida uma aplicação web utilizando o **NestJS**, um poderoso framework Node.js construído com TypeScript. O projeto demonstra a estrutura básica do NestJS aplicada ao repositório `fundamentos-nestjs`.

A aplicação configura um servidor HTTP com prefixo de rotas (`/api`), separa a camada de rotas (Controller) da camada de regras de negócio (Service), implementa testes unitários com Jest e adiciona suporte à observabilidade/telemetria através do `@nestjs/observe`.

O objetivo da atividade é praticar a arquitetura padrão do NestJS, o uso de decoradores, injeção de dependência e boas práticas na criação de APIs escaláveis.

### 🎯 O que foi aprendido:

- **Arquitetura NestJS:** Estrutura orientada a Módulos (`AppModule`), Controllers (`AppController`) e Services (`AppService`).
- **Injeção de Dependência:** Como o NestJS gerencia as instâncias das classes automaticamente via construtor.
- **Roteamento e Mapeamento HTTP:** Uso dos decoradores `@Controller('api')` e `@Get()`.
- **Observabilidade:** Integração com o módulo de telemetria e rastreamento distribuído (`@nestjs/observe`).
- **Testes Unitários:** Estrutura de testes para validar Controllers com a biblioteca `@nestjs/testing` e Jest.
- **Bootstrapping:** Inicialização assíncrona do servidor no arquivo `main.ts` com fallback de portas via variáveis de ambiente (`process.env.PORT`).

---

## 💻 O Código: Estrutura do NestJS

O projeto é organizado seguindo o padrão modular do NestJS:

| Arquivo | O que faz no código? |
| :--- | :--- |
| `main.ts` | Ponto de entrada (`bootstrap`) que cria e inicia a aplicação NestJS na porta especificada. |
| `app.module.ts` | Módulo raiz que registra os componentes (`AppController`, `AppService`) e integra o `ObserveModule`. |
| `app.controller.ts` | Responsável por escutar as requisições HTTP na rota `/api`. |
| `app.service.ts` | Contém a regra de negócio executada quando o controller é acionado. |
| `app.controller.spec.ts` | Arquivo de teste unitário para validar o comportamento do `AppController`. |

---

## 🔭 Observabilidade e Telemetria

A aplicação utiliza a biblioteca `@nestjs/observe` para coletar métricas, logs correlacionados e rastreamento de requisições:

```typescript
export const { ObserveModule, ObserveInstrument } = createObserveModule();

// Configuração no AppModule
ObserveModule.forRoot({
  appKey: 'YOUR_APP_KEY',
  appSecret: 'YOUR_APP_SECRET',
  serviceId: 'fundamentos-nestjs',
})
