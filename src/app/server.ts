import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import {alunoRouter} from "../routes/alunoRouter";
import {materiaRouter} from "../routes/materiaRouter";
import {logger} from "../routes/index";

const config = require('./config');

createConnection(config).then(async () =>{
    
    const app = express();
    app.set("port", process.env.port || 3000);
    app.listen(app.get("port"), ()=>{
        console.log((
            "Servidor iniciado.\n rodando em http://localhost:%d no modo %s "), app.get("port"), app.get("env"))
    })

    app.use('/', logger);
    app.use('/aluno', alunoRouter);
    app.use('/materia', materiaRouter);

}).catch(error => console.log(error));

