import express from 'express';
import {
    getQuizQuestions,
    submitQuiz,
    getQuizResults,
    getQuizResult
} from '../controllers/quizController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected and student-only
router.use(protect);
router.use(authorize('student'));

router.get('/questions', getQuizQuestions);
router.post('/submit', submitQuiz);
router.get('/results', getQuizResults);
router.get('/results/:id', getQuizResult);

export default router;
