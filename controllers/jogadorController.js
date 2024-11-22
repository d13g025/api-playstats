const Jogador = require('../model/jogadorModel');

exports.listaPorLogin = (req, res) => {
    const fk_login_id_login = parseInt(req.params.fk_login_id_login);

    // Verifica se fk_login_id_login é um número válido
    if (isNaN(fk_login_id_login)) {
        return res.status(400).json({ message: "ID de login inválido" });
    }

    Jogador.lista(fk_login_id_login, res);
};


exports.buscaPorId = (req, res) => {
    const id = parseInt(req.params.id);
    Jogador.buscaPorId(id, res);
};

exports.adiciona = (req, res) => {
    Jogador.adiciona(req.body, res);
};

exports.altera = (req, res) => {
    const id = parseInt(req.params.id);
    Jogador.altera(id, req.body, res);
};

exports.deleta = (req, res) => {
    const id = parseInt(req.params.id);
    Jogador.deleta(id, res);
};
