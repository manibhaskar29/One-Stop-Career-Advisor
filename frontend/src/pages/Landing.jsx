import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Landing = () => {
    const { isAuthenticated, isStudent, isAdmin } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            if (isStudent) {
                navigate('/student/dashboard');
            } else if (isAdmin) {
                navigate('/admin/dashboard');
            }
        }
    }, [isAuthenticated, isStudent, isAdmin, navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
            {/* Navigation */}
            <nav className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-display font-bold text-gradient">One Stop Career Guide</span>
                        </div>
                        <div className="flex gap-4">
                            <Link to="/login" className="btn btn-outline">Login</Link>
                            <Link to="/register" className="btn btn-primary">Get Started</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fadeIn">
                        Your Personalized <span className="text-gradient">Career Guidance</span> Platform
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Discover the perfect career path after Class 10 or 12 with AI-powered aptitude tests,
                        personalized recommendations, and comprehensive college guidance.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/register" className="btn btn-primary text-lg px-8 py-4">
                            Start Your Journey
                        </Link>
                        <a href="#features" className="btn btn-outline text-lg px-8 py-4">
                            Learn More
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
                        {[
                            { number: '30+', label: 'Quiz Questions' },
                            { number: '50+', label: 'Career Paths' },
                            { number: '100+', label: 'Colleges' },
                            { number: '1000+', label: 'Happy Students' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-display font-bold text-primary-600">{stat.number}</div>
                                <div className="text-gray-600 mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white/50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-display font-bold text-center mb-12">
                        Why Choose <span className="text-gradient">One Stop Career Guide</span>?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🎯',
                                title: 'Aptitude Assessment',
                                description: 'Take our comprehensive quiz to discover your strengths and interests across different streams.'
                            },
                            {
                                icon: '🎓',
                                title: 'Personalized Recommendations',
                                description: 'Get AI-powered suggestions for streams, courses, careers, and colleges based on your profile.'
                            },
                            {
                                icon: '🏫',
                                title: 'College Directory',
                                description: 'Explore 100+ government colleges with detailed information about courses and facilities.'
                            },
                            {
                                icon: '📅',
                                title: 'Timeline Tracker',
                                description: 'Never miss important admission deadlines, scholarship dates, and entrance exam schedules.'
                            },
                            {
                                icon: '💼',
                                title: 'Career Insights',
                                description: 'Learn about diverse career paths with salary ranges, required skills, and government exams.'
                            },
                            {
                                icon: '🌐',
                                title: 'Location-Based',
                                description: 'Find colleges near you with advanced filtering by district, state, and course availability.'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="card text-center hover:scale-105 transition-transform">
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-display font-bold text-center mb-12">
                        How It <span className="text-gradient">Works</span>
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '1', title: 'Create Profile', description: 'Sign up and complete your academic profile' },
                            { step: '2', title: 'Take Quiz', description: 'Complete the aptitude and interest assessment' },
                            { step: '3', title: 'Get Recommendations', description: 'Receive personalized stream and career suggestions' },
                            { step: '4', title: 'Explore Options', description: 'Browse colleges, courses, and plan your future' }
                        ].map((step, index) => (
                            <div key={index} className="relative">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-100"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/register" className="btn btn-primary text-lg px-8 py-4">
                            Get Started Free
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h3 className="text-2xl font-display font-bold mb-4">One Stop Career Guide</h3>
                    <p className="text-gray-400 mb-6">
                        Empowering students to make informed career decisions
                    </p>
                    <div className="text-sm text-gray-500">
                        © 2026 One Stop Career Guide. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
