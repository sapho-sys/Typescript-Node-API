import express, { Router } from 'express';
import storeAPI from '../api/wep-api';
 

const router = Router();
const shoeController = new storeAPI();

router.get('/', shoeController.getAll);
router.get('/:brand', shoeController.getBrand);
router.get('/:color', shoeController.getColor);
router.get('/:size', shoeController.getSize)

export default router;