import express from 'express';
import {
    createProfile,
    getProfile,
    updateProfile
} from '../controllers/profileController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected and student-only
router.use(protect);
router.use(authorize('student'));

router.route('/')
    .get(getProfile)
    .post(createProfile)
    .put(updateProfile);

export default router;
