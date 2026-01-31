import express from 'express';
import {
    getColleges,
    getCollege,
    getNearbyColleges,
    createCollege,
    updateCollege,
    deleteCollege
} from '../controllers/collegeController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getColleges);
router.get('/nearby', protect, authorize('student'), getNearbyColleges);
router.get('/:id', getCollege);

// Admin-only routes
router.post('/', protect, authorize('admin'), createCollege);
router.put('/:id', protect, authorize('admin'), updateCollege);
router.delete('/:id', protect, authorize('admin'), deleteCollege);

export default router;
