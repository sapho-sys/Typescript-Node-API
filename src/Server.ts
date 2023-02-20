import express from 'express';
// import bodyParser from 'body-parser';
// import router from "./routes/storeRouter";
// import storesController from './service/controller';
import dbconfig from "./dbconfig/dbconfig";
let pg = require('pg');


let client = new pg.Client(dbconfig);
client.connect();



const app = express()
const port = process.env.PORT || 4003;


const startServer = async () =>{
  // const controller = new storesController()
    try {

      // const data = controller.Fetch;
      const data = await client.query('SELECT * FROM shoes;');
      console.log('Here is the:', data.rows); 
    } catch (error) {
        throw new Error('Unable to connect to postgres database...'); 
    }
    app.listen(port, () => console.log(`Server started at: http://localhost:${port}`))
};

startServer();







