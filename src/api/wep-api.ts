import { findAll } from "../service/controller";
import { findBrand } from "../service/controller";
import {findColor} from "../service/controller"
import {findSize} from "../service/controller"
// import express from "express";

class storeAPI {
    public async getAll(req, res){
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

    public async getColor(req, res){
        
        try {
            let shoeColor = req.params;
            console.log("COLOR =>", shoeColor);
            const data = await findColor(shoeColor.color)
            .then(res => res.rows)
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
            let shoeBrand = req.params;
            console.log("BRAND =>", shoeBrand);
            const data = await findBrand(shoeBrand.brand)
            .then(res => res.rows)
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

   

    public async getSize(req, res){
        try {
            let shoeSize = req.params;
            console.log("SIZE =>", shoeSize);
            const data = await findSize(shoeSize.size)
            .then(res => res.rows)
            res.json({
                status: "error",
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