"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let pg = require('pg');
exports.default = new pg.Client({
    max: 20,
    connectionString: "postgres://nkunzi:sap123@localhost:5432/my_products",
    idleTimeoutMillis: 30000
});
//# sourceMappingURL=dbconfig.js.map