const conexao = require('../infra/connection'); // Importa a conexão com o banco de dados.

class Login {
    // Adiciona um novo login ao banco de dados
    adiciona(login, res) {
        const sql = 'INSERT INTO login SET ?';
        conexao.query(sql, login, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json({ mensagem: 'Login adicionado com sucesso!', id: resultado.insertId });
            }
        });
    }

    // Busca login por ID
    buscaPorId(id, res) {
        const sql = 'SELECT * FROM login WHERE id_login = ?';
        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado[0] || { mensagem: 'Login não encontrado!' });
            }
        });
    }

    // Lista todos os logins
    lista(res) {
        const sql = 'SELECT * FROM login';
        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    // Atualiza um login pelo ID
    altera(id, valores, res) {
        const sql = 'UPDATE login SET ? WHERE id_login = ?';
        conexao.query(sql, [valores, id], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({ mensagem: 'Login atualizado com sucesso!' });
            }
        });
    }

    // Autentica um login com base no email e senha
    autentica(email, senha, res) {
        const sql = 'SELECT * FROM login WHERE email = ?';
        conexao.query(sql, [email], (erro, resultado) => {
            if (erro) {
                res.status(500).json({ success: false, message: 'Erro ao autenticar o email.' });
            } else if (resultado.length === 0) {
                res.status(404).json({ success: false, message: 'Email não encontrado!' });
            } else {
                const usuario = resultado[0];
                if (usuario.senha !== senha) {
                    res.status(401).json({ success: false, message: 'Senha incorreta!' });
                } else {
                    res.status(200).json({ success: true, message: 'Autenticado com sucesso!', id_login: usuario.id_login });
                }
            }
        });
    }

    // Busca times pelo nome
    buscaTimes(nome, res) {
        const sql = 'SELECT id_login, nome_timePrincipal FROM login WHERE nome_timePrincipal LIKE ?';
        conexao.query(sql, [`%${nome}%`], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else if (resultado.length === 0) {
                res.status(404).json({ success: false, message: 'Nenhum time encontrado!' });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Times encontrados!',
                    times: resultado.map(item => ({
                        id_login: Number(item.id_login),
                        nome_timePrincipal: item.nome_timePrincipal
                    }))
                });
            }
        });
    }
}

module.exports = new Login(); // Exporta uma instância única da classe.
