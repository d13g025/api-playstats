const TimeAdversario = require('../model/timeAdversarioModel');

exports.listaPorLogin = (req, res) => {
    const fk_login_id_login = parseInt(req.params.fk_login_id_login);
    TimeAdversario.lista(fk_login_id_login, res);
};

exports.buscaPorId = (req, res) => {
    const id = parseInt(req.params.id);
    TimeAdversario.buscaPorId(id, res);
};

exports.buscarTimeAdversario = (req, res) => {
    const { nome_timeAdversario } = req.query;
    if (!nome_timeAdversario) {
        return res.status(400).json({ success: false, message: 'O nome do time é obrigatório.' });
    }
    TimeAdversario.buscarTimeAdversario(nome_timeAdversario, res);
};

exports.adiciona = (req, res) => {
    TimeAdversario.adiciona(req.body, res);
};

exports.altera = (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    TimeAdversario.altera(id, valores, res);
};

exports.deleta = (req, res) => {
    const id = parseInt(req.params.id);
    TimeAdversario.deleta(id, res);
};
