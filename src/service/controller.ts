import pool from '../dbconfig/dbconfig';
import {Response} from 'express';

class storesController {

    public async get(res:Response) {
        try {
            const client = await pool.connect();
            const sql = "SELECT * FROM shoes;";
            const { rows } = await client.query(sql);
            const todos = rows;
            console.log("Here", todos)

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
   
}

export default storesController;