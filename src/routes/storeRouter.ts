import express, { Router } from 'express';
// import controller from '../service/controller';
import storeAPI from '../api/wep-api';
import { findBrand } from '../service/controller';

const router = Router();
const shoeController = new storeAPI();

router.get('/', shoeController.get);
router.get('/:brand', shoeController.getBrand);

export default router;