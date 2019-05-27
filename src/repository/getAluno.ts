import {getManager} from "typeorm";
import {Aluno} from "../entity/Aluno";

export class getAlunoBy{

    id(_id: number[]){
        return getManager().getRepository(Aluno).findByIds(_id);
    }

    name(_nome: string){
        return getManager().getRepository(Aluno).findOne({nome: _nome});
    }

    matricula(_matricula: number){
        return getManager().getRepository(Aluno).findOne({Matricula: _matricula});
    }

    cpf(_cpf: string){
        return getManager().getRepository(Aluno).findOne({Cpf: _cpf})
    }

    nota(_id: number){

        const queryOptions = {
            relations: ["aluno"],
            where:[{
                id: _id
            }]
        }

        return getManager().getRepository(Aluno).findOne(queryOptions);
    }
}