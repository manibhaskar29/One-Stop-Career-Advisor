import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './context/AuthContext';
import theme from './theme';

// Pages (to be created)
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/student/Dashboard';
import ProfileSetup from './pages/student/ProfileSetup';
import TakeQuiz from './pages/student/TakeQuiz';
import Recommendations from './pages/student/Recommendations';
import CollegeDirectory from './pages/student/CollegeDirectory';
import Timeline from './pages/student/Timeline';
import AdminDashboard from './pages/admin/Dashboard';

import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Student routes */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/profile" element={<ProfileSetup />} />
            <Route path="/student/quiz" element={<TakeQuiz />} />
            <Route path="/student/recommendations" element={<Recommendations />} />
            <Route path="/student/colleges" element={<CollegeDirectory />} />
            <Route path="/student/timeline" element={<Timeline />} />

            {/* Admin routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
} export default App;
