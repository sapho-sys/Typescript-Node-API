let pg = require('pg');
// this my connection string to Postgres Database
export default new pg.Client({
    max: 20,
    connectionString: "postgres://nkunzi:sap123@localhost:5432/my_products",
    idleTimeoutMillis: 30000
});
// import { Pool } from 'pg';

// export default new Pool ({
//     max: 20,
//     connectionString: "postgres://nkunzi:sap123@localhost:5432/my_products",
//     idleTimeoutMillis: 30000
// });