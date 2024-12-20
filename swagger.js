const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Jogadores',
      version: '1.0.0',
      description: 'API para gerenciar jogadores de um jogo',
    },
    servers: [
      {
        url: 'https://api-playstats1.vercel.app', // URL base do servidor
      },
    ],
  },
  apis: ['./routes/*.js'], // Caminho para as rotas documentadas
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
