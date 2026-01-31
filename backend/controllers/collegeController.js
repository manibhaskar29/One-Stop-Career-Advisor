import College from '../models/College.js';
import Profile from '../models/Profile.js';

/**
 * @desc    Get all colleges
 * @route   GET /api/colleges
 * @access  Public
 */
export const getColleges = async (req, res, next) => {
    try {
        const { district, state, course, search } = req.query;

        const query = { isActive: true };

        if (district) query['location.district'] = district;
        if (state) query['location.state'] = state;
        if (course) query.coursesOffered = course;
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { 'location.city': { $regex: search, $options: 'i' } }
            ];
        }

        const colleges = await College.find(query)
            .populate('coursesOffered', 'name shortName stream');

        res.status(200).json({
            success: true,
            data: {
                colleges,
                count: colleges.length
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get single college
 * @route   GET /api/colleges/:id
 * @access  Public
 */
export const getCollege = async (req, res, next) => {
    try {
        const college = await College.findById(req.params.id)
            .populate('coursesOffered');

        if (!college) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'College not found',
                    code: 'COLLEGE_NOT_FOUND'
                }
            });
        }

        res.status(200).json({
            success: true,
            data: { college }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get colleges near user
 * @route   GET /api/colleges/nearby
 * @access  Private/Student
 */
export const getNearbyColleges = async (req, res, next) => {
    try {
        const profile = await Profile.findOne({ userId: req.user.id });

        if (!profile) {
            return res.status(400).json({
                success: false,
                error: {
                    message: 'Profile not found',
                    code: 'PROFILE_NOT_FOUND'
                }
            });
        }

        const { district, state } = profile.location || {};

        // First try same district, then same state
        let colleges = await College.find({
            'location.district': district,
            isActive: true
        }).populate('coursesOffered', 'name shortName stream');

        if (colleges.length === 0 && state) {
            colleges = await College.find({
                'location.state': state,
                isActive: true
            }).populate('coursesOffered', 'name shortName stream');
        }

        res.status(200).json({
            success: true,
            data: {
                colleges,
                count: colleges.length,
                searchCriteria: district ? 'district' : 'state'
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Create college
 * @route   POST /api/colleges
 * @access  Private/Admin
 */
export const createCollege = async (req, res, next) => {
    try {
        const college = await College.create(req.body);

        res.status(201).json({
            success: true,
            data: { college }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Update college
 * @route   PUT /api/colleges/:id
 * @access  Private/Admin
 */
export const updateCollege = async (req, res, next) => {
    try {
        const college = await College.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!college) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'College not found',
                    code: 'COLLEGE_NOT_FOUND'
                }
            });
        }

        res.status(200).json({
            success: true,
            data: { college }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Delete college
 * @route   DELETE /api/colleges/:id
 * @access  Private/Admin
 */
export const deleteCollege = async (req, res, next) => {
    try {
        const college = await College.findByIdAndDelete(req.params.id);

        if (!college) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'College not found',
                    code: 'COLLEGE_NOT_FOUND'
                }
            });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        next(error);
    }
};
