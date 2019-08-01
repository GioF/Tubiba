import PromiseRouter from "express-promise-router";
import {alunoRepo} from "../repository/aluno-repository";
import {notaRepo} from "../repository/nota-repository";
import {materiaRepo} from "../repository/materia-repository";
import {Aluno} from "../entity/Aluno";
import {Nota} from "../entity/Nota";


    export function createAluno (req, res, next){
        let aluno = new Aluno();
        aluno.nome = req.body.nome;
        aluno.sobrenome = req.body.sobrenome;
        aluno.Cpf = req.body.Cpf;
        aluno.Sala = req.body.Sala;
        aluno.Unidade = req.body.Unidade;
        aluno.Matricula = req.body.Matricula;
        aluno.Ano = req.body.Ano;

        alunoRepo.save(aluno)
            .then(response=>res.send(response))
        .catch(console.log);
    }

    export async function insertNota(req, res, next){
        
        let nota = new Nota();
        nota = Object.assign(nota, req.body.Nota);

        let materiaPromise = materiaRepo.getById([req.params.materiaId])
        .then(materia => nota.materia = materia[0])
        .catch(console.log);

        let alunoPromise = alunoRepo.getById([req.params.alunoId])
        .then(aluno => nota.aluno = aluno[0])
        .catch(console.log);

        Promise.all([materiaPromise, alunoPromise])
        .then(() => notaRepo.save(nota))
        .then(response => res.send(response))
        .catch(console.log);
    }

    export function getAlunos (req, res, next){
        
        alunoRepo.getAll()
            .then(resultado => res.send(resultado));
    }

    export function getAlunoByID (req, res, next){
        
        alunoRepo.getById(req.params.alunoId)
        .then(resultado => res.send(resultado));
    }

    export function deleteAluno (req, res, next){
        
        alunoRepo.delete(req.params.alunoId)
        .then(() => res.send("Sucesso"));
    }

    export function getAlunoWithNotas(req, res, next){
        
        if(typeof req.params.MateriaId === "undefined"){

            alunoRepo.getWithNotas(req.params.alunoId)
            .then(resultado => res.send(resultado));
        }else{

            alunoRepo.getWithNotasFromMateria(req.params.alunoId, req.params.MateriaId);
        }

    }