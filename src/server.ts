import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log("listagem de usuarios");

  response.json([
      'Hugo',
      'Aliny',
      'Ana Luiza'
  ]);
});

app.listen(3333);