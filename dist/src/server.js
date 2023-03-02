"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const storeRouter_1 = __importDefault(require("./routes/storeRouter"));
const dbconfig_1 = __importDefault(require("./dbconfig/dbconfig"));
const cors_1 = __importDefault(require("cors"));
// import { findBrand } from './service/controller';
class Server {
    constructor() {
        this.start = (port) => {
            return new Promise((resolve, reject) => {
                this.app.listen(port, () => {
                    resolve(port);
                }).on('error', (err) => reject(err));
            });
        };
        this.app = (0, express_1.default)();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }
    config() {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json({ limit: '1mb' })); // 100kb default
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        dbconfig_1.default.connect(() => {
            try {
                console.log('Connected to Postgres Database...');
            }
            catch (error) {
                console.log('Sorry we cannot connect to Database:', error);
            }
        });
    }
    routerConfig() {
        this.app.use('/', storeRouter_1.default);
        this.app.use('/:brand', storeRouter_1.default);
        this.app.use('/:color', storeRouter_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map