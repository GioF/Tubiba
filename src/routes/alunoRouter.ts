import {Router, urlencoded, json} from "express";
import * as alunoController from "../controllers/alunoController";

const alunoRouter = Router();

alunoRouter.use(json());
alunoRouter.use(urlencoded({extended: true}));
alunoRouter.get("/", alunoController.getAlunos);
alunoRouter.post('/', alunoController.createAluno);
alunoRouter.get('/:alunoId', alunoController.getAlunoByID);
alunoRouter.get('/:alunoId/Notas', alunoController.getAlunoWithNotas);
alunoRouter.post('/:alunoId/Notas/:materiaId', alunoController.insertNota);
alunoRouter.delete('/:alunoId', alunoController.deleteAluno);

export {alunoRouter};