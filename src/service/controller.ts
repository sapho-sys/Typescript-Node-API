import pg from '../dbconfig/dbconfig';

class ProductController {

    public async get(req, res) {
        try {
            const client = await pg.connect();
            const sql = "SELECT * FROM shoes WHERE in_stock > 0";
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