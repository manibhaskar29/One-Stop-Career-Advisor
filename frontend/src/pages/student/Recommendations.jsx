import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { recommendationAPI } from '../../services/api';

const Recommendations = () => {
    const [loading, setLoading] = useState(true);
    const [recommendations, setRecommendations] = useState(null);
    const [activeTab, setActiveTab] = useState('streams');

    useEffect(() => {
        fetchRecommendations();
    }, []);

    const fetchRecommendations = async () => {
        try {
            const res = await recommendationAPI.getAll();
            setRecommendations(res.data.data);
        } catch (err) {
            console.error('Failed to fetch recommendations:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading recommendations...</p>
                </div>
            </div>
        );
    }

    if (!recommendations) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="card max-w-md text-center p-8">
                    <div className="text-6xl mb-4">🎯</div>
                    <h2 className="text-2xl font-bold mb-2">No Recommendations Yet</h2>
                    <p className="text-gray-600 mb-6">
                        Complete the aptitude quiz to get personalized recommendations
                    </p>
                    <Link to="/student/quiz" className="btn btn-primary">
                        Take Quiz Now
                    </Link>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'streams', label: 'Recommended Streams', icon: '🎓' },
        { id: 'courses', label: 'Courses', icon: '📚' },
        { id: 'careers', label: 'Career Paths', icon: '💼' },
        { id: 'colleges', label: 'Colleges', icon: '🏫' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-display font-bold mb-2">Your Recommendations</h1>
                            <p className="text-gray-600">Personalized suggestions based on your quiz results</p>
                        </div>
                        <Link to="/student/dashboard" className="btn btn-outline">
                            ← Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Tabs */}
                <div className="flex gap-2 mb-8 overflow-x-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${activeTab === tab.id
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <span>{tab.icon}</span>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Streams Tab */}
                {activeTab === 'streams' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recommendations.streams.map((stream, index) => (
                            <div key={index} className="card text-center">
                                <div className="text-5xl mb-4">
                                    {stream.stream === 'Science' ? '🔬' :
                                        stream.stream === 'Commerce' ? '💰' :
                                            stream.stream === 'Arts' ? '🎨' : '🛠️'}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{stream.stream}</h3>
                                <div className="mb-4">
                                    <div className="text-sm text-gray-600 mb-2">Match Score</div>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-gradient-primary h-2 rounded-full"
                                                style={{ width: `${stream.score}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-semibold">{stream.score}%</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">{stream.rationale}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Courses Tab */}
                {activeTab === 'courses' && (
                    <div className="space-y-4">
                        {recommendations.courses.map((course, index) => (
                            <div key={index} className="card">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                                        <div className="flex gap-2 mb-2">
                                            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                                {course.stream}
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                                {course.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-600 mb-1">Match</div>
                                        <div className="text-2xl font-bold text-primary-600">{course.matchScore}%</div>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">{course.description}</p>
                                <div className="text-sm text-gray-500">
                                    <strong>Eligibility:</strong> {course.eligibility.class === '12' ? 'Class 12' : 'Class 10'} - {course.eligibility.minPercentage}% minimum
                                    {course.eligibility.requiredSubjects.length > 0 && (
                                        <span> • Subjects: {course.eligibility.requiredSubjects.join(', ')}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Careers Tab */}
                {activeTab === 'careers' && (
                    <div className="grid md:grid-cols-2 gap-6">
                        {recommendations.careers.map((career, index) => (
                            <div key={index} className="card">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{career.title}</h3>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                        {career.matchScore}% Match
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4">{career.description}</p>

                                <div className="space-y-3 text-sm">
                                    <div>
                                        <strong className="text-gray-700">Industries:</strong>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {career.industries.map((industry, i) => (
                                                <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded">
                                                    {industry}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <strong className="text-gray-700">Required Skills:</strong>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {career.skills.slice(0, 5).map((skill, i) => (
                                                <span key={i} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <strong className="text-gray-700">Salary Range:</strong>
                                        <span className="ml-2 text-gray-600">
                                            ₹{(career.salaryRange.min / 100000).toFixed(1)}L - ₹{(career.salaryRange.max / 100000).toFixed(1)}L per year
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Colleges Tab */}
                {activeTab === 'colleges' && (
                    <div>
                        <div className="mb-6 text-center">
                            <p className="text-gray-600 mb-4">
                                Found {recommendations.colleges.length} colleges near you offering your recommended courses
                            </p>
                            <Link to="/student/colleges" className="btn btn-primary">
                                Explore All Colleges →
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recommendations.colleges.slice(0, 6).map((college, index) => (
                                <div key={index} className="card">
                                    <h3 className="font-bold mb-2">{college.name}</h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        📍 {college.location.city}, {college.location.state}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {college.facilities.hostel && <span className="text-xs px-2 py-1 bg-gray-100 rounded">🏠 Hostel</span>}
                                        {college.facilities.library && <span className="text-xs px-2 py-1 bg-gray-100 rounded">📚 Library</span>}
                                        {college.facilities.labs && <span className="text-xs px-2 py-1 bg-gray-100 rounded">🔬 Labs</span>}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        Courses: {college.coursesOffered.length}
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

export default Recommendations;
