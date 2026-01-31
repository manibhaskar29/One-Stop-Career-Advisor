# One Stop Career Guide - Backend API

A comprehensive MERN-based career guidance platform backend providing personalized stream, course, career, and college recommendations based on aptitude assessment.

## Features

- **JWT Authentication** - Secure user authentication with role-based access control (Student, Admin)
- **Aptitude Assessment** - 30-question quiz with weighted scoring algorithm
- **Recommendation Engine** - Multi-stage matching algorithm for streams, courses, careers, and colleges
- **College Directory** - Location-based filtering of government colleges
- **Timeline Tracking** - Important dates for admissions, scholarships, and exams
- **Admin Dashboard** - Analytics and CRUD operations for all entities

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (see `.env.example`)

3. Start MongoDB:
```bash
# Make sure MongoDB is running locally or update MONGO_URI in .env
```

4. Seed the database:
```bash
npm run seed
```

5. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## Environment Variables

```
MONGO_URI=mongodb://localhost:27017/career-guide
JWT_SECRET=your-secret-key
JWT_EXPIRE=24h
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register student
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/admin/register` - Register admin (admin only)

### Profile
- `POST /api/profile` - Create profile
- `GET /api/profile` - Get profile
- `PUT /api/profile` - Update profile

### Quiz
- `GET /api/quiz/questions` - Get quiz questions
- `POST /api/quiz/submit` - Submit quiz
- `GET /api/quiz/results` - Get quiz history
- `GET /api/quiz/results/:id` - Get specific result

### Recommendations
- `GET /api/recommendations` - Get all recommendations
- `GET /api/recommendations/streams` - Get stream recommendations
- `GET /api/recommendations/courses` - Get course recommendations
- `GET /api/recommendations/careers` - Get career recommendations
- `GET /api/recommendations/colleges` - Get college recommendations

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create course (admin)
- `PUT /api/courses/:id` - Update course (admin)
- `DELETE /api/courses/:id` - Delete course (admin)

### Careers
- `GET /api/careers` - Get all careers
- `GET /api/careers/:id` - Get career details
- `GET /api/careers/:id/courses` - Get related courses
- `POST /api/careers` - Create career (admin)
- `PUT /api/careers/:id` - Update career (admin)
- `DELETE /api/careers/:id` - Delete career (admin)

### Colleges
- `GET /api/colleges` - Get all colleges
- `GET /api/colleges/:id` - Get college details
- `GET /api/colleges/nearby` - Get nearby colleges (student)
- `POST /api/colleges` - Create college (admin)
- `PUT /api/colleges/:id` - Update college (admin)
- `DELETE /api/colleges/:id` - Delete college (admin)

### Timeline
- `GET /api/timeline` - Get personalized timeline (student)
- `GET /api/timeline/upcoming` - Get upcoming events (student)
- `POST /api/timeline` - Create event (admin)
- `PUT /api/timeline/:id` - Update event (admin)
- `DELETE /api/timeline/:id` - Delete event (admin)

### Admin
- `GET /api/admin/analytics` - Get platform analytics
- `GET /api/admin/analytics/quiz` - Get quiz statistics
- `GET /api/admin/analytics/popular-careers` - Get popular careers
- `GET /api/admin/analytics/user-distribution` - Get user distribution

## Database Models

- **User** - Authentication and role management
- **Profile** - Student academic and personal information
- **QuizQuestion** - Aptitude assessment questions with weighted options
- **QuizResult** - Student quiz attempts and scores
- **Course** - Degree programs and courses
- **Career** - Career paths with industry and skill mappings
- **College** - Government colleges with location and facilities
- **Timeline** - Important dates and events
- **Notification** - User notifications

## Default Credentials

After running `npm run seed`, use these credentials to login as admin:
- **Email**: admin@career-guide.com
- **Password**: Admin@123

## Deployment

### Render (Backend)
1. Create new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add environment variables
6. Deploy

### Database
Use MongoDB Atlas for production database and update `MONGO_URI` accordingly.

## License

ISC
