import PromiseRouter from "express-promise-router";
import {materiaRepo} from "../repository/materia-repository";
import {Materia} from "../entity/Materia";
import {alunoRepo} from "../repository/aluno-repository";

export function createMateria(req, res, next){
    let materia = new Materia();
    materia.nome = req.body.nome;
    materia.professor = req.body.professor;

    materiaRepo.save(materia).then(response=>res.send(response)).catch(console.log);
}

export function getMaterias(req, res, next){
    materiaRepo.getAll().then(resultado => res.send(resultado));
}

export function getMateriaById(req, res, next){
    materiaRepo.getById(req.params.materiaId).then(resultado => res.send(resultado));
}

export function deleteMateria(req, res, next){
    materiaRepo.delete(req.params.alunoId).then(() => res.send("Sucesso"));
}