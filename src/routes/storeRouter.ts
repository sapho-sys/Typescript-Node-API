import express, { Router } from 'express';
// import controller from '../service/controller';
import storeAPI from '../api/wep-api';

const router = Router();
const shoeController = new storeAPI();

router.get('/', shoeController.get);

export default router;