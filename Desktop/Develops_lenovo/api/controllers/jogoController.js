const Jogo = require('../model/jogoModel');

exports.listaPorLoginJogo = (req, res) => {
    const fk_login_id_login = parseInt(req.params.fk_login_id_login);
    Jogo.lista(fk_login_id_login, res);
};

exports.buscaPorIdJogo = (req, res) => {
    const id = parseInt(req.params.id);
    Jogo.buscaPorId(id, res);
};

exports.buscaPorIdtpEtaJogo = (req, res) => {
    const id = parseInt(req.params.id);
    Jogo.buscaPorIdtpEta(id, res);
};

exports.adicionaJogo = (req, res) => {
    Jogo.adiciona(req.body, res);
};

exports.alteraJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Jogo.altera(id, valores, res);
};

exports.deletaJogo = (req, res) => {
    const id = parseInt(req.params.id);
    Jogo.deleta(id, res);
};
