import pool from '../dbconfig/dbconfig';
import {Response} from 'express';

class storesController {

    public async Fetch( res: Response ) {
        try {
            let  client = await pool.connect();
            const sql = "SELECT * FROM shoes;";
            const  {rows}  = await client.query(sql);
            const todos = rows;
            console.log("Here is the", todos)
            //release memory load
            client.release();

            res.send(`<p>${todos}</p>`);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    
   
}

export default storesController;