import "reflect-metadata";
import {createConnection} from "typeorm";
import {Aluno} from "./entity/Aluno";
import {getAlunoBy} from "./repository/getAluno";
import {save} from "./repository/saveEntity";

createConnection().then(async connection =>{
    console.log("Servidor iniciado com sucesso...");
    console.log("Tentando inserir um novo aluno no banco de dados");
    let aluno= new Aluno();
    aluno.nome = "Birita";
    aluno.sobrenome = "Tubiba";
    aluno.Cpf = "666.666.666-24";
    aluno.Sala = "B";
    aluno.Unidade = "Mec";
    aluno.Matricula = 234;
    aluno.Ano = 3;

    await save.aluno(aluno);
    console.log("Salvo aluno com id " + aluno.id);
    console.log("this is a test");

}).catch(error => console.log(error));

