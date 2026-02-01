# One Stop Career Guide - Frontend

A modern React-based frontend for the One Stop Career Guide platform, providing personalized career and education guidance for students.

## Features

### Student Features
- **Landing Page** - Attractive hero section with features showcase
- **Authentication** - Login and registration with JWT
- **Profile Management** - Collect student information (class, interests, subjects, location)
- **Aptitude Quiz** - Interactive 30-question assessment with progress tracking
- **Recommendations** - Personalized stream, course, career, and college suggestions
- **College Directory** - Searchable database of 100+ government colleges with filters
- **Timeline Tracker** - Important dates for admissions, exams, and scholarships

### Admin Features
- **Dashboard** - Analytics and platform statistics
- **Content Management** - CRUD interfaces for courses, careers, colleges (to be implemented)

## Tech Stack

- **Framework**: React 18+ with Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with custom theme
- **HTTP Client**: Axios with interceptors
- **State Management**: React Context API

## Prerequisites

- Node.js 16+ and npm
- Backend server running on `http://localhost:5000`

## Installation

```bash
# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Landing.jsx           # Landing page
│   │   ├── Login.jsx             # Login page
│   │   ├── Register.jsx          # Registration page
│   │   ├── student/
│   │   │   ├── Dashboard.jsx     # Student dashboard
│   │   │   ├── ProfileSetup.jsx  # Profile creation form
│   │   │   ├── TakeQuiz.jsx      # Quiz interface
│   │   │   ├── Recommendations.jsx# Personalized suggestions
│   │   │   ├── CollegeDirectory.jsx# College search
│   │   │   └── Timeline.jsx      # Important dates
│   │   └── admin/
│   │       └── Dashboard.jsx     # Admin dashboard
│   ├── context/
│   │   └── AuthContext.jsx       # Authentication state management
│   ├── services/
│   │   └── api.js                # API service layer with all endpoints
│   ├── App.jsx                   # Main app with routing
│   ├── index.css                 # Global styles with Tailwind
│   └── main.jsx                  # Entry point
├── tailwind.config.js            # Tailwind configuration
├── .env                          # Environment variables
└── package.json
```

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

For production, update this to your deployed backend URL.

## Features Breakdown

### Landing Page
- Hero section with gradient text effects
- Features showcase with icons
- "How it works" section
- Statistics display
- Fully responsive design

### Authentication
- Login with email/password
- Registration with password confirmation
- Role-based redirection (student/admin)
- JWT token management
- Demo credentials display

### Student Dashboard
- Profile summary card
- Quiz status display
- Quick action cards
- Upcoming events preview
- Navigation to all features

### Profile Setup
- Class selection (10/12)
- Multi-select interests
- Subject preferences
- Location picker (district/state)
- Language preference
- Form validation

### Quiz Interface
- 30 questions with weighted scoring
- Progress tracking with visual indicator
- Question navigation buttons
- Dot indicators for answered questions
- Single-page or step-by-step flow
- Automatic submission validation

### Recommendations
- Tabbed interface for:
  - Recommended streams with match scores
  - Courses with eligibility criteria
  - Career paths with salary ranges
  - Nearby colleges
- Visual match score indicators
- Detailed information cards

### College Directory
- Search by name functionality
- Filter by state and district
- Facility badges display
- Contact information
- Course count
- Responsive grid layout

### Timeline
- Filter by event type (exam/admission/scholarship/counseling)
- Upcoming vs past events
- Priority indicators
- Date formatting
- Event icons and color coding

### Admin Dashboard
- Platform statistics
- User analytics
- Management action cards
- CRUD interface placeholders

## Styling

The project uses Tailwind CSS with a custom configuration:

- **Primary Color**: Blue gradient (#3B82F6 to #1D4ED8)
- **Secondary Color**: Purple (#8B5CF6 to #6D28D9)
- **Fonts**: Inter (body), Poppins (display)
- **Custom Components**: buttons, cards, inputs, labels
- **Animations**: fadeIn, slideUp, gradient shimmer

## API Integration

All API calls are centralized in `src/services/api.js`:

```javascript
import { authAPI, profileAPI, quizAPI, recommendationAPI, collegeAPI, timelineAPI, adminAPI } from './services/api';

// Example usage
const response = await quizAPI.getQuestions();
```

The Axios instance automatically:
- Adds JWT tokens to requests
- Handles 401 errors (logout on auth failure)
- Uses the base URL from environment variables

## Authentication Flow

1. User registers → receives JWT token
2. Token stored in localStorage
3. AuthContext provides user state across app
4. Protected routes redirect unauthenticated users
5. Automatic logout on token expiration

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable in Vercel dashboard
VITE_API_URL=https://your-backend-url.com/api
```

### Build for Production

```bash
npm run build
# Output in dist/ folder
```

## Next Steps

1. **Run the Application**:
   ```bash
   npm install
   npm run dev
   ```

2. **Ensure Backend is Running**:
   - Backend must be running on `http://localhost:5000`
   - Database should be seeded with sample data

3. **Test the Flow**:
   - Register a new student account
   - Complete profile setup
   - Take the aptitude quiz
   - View personalized recommendations
   - Explore colleges and timeline

4. **Admin Features** (Future Enhancement):
   - Implement full CRUD interfaces for courses, careers, colleges
   - Add data visualization charts
   - Create user management interface
   - Build notification system

## Troubleshooting

**CORS Errors**: Ensure backend has CORS enabled for frontend origin

**API Connection Failed**: Check `VITE_API_URL` in `.env` file

**Build Errors**: Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`

## License

This project is part of the One Stop Career Guide platform.
