const conexao = require('../infra/connection');

class TimeAdversario{

    adiciona(timeAdversario, res){
        let sql = 'INSERT INTO timeAdversario SET ?'
        conexao.query(sql, timeAdversario,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            }else{
                res.status(200).json(resultado); // resolvendo o status em formato json
            }
        })
    }
    buscaPorId(id, res){
        let sql2 = 'SELECT * FROM timeAdversario where id_timeAdversario = ?'
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
        let sql3 = 'SELECT * FROM timeAdversario where fk_login_id_login = ?';
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
        let sqlEdit = 'UPDATE timeAdversario SET ? WHERE id_timeAdversario = ?';
        conexao.query(sqlEdit, [valores,id], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro)
            }else{
                res.status(200).json(resultado) // resolvendo o status em formato json
            }
        })
    }
    // Método para buscar times com base no nome
    buscarTimeAdversario(nome_timeAdversario, fk_login_id_login, res) {
        let sql = 'SELECT * FROM timeAdversario WHERE nome_timeAdversario LIKE ? AND fk_login_id_login = ?'; 
        conexao.query(sql, [`%${nome_timeAdversario}%`, fk_login_id_login], (erro, resultado) => {
            if (erro) {
                return res.status(400).json(erro);
            }
            res.status(200).json(resultado);
        });
    }
    // Método de deletar jogador
    deleta(id, res) {
        let sqlDelete = 'DELETE FROM timeAdversario WHERE id_timeAdversario = ?';
        conexao.query(sqlDelete, id, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            } else {
                res.status(200).json(resultado)
            }
        });
    }
     // Método toString para retornar uma string legível sobre o objeto TimeAdversario
     toString() {
        return `Time Adversário: [id: ${this.id_timeAdversario}, nome: ${this.nome_timeAdversario}]`;
    }
}
module.exports = new TimeAdversario; 
