import pool from '../dbconfig/dbconfig';

class ProductController {

    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM shoes";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default ProductController;