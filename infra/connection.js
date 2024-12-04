//Conexão com banco de dados
const mysql = require('mysql');

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"", // senha a definir
    port: 3306, // ir atras 
    database:"playstatsbanco" // nome do banco que irei criar
});

module.exports = conexao;