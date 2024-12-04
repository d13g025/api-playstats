// Parte de back end
const Jogador = require('../model/jogador');
const rota = '/jogador'; // defininfdo a rota de login

module.exports = app => { //aqui dentro fica minha rota
    app.get(rota+'/porLogin/:fk_login_id_login', (req, res) => {
        let fk_login_id_login = parseInt(req.params.fk_login_id_login);
        Jogador.lista(fk_login_id_login, res);
    });
    app.get((rota+'/:id'), (req,res)=>{
        let id = parseInt(req.params.id);
        Jogador.buscaPorId(id, res);
    })
    app.post(rota, (req, res) => {
        console.log(req.body);  // imprimindo oque o usuário enviou por post
        Jogador.adiciona(req.body, res)
    })
    app.patch((rota+'/:id'),(req, res)=>{
        let id = parseInt(req.params.id);  // parseInt, serve para ter certeza que o elemento que vier vai ser INT
        let valores = req.body; //Pegando todos os valores
        Jogador.altera(id, valores, res);
    })
    app.delete(rota + '/:id', (req, res) => {
        let id = parseInt(req.params.id);  // Obtendo o ID do jogador que será deletado
        Jogador.deleta(id, res);  // Chama o método deleta no modelo
    });

}