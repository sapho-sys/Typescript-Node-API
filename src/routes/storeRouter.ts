import express, { Router } from 'express';
import storeAPI from '../api/wep-api';
 

const router = Router();
const shoeController = new storeAPI();

router.get('/', shoeController.get);
router.get('/:brand', shoeController.getBrand);
router.get('/:color', shoeController.getColor)

export default router;