import Profile from '../models/Profile.js';

/**
 * @desc    Create user profile
 * @route   POST /api/profile
 * @access  Private/Student
 */
export const createProfile = async (req, res, next) => {
    try {
        // Check if profile already exists
        const existingProfile = await Profile.findOne({ userId: req.user.id });

        if (existingProfile) {
            return res.status(400).json({
                success: false,
                error: {
                    message: 'Profile already exists. Use update endpoint to modify.',
                    code: 'PROFILE_EXISTS'
                }
            });
        }

        // Create profile
        const profile = await Profile.create({
            userId: req.user.id,
            ...req.body
        });

        res.status(201).json({
            success: true,
            data: { profile }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get user profile
 * @route   GET /api/profile
 * @access  Private/Student
 */
export const getProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findOne({ userId: req.user.id });

        if (!profile) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Profile not found',
                    code: 'PROFILE_NOT_FOUND'
                }
            });
        }

        res.status(200).json({
            success: true,
            data: { profile }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Update user profile
 * @route   PUT /api/profile
 * @access  Private/Student
 */
export const updateProfile = async (req, res, next) => {
    try {
        let profile = await Profile.findOne({ userId: req.user.id });

        if (!profile) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Profile not found',
                    code: 'PROFILE_NOT_FOUND'
                }
            });
        }

        // Update profile
        profile = await Profile.findOneAndUpdate(
            { userId: req.user.id },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            success: true,
            data: { profile }
        });
    } catch (error) {
        next(error);
    }
};
