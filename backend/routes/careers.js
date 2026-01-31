import express from 'express';
import {
    getCareers,
    getCareer,
    getCareerCourses,
    createCareer,
    updateCareer,
    deleteCareer
} from '../controllers/careerController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getCareers);
router.get('/:id', getCareer);
router.get('/:id/courses', getCareerCourses);

// Admin-only routes
router.post('/', protect, authorize('admin'), createCareer);
router.put('/:id', protect, authorize('admin'), updateCareer);
router.delete('/:id', protect, authorize('admin'), deleteCareer);

export default router;
