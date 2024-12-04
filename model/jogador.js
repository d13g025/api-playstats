const conexao = require('../infra/connection');

class Jogador{
    constructor(id_jogador, nome_jogador, apelido_jogador, posicao_jogador, gols_jogador, assistencias_jogador) {
        // Inicializando as propriedades da instância
        this.id_jogador = id_jogador;
        this.nome_jogador = nome_jogador;
        this.apelido_jogador = apelido_jogador;
        this.posicao_jogador = posicao_jogador;
        this.gols_jogador = gols_jogador;
        this.assistencias_jogador = assistencias_jogador;
    }
    adiciona(jogador, res){
        let sql = 'INSERT INTO jogador SET ?'
        conexao.query(sql, jogador,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            }else{
                res.status(200).json(resultado); // resolvendo o status em formato json
            }
        })
    } 
    buscaPorId(id, res){
        let sql2 = 'SELECT * FROM jogador where id_jogador = ?'
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
        let sql3 = 'SELECT * FROM jogador where fk_login_id_login = ?';
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
        let sqlEdit = 'UPDATE jogador SET ? WHERE id_jogador = ?';
        conexao.query(sqlEdit, [valores, id], (erro, resultado) => {
            if (erro) {
                console.error(erro);
                return res.status(400).json({ message: 'Erro ao atualizar jogador', error: erro });
            }
            
            res.status(200).json({ message: 'Jogador atualizado com sucesso!', resultado });
        });
    };
    // Método de deletar jogador
    deleta(id, res) {
        let sqlDelete = 'DELETE FROM jogador WHERE id_jogador = ?';
        conexao.query(sqlDelete, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            } else {
                res.status(200).json(resultado)
            }
        });
    }
    // Método toString para representar os dados de login de maneira legível
    toString() {
        // Retorna uma string com as informações da instância atual (exemplo com id_login e nome_timePrincipal)
        return `jogador: { id: ${this.id_jogador}, time: ${this.nome_jogador}, email: ${this.apelido_jogador}, posicao: ${this.posicao_jogador}, gols: ${this.gols_jogador}, assistencias: ${this.assistencias_jogador} }`;
    }
    
}
module.exports = new Jogador; 
