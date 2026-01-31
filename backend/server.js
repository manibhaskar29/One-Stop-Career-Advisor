import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database.js';
import errorHandler from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import quizRoutes from './routes/quiz.js';
import recommendationRoutes from './routes/recommendation.js';
import courseRoutes from './routes/courses.js';
import careerRoutes from './routes/careers.js';
import collegeRoutes from './routes/colleges.js';
import timelineRoutes from './routes/timeline.js';
import adminRoutes from './routes/admin.js';

// Create Express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/colleges', collegeRoutes);
app.use('/api/timeline', timelineRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to One Stop Career Guide API',
        version: '1.0.0',
        endpoints: {
            auth: '/api/auth',
            profile: '/api/profile',
            quiz: '/api/quiz',
            recommendations: '/api/recommendations',
            courses: '/api/courses',
            careers: '/api/careers',
            colleges: '/api/colleges',
            timeline: '/api/timeline',
            admin: '/api/admin'
        }
    });
});

// Error handler (must be last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`\n✓ Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`✓ API Base URL: http://localhost:${PORT}/api`);
    console.log(`✓ Health Check: http://localhost:${PORT}/health\n`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`✗ Error: ${err.message}`);
    // Close server & exit process
    // server.close(() => process.exit(1));
});

export default app;
