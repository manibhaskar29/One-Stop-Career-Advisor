import { useState, useEffect } from 'react';
import { adminAPI } from '../../services/api';

const AdminDashboard = () => {
    const [loading, setLoading] = useState(true);
    const [analytics, setAnalytics] = useState(null);

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const res = await adminAPI.getAnalytics();
            setAnalytics(res.data.data);
        } catch (err) {
            console.error('Failed to fetch analytics:', err);
        } finally {
            setLoading(false);
        }
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

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-display font-bold mb-8">Admin Dashboard</h1>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Students', value: analytics?.totalStudents || 0, icon: '👥', color: 'bg-blue-500' },
                        { label: 'Quiz Attempts', value: analytics?.quizAttempts || 0, icon: '📝', color: 'bg-green-500' },
                        { label: 'Total Courses', value: analytics?.totalCourses || 0, icon: '📚', color: 'bg-purple-500' },
                        { label: 'Total Colleges', value: analytics?.totalColleges || 0, icon: '🏫', color: 'bg-orange-500' }
                    ].map((stat, index) => (
                        <div key={index} className="card">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-gray-600 text-sm mb-1">{stat.label}</div>
                                    <div className="text-3xl font-bold">{stat.value}</div>
                                </div>
                                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center text-3xl`}>
                                    {stat.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Management</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Manage Courses', description: 'Add, edit, or remove courses', icon: '📚', link: '#' },
                            { title: 'Manage Careers', description: 'Update career information', icon: '💼', link: '#' },
                            { title: 'Manage Colleges', description: 'Maintain college directory', icon: '🏫', link: '#' },
                            { title: 'Manage Timeline', description: 'Update important dates', icon: '📅', link: '#' },
                            { title: 'Quiz Questions', description: 'Edit quiz questions', icon: '📝', link: '#' },
                            { title: 'User Management', description: 'View and manage users', icon: '👥', link: '#' }
                        ].map((action, index) => (
                            <div key={index} className="card hover:scale-105 transition-transform cursor-pointer">
                                <div className="text-4xl mb-3">{action.icon}</div>
                                <h3 className="font-bold mb-2">{action.title}</h3>
                                <p className="text-sm text-gray-600">{action.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Note */}
                <div className="card bg-blue-50 border-blue-200">
                    <p className="text-blue-800">
                        <strong>Note:</strong> Full admin CRUD interfaces for courses, careers, colleges, timeline events, and user management need to be implemented. This dashboard shows the analytics overview.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
