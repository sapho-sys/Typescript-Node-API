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
// import express from "express";
class storeAPI {
    get(req, res) {
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
    getBrand(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shoeBrand = req.params;
                const data = yield (0, controller_2.findBrand)(shoeBrand.brand)
                    .then(res => res);
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
}
exports.default = storeAPI;
//# sourceMappingURL=wep-api.js.map