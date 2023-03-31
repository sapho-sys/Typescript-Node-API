"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../service/controller");
const controller_2 = require("../service/controller");
const controller_3 = require("../service/controller");
const controller_4 = require("../service/controller");
const controller_5 = require("../service/controller");
// import express from "express";
class storeAPI {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, controller_1.findAll)();
                res.json({
                    status: "success",
                    data
                });
            }
            catch (error) {
                res.json({
                    status: "error",
                    error: error.stack
                });
            }
        });
    }
    getColor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let shoeColor = req.params;
                console.log("COLOR =>", shoeColor);
                const data = yield (0, controller_3.findColor)(shoeColor.color)
                    .then(res => res.rows);
                res.json({
                    status: "success",
                    data
                });
            }
            catch (error) {
                res.json({
                    status: "error",
                    error: error.stack
                });
            }
        });
    }
    getBrand(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let shoeBrand = req.params;
                console.log("BRAND =>", shoeBrand);
                const data = yield (0, controller_2.findBrand)(shoeBrand.brand)
                    .then(res => res.rows);
                res.json({
                    status: "success",
                    data
                });
            }
            catch (error) {
                res.json({
                    status: "error",
                    error: error.stack
                });
            }
        });
    }
    getSize(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let shoeSize = req.params;
                console.log("SIZE =>", shoeSize);
                const data = yield (0, controller_4.findSize)(shoeSize.size)
                    .then(res => res.rows);
                res.json({
                    status: "success",
                    data
                });
            }
            catch (error) {
                res.json({
                    status: "error",
                    error: error.stack
                });
            }
        });
    }
    addShoe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { brand, color, size, price } = req.body;
                console.log("INSERT =>", brand, color, size, price);
                const data = yield (0, controller_5.insertBrand)(brand, color, size, price);
                res.json({
                    status: "success"
                });
            }
            catch (error) {
                res.json({
                    status: "error",
                    error: error.stack
                });
            }
        });
    }
}
exports.default = storeAPI;
//# sourceMappingURL=wep-api.js.map