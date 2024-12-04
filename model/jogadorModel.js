const conexao = require('../infra/connection');

class Jogador {
    adiciona(jogador, res) {
        const sql = 'INSERT INTO jogador SET ?';
        conexao.query(sql, jogador, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json({ mensagem: 'Jogador adicionado com sucesso!', id: resultado.insertId });
            }
        });
    }

    buscaPorId(id, res) {
        const sql = 'SELECT * FROM jogador WHERE id_jogador = ?';
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado[0] || { mensagem: 'Jogador não encontrado!' });
            }
        });
    }

    lista(fk_login_id_login, res) {
        const sql = 'SELECT * FROM jogador WHERE fk_login_id_login = ?';
        conexao.query(sql, fk_login_id_login, (erro, resultado) => {
            if (erro) {
                return res.status(400).json(erro); // Retorna o erro se houver
            }
    
            if (resultado.length === 0) {
                return res.status(404).json({ message: "Nenhum jogador encontrado para esse ID de login" });
            }
    
            res.status(200).json(resultado);
        });
    }
    

    altera(id, valores, res) {
        const sql = 'UPDATE jogador SET ? WHERE id_jogador = ?';
        conexao.query(sql, [valores, id], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ mensagem: 'Jogador atualizado com sucesso!' });
            }
        });
    }

    deleta(id, res) {
        const sql = 'DELETE FROM jogador WHERE id_jogador = ?';
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ mensagem: 'Jogador deletado com sucesso!' });
            }
        });
    }
}

module.exports = new Jogador();
