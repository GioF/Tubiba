import {getManager} from "typeorm";
import {Aluno} from "../entity/Aluno";
import {Nota} from "../entity/Nota";
import {Materia} from "../entity/Materia";

export class save {
    
    static nota(entidade: Nota){
        return getManager().getRepository(Nota).save(entidade);
    }
    
    static aluno(entidade: Aluno){
        return getManager().getRepository(Aluno).save(entidade);
    }
    
    static materia(entidade: Materia){
        return getManager().getRepository(Materia).save(entidade);
    }
}