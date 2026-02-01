import express from 'express';
import {
    getQuizQuestions,
    submitQuiz,
    getQuizResults,
    getQuizResult
} from '../controllers/quizController.js';
import { protect, authorize } from '../middleware/auth.js';
import { generateAIRecommendations, getFallbackRecommendations } from '../services/aiRecommendationService.js';

const router = express.Router();

// Public test endpoint
router.get('/test', (req, res) => {
    res.json({
        success: true,
        message: 'Quiz API is working!',
        geminiConfigured: !!process.env.GEMINI_API_KEY
    });
});

// AI Analysis endpoint (public for now, can be protected later)
router.post('/analyze', async (req, res) => {
    try {
        const { answers, studentType } = req.body;

        // Validate input
        if (!answers || !studentType) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields: answers and studentType'
            });
        }

        if (!['after-10th', 'after-12th'].includes(studentType)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid studentType. Must be "after-10th" or "after-12th"'
            });
        }

        console.log(`🤖 Analyzing quiz for ${studentType} student...`);

        // Generate AI recommendations
        let recommendations;
        try {
            recommendations = await generateAIRecommendations(answers, studentType);
            console.log('✅ AI recommendations generated successfully');
        } catch (aiError) {
            console.error('⚠️ AI service failed, using fallback:', aiError.message);
            recommendations = getFallbackRecommendations(answers, studentType);
            recommendations.usedFallback = true;
        }

        // Return recommendations
        res.json({
            success: true,
            data: recommendations
        });

    } catch (error) {
        console.error('❌ Quiz analysis error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to analyze quiz responses',
            message: error.message
        });
    }
});

// Protected routes for authenticated students
router.use(protect);
router.use(authorize('student'));

router.get('/questions', getQuizQuestions);
router.post('/submit', submitQuiz);
router.get('/results', getQuizResults);
router.get('/results/:id', getQuizResult);

export default router;

