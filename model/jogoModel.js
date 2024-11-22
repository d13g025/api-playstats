const conexao = require('../infra/connection');

class Jogo {
    adiciona(jogo, res) {
        const sql = 'INSERT INTO jogo SET ?';
        conexao.query(sql, jogo, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json({ mensagem: 'Jogo adicionado com sucesso!', id: resultado.insertId });
            }
        });
    }

    buscaPorId(id, res) {
        const sql = 'SELECT * FROM jogo WHERE id_jogo = ?';
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado[0] || { mensagem: 'Jogo não encontrado!' });
            }
        });
    }

    buscaPorIdtpEta(id, res) {
        const sql = `
            SELECT 
                j.id_jogo AS jogo_id,
                j.placar_jogo AS placar,
                l.id_login AS login_id,
                ta.id_timeAdversario AS time_adversario_id,
                ta.nome_timeAdversario AS nome_time_adversario,
                ta.endereco_timeAdversario AS endereco_time_adversario,
                l.nome_timePrincipal AS nome_time_principal
            FROM 
                jogo j
            JOIN 
                login l ON j.fk_login_id_login = l.id_login
            JOIN 
                timeadversario ta ON j.fk_timeAdversario_id_timeAdversario = ta.id_timeAdversario
            WHERE
                j.id_jogo = ?`;
        conexao.query(sql, [id], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                if (resultado.length > 0) {
                    res.status(200).json(resultado[0]);
                } else {
                    res.status(404).json({ mensagem: 'Jogo não encontrado' });
                }
            }
        });
    }

    lista(fk_login_id_login, res) {
        const sql = 'SELECT * FROM jogo WHERE fk_login_id_login = ?';
        conexao.query(sql, [fk_login_id_login], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    altera(id, valores, res) {
        const sql = 'UPDATE jogo SET ? WHERE id_jogo = ?';
        conexao.query(sql, [valores, id], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ mensagem: 'Jogo atualizado com sucesso!' });
            }
        });
    }

    deleta(id, res) {
        const sql = 'DELETE FROM jogo WHERE id_jogo = ?';
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ mensagem: 'Jogo deletado com sucesso!' });
            }
        });
    }
}

module.exports = new Jogo();
