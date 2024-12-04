const conexao = require('../infra/connection');
const regression = require('regression');

class Jogo{
    adiciona(jogo, res){
        let sql = 'INSERT INTO jogo SET ?'
        conexao.query(sql, jogo,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            }else{
                res.status(200).json(resultado); // resolvendo o status em formato json
            }
        })
    }
    buscaPorIdtpEta(id, res) {
        // Consulta SQL corrigida
        let sql2 = `
            SELECT 
                j.id_jogo AS jogo_id,
                j.placar_timePrincipal AS placarTimePrincipal,
                j.placar_timeAdversario AS placarTimeAdversario,
                l.id_login AS login_id,
                ta.id_timeAdversario AS time_adversario_id,
                ta.nome_timeAdversario AS nome_time_adversario,
                ta.endereco_timeAdversario as endereco_time_adversario,
                l.nome_timePrincipal AS nome_time_principal
            FROM 
                jogo j
            JOIN 
                login l ON j.fk_login_id_login = l.id_login
            JOIN 
                timeadversario ta ON j.fk_timeAdversario_id_timeAdversario = ta.id_timeAdversario
            WHERE
                j.id_jogo = ?`;
    
        conexao.query(sql2, [id], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
                console.log("Erro na consulta SQL:", erro);
            } else {
                if (resultado.length > 0) {
                    // Imprime o resultado da consulta SQL no console
                    console.log("Resultado da consulta:", resultado[0]);
    
                    res.status(200).json(resultado[0]);  // Retorna o primeiro jogo, já que id_jogo é único
                } else {
                    res.status(404).json({ message: 'Jogo não encontrado' });
                    console.log("Nenhum jogo encontrado para o ID:", id);
                }
            }
        });
    }
    buscaPorId(id, res){
        let sql2 = 'SELECT * FROM jogo where id_jogo = ?'
        conexao.query(sql2,id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
                console.log(erro);
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    lista(fk_login_id_login, res) {
        
        let sql3 = 'SELECT * FROM jogo where fk_login_id_login = ?';
        conexao.query(sql3, [fk_login_id_login], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
                console.log(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    altera(id, valores, res){
        let sqlEdit = 'UPDATE jogo SET ? WHERE id_jogo = ?';
        conexao.query(sqlEdit, [valores,id], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro)
            }else{
                res.status(200).json(resultado) // resolvendo o status em formato json
            }
        })
    }
     // Método de deletar jogador
    deleta(id, res) {
        let sqlDelete = 'DELETE FROM jogo WHERE id_jogo = ?';
        conexao.query(sqlDelete, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            } else {
                res.status(200).json(resultado)
            }
        });
    }
    somaPlacar(fk_login_id_login, res) {
        // SQL modificado para somar os placares apenas para o id_login fornecido
        let sql = `SELECT 
                SUM(placar_timePrincipal) AS total_gols_timePrincipal,
                SUM(placar_timeAdversario) AS total_gols_timeAdversario
                FROM jogo
                WHERE fk_login_id_login = ?`; // Filtra os jogos pelo id_login fornecido
    
        // Executa a query passando o id_login como parâmetro
        conexao.query(sql, [fk_login_id_login], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);   // Resolvendo o erro em formato JSON
                console.log(erro);
            } else {
                // Verifica se o resultado está disponível
                if (resultado && resultado.length > 0) {
                    // Retorna o total de gols marcados por cada time
                    res.status(200).json({
                        total_gols_timePrincipal: resultado[0].total_gols_timePrincipal,
                        total_gols_timeAdversario: resultado[0].total_gols_timeAdversario
                    });
                } else {
                    res.status(404).json({ message: 'Nenhum jogo encontrado para o fk_login_id_login fornecido.' });
                }
            }
        });
    }
    contaVitorias(fk_login_id_login, res) {
        // SQL para pegar o nome do time principal baseado no id_login
        let sqlNomeTime = `
            SELECT l.nome_timePrincipal 
            FROM login l
            WHERE l.id_login = ?`;
    
        // Consulta o nome do time principal
        conexao.query(sqlNomeTime, [fk_login_id_login], (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);   // Resolvido em formato JSON
                console.log(erro);
            } else {
                if (resultado.length > 0) {
                    const nomeTimePrincipal = resultado[0].nome_timePrincipal;
    
                    // Agora, vamos contar as vitórias, empates e derrotas
                    let sqlContagemResultados = `
                        SELECT 
                            COUNT(CASE WHEN vencedor_jogo = ? THEN 1 END) AS vitorias,
                            COUNT(CASE WHEN vencedor_jogo = 'empate' THEN 1 END) AS empates,
                            COUNT(CASE WHEN vencedor_jogo != ? AND vencedor_jogo != 'empate' THEN 1 END) AS derrotas
                        FROM jogo
                        WHERE fk_login_id_login = ?`;
    
                    // Consulta para contar vitórias, empates e derrotas
                    conexao.query(sqlContagemResultados, [nomeTimePrincipal, nomeTimePrincipal, fk_login_id_login], (erro2, resultado2) => {
                        if (erro2) {
                            res.status(400).json(erro2);   // Resolvido em formato JSON
                            console.log(erro2);
                        } else {
                            // Retorna as contagens de vitórias, empates e derrotas
                            res.status(200).json({
                                nome_timePrincipal: nomeTimePrincipal,
                                vitorias: resultado2[0].vitorias,
                                empates: resultado2[0].empates,
                                derrotas: resultado2[0].derrotas
                            });
                        }
                    });
    
                } else {
                    res.status(404).json({ message: 'Time não encontrado para o fk_login_id_login fornecido.' });
                    console.log("Nenhum time encontrado para o fk_login_id_login:", fk_login_id_login);
                }
            }
        });
    }
    analiseRegressaoLinear(fk_login_id_login, res) {
        // Query para pegar dados de gols marcados e gols sofridos dos jogos do time
        let sql = `
            SELECT 
                placar_timePrincipal, 
                placar_timeAdversario 
            FROM jogo 
            WHERE fk_login_id_login = ?
        `;
        
        // Executa a consulta para pegar os dados de gols marcados e sofridos
        conexao.query(sql, [fk_login_id_login], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
                console.log(erro);
            } else {
                if (resultados.length > 0) {
                    // Organize os dados para a regressão
                    let dados = resultados.map(jogo => [
                        jogo.placar_timeAdversario, // Gols sofridos (variável independente)
                        jogo.placar_timePrincipal   // Gols marcados (variável dependente)
                    ]);

                    // Aplica a regressão linear nos dados
                    const resultadoRegressao = regression.linear(dados);

                    // Exibe a equação da regressão
                    console.log(`Equação de Regressão Linear: y = ${resultadoRegressao.equation[0]} * x + ${resultadoRegressao.equation[1]}`);
                    
                    // Retorna o resultado da regressão como JSON
                    res.status(200).json({
                        equacao: `y = ${resultadoRegressao.equation[0]} * x + ${resultadoRegressao.equation[1]}`,
                        coeficienteAngular: resultadoRegressao.equation[0],
                        coeficienteLinear: resultadoRegressao.equation[1],
                        previsaoExemplo: resultadoRegressao.predict(2)[1] // Previsão para 2 gols sofridos
                    });
                } else {
                    res.status(404).json({ message: 'Nenhum jogo encontrado para o fk_login_id_login fornecido.' });
                }
            }
        });
    }
     // Método toString para representar o objeto jogo como string
     toString() {
        // Aqui você pode personalizar os campos que quer mostrar
        return `Jogo { 
            id_jogo: ${this.id_jogo },
            fk_login_id_login: ${this.fk_login_id_login},
            id_timeAdversario: ${this.id_timeAdversario },
            data_jogo: ${this.data_jogo },
            hora_jogo: ${this.hora_jogo},
            vencedor_jogo: ${this.vencedor}
        }`;
    }

}
module.exports = new Jogo; 
