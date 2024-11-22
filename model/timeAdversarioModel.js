const conexao = require('../infra/connection');

class TimeAdversario {

    adiciona(timeAdversario, res) {
        const sql = 'INSERT INTO timeAdversario SET ?';
        conexao.query(sql, timeAdversario, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json({ mensagem: 'Time adversário adicionado com sucesso!', id: resultado.insertId });
            }
        });
    }

    buscaPorId(id, res) {
        const sql = 'SELECT * FROM timeAdversario WHERE id_timeAdversario = ?';
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado[0] || { mensagem: 'Time adversário não encontrado!' });
            }
        });
    }

    lista(fk_login_id_login, res) {
        const sql = 'SELECT * FROM timeAdversario WHERE fk_login_id_login = ?';
        conexao.query(sql, [fk_login_id_login], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    altera(id, valores, res) {
        const sql = 'UPDATE timeAdversario SET ? WHERE id_timeAdversario = ?';
        conexao.query(sql, [valores, id], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ mensagem: 'Time adversário atualizado com sucesso!' });
            }
        });
    }

    buscarTimeAdversario(nome_timeAdversario, res) {
        const sql = 'SELECT * FROM timeAdversario WHERE nome_timeAdversario LIKE ?';
        conexao.query(sql, [`%${nome_timeAdversario}%`], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    deleta(id, res) {
        const sql = 'DELETE FROM timeAdversario WHERE id_timeAdversario = ?';
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ mensagem: 'Time adversário deletado com sucesso!' });
            }
        });
    }

    toString() {
        return `Time Adversário: [id: ${this.id_timeAdversario}, nome: ${this.nome_timeAdversario}]`;
    }
}

module.exports = new TimeAdversario();
