import { findAll } from "../service/controller";

class storeAPI {
    public async get(req, res){
        try {
            const data = await findAll();
            res.json({
                status: "success",
                data
            })
        } catch (error) {
            res.json({
                status: "error",
                error: error.stack
            })
            
        }
    }

}

export default storeAPI