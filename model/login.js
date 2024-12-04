// utilizado para controlar as ações do banco de dados
const conexao = require('../infra/connection');

class Login{

    adiciona(login, res){
        let sql = 'INSERT INTO login SET ?';
        conexao.query(sql, login, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            }else{
                res.status(200).json(resultado); // resolvendo o status em formato json
            }
        })
    }
    buscaPorId(id, res){
        let sql2 = 'SELECT * FROM login where id_login = ?'
        conexao.query(sql2,id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
                console.log(erro);
            }else{
                res.status(200).json(resultado)
            }
        })
    }


    lista(res){
        let sql3 = 'SELECT * FROM login';
        conexao.query(sql3,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro)
            }else{
                res.status(200).json(resultado) // resolvendo o status em formato json
            }
        })
    }

    altera(id, valores, res){
        let sqlEdit = 'UPDATE login SET ? WHERE id_login = ?';
        conexao.query(sqlEdit, [valores,id], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro)
            }else{
                res.status(200).json(resultado) // resolvendo o status em formato json
            }
        })
    }
    // Método para autenticação de email e senha
    autentica(email, senha, res) {
        // 1. Consulta para verificar se o email existe
        let sql = 'SELECT * FROM login WHERE email = ?';
        conexao.query(sql, [email], (erro, resultado) => {
            if (erro) {
                console.log(erro);
                return res.status(500).json({ success: false, message: 'Erro no servidor ao verificar o email. Tente novamente.' });
            }
    
            if (resultado.length === 0) {
                // Se o email não existir, retorna erro
                return res.status(400).json({ success: false, message: 'O E-mail informado não existe!' });
            }
    
            // 2. Verifica se a senha bate com a armazenada no banco
            const usuario = resultado[0];  // O usuário encontrado
            if (usuario.senha !== senha) {
                // Se as senhas não coincidirem
                return res.status(400).json({ success: false, message: 'Senha incorreta!' });
            }
    
            // 3. Se tudo estiver correto, retorna o id_login e uma mensagem de sucesso
            return res.status(200).json({ success: true, message: 'Login realizado com sucesso!', id_login: usuario.id_login });
        });
    }
    // Método para buscar times com base no nome
    buscaTimes(nome, res) {
        let sql = 'SELECT id_login, nome_timePrincipal FROM login WHERE nome_timePrincipal LIKE ?';
        conexao.query(sql, [`%${nome}%`], (erro, resultado) => {
            if (erro) {
                return res.status(400).json(erro);
            }
    
            // Se não encontrar nenhum time
            if (resultado.length === 0) {
                return res.status(404).json({ success: false, message: 'Nenhum time encontrado com esse nome.' });
            }
    
            // Verificação de tipo de id_login
            resultado.forEach((item) => {
                if (isNaN(item.id_login) || !Number.isInteger(Number(item.id_login))) {
                    return res.status(400).json({ erro: 'id_login não é um número válido' });
                }
            });
    
            // Formatar a resposta igual ao método autentica
            return res.status(200).json({
                success: true,
                message: 'Times encontrados com sucesso!',
                times: resultado.map(item => ({
                    id_login: Number(item.id_login),  // Converte para número
                    nome_timePrincipal: item.nome_timePrincipal
                }))
            });
        });
    }
    // Método de deletar jogador
    deleta(id, res) {
        let sqlDelete = 'DELETE FROM login WHERE id_login = ?';
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
        return `Login: { id: ${this.id_login}, time: ${this.nome_timePrincipal}, email: ${this.email} }`;
    }
}
module.exports = new Login; 