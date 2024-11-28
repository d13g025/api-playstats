const express = require('express');
const {
    lista,
    buscaPorId,
    adiciona,
    altera,
    autentica,
    buscaTimes
} = require('../controllers/loginController');

const router = express.Router();

/**
 * @swagger
 * /login:
 *   get:
 *     summary: Lista todos os logins
 *     responses:
 *       200:
 *         description: Lista de logins
 */
router.get('/', lista);

/**
 * @swagger
 * /login/{id}:
 *   get:
 *     summary: Busca login pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do login
 */
router.get('/:id', buscaPorId);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Adiciona um novo login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Login criado com sucesso
 */
router.post('/', adiciona);

/**
 * @swagger
 * /login/{id}:
 *   patch:
 *     summary: Atualiza informações de um login
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
 *         description: Login atualizado com sucesso
 */
router.patch('/:id', altera);

/**
 * @swagger
 * /login/authenticate:
 *   post:
 *     summary: Autentica um usuário pelo email e senha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       400:
 *         description: Credenciais inválidas
 */
router.post('/authenticate', autentica);

/**
 * @swagger
 * /login/buscaTimes/{nome}:
 *   get:
 *     summary: Busca times pelo nome
 *     parameters:
 *       - in: path
 *         name: nome
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Times encontrados
 *       404:
 *         description: Nenhum time encontrado
 */
router.get('/buscaTimes/:nome', buscaTimes);

/**
 * @swagger
 * /login/{id}:
 *   delete:
 *     summary: Deleta um login pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Login deletado com sucesso
 */
router.delete('/:id', deleta);

module.exports = router;
