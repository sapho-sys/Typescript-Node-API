import  express  from 'express';
import storesController from '../service/controller';

const router = express.Router();
const storeController = new storesController();

router.get('/products', storeController.Fetch);

export default router;