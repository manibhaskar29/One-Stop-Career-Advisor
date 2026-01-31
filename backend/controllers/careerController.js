import Career from '../models/Career.js';

/**
 * @desc    Get all careers
 * @route   GET /api/careers
 * @access  Public
 */
export const getCareers = async (req, res, next) => {
    try {
        const { industry, search } = req.query;

        const query = {};

        if (industry) query.industries = industry;
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        const careers = await Career.find(query)
            .populate('relatedCourses', 'name shortName')
            .sort({ popularity: -1 });

        res.status(200).json({
            success: true,
            data: {
                careers,
                count: careers.length
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get single career
 * @route   GET /api/careers/:id
 * @access  Public
 */
export const getCareer = async (req, res, next) => {
    try {
        const career = await Career.findById(req.params.id)
            .populate('relatedCourses');

        if (!career) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Career not found',
                    code: 'CAREER_NOT_FOUND'
                }
            });
        }

        res.status(200).json({
            success: true,
            data: { career }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get courses related to a career
 * @route   GET /api/careers/:id/courses
 * @access  Public
 */
export const getCareerCourses = async (req, res, next) => {
    try {
        const career = await Career.findById(req.params.id)
            .populate('relatedCourses');

        if (!career) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Career not found',
                    code: 'CAREER_NOT_FOUND'
                }
            });
        }

        res.status(200).json({
            success: true,
            data: {
                courses: career.relatedCourses
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Create career
 * @route   POST /api/careers
 * @access  Private/Admin
 */
export const createCareer = async (req, res, next) => {
    try {
        const career = await Career.create(req.body);

        res.status(201).json({
            success: true,
            data: { career }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Update career
 * @route   PUT /api/careers/:id
 * @access  Private/Admin
 */
export const updateCareer = async (req, res, next) => {
    try {
        const career = await Career.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!career) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Career not found',
                    code: 'CAREER_NOT_FOUND'
                }
            });
        }

        res.status(200).json({
            success: true,
            data: { career }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Delete career
 * @route   DELETE /api/careers/:id
 * @access  Private/Admin
 */
export const deleteCareer = async (req, res, next) => {
    try {
        const career = await Career.findByIdAndDelete(req.params.id);

        if (!career) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Career not found',
                    code: 'CAREER_NOT_FOUND'
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
