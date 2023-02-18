import express from 'express';
// import bodyParser from 'body-parser';
// import router from "./routes/storeRouter";
import dbconfig from "./dbconfig/dbconfig";
let pg = require('pg');


let client = new pg.Client(dbconfig);
client.connect();



const app = express()
const port = process.env.PORT || 4002;


const startServer = async () =>{
    try {
      const data = await client.query('SELECT * FROM shoes;');
      console.log('Here', data);
      
    } catch (error) {
        throw new Error('Unable to connect to postgres database...'); 
    }
    app.listen(port, () => console.log(`Server started at: http://localhost:${port}`))
};

startServer();







