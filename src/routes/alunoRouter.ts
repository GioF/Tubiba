import {Router, urlencoded, json} from "express";
import * as alunoController from "../controllers/alunoController";

const alunoRouter = Router();

alunoRouter.use(json());
alunoRouter.use(urlencoded({extended: true}));
alunoRouter.get("/", alunoController.getAlunos);
alunoRouter.get('/:alunoId', alunoController.getAlunoByID);
alunoRouter.post('/', alunoController.createAluno);
alunoRouter.delete('/:alunoId', alunoController.deleteAluno);

export {alunoRouter};