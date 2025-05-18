const express = require('express');
const app = express();
const port = 3000;

// Permitir JSON no corpo das requisições
app.use(express.json());

// Rota GET (exemplo simples)
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API de controle financeiro!');
});

// Rota GET de dados fictícios
app.get('/transacoes', (req, res) => {
  res.json([
    { id: 1, tipo: 'Mercado',  descricao: "pão", valor: "22.30"},
    { id: 2, tipo: 'Mercado',  descricao: "pão", valor: "22.30"},
    { id: 3, tipo: 'Mercado',  descricao: "pão", valor: "22.30"},
    { id: 4, tipo: 'Mercado',  descricao: "pão", valor: "22.30"},
    
  ]);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
