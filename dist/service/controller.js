"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconfig_1 = __importDefault(require("../dbconfig/dbconfig"));
class storesController {
    async Fetch(res) {
        try {
            let client = await dbconfig_1.default.connect();
            const sql = "SELECT * FROM shoes;";
            const { rows } = await client.query(sql);
            const todos = rows;
            console.log("Here", todos);
            client.release();
            res.send(`<p>${todos}</p>`);
        }
        catch (error) {
            res.status(400).send(error);
        }
    }
}
exports.default = storesController;
//# sourceMappingURL=controller.js.map