import express, { Router } from 'express';
import controller from '../service/controller';

const router = Router();
const shoeController = new controller();

router.get('/', shoeController.get);

export default router;