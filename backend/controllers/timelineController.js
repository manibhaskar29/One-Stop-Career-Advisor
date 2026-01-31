import Timeline from '../models/Timeline.js';
import Profile from '../models/Profile.js';

/**
 * @desc    Get personalized timeline
 * @route   GET /api/timeline
 * @access  Private/Student
 */
export const getTimeline = async (req, res, next) => {
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

        const { type } = req.query;

        // Build query based on user's class and stream
        const query = {
            $or: [
                { targetClass: profile.class },
                { targetClass: 'both' }
            ],
            isActive: true
        };

        // Filter by stream for class 12 students
        if (profile.class === '12' && profile.academicPerformance?.stream) {
            query.$and = [
                {
                    $or: [
                        { targetStream: profile.academicPerformance.stream },
                        { targetStream: 'All' }
                    ]
                }
            ];
        }

        if (type) {
            query.type = type;
        }

        const timeline = await Timeline.find(query)
            .populate('relatedCourses', 'name shortName')
            .sort({ startDate: 1 });

        res.status(200).json({
            success: true,
            data: {
                timeline,
                count: timeline.length
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get upcoming events
 * @route   GET /api/timeline/upcoming
 * @access  Private/Student
 */
export const getUpcomingEvents = async (req, res, next) => {
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

        const now = new Date();

        const query = {
            $or: [
                { targetClass: profile.class },
                { targetClass: 'both' }
            ],
            endDate: { $gte: now },
            isActive: true
        };

        const upcomingEvents = await Timeline.find(query)
            .populate('relatedCourses', 'name shortName')
            .sort({ startDate: 1 })
            .limit(10);

        res.status(200).json({
            success: true,
            data: {
                events: upcomingEvents,
                count: upcomingEvents.length
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Create timeline event
 * @route   POST /api/timeline
 * @access  Private/Admin
 */
export const createTimelineEvent = async (req, res, next) => {
    try {
        const timelineEvent = await Timeline.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json({
            success: true,
            data: { timelineEvent }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Update timeline event
 * @route   PUT /api/timeline/:id
 * @access  Private/Admin
 */
export const updateTimelineEvent = async (req, res, next) => {
    try {
        const timelineEvent = await Timeline.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!timelineEvent) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Timeline event not found',
                    code: 'EVENT_NOT_FOUND'
                }
            });
        }

        res.status(200).json({
            success: true,
            data: { timelineEvent }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Delete timeline event
 * @route   DELETE /api/timeline/:id
 * @access  Private/Admin
 */
export const deleteTimelineEvent = async (req, res, next) => {
    try {
        const timelineEvent = await Timeline.findByIdAndDelete(req.params.id);

        if (!timelineEvent) {
            return res.status(404).json({
                success: false,
                error: {
                    message: 'Timeline event not found',
                    code: 'EVENT_NOT_FOUND'
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
