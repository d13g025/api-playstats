const Login = require('../model/loginModel'); // Importa o modelo responsável pela lógica de negócio.

// Lista todos os logins
exports.lista = (req, res) => {
    Login.lista(res);
};

// Busca login por ID
exports.buscaPorId = (req, res) => {
    const id = parseInt(req.params.id);
    Login.buscaPorId(id, res);
};

// Adiciona um novo login
exports.adiciona = (req, res) => {
    console.log(req.body); // Exibe o conteúdo recebido no POST.
    Login.adiciona(req.body, res);
};

// Atualiza um login pelo ID
exports.altera = (req, res) => {
    const id = parseInt(req.params.id); // Garante que o ID será um número inteiro.
    const valores = req.body; // Captura os valores do corpo da requisição.
    Login.altera(id, valores, res);
};

// Autentica o usuário
exports.autentica = (req, res) => {
    const { email, senha } = req.body;

    // Verifica se os campos foram preenchidos
    if (!email || !senha) {
        return res.status(400).json({ success: false, message: 'Email e senha são obrigatórios' });
    }

    Login.autentica(email, senha, res);
};

// Busca time pelo nome
exports.buscaTimes = (req, res) => {
    const { nome } = req.query; // Captura o parâmetro de consulta "nome".
    if (!nome) {
        return res.status(400).json({ success: false, message: 'O nome do time é obrigatório.' });
    }
    Login.buscaTimes(nome, res); // Chama o método de busca do modelo.
};

exports.deleta = (req, res) => {
    const id = parseInt(req.params.id); // Garante que o ID será um número inteiro.
    Login.deleta(id, res);
}