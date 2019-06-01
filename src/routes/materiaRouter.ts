import {Router, urlencoded, json} from "express";
import * as materiaController from "../controllers/materiaController";

const materiaRouter = Router();

materiaRouter.use(json());
materiaRouter.use(urlencoded({extended: true}));
materiaRouter.get("/", materiaController.getMaterias);
materiaRouter.get('/:materiaId', materiaController.getMateriaById);
materiaRouter.post('/', materiaController.createMateria);
materiaRouter.delete('/:alunoId', materiaController.deleteMateria);

export {materiaRouter};