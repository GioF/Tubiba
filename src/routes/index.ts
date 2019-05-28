import {Router} from "express";
import morgan = require("morgan");

const logger = Router();

logger.use('/', morgan('dev'));

export {logger};