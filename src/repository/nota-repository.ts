import {getManager} from "typeorm";
import {Nota} from "../entity/Nota";

export class notaRepo{

    static save(entidade: Nota){
        return getManager().getRepository(Nota).save(entidade);
    }

}