import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Verify JWT token and attach user to request
export const protect = async (req, res, next) => {
    let token;

    // Check for token in Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    // Make sure token exists
    if (!token) {
        return res.status(401).json({
            success: false,
            error: {
                message: 'Not authorized to access this route',
                code: 'NO_TOKEN'
            }
        });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get user from token
        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) {
            return res.status(401).json({
                success: false,
                error: {
                    message: 'User not found',
                    code: 'USER_NOT_FOUND'
                }
            });
        }

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            error: {
                message: 'Not authorized to access this route',
                code: 'INVALID_TOKEN'
            }
        });
    }
};

// Role-based authorization middleware
export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                error: {
                    message: `User role '${req.user.role}' is not authorized to access this route`,
                    code: 'FORBIDDEN'
                }
            });
        }
        next();
    };
};
