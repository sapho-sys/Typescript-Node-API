import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/storeRouter';
import dbconfig from "./dbconfig/dbconfig";
import cors from "cors"
class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
        this.app.use(cors())
    }

    private dbConnect() {
        dbconfig.connect(()=> {
          try {
            console.log('Connected to Postgres Database...');

          } catch (error) {
            console.log('Sorry we cannot connect to Database:', error) 
          }
           
          }); 
    }

    private routerConfig() {
        this.app.use('/', router);
        this.app.use('/brand/:brand',router);
        this.app.use('/color/:color',router);
        this.app.use('/size/:size', router);
        this.app.use('/shoes', router);
       
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;




