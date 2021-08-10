import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SeachController from '../controllers/searchController';




const router = Router();

// rota home
router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SeachController.search);

export default router;