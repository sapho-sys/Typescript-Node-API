"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./Server"));
const startServer = () => {
    const app = (0, Server_1.default)();
    const port = parseInt(process.env.PORT, 10) || 4000;
    app.listen(port, () => {
        console.log(`server running on port ${port}`);
    });
};
startServer();
//# sourceMappingURL=App.js.map