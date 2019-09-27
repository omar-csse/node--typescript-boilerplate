"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// import process from '../types/env'
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const db_1 = __importDefault(require("../db/db"));
const app = express_1.default();
const port = Number(process.env.PORT) || 4000;
const localhost = 'http://localhost';
app.set('json spaces', 4);
app.use(compression_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
const main = () => {
    app.listen(port);
    db_1.default.connect();
    return console.info(`🚀  Server listening on ${localhost}:${port}`);
};
main();
