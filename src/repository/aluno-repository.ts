import {getManager} from "typeorm";
import {Aluno} from "../entity/Aluno";
import {Materia} from "../entity/Materia";
import {Nota} from "../entity/Nota";

export class alunoRepo{

    static save(entidade: Aluno){
        
        return getManager()
        .getRepository(Aluno)
        .save(entidade);
    }

    static getAll(){
        
        return getManager()
        .getRepository(Aluno)
        .find();
    }

    static getById(_id: number[]){
        
        return getManager()
        .getRepository(Aluno)
        .findByIds(_id);
    }

    static getByName(_nome: string){
        
        return getManager()
        .getRepository(Aluno)
        .findOne({nome: _nome});
    }

    static getByMatricula(_matricula: number){
        
        return getManager()
        .getRepository(Aluno)
        .findOne({Matricula: _matricula});
    }

    static getByCPF(_cpf: string){

        return getManager()
        .getRepository(Aluno)
        .findOne({Cpf: _cpf})
    }

    static getFromNota(_id: number){

        const queryOptions = {
            relations: ["notas"],
            where:[{
                id: _id
            }]
        }

        return getManager()
        .getRepository(Aluno)
        .findOne(queryOptions);
    }

    static getWithNotas(_id: number){
        return getManager()
        .getRepository(Aluno)
        .findByIds([_id], {relations: ["notas"]});
    }

    static getWithNotasFromMateria(_id: number, _materia: number){
        
        return getManager()
        .getRepository(Aluno)
        .createQueryBuilder("aluno")
        .leftJoinAndSelect("aluno.notas", "nota")
        .where("aluno.id = :id", {id: _id})
        .andWhere("nota.materia = :materia", {materia: _materia})
        .getOne();
    }

    static delete(_id: number){
        return getManager().createQueryBuilder()
        .delete()
        .from(Aluno)
        .where("id = :id", {id: _id})
        .execute();
    }
}