const express = require('express');
const {
    lista,
    buscaPorId,
    adiciona,
    altera,
    deleta
} = require('../controllers/timePrincipalController');

const router = express.Router();

/**
 * @swagger
 * /timePrincipal:
 *   get:
 *     summary: Lista todos os times principais
 *     responses:
 *       200:
 *         description: Lista de times principais
 */
router.get('/', lista);

/**
 * @swagger
 * /timePrincipal/{id}:
 *   get:
 *     summary: Busca time principal pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do time principal
 */
router.get('/:id', buscaPorId);

/**
 * @swagger
 * /timePrincipal:
 *   post:
 *     summary: Adiciona um novo time principal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Time principal criado com sucesso
 */
router.post('/', adiciona);

/**
 * @swagger
 * /timePrincipal/{id}:
 *   patch:
 *     summary: Atualiza informações de um time principal
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
 *         description: Time principal atualizado com sucesso
 */
router.patch('/:id', altera);

/**
 * @swagger
 * /timePrincipal/{id}:
 *   delete:
 *     summary: Deleta um time principal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Time principal deletado com sucesso
 */
router.delete('/:id', deleta);

module.exports = router;
