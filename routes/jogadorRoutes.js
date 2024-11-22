const express = require('express');
const {
    listaPorLogin,
    buscaPorId,
    adiciona,
    altera,
    deleta,
} = require('../controllers/jogadorController');

const router = express.Router();

/**
 * @swagger
 * /jogador/porLogin/{fk_login_id_login}:
 *   get:
 *     summary: Lista jogadores pelo ID de login
 *     parameters:
 *       - in: path
 *         name: fk_login_id_login
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de jogadores
 */
router.get('/porLogin/:fk_login_id_login', listaPorLogin);

/**
 * @swagger
 * /jogador/{id}:
 *   get:
 *     summary: Busca jogador pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do jogador
 */
router.get('/:id', buscaPorId);

/**
 * @swagger
 * /jogador:
 *   post:
 *     summary: Adiciona um novo jogador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Jogador criado com sucesso
 */
router.post('/', adiciona);

/**
 * @swagger
 * /jogador/{id}:
 *   patch:
 *     summary: Atualiza informações de um jogador
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
 *         description: Jogador atualizado com sucesso
 */
router.patch('/:id', altera);

/**
 * @swagger
 * /jogador/{id}:
 *   delete:
 *     summary: Deleta um jogador pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jogador deletado com sucesso
 */
router.delete('/:id', deleta);

module.exports = router;
