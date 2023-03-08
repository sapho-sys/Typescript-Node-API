import express, { Router } from 'express';
import storeAPI from '../api/wep-api';
 
const router = Router();
const shoeController = new storeAPI();

router.get('/', shoeController.getAll);
router.get('/brand/:brand', shoeController.getBrand);
router.get('/color/:color', shoeController.getColor);
router.get('/size/:size', shoeController.getSize);





export default router;