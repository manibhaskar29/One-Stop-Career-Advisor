import User from '../models/User.js';
import Profile from '../models/Profile.js';
import QuizResult from '../models/QuizResult.js';
import Career from '../models/Career.js';

/**
 * @desc    Get platform analytics
 * @route   GET /api/admin/analytics
 * @access  Private/Admin
 */
export const getAnalytics = async (req, res, next) => {
    try {
        // Total users
        const totalUsers = await User.countDocuments({ role: 'student' });

        // Total profiles
        const totalProfiles = await Profile.countDocuments();

        // Total quiz attempts
        const totalQuizAttempts = await QuizResult.countDocuments();

        // Users by class
        const usersByClass = await Profile.aggregate([
            {
                $group: {
                    _id: '$class',
                    count: { $sum: 1 }
                }
            }
        ]);

        // Users by stream (class 12)
        const usersByStream = await Profile.aggregate([
            {
                $match: { class: '12', 'academicPerformance.stream': { $exists: true } }
            },
            {
                $group: {
                    _id: '$academicPerformance.stream',
                    count: { $sum: 1 }
                }
            }
        ]);

        // Recent quiz attempts (last 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const recentQuizAttempts = await QuizResult.countDocuments({
            completedAt: { $gte: sevenDaysAgo }
        });

        res.status(200).json({
            success: true,
            data: {
                overview: {
                    totalUsers,
                    totalProfiles,
                    totalQuizAttempts,
                    recentQuizAttempts
                },
                userDistribution: {
                    byClass: usersByClass,
                    byStream: usersByStream
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get quiz statistics
 * @route   GET /api/admin/analytics/quiz
 * @access  Private/Admin
 */
export const getQuizAnalytics = async (req, res, next) => {
    try {
        // Average scores by stream
        const avgScores = await QuizResult.aggregate([
            {
                $group: {
                    _id: null,
                    avgScience: { $avg: '$scores.science' },
                    avgCommerce: { $avg: '$scores.commerce' },
                    avgArts: { $avg: '$scores.arts' },
                    avgVocational: { $avg: '$scores.vocational' }
                }
            }
        ]);

        // Primary stream distribution
        const streamDistribution = await QuizResult.aggregate([
            {
                $group: {
                    _id: '$aptitudeProfile.primaryStream',
                    count: { $sum: 1 }
                }
            }
        ]);

        // Quiz attempts over time (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const quizTrend = await QuizResult.aggregate([
            {
                $match: {
                    completedAt: { $gte: thirtyDaysAgo }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: { format: '%Y-%m-%d', date: '$completedAt' }
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);

        res.status(200).json({
            success: true,
            data: {
                averageScores: avgScores[0] || {},
                streamDistribution,
                quizTrend
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get popular careers
 * @route   GET /api/admin/analytics/popular-careers
 * @access  Private/Admin
 */
export const getPopularCareers = async (req, res, next) => {
    try {
        const popularCareers = await Career.find()
            .sort({ popularity: -1 })
            .limit(10)
            .select('title popularity industries');

        res.status(200).json({
            success: true,
            data: {
                popularCareers
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get user distribution
 * @route   GET /api/admin/analytics/user-distribution
 * @access  Private/Admin
 */
export const getUserDistribution = async (req, res, next) => {
    try {
        // Distribution by location (state)
        const locationDistribution = await Profile.aggregate([
            {
                $group: {
                    _id: '$location.state',
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 }
            },
            {
                $limit: 10
            }
        ]);

        // Distribution by interests
        const interestDistribution = await Profile.aggregate([
            {
                $unwind: '$interests'
            },
            {
                $group: {
                    _id: '$interests',
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 }
            },
            {
                $limit: 10
            }
        ]);

        res.status(200).json({
            success: true,
            data: {
                locationDistribution,
                interestDistribution
            }
        });
    } catch (error) {
        next(error);
    }
};
