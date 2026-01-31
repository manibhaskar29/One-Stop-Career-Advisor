import express from 'express';
import {
    getTimeline,
    getUpcomingEvents,
    createTimelineEvent,
    updateTimelineEvent,
    deleteTimelineEvent
} from '../controllers/timelineController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Student routes
router.get('/', protect, authorize('student'), getTimeline);
router.get('/upcoming', protect, authorize('student'), getUpcomingEvents);

// Admin-only routes
router.post('/', protect, authorize('admin'), createTimelineEvent);
router.put('/:id', protect, authorize('admin'), updateTimelineEvent);
router.delete('/:id', protect, authorize('admin'), deleteTimelineEvent);

export default router;
