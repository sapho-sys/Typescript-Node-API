"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./Server"));
const port = parseInt(process.env.PORT || '4000');
const starter = new Server_1.default().start(port)
    .then(port => console.log(`Running on port ${port}`))
    .catch(error => {
    console.log(error);
});
exports.default = starter;
//# sourceMappingURL=App.js.map