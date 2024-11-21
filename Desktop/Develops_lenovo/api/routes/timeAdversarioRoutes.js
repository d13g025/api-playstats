const express = require('express');
const {
    listaPorLogin,
    buscaPorId,
    adiciona,
    altera,
    deleta,
    buscarTimeAdversario,
} = require('../controllers/timeAdversarioController');

const router = express.Router();

/**
 * @swagger
 * /timeAdversario/porLogin/{fk_login_id_login}:
 *   get:
 *     summary: Lista times adversários pelo ID de login
 *     parameters:
 *       - in: path
 *         name: fk_login_id_login
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de times adversários
 */
router.get('/porLogin/:fk_login_id_login', listaPorLogin);

/**
 * @swagger
 * /timeAdversario/{id}:
 *   get:
 *     summary: Busca time adversário pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do time adversário
 */
router.get('/:id', buscaPorId);

/**
 * @swagger
 * /timeAdversario:
 *   post:
 *     summary: Adiciona um novo time adversário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Time adversário criado com sucesso
 */
router.post('/', adiciona);

/**
 * @swagger
 * /timeAdversario/{id}:
 *   patch:
 *     summary: Atualiza informações de um time adversário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Time adversário atualizado com sucesso
 */
router.patch('/:id', altera);

/**
 * @swagger
 * /timeAdversario/{id}:
 *   delete:
 *     summary: Deleta um time adversário pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Time adversário deletado com sucesso
 */
router.delete('/:id', deleta);

/**
 * @swagger
 * /timeAdversario/buscaPorNome/{nome_timeAdversario}:
 *   get:
 *     summary: Busca times adversários pelo nome
 *     parameters:
 *       - in: path
 *         name: nome_timeAdversario
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de times adversários encontrados
 */
router.get('/buscaPorNome/:nome_timeAdversario', buscarTimeAdversario);

module.exports = router;
