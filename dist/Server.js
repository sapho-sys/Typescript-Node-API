"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbconfig_1 = __importDefault(require("./dbconfig/dbconfig"));
let pg = require('pg');
let client = new pg.Client(dbconfig_1.default);
client.connect();
const app = (0, express_1.default)();
const port = process.env.PORT || 4003;
const startServer = async () => {
    try {
        const data = await client.query('SELECT * FROM shoes;');
        console.log('Here is the:', data);
    }
    catch (error) {
        throw new Error('Unable to connect to postgres database...');
    }
    app.listen(port, () => console.log(`Server started at: http://localhost:${port}`));
};
startServer();
//# sourceMappingURL=Server.js.map