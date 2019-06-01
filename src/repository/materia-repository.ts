import {getManager} from "typeorm";
import {Materia} from "../entity/Materia";

export class materiaRepo{

    static save(entidade: Materia){
        return getManager().getRepository(Materia).save(entidade);
    }

    static getAll(){
        return getManager().getRepository(Materia).find();
    }

    static getById(_id: number[]){
        return getManager().getRepository(Materia).findByIds([_id]);
    }

    static getFromNota(_id: number){

        const queryOptions = {
            relations: ["materia"],
            where:[{
                id: _id
            }]
        }

        return getManager().getRepository(Materia).findOne(queryOptions);
    }

    static delete(_id: number){
        return getManager().createQueryBuilder()
        .delete()
        .from(Materia)
        .where("id = :id", {id: _id})
        .execute();
    }
}