let pg = require('pg');

export default new pg.Client({
    max: 20,
    connectionString: "postgres://nkunzi:sap123@localhost:5432/my_products",
    idleTimeoutMillis: 30000
});