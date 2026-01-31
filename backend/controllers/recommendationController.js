import recommendationService from '../services/recommendationService.js';

/**
 * @desc    Get personalized recommendations
 * @route   GET /api/recommendations
 * @access  Private/Student
 */
export const getRecommendations = async (req, res, next) => {
    try {
        const recommendations = await recommendationService.getRecommendations(req.user.id);

        res.status(200).json({
            success: true,
            data: recommendations
        });
    } catch (error) {
        if (error.message.includes('Profile not found') || error.message.includes('No quiz results')) {
            return res.status(400).json({
                success: false,
                error: {
                    message: error.message,
                    code: 'PREREQUISITES_NOT_MET'
                }
            });
        }
        next(error);
    }
};

/**
 * @desc    Get stream recommendations
 * @route   GET /api/recommendations/streams
 * @access  Private/Student
 */
export const getStreamRecommendations = async (req, res, next) => {
    try {
        const recommendations = await recommendationService.getRecommendations(req.user.id);

        res.status(200).json({
            success: true,
            data: {
                streams: recommendations.streams,
                aptitudeProfile: recommendations.aptitudeProfile
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get course recommendations
 * @route   GET /api/recommendations/courses
 * @access  Private/Student
 */
export const getCourseRecommendations = async (req, res, next) => {
    try {
        const recommendations = await recommendationService.getRecommendations(req.user.id);

        res.status(200).json({
            success: true,
            data: {
                courses: recommendations.courses
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get career recommendations
 * @route   GET /api/recommendations/careers
 * @access  Private/Student
 */
export const getCareerRecommendations = async (req, res, next) => {
    try {
        const recommendations = await recommendationService.getRecommendations(req.user.id);

        res.status(200).json({
            success: true,
            data: {
                careers: recommendations.careers
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get college recommendations
 * @route   GET /api/recommendations/colleges
 * @access  Private/Student
 */
export const getCollegeRecommendations = async (req, res, next) => {
    try {
        const recommendations = await recommendationService.getRecommendations(req.user.id);

        res.status(200).json({
            success: true,
            data: {
                colleges: recommendations.colleges
            }
        });
    } catch (error) {
        next(error);
    }
};
