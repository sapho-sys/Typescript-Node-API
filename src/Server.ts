import  express  from "express";
// import createConnection  from 'typeorm';
// import pg from 'pg';
var pg = require('pg');
var conString = "postgres://nkunzi:sap123@localhost:5432/my_products";

var client = new pg.Client(conString);
client.connect();


const app = express()
const port = process.env.PORT || 4001;


const startServer = async () =>{
    try {
      const data = await client.query('select * from shoes;')
      console.log('Here', data);
      
    } catch (error) {
        throw new Error('Unable to connect to postgres database...')
        
    }
    app.listen(port, () => console.log(`Server started at: http://localhost:${port}`))
};

startServer();



