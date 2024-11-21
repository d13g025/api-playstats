const express = require('express');
const {
    listaPorLoginJogo,
    buscaPorIdJogo,
    adicionaJogo,
    alteraJogo,
    deletaJogo,
    buscaPorIdtpEtaJogo
} = require('../controllers/jogoController');

const router = express.Router();

/**
 * @swagger
 * /jogo:
 *   get:
 *     summary: Lista todos os jogos
 *     responses:
 *       200:
 *         description: Lista de jogos
 */
router.get('/listaJogo', listaPorLoginJogo);

/**
 * @swagger
 * /jogo/{id}:
 *   get:
 *     summary: Busca jogo pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do jogo
 */
router.get('/buscaPorIdJogo/:id', buscaPorIdJogo);

/**
 * @swagger
 * /jogo/{id}:
 *   get:
 *     summary: Busca jogo por ID com detalhes de time adversário e time principal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalhes completos do jogo
 *       404:
 *         description: Jogo não encontrado
 */
router.get('/buscaPorIdtpEta/:id', buscaPorIdtpEtaJogo);

/**
 * @swagger
 * /jogo:
 *   post:
 *     summary: Adiciona um novo jogo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Jogo criado com sucesso
 */
router.post('/adicionaJogo', adicionaJogo);

/**
 * @swagger
 * /jogo/{id}:
 *   patch:
 *     summary: Atualiza informações de um jogo
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
 *         description: Jogo atualizado com sucesso
 */
router.patch('/alteraJogo/:id', alteraJogo);

/**
 * @swagger
 * /jogo/{id}:
 *   delete:
 *     summary: Deleta um jogo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jogo deletado com sucesso
 */
router.delete('/deletaJogo/:id', deletaJogo);

module.exports = router;
