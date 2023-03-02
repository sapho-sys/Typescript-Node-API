import { findAll } from "../service/controller";
import { findBrand } from "../service/controller";
import {findColor} from "../service/controller"
// import express from "express";

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
            const shoeBrand = req.params;
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

    public async getColor(req, res){
        try {
            const shoeColor = req.params;
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

}

export default storeAPI