import express from 'express';
import {
    getRecommendations,
    getStreamRecommendations,
    getCourseRecommendations,
    getCareerRecommendations,
    getCollegeRecommendations
} from '../controllers/recommendationController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected and student-only
router.use(protect);
router.use(authorize('student'));

router.get('/', getRecommendations);
router.get('/streams', getStreamRecommendations);
router.get('/courses', getCourseRecommendations);
router.get('/careers', getCareerRecommendations);
router.get('/colleges', getCollegeRecommendations);

export default router;
