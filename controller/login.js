const Login = require('../model/login');
const rota = '/login'; // defininfdo a rota de login

module.exports = app => { //aqui dentro fica minha rota
    app.get(rota, (req, res)=>{
        Login.lista(res);
    });
    app.get((rota+'/:id'), (req,res)=>{
        let id = parseInt(req.params.id);
        Login.buscaPorId(id, res);
    })
    
    app.post(rota, (req, res) => {
        console.log(req.body);  // imprimindo oque o usuário enviou por post
        Login.adiciona(req.body, res)
    })
    app.patch((rota+'/:id'),(req, res)=>{
        let id = parseInt(req.params.id);  // parseInt, serve para ter certeza que o elemento que vier vai ser INT
        let valores = req.body; //Pegando todos os valores
        Login.altera(id, valores, res);
    })

    app.post((rota+'/autentica'), (req, res) => {
        const { email, senha } = req.body;
      
        // Verifica se os campos foram preenchidos
        if (!email || !senha) {
            return res.status(400).json({ success: false, message: 'Email e senha são obrigatórios' });
        }
      
        // Chama o método de autenticação
        Login.autentica(email, senha, res);
    });
    app.get('/buscarTime', (req, res) => {
        const { nome } = req.query;  // Parâmetro de consulta para o nome do time
        if (!nome) {
            return res.status(400).json({ success: false, message: 'O nome do time é obrigatório.' });
        }
        Login.buscaTimes(nome, res);  // Chama o método de busca de times
        
    });
    app.delete(rota + '/:id', (req, res) => {
        let id = parseInt(req.params.id);  // Obtendo o ID do jogador que será deletado
        Login.deleta(id, res);  // Chama o método deleta no modelo
    });
}
