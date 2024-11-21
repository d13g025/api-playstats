const TimePrincipal = require('../model/timePrincipalModel');

exports.lista = (req, res) => {
    TimePrincipal.lista(res);
};

exports.buscaPorId = (req, res) => {
    const id = parseInt(req.params.id);
    TimePrincipal.buscaPorId(id, res);
};

exports.adiciona = (req, res) => {
    TimePrincipal.adiciona(req.body, res);
};

exports.altera = (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    TimePrincipal.altera(id, valores, res);
};

exports.deleta = (req, res) => {
    const id = parseInt(req.params.id);
    TimePrincipal.deleta(id, res);
};
