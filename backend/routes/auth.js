import express from 'express';
import {
    register,
    login,
    getMe,
    registerAdmin
} from '../controllers/authController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', protect, getMe);

// Admin routes
router.post('/admin/register', protect, authorize('admin'), registerAdmin);

export default router;
