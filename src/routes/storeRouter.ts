import  { Router } from 'express';
import storesController from '../service/controller';

const router = Router();
const storeController = new storesController();

router.get('/', storeController.get);

export default router;