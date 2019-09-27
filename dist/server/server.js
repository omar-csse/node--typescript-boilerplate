"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
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
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.connect();
    app.listen(port);
    return console.info(`🚀  Server listening on ${localhost}:${port}`);
});
main();
