"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let pg = require('pg');
// // this my connection string to Postgres Database
// export default new pg.Client({
//     max: 20,
//     connectionString: "postgres://nkunzi:sap123@localhost:5432/my_products",
//     idleTimeoutMillis: 30000
// });
const pg_1 = require("pg");
exports.default = new pg_1.Pool({
    max: 20,
    connectionString: "postgres://nkunzi:sap123@localhost:5432/my_products",
    idleTimeoutMillis: 30000
});
//# sourceMappingURL=dbconfig.js.map