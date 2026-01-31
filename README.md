# 🎓 One Stop Career Guide

A comprehensive **MERN stack** web application that provides personalized career and education guidance for students after Class 10 and Class 12. The platform uses an AI-powered aptitude assessment to recommend streams, courses, careers, and colleges based on students' interests, skills, and academic background.

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## ✨ Features

### For Students

- **🎯 Aptitude Assessment**: Take a comprehensive 30-question quiz with weighted scoring across multiple categories
- **🎓 Personalized Recommendations**: 
  - Recommended academic streams (Science, Commerce, Arts, Vocational)
  - Matching courses based on eligibility and interests
  - Career paths with salary ranges and skill requirements
  - Nearby government colleges offering relevant courses
- **🏫 College Directory**: Browse 100+ government colleges with advanced filtering by location, facilities, and courses
- **📅 Timeline Tracker**: Never miss important deadlines for admissions, scholarships, and entrance exams
- **👤 Profile Management**: Manage academic information, interests, and preferences

### For Administrators

- **📊 Analytics Dashboard**: View platform statistics and user engagement metrics
- **🛠️ Content Management**: CRUD operations for courses, careers, colleges, and timeline events
- **📈 Quiz Analytics**: Track user responses and recommendation patterns

### General Features

- **🔐 Secure Authentication**: JWT-based authentication with role-based access control
- **📱 Responsive Design**: Mobile-first design that works seamlessly across all devices
- **🎨 Modern UI**: Clean, intuitive interface with Tailwind CSS
- **⚡ Fast Performance**: Optimized for speed with React and Vite

---

## 🛠️ Tech Stack

### Frontend
- **React 18+** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Context API** - State management for authentication

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing

---

## 📸 Screenshots

> *Screenshots will be added here*

---

## 📁 Project Structure

```
One-Stop-Career-Guide/
├── backend/                    # Backend API
│   ├── config/                # Configuration files
│   ├── controllers/           # Request handlers
│   ├── middleware/            # Custom middleware
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API routes
│   ├── seeds/                 # Database seed data
│   │   ├── quizQuestions.js  # 30 quiz questions
│   │   ├── coursesData.js    # 30+ courses
│   │   ├── careersData.js    # 30+ careers
│   │   ├── collegesData.js   # 25+ colleges
│   │   └── timelineData.js   # 20+ timeline events
│   ├── services/              # Business logic
│   ├── server.js              # Entry point
│   └── package.json
│
├── frontend/                   # Frontend React app
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── pages/             # Page components
│   │   │   ├── Landing.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── student/       # Student pages
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── ProfileSetup.jsx
│   │   │   │   ├── TakeQuiz.jsx
│   │   │   │   ├── Recommendations.jsx
│   │   │   │   ├── CollegeDirectory.jsx
│   │   │   │   └── Timeline.jsx
│   │   │   └── admin/         # Admin pages
│   │   │       └── Dashboard.jsx
│   │   ├── context/           # React contexts
│   │   ├── services/          # API service layer
│   │   ├── App.jsx            # Main app component
│   │   └── index.css          # Global styles
│   ├── tailwind.config.js     # Tailwind configuration
│   └── package.json
│
├── .gitignore
└── README.md                   # This file
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** 16+ and npm
- **MongoDB** 4.4+ (local or MongoDB Atlas)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/manibhaskar29/One-Stop-Career-Advisor.git
cd One-Stop-Career-Advisor
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env file with your configuration
# Required variables:
# MONGO_URI=mongodb://localhost:27017/career-guide
# JWT_SECRET=your_secret_key_here
# JWT_EXPIRE=7d
# PORT=5000
# FRONTEND_URL=http://localhost:5173

# Seed the database with sample data
npm run seed

# Start the backend server
npm run dev
```

The backend will be running at `http://localhost:5000`

### 3. Frontend Setup

```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Start the development server
npm run dev
```

The frontend will be running at `http://localhost:5173`

---

## 💡 Usage

### Testing the Application

1. **Visit the Landing Page**: Navigate to `http://localhost:5173`

2. **Register a Student Account**:
   - Click "Get Started" or "Register"
   - Create an account with email and password
   - You'll be redirected to profile setup

3. **Complete Your Profile**:
   - Select your class (10 or 12)
   - Choose your interests
   - Select preferred subjects
   - Enter your location
   - Choose language preference

4. **Take the Aptitude Quiz**:
   - Answer all 30 questions
   - Submit to get personalized recommendations

5. **View Recommendations**:
   - See your recommended streams with match scores
   - Browse suggested courses and careers
   - Explore nearby colleges

6. **Explore Other Features**:
   - College Directory: Search and filter colleges
   - Timeline: View upcoming important dates

### Admin Access

Default admin credentials (created during seeding):
- **Email**: `admin@career-guide.com`
- **Password**: `Admin@123`

Use these credentials to access the admin dashboard and view analytics.

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | Login user |
| GET | `/auth/me` | Get current user |

### Student Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/profile` | Create profile | ✅ |
| GET | `/profile` | Get user profile | ✅ |
| PUT | `/profile` | Update profile | ✅ |
| GET | `/quiz/questions` | Get quiz questions | ✅ |
| POST | `/quiz/submit` | Submit quiz responses | ✅ |
| GET | `/quiz/results` | Get quiz results | ✅ |
| GET | `/recommendations` | Get all recommendations | ✅ |
| GET | `/colleges` | Get all colleges | ✅ |
| GET | `/timeline/upcoming` | Get upcoming events | ✅ |

### Admin Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/admin/analytics` | Get platform analytics | ✅ Admin |
| GET | `/admin/quiz-stats` | Get quiz statistics | ✅ Admin |

For detailed API documentation, see [backend/README.md](./backend/README.md)

---

## 🌐 Deployment

### Backend Deployment (Render)

1. Push your code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Connect your GitHub repository
4. Configure environment variables:
   ```
   MONGO_URI=<your-mongodb-atlas-connection-string>
   JWT_SECRET=<your-secret-key>
   JWT_EXPIRE=7d
   NODE_ENV=production
   FRONTEND_URL=<your-frontend-url>
   ```
5. Deploy

### Frontend Deployment (Vercel)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Framework Preset: **Vite**
4. Root Directory: **frontend**
5. Add environment variable:
   ```
   VITE_API_URL=<your-render-backend-url>/api
   ```
6. Deploy

---

## 📊 Database Seed Data

The application comes with comprehensive seed data:

- **30 Quiz Questions** across 4 categories (Logical Reasoning, Subject Inclination, Personality Traits)
- **30+ Courses** (B.Tech, MBBS, B.Com, BA, etc.)
- **30+ Career Paths** with salary ranges and skill requirements
- **25+ Government Colleges** across multiple Indian states
- **20+ Timeline Events** (exams, admissions, scholarships)
- **Default Admin User** for testing

To seed the database:
```bash
cd backend
npm run seed
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

- **Developer**: Kenguva Manibhaskar
- **GitHub**: [@manibhaskar29](https://github.com/manibhaskar29)

---

## 🙏 Acknowledgments

- Thanks to all the open-source libraries and frameworks used in this project
- Inspired by the need for accessible career guidance for students
- Built with ❤️ for students across India

---

## 📧 Contact

For questions or support, please reach out:

- **GitHub Issues**: [Create an issue](https://github.com/manibhaskar29/One-Stop-Career-Advisor/issues)
- **Email**: [Your email here]

---

## 🎯 Future Enhancements

- [ ] Email notifications for upcoming deadlines
- [ ] PDF report generation for recommendations
- [ ] Student forum for peer discussions
- [ ] Mobile app (React Native)
- [ ] Multi-language support (Hindi, regional languages)
- [ ] Advanced analytics dashboard with charts
- [ ] Payment integration for premium features
- [ ] AI chatbot for career counseling

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Kenguva Manibhaskar](https://github.com/manibhaskar29)

</div>
