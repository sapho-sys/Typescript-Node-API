import express from 'express';
import bodyParser from 'body-parser';
import storeRouter from './routes/storeRouter';
import dbconfig from "./dbconfig/dbconfig";
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
    }

    private dbConnect() {
        dbconfig.connect(()=> {
          try {
            console.log('Connected');
          } catch (error) {
            console.log('Sorry we cannot connect to Database:', error) 
          }
           
          }); 
    }

    private routerConfig() {
        this.app.use('/products', storeRouter);
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




