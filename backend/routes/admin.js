import express from 'express';
import {
    getAnalytics,
    getQuizAnalytics,
    getPopularCareers,
    getUserDistribution
} from '../controllers/adminController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All routes are admin-only
router.use(protect);
router.use(authorize('admin'));

router.get('/analytics', getAnalytics);
router.get('/analytics/quiz', getQuizAnalytics);
router.get('/analytics/popular-careers', getPopularCareers);
router.get('/analytics/user-distribution', getUserDistribution);

export default router;
