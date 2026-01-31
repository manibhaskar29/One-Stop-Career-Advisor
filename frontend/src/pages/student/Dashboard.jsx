import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { profileAPI, quizAPI, recommendationAPI, timelineAPI } from '../../services/api';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [quizStatus, setQuizStatus] = useState(null);
    const [recommendations, setRecommendations] = useState(null);
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            // Fetch profile
            const profileRes = await profileAPI.get();
            setProfile(profileRes.data.data);

            // Fetch quiz results
            try {
                const quizRes = await quizAPI.getResults();
                if (quizRes.data.data.length > 0) {
                    setQuizStatus(quizRes.data.data[0]); // Most recent result
                }
            } catch (err) {
                // No quiz taken yet
                setQuizStatus(null);
            }

            // Fetch recommendations if quiz is taken
            if (quizStatus) {
                const recsRes = await recommendationAPI.getAll();
                setRecommendations(recsRes.data.data);
            }

            // Fetch upcoming events
            const eventsRes = await timelineAPI.getUpcoming();
            setUpcomingEvents(eventsRes.data.data.slice(0, 3));
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    // If no profile, redirect to profile setup
    if (!profile) {
        navigate('/student/profile');
        return null;
    }

    const quickActions = [
        {
            title: 'Take Aptitude Quiz',
            description: 'Discover your ideal career path',
            icon: '📝',
            link: '/student/quiz',
            color: 'bg-blue-500',
            disabled: !!quizStatus,
            badge: quizStatus ? 'Completed' : null
        },
        {
            title: 'View Recommendations',
            description: 'See personalized suggestions',
            icon: '🎯',
            link: '/student/recommendations',
            color: 'bg-green-500',
            disabled: !quizStatus
        },
        {
            title: 'Explore Colleges',
            description: 'Find nearby institutions',
            icon: '🏫',
            link: '/student/colleges',
            color: 'bg-purple-500'
        },
        {
            title: 'Important Dates',
            description: 'Track admissions & exams',
            icon: '📅',
            link: '/student/timeline',
            color: 'bg-orange-500'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="text-xl font-display font-bold text-gradient">
                            One Stop Career Guide
                        </Link>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">
                                Welcome, <span className="font-medium">{user?.email}</span>
                            </span>
                            <button onClick={handleLogout} className="btn btn-outline text-sm">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-display font-bold mb-2">Dashboard</h1>
                    <p className="text-gray-600">Track your career journey and explore opportunities</p>
                </div>

                {/* Profile Summary Card */}
                <div className="card mb-8">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
                            <div className="space-y-2 text-sm">
                                <div className="flex gap-2">
                                    <span className="text-gray-600">Class:</span>
                                    <span className="font-medium">{profile.class === '10' ? 'Class 10' : 'Class 12'}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-gray-600">Location:</span>
                                    <span className="font-medium">{profile.location?.district}, {profile.location?.state}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-gray-600">Interests:</span>
                                    <span className="font-medium">{profile.interests?.join(', ') || 'Not specified'}</span>
                                </div>
                            </div>
                        </div>
                        <Link to="/student/profile" className="btn btn-outline text-sm">
                            Edit Profile
                        </Link>
                    </div>
                </div>

                {/* Quiz Status */}
                {!quizStatus ? (
                    <div className="bg-gradient-primary text-white rounded-xl p-6 mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Complete Your Aptitude Assessment</h3>
                                <p className="text-blue-100 mb-4">
                                    Take our comprehensive quiz to get personalized career recommendations
                                </p>
                                <Link to="/student/quiz" className="btn bg-white text-primary-600 hover:bg-blue-50">
                                    Start Quiz Now →
                                </Link>
                            </div>
                            <div className="text-6xl">🎯</div>
                        </div>
                    </div>
                ) : (
                    <div className="card mb-8 bg-green-50 border-green-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-green-800 mb-2">Quiz Completed! ✓</h3>
                                <p className="text-green-700">
                                    Taken on {new Date(quizStatus.createdAt).toLocaleDateString()}
                                </p>
                                <p className="text-sm text-green-600 mt-1">
                                    Top Stream: <span className="font-semibold">{Object.keys(quizStatus.scores).reduce((a, b) =>
                                        quizStatus.scores[a] > quizStatus.scores[b] ? a : b
                                    )}</span>
                                </p>
                            </div>
                            <Link to="/student/recommendations" className="btn btn-primary">
                                View Recommendations
                            </Link>
                        </div>
                    </div>
                )}

                {/* Quick Actions Grid */}
                <div className="mb-8">
                    <h2 className="text-2xl font-display font-bold mb-4">Quick Actions</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickActions.map((action, index) => (
                            <Link
                                key={index}
                                to={action.link}
                                className={`card text-center hover:scale-105 transition-transform relative ${action.disabled ? 'opacity-60 cursor-not-allowed' : ''
                                    }`}
                                onClick={(e) => action.disabled && e.preventDefault()}
                            >
                                {action.badge && (
                                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                        {action.badge}
                                    </div>
                                )}
                                <div className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}>
                                    {action.icon}
                                </div>
                                <h3 className="font-semibold mb-2">{action.title}</h3>
                                <p className="text-sm text-gray-600">{action.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Upcoming Events */}
                {upcomingEvents.length > 0 && (
                    <div className="card">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Upcoming Important Dates</h2>
                            <Link to="/student/timeline" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                                View All →
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="text-2xl">
                                        {event.type === 'exam' ? '📝' : event.type === 'admission' ? '🎓' : event.type === 'scholarship' ? '💰' : '📅'}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium">{event.title}</h4>
                                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {new Date(event.startDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
