# 📌 Project Management - Sistema de Gerenciamento de Projetos

Este projeto foi desenvolvido com base na videoaula do canal [Ed Roh - YouTube](https://www.youtube.com/watch?v=KAV8vo7hGAo&t=25890s), como forma de estudo e prática para aprofundar meus conhecimentos em **Next.js**, **React**, **TypeScript**, e integração com **Node.js** e **Prisma**.

> ⚠️ Este repositório foi desenvolvido com fins educacionais. Algumas bibliotecas e configurações utilizadas no vídeo original já estavam desatualizadas na data em que desenvolvi o projeto, por isso foram feitas diversas adaptações para que funcionasse com as versões mais recentes.
> 

---

## 🚀 Sobre o Projeto

Este é um sistema completo de gerenciamento de projetos, permitindo criar, visualizar e acompanhar tarefas com diferentes prioridades. Também conta com funcionalidades como timeline de progresso, modos de visualização em lista e tabela, e filtros avançados.

O projeto foi inspirado no repositório original do professor Ed Roh:

🔗 https://github.com/ed-roh/project-management

---

## 🛠️ Tecnologias Utilizadas

### 🎯 Frontend

- **Next.js 15**
- **React 19**
- **TypeScript**
- **Redux & Redux Toolkit**
- **RTK Query**
- **Material UI**
- **TailwindCSS**
- **React DnD** - Drag & Drop para React
- **Recharts** - Gráficos interativos

### 🖥️ Backend

- **Node.js com TypeScript**
- **Prisma ORM**
- **RESTful API**

---

## ⚙️ Funcionalidades

✅ Visualização de tarefas com prioridade

✅ Múltiplas visualizações (Lista e Tabela)

✅ Criação e edição de tarefas

✅ Timeline de progresso do projeto

✅ Modo claro e escuro

✅ Filtro e ordenação de tarefas

✅ Atribuição de responsáveis

---

## 📂 Estrutura do Projeto

```
bash
📦 Project-Management
├── client    # Aplicação Frontend (Next.js)
└── server    # API Backend (Node.js + Prisma)

```

---

## 📥 Como Instalar e Executar

### Pré-requisitos

- Node.js (versão LTS recomendada)
- npm ou yarn

### Passos

1. Clone o repositório:

```bash
bash

git clone https://github.com/lucastgama/Project-Management.git

```

1. Instale as dependências:

**Frontend**

```bash
bash

cd client
npm install
# ou
yarn

```

**Backend**

```bash
bash

cd server
npm install
# ou
yarn

```

1. Configure o arquivo `.env` no backend (veja `.env.example`)
2. Execute os servidores:

**Frontend**

```bash
bash

npm run dev

```

Acesse: [http://localhost:3000](http://localhost:3000/)

**Backend**

```bash
bash

npm run dev

```

Servidor rodando em: http://localhost:8000

---

## 🙋‍♂️ Autor

Desenvolvido por **Lucas Gama**

📎 [Meu GitHub](https://github.com/lucastgama)
