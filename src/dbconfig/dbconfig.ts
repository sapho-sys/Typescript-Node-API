import { Pool } from 'pg';

export default new Pool ({
    max: 20,
    connectionString: "postgres://nkunzi:sap123@localhost:5432/my_products",
    idleTimeoutMillis: 30000
});