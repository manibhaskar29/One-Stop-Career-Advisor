import User from '../models/User.js';
import Profile from '../models/Profile.js';

/**
 * @desc    Register a new student
 * @route   POST /api/auth/register
 * @access  Public
 */
export const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: {
                    message: 'User already exists with this email',
                    code: 'USER_EXISTS'
                }
            });
        }

        // Create user
        const user = await User.create({
            email,
            password,
            role: 'student' // Default role
        });

        // Generate token
        const token = user.getSignedJwtToken();

        res.status(201).json({
            success: true,
            data: {
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    role: user.role
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Login user
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate email and password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: {
                    message: 'Please provide email and password',
                    code: 'MISSING_CREDENTIALS'
                }
            });
        }

        // Check for user (include password)
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({
                success: false,
                error: {
                    message: 'Invalid credentials',
                    code: 'INVALID_CREDENTIALS'
                }
            });
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                error: {
                    message: 'Invalid credentials',
                    code: 'INVALID_CREDENTIALS'
                }
            });
        }

        // Generate token
        const token = user.getSignedJwtToken();

        // Check if profile exists
        const profile = await Profile.findOne({ userId: user._id });

        res.status(200).json({
            success: true,
            data: {
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    role: user.role,
                    hasProfile: !!profile
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Get current logged in user
 * @route   GET /api/auth/me
 * @access  Private
 */
export const getMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);

        // Check if profile exists
        const profile = await Profile.findOne({ userId: req.user.id });

        res.status(200).json({
            success: true,
            data: {
                user: {
                    id: user._id,
                    email: user.email,
                    role: user.role,
                    hasProfile: !!profile,
                    createdAt: user.createdAt
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Register admin (protected - only existing admin can create)
 * @route   POST /api/auth/admin/register
 * @access  Private/Admin
 */
export const registerAdmin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: {
                    message: 'User already exists with this email',
                    code: 'USER_EXISTS'
                }
            });
        }

        // Create admin user
        const user = await User.create({
            email,
            password,
            role: 'admin'
        });

        // Generate token
        const token = user.getSignedJwtToken();

        res.status(201).json({
            success: true,
            data: {
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    role: user.role
                }
            }
        });
    } catch (error) {
        next(error);
    }
};
