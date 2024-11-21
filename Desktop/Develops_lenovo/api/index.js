const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const jogadorRoutes = require('./routes/jogadorRoutes');
const loginRoutes = require('./routes/loginRoutes'); 
const jogoRoutes = require('./routes/jogoRoutes');
const timePrincipalRoutes = require('./routes/timePrincipalRoutes');
const timeAdversarioRoutes = require('./routes/timeAdversarioRoutes');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Conectando as rotas
app.use('/jogador', jogadorRoutes);  
app.use('/login', loginRoutes);
app.use('/jogo', jogoRoutes);
app.use('/timePrincipal', timePrincipalRoutes);
app.use('/timeAdversario', timeAdversarioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
});
