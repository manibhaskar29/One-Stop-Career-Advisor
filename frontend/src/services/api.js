import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Handle response errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Authentication
export const authAPI = {
    register: (data) => api.post('/auth/register', data),
    login: (data) => api.post('/auth/login', data),
    getMe: () => api.get('/auth/me'),
};

// Profile
export const profileAPI = {
    create: (data) => api.post('/profile', data),
    get: () => api.get('/profile'),
    update: (data) => api.put('/profile', data),
};

// Quiz
export const quizAPI = {
    getQuestions: () => api.get('/quiz/questions'),
    submitQuiz: (responses) => api.post('/quiz/submit', { responses }),
    getResults: () => api.get('/quiz/results'),
    getResult: (id) => api.get(`/quiz/results/${id}`),
    analyze: (data) => api.post('/quiz/analyze', data),
};

// Recommendations
export const recommendationAPI = {
    getAll: () => api.get('/recommendations'),
    getStreams: () => api.get('/recommendations/streams'),
    getCourses: () => api.get('/recommendations/courses'),
    getCareers: () => api.get('/recommendations/careers'),
    getColleges: () => api.get('/recommendations/colleges'),
};

// Courses
export const courseAPI = {
    getAll: (params) => api.get('/courses', { params }),
    getOne: (id) => api.get(`/courses/${id}`),
    create: (data) => api.post('/courses', data),
    update: (id, data) => api.put(`/courses/${id}`, data),
    delete: (id) => api.delete(`/courses/${id}`),
};

// Careers
export const careerAPI = {
    getAll: (params) => api.get('/careers', { params }),
    getOne: (id) => api.get(`/careers/${id}`),
    getCourses: (id) => api.get(`/careers/${id}/courses`),
    create: (data) => api.post('/careers', data),
    update: (id, data) => api.put(`/careers/${id}`, data),
    delete: (id) => api.delete(`/careers/${id}`),
};

// Colleges
export const collegeAPI = {
    getAll: (params) => api.get('/colleges', { params }),
    getOne: (id) => api.get(`/colleges/${id}`),
    getNearby: () => api.get('/colleges/nearby'),
    create: (data) => api.post('/colleges', data),
    update: (id, data) => api.put(`/colleges/${id}`, data),
    delete: (id) => api.delete(`/colleges/${id}`),
};

// Timeline
export const timelineAPI = {
    getAll: (params) => api.get('/timeline', { params }),
    getUpcoming: () => api.get('/timeline/upcoming'),
    create: (data) => api.post('/timeline', data),
    update: (id, data) => api.put(`/timeline/${id}`, data),
    delete: (id) => api.delete(`/timeline/${id}`),
};

// Admin
export const adminAPI = {
    getAnalytics: () => api.get('/admin/analytics'),
    getQuizAnalytics: () => api.get('/admin/analytics/quiz'),
    getPopularCareers: () => api.get('/admin/analytics/popular-careers'),
    getUserDistribution: () => api.get('/admin/analytics/user-distribution'),
};

export default api;
