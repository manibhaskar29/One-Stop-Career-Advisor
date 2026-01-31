import QuizQuestion from '../models/QuizQuestion.js';
import QuizResult from '../models/QuizResult.js';
import Profile from '../models/Profile.js';
import scoringService from '../services/scoringService.js';

/**
 * @desc    Get quiz questions for user's class
 * @route   GET /api/quiz/questions
 * @access  Private/Student
 */
export const getQuizQuestions = async (req, res, next) => {
    try {
        // Get user profile to determine class
        const profile = await Profile.findOne({ userId: req.user.id });

        if (!profile) {
            return res.status(400).json({
                success: false,
                error: {
                    message: 'Please complete your profile before taking the quiz',
                    code: 'PROFILE_REQUIRED'
                }
            });
        }

        // Fetch questions for user's class
        const questions = await QuizQuestion.find({
            $or: [
                { targetClass: profile.class },
                { targetClass: 'both' }
            ],
            isActive: true
        }).select('-options.weight'); // Don't send weights to frontend

        res.status(200).json({
            success: true,
            data: {
                questions,
                totalQuestions: questions.length
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Submit quiz and get results
 * @route   POST /api/quiz/submit
 * @access  Private/Student
 */
export const submitQuiz = async (req, res, next) => {
    try {
        const { responses } = req.body;

        if (!responses || responses.length === 0) {
            return res.status(400).json({
                success: false,
                error: {
                    message: 'No responses provided',
                    code: 'NO_RESPONSES'
                }
            });
        }

        // Calculate scores using scoring service
        const { scores, aptitudeProfile } = await scoringService.calculateScore(responses);

        // Save quiz result
        const quizResult = await QuizResult.create({
            userId: req.user.id,
            responses,
            scores,
            aptitudeProfile,
            completedAt: new Date()
        });

        res.status(201).json({
            success: true,
            data: {
                quizResult: {
                    id: quizResult._id,
                    scores: quizResult.scores,
                    aptitudeProfile: quizResult.aptitudeProfile,
                    completedAt: quizResult.completedAt
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get user's quiz history
 * @route   GET /api/quiz/results
 * @access  Private/Student
 */
export const getQuizResults = async (req, res, next) => {
    try {
        const results = await QuizResult.find({ userId: req.user.id })
            .sort({ completedAt: -1 })
            .select('-responses'); // Don't include detailed responses

        res.status(200).json({
            success: true,
            data: {
                results,
                count: results.length
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get specific quiz result
 * @route   GET /api/quiz/results/:id
 * @access  Private/Student
 */
export const getQuizResult = async (req, res, next) => {
    try {
        const result = await QuizResult.findOne({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!result) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Quiz result not found',
                    code: 'RESULT_NOT_FOUND'
                }
            });
        }

        res.status(200).json({
            success: true,
            data: { result }
        });
    } catch (error) {
        next(error);
    }
};
