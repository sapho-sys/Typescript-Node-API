// import { Router } from 'express';
import express, { Router } from 'express';
import ProductController from '../service/controller';

const router = Router();
const shoeController = new ProductController();

router.get('/proudcts', shoeController.get);

export default router;