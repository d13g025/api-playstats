const conexao = require('../infra/connection');

class TimePrincipal {
    adiciona(timePrincipal, res) {
        const sql = 'INSERT INTO timePrincipal SET ?';
        conexao.query(sql, timePrincipal, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json({ mensagem: 'Time principal adicionado com sucesso!', id: resultado.insertId });
            }
        });
    }

    buscaPorId(id, res) {
        const sql = 'SELECT * FROM timePrincipal WHERE id_timePrincipal = ?';
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado[0] || { mensagem: 'Time principal não encontrado!' });
            }
        });
    }

    lista(res) {
        const sql = 'SELECT * FROM timePrincipal';
        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    altera(id, valores, res) {
        const sql = 'UPDATE timePrincipal SET ? WHERE id_timePrincipal = ?';
        conexao.query(sql, [valores, id], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ mensagem: 'Time principal atualizado com sucesso!' });
            }
        });
    }

    deleta(id, res) {
        const sql = 'DELETE FROM timePrincipal WHERE id_timePrincipal = ?';
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ mensagem: 'Time principal deletado com sucesso!' });
            }
        });
    }
}

module.exports = new TimePrincipal();
