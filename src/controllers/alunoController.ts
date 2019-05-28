import PromiseRouter from "express-promise-router";
import {alunoRepo} from "../repository/aluno-repository";
import {Aluno} from "../entity/Aluno";


    export function createAluno (req, res, next){
        let aluno = new Aluno();
        aluno.nome = req.body.nome;
        aluno.sobrenome = req.body.sobrenome;
        aluno.Cpf = req.body.Cpf;
        aluno.Sala = req.body.Sala;
        aluno.Unidade = req.body.Unidade;
        aluno.Matricula = req.body.Matricula;
        aluno.Ano = req.body.Ano;

        alunoRepo.save(aluno).then(response=>res.send(response)).catch(console.log);
    }

    export function getAlunos (req, res, next){
        alunoRepo.getAll().then(resultado => res.send(resultado));
    }

    export function getAlunoByID (req, res, next){
        alunoRepo.getById(req.params.alunoId).then(resultado => res.send(resultado));
    }

    export function deleteAluno (req, res, next){
        alunoRepo.delete(req.params.alunoId).then(()=>res.send("Sucesso"));
    }
