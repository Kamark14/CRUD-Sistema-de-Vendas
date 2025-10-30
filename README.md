# 💼 Sistema CRUD de Vendas Mensais — Node.js + MongoDB

Um sistema backend simples e funcional para registrar, consultar, atualizar e deletar **vendas mensais**, desenvolvido em **Node.js**, **Express** e **MongoDB** com **Mongoose**.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| 🟢 **Node.js** | Ambiente de execução JavaScript no servidor |
| ⚡ **Express.js** | Framework minimalista para criação de APIs |
| 🍃 **MongoDB** | Banco de dados NoSQL para armazenamento de dados |
| 🔗 **Mongoose** | ODM (Object Data Modeling) para integração entre Node e MongoDB |
| 🔒 **Dotenv** | Gerenciamento seguro de variáveis de ambiente |

---

## 📂 Estrutura do Projeto

```
📦 crud
├── 📄 .env
├── 📄 package.json
├── 📄 server.js
└── 📄 VendaMensal.js
```

---

## ⚙️ Configuração do Ambiente

Antes de rodar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org) (versão 18 ou superior)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou servidor MongoDB local

---

## 📥 Instalação

1. **Clone este repositório**
   ```bash
   git clone https://github.com/seuusuario/crud-vendas-mensais.git
   cd crud-vendas-mensais
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`**
   Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

   ```env
   MONGO_URI=mongodb+srv://usuario:senha@seucluster.mongodb.net/bancoCRUD
   ```

4. **Inicie o servidor**
   ```bash
   node --watch server.js
   ```

---

## 🧠 Como Funciona

O sistema expõe uma API REST com os quatro principais métodos HTTP:

| Método | Rota | Descrição |
|--------|------|-----------|
| **POST** | `/vendas` | Cria uma nova venda mensal |
| **GET** | `/vendas` | Lista todas as vendas registradas |
| **PUT** | `/vendas/:id` | Atualiza uma venda existente pelo ID |
| **DELETE** | `/vendas/:id` | Exclui uma venda pelo ID |

---

## 📘 Exemplo de Requisições

### ➕ Criar uma venda (`POST /vendas`)

```json
{
  "mes": 10,
  "valorVendido": 15000
}
```

### 📄 Listar todas as vendas (`GET /vendas`)

Retorno esperado:
```json
[
  {
    "_id": "6720a1f2b7e21e9c3a8c3d12",
    "mes": 10,
    "valorVendido": 15000
  }
]
```

### ✏️ Atualizar uma venda (`PUT /vendas/:id`)

```json
{
  "valorVendido": 18000
}
```

### ❌ Deletar uma venda (`DELETE /vendas/:id`)

Sem body — apenas o ID na rota.

---

## 🧩 Estrutura dos Arquivos

```
📦 CRUD
├── 📄 .env
├── 📄 package.json
├── 📄 server.js
└── 📄 VendaMensal.js
```

---

## 🧰 Scripts Disponíveis

```bash
# Iniciar servidor (modo normal)
node server.js

# Iniciar com hot reload (recomendado)
node --watch server.js
```

---

## 📡 Testando com Insomnia ou Postman

Você pode testar os endpoints com ferramentas como:
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

Basta usar a URL base:
```
http://localhost:3000
```
E enviar as requisições de acordo com os exemplos acima.

---

## 🛠 Dependências Principais

```json
"dependencies": {
  "dotenv": "^17.2.3",
  "express": "^5.1.0",
  "mongoose": "^8.19.2"
}
```

Instale-as manualmente, se necessário:
```bash
npm install express mongoose dotenv
```

---

## 🏁 Conclusão

Este projeto serve como base para qualquer **CRUD com Node.js e MongoDB**, podendo ser facilmente expandido para sistemas maiores (como dashboards, relatórios ou integração com frontend em React, Vue ou Angular).

---

## 💬 Autor:

**KaMark14**  
