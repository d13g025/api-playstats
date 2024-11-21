//Conexão com banco de dados
const mysql = require('mysql');

const conexao = mysql.createConnection({
    host:"sql10.freesqldatabase.com",
    user:"sql10742876",
    password:"EuTENkCVD4", // senha a definir
    port: 3306, // ir atras 
    database:"sql10742876" // nome do banco que irei criar
});

module.exports = conexao;