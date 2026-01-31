import Course from '../models/Course.js';

/**
 * @desc    Get all courses
 * @route   GET /api/courses
 * @access  Public
 */
export const getCourses = async (req, res, next) => {
    try {
        const { stream, class: targetClass, search } = req.query;

        // Build query
        const query = { isActive: true };

        if (stream) query.stream = stream;
        if (targetClass) query['eligibility.class'] = targetClass;
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        const courses = await Course.find(query)
            .populate('relatedCareers', 'title')
            .sort({ popularity: -1 });

        res.status(200).json({
            success: true,
            data: {
                courses,
                count: courses.length
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get single course
 * @route   GET /api/courses/:id
 * @access  Public
 */
export const getCourse = async (req, res, next) => {
    try {
        const course = await Course.findById(req.params.id)
            .populate('relatedCareers');

        if (!course) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Course not found',
                    code: 'COURSE_NOT_FOUND'
                }
            });
        }

        res.status(200).json({
            success: true,
            data: { course }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Create course
 * @route   POST /api/courses
 * @access  Private/Admin
 */
export const createCourse = async (req, res, next) => {
    try {
        const course = await Course.create(req.body);

        res.status(201).json({
            success: true,
            data: { course }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Update course
 * @route   PUT /api/courses/:id
 * @access  Private/Admin
 */
export const updateCourse = async (req, res, next) => {
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!course) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Course not found',
                    code: 'COURSE_NOT_FOUND'
                }
            });
        }

        res.status(200).json({
            success: true,
            data: { course }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Delete course
 * @route   DELETE /api/courses/:id
 * @access  Private/Admin
 */
export const deleteCourse = async (req, res, next) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Course not found',
                    code: 'COURSE_NOT_FOUND'
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
