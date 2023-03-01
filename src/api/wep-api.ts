import { findAll } from "../service/controller";
import { findBrand } from "../service/controller";

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

    public async getBrand(req, res){
        try {
            const shoeBrand: string = req.params.shoeBrand;
            const data = await findBrand(shoeBrand);
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